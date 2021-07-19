import { IGlobalState } from "./state";

// the old way to get state
//
// interface IRootState extends IGlobalState {}
// export const selectCurrencies = (state: IRootState) =>
//   state.currency.currencies;
// export const selectCurrentCurrency = (state: IRootState) =>
//   state.currency.currentCurrency;
// export const selectIsBuying = (state: IRootState) => state.currency.isBuying;
// export const selectAmountOfBYN = (state: IRootState) =>
//   state.currency.amountOfBYN;
// export const selectAmountOfCurrency = (state: IRootState) =>
//   state.currency.amountOfCurrency;

// the new way to get state directly:

export const selectCurrencies = (state: IGlobalState) =>
  state.currency.currencies;
export const selectCurrentCurrency = (state: IGlobalState) =>
  state.currency.currentCurrency;
export const selectIsBuying = (state: IGlobalState) => state.currency.isBuying;
export const selectAmountOfBYN = (state: IGlobalState) =>
  state.currency.amountOfBYN;
export const selectAmountOfCurrency = (state: IGlobalState) =>
  state.currency.amountOfCurrency;

export const selectAllStateValues = (state: IGlobalState) => state.currency;
