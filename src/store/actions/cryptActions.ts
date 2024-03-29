import axios from "axios";
import { Case, Coin } from "../../types/types";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { API, API_COINS, getConfig } from "../../helpers/const";

export const getCrypts = createAsyncThunk("crypts/getCrypts", async () => {
  try {
    const { data } = await axios(`${API}/coins`, getConfig());
    return data.result as Coin[];
  } catch (error) {
    console.log(error);
    throw error; 
  }
});

export const addCrypt = createAsyncThunk(
  "crypts/addCrypt",
  async (newCrypt: Case) => {
    try {
      await axios.post(API_COINS, newCrypt);
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
);

export const getCoins = createAsyncThunk("crypts/getCoins", async () => {
  try {
    const { data } = await axios(API_COINS);
    return data;
  } catch (error) {
    console.log(error);
  }
});
