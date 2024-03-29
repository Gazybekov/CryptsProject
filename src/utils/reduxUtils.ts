import store from "../store/slice";

export const getNewCaseFromRedux = () => {
  const state = store.getState();
  return state.crypts.newCase;
};
