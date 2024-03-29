import { useSelector } from "react-redux";
import { RootState } from "../store/slice";

export const useNewCaseSelector = () => {
  return useSelector((state: RootState) => state.crypts.newCase);
};
export const useCryptSelector = () => {
  return useSelector((state: RootState) => state.crypts.crypts);
};
export const useCoinsSelector = () => {
  return useSelector((state: RootState) => state.crypts.coins);
};
export const useNewBriefCase = () => {
  return useSelector((state: RootState) => state.crypts.newBriefCase);
};
