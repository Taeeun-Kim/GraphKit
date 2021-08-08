import React, {useEffect, useState} from "react";
import PropTypes from "prop-types";
import Loader from "../../Components/Loader";
import Price from "../../Components/Price";
// import useAxios from "./PricesContainer"
import { getPrices } from "../../api";
import defaultAxios from "axios";

const useAxios = (opt, axiosInstance = defaultAxios) => {
  const [state, setState] = useState({
    loading: true,
    prices: [],
    error: null
  });
  useEffect(() => {
    axiosInstance(opt)
    .then((data) => {
      setState({
        ...state,
        prices: data,
        loading: false,
      });
    }).catch((error) => {
      setState({
        ...state,
        loading: false,
        error
      });
    });
  }, [])


  return {...state};
}

const PricesPresenter = () => {
    const baseURL = "https://api.coinpaprika.com/v1";
  const {loading, prices} = useAxios({
    url: `${baseURL}/tickers`,
  });
  const {data} = prices;
  console.log(loading, prices)
  return loading ? (
        <Loader />
      ) : (
        data.map(price => <Price key={price.id} {...price} />)
      );
}



PricesPresenter.propTypes = {
  loading: PropTypes.bool.isRequired,
  prices: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      symbol: PropTypes.string.isRequired,
      quotes: PropTypes.shape({
        USD: PropTypes.shape({
          price: PropTypes.number.isRequired
        }).isRequired
      }).isRequired
    }).isRequired
  ).isRequired
};

export default PricesPresenter;

