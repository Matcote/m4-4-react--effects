import React from "react";
import styled from "styled-components";

const Item = ({ item, numOwned, handleClick, index, type }) => {
  const firstItem = React.useRef(null);
  React.useEffect(() => {
    if (index === 0) {
      firstItem.current.focus();
    }
  }, [index]);
  if (type === "building") {
    return (
      <ItemBox ref={firstItem} onClick={() => handleClick(item)}>
        <div>
          <h3>{item.name}</h3>
          <p>
            Cost: {item.cost} cookie(s). Produces {item.value} cookies/second.
          </p>
        </div>
        <span>{numOwned}</span>
      </ItemBox>
    );
  } else {
    return (
      <ItemBox ref={firstItem} onClick={() => handleClick(item)}>
        <div>
          <h3>{item.name}</h3>
          <p>
            Cost: {item.cost} cookie(s). Doubles the amount of cookies per
            click.
          </p>
        </div>
        <span>{numOwned}</span>
      </ItemBox>
    );
  }
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
