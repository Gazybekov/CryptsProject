import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  briefCase,
  localStorageSetItem,
  percentFunc,
} from "../../helpers/const";
import { Case, Coin, CryptsState } from "../../types/types";
import { getCoins, getCrypts } from "../actions/cryptActions";

const cryptsSlice = createSlice({
  name: "crypts",
  initialState: {
    crypts: [],
    status: null,
    error: null,
    newCase: [],
    coins: [],
    newBriefCase: (JSON.parse(localStorage.getItem("newBriefCase") || "null") ??
      briefCase) as Case[],
  } as CryptsState,
  reducers: {
    processCryptsData: (state) => {
      const crypts = state.crypts;
      state.newCase = state.newBriefCase.map((myCase) => {
        const coin = crypts.find((c) => c.id === myCase.id) as Coin;
        const dateString = myCase.date.toString();
        const informationPrice = myCase.price < coin.price;
        const informationPercent = percentFunc(myCase.price, coin.price);
        const totalAmount = myCase.amount * coin.price;
        const totalProfit =
          myCase.amount * coin.price - myCase.amount * myCase.price;
        return {
          ...myCase,
          informationPrice,
          informationPercent,
          totalAmount,
          totalProfit,
          date: dateString,
        };
      });
    },
    addNewCase: (state, action: PayloadAction<Case>) => {
      state.newBriefCase.push(action.payload);
      localStorageSetItem(state.newBriefCase);
    },
    deleteCrypt: (state, action: PayloadAction<string>) => {
      state.newBriefCase = state.newBriefCase.filter(
        (elem) => elem.id !== action.payload
      );
      localStorageSetItem(state.newBriefCase);
    },
    editCrypt: (state, action: PayloadAction<Case>) => {
      const updatedCase = action.payload;
      const index = state.newBriefCase.findIndex(
        (item) => item.id === updatedCase.id
      );
      if (index !== -1) {
        state.newBriefCase[index] = updatedCase;
      }
      localStorageSetItem(state.newBriefCase);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCrypts.pending, (state) => {
        state.status = "загрузка данных";
      })
      .addCase(getCrypts.fulfilled, (state, action) => {
        state.status = "данные успешно загрузились";
        state.crypts = action.payload;
      })
      .addCase(getCrypts.rejected, (state, action) => {
        state.status = "ошибка при загрузке данных";
        state.error = action.error;
      })
      .addCase(getCoins.pending, (state) => {
        state.status = "Загрузка данных";
      })
      .addCase(getCoins.fulfilled, (state, action) => {
        state.status = "Данные успешно загрузились";
        state.coins = action.payload;
      })
      .addCase(getCoins.rejected, (state, action) => {
        state.status = "Ошибка при загрузке данных";
        state.error = action.error;
      });
  },
});

export const { processCryptsData, addNewCase, deleteCrypt, editCrypt } =
  cryptsSlice.actions;
export default cryptsSlice.reducer;
