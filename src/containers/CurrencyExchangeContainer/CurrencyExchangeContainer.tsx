import React from "react";
import { connect, ConnectedProps, useDispatch, useSelector } from "react-redux";
import CurrencyExchange from "../../components/CurrencyExchange/CurrencyExchange";
import { IGlobalState } from "../../redux/state";
import { CurrencyState } from "../../redux/currencyReducer";
import { compose, Dispatch } from "redux";
import {
  ChangeActionAC,
  ChangeCurrencyFieldAC,
  ChangeCurrentCurrencyAC,
  CurrencyReducersTypes
} from "../../redux/actions";

import {
  selectCurrencies,
  selectCurrentCurrency,
  selectIsBuying,
  selectAmountOfBYN,
  selectAmountOfCurrency,
  selectAllStateValues
} from "../../redux/selectors";

interface ICurrencyProps extends CurrencyState {
  setCurrencyAmount: (amountOfBYN: string, amountOfCurrency: string) => void;
  setAction: (isBuying: boolean) => void;
  changeCurrency: (currency: string) => void;
}

const CurrencyEContainer: React.FunctionComponent = () => {
  // const CurrencyEContainer: React.FunctionComponent<TProps> = (props) => {

  // const {
  // const CurrencyEContainer: React.FunctionComponent<ICurrencyProps> = ({
  // currencies,
  // currentCurrency,
  // isBuying,
  // amountOfBYN,
  // amountOfCurrency,
  // setCurrencyAmount,
  // setAction,
  // changeCurrency
  // }=props

  // const {
  //   currencies,
  //   currentCurrency,
  //   isBuying,
  //   amountOfBYN,
  //   amountOfCurrency,
  //   ChangeActionAC,
  //   ChangeCurrencyFieldAC,
  //   ChangeCurrentCurrencyAC
  // } = props;

  // const {
  //   currencies,
  //   currentCurrency,
  //   isBuying,
  //   amountOfBYN,
  //   amountOfCurrency
  // } = props;

  const dispatch = useDispatch<Dispatch<CurrencyReducersTypes>>();

  // const currencies = useSelector(selectCurrencies);
  // const currentCurrency = useSelector(selectCurrentCurrency);
  // const isBuying = useSelector(selectIsBuying);
  // const amountOfBYN = useSelector(selectAmountOfBYN);
  // const amountOfCurrency = useSelector(selectAmountOfCurrency);

  const {
    currencies,
    currentCurrency,
    isBuying,
    amountOfBYN,
    amountOfCurrency
  } = useSelector(selectAllStateValues);

  let currencyRate: number = 0;
  const currenciesName = currencies.map((currency) => {
    if (currency.currencyName === currentCurrency) {
      currencyRate = isBuying ? currency.buyRate : currency.sellRate;
    }
    return currency.currencyName;
  });

  const changeCurrencyField = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.currentTarget.value;
    if (!isFinite(+value)) return;
    if (e.currentTarget.dataset.currency) {
      const trigger: string = e.currentTarget.dataset.currency;
      if (trigger === "byn") {
        if (value === "") {
          // setCurrencyAmount(value, value);
          // ChangeCurrencyFieldAC(value, value)
          dispatch(ChangeCurrencyFieldAC(value, value));
        } else {
          // setCurrencyAmount(

          // ChangeCurrencyFieldAC(
          //   value,
          //   (+Number(value).toFixed(2) / currencyRate).toFixed(2)
          // )

          dispatch(
            ChangeCurrencyFieldAC(
              value,
              (+Number(value).toFixed(2) / currencyRate).toFixed(2)
            )
          );
        }
      } else {
        if (value === "") {
          // setCurrencyAmount(value, value);
          dispatch(ChangeCurrencyFieldAC(value, value));
        } else {
          // setCurrencyAmount(
          // ChangeCurrencyFieldAC(
          //   (+Number(value).toFixed(2) * currencyRate).toFixed(2),
          //   value
          // );

          dispatch(
            ChangeCurrencyFieldAC(
              (+Number(value).toFixed(2) * currencyRate).toFixed(2),
              value
            )
          );
        }
      }
    }
  };
  const changeAction = (e: React.MouseEvent<HTMLSpanElement>) => {
    //e.currentTarget.dataset.action === "buy" ? setAction(true) // : setAction(false);
    // e.currentTarget.dataset.action === "buy"? ChangeActionAC(true): ChangeActionAC(false);
    e.currentTarget.dataset.action === "buy"
      ? dispatch(ChangeActionAC(true))
      : dispatch(ChangeActionAC(false));
  };

  const changeCurrentCurrency = (e: React.MouseEvent<HTMLLIElement>) => {
    // e.currentTarget.dataset.currency && changeCurrency(e.currentTarget.dataset.currency);
    e.currentTarget.dataset.currency &&
      dispatch(ChangeCurrentCurrencyAC(e.currentTarget.dataset.currency));
  };

  return (
    <React.Fragment>
      <CurrencyExchange
        currenciesName={currenciesName}
        currentCurrency={currentCurrency}
        currencyRate={currencyRate}
        isBuying={isBuying}
        amountOfBYN={amountOfBYN}
        amountOfCurrency={amountOfCurrency}
        changeCurrencyField={changeCurrencyField}
        changeAction={changeAction}
        changeCurrentCurrency={changeCurrentCurrency}
      />
    </React.Fragment>
  );
};

// const mapStateToProps = (state: IGlobalState) => {
//   return {
//     currencies: state.currency.currencies,
//     currentCurrency: state.currency.currentCurrency,
//     isBuying: state.currency.isBuying,
//     amountOfBYN: state.currency.amountOfBYN,
//     amountOfCurrency: state.currency.amountOfCurrency
//   };
// };

// убираем в сокращенной конструкции
// const mapDispatchToProps = (dispatch: Dispatch<CurrencyReducersTypes>) => {
//   return {
//     setCurrencyAmount(amountOfBYN: string, amountOfCurrency: string) {
//       dispatch(ChangeCurrencyFieldAC(amountOfBYN, amountOfCurrency));
//     },
//     setAction(isBuying: boolean) {
//       dispatch(ChangeActionAC(isBuying));
//     },
//     changeCurrency(currency: string) {
//       dispatch(ChangeCurrentCurrencyAC(currency));
//     }
//   };
// };
// export const CurrencyExchangeContainer = compose(
//   connect(mapStateToProps, mapDispatchToProps)
// )(CurrencyEContainer);

// const connector = connect(mapStateToProps, {
//   ChangeActionAC,
//   ChangeCurrencyFieldAC,
//   ChangeCurrentCurrencyAC
// });

// const connector = connect(mapStateToProps, {}); // для корректности типизации передаем пустой объект

// type TProps = ConnectedProps<typeof connector>;
// export default connector(CurrencyEContainer);

export default CurrencyEContainer;
