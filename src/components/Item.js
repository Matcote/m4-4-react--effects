import React from "react";
import styled from "styled-components";

const Item = ({ item, numOwned, handleClick }) => {
  return (
    <ItemBox onClick={() => handleClick()}>
      <div>
        <h3>{item.name}</h3>
        <p>
          Cost: {item.cost} cookie(s).Produces {item.value} cookies/second.
        </p>
      </div>
      <span>{numOwned}</span>
    </ItemBox>
  );
};
export default Item;

const ItemBox = styled.button`
  border: none;
  background: transparent;
  cursor: pointer;
  color: white;
  padding: 10px 0;
  width: 400px;
  border-bottom: 1px solid grey;
  display: flex;
  justify-content: space-between;
  align-items: center;
  div {
    display: inline-block;
    text-align: left;
  }
  h3 {
    font-size: x-large;
  }
  p {
    font-size: medium;
    color: lightgray;
  }
  span {
    font-size: 3em;
  }
`;
