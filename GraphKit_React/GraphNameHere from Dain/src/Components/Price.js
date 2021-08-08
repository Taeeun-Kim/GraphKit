import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled("div")`
  display: flex;
  margin: 30px 0;
`;

const MContainer = styled.div`
  width: 10%;
`;


const Name = styled.div`
`;

const Prices = styled.div`

`;

const Bar = styled.div`
  overflow: hidden;
  width: 70%;
  height: 10px;
  position:relative;
  background:gray;
  &:after{
    content:"";
    position:absolute;
    top:0;
    left:0;
    width:${props => props.pri ? `${props.pri * 0.001}%` : "100%"};
    background: violet;
    height: 10px;
  }
`;



const Price = ({ name, symbol, quotes }) => {
  // console.log(typeof quotes.USD.price);
  const p = Math.floor((quotes.USD.price)*100);
  // console.log(p);
  return(
  <Container>
    <MContainer>
      <Name>{name} / {symbol} :</Name>
      <Prices >${quotes.USD.price}</Prices>
    </MContainer>
    <Bar pri={p} />
  </Container>)
};

Price.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  symbol: PropTypes.string.isRequired,
  quotes: PropTypes.shape({
    USD: PropTypes.shape({
      price: PropTypes.number.isRequired
    }).isRequired
  }).isRequired
};

export default Price;
