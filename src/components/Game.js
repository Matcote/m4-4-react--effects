import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Item from "./Item";
import useInterval from "../hooks/use-interval.hook";
import useKeyDown from "../hooks/useKeyDown";
import useDocumentTitle from "../hooks/useDocumentTitle";

import cookieSrc from "../cookie.svg";

const items = [
  { id: "cursor", name: "Cursor", cost: 10, value: 1, type: "building" },
  { id: "grandma", name: "Grandma", cost: 100, value: 10, type: "building" },
  { id: "farm", name: "Farm", cost: 1000, value: 80, type: "building" },
  {
    id: "megacursor",
    name: "MegaCursor",
    cost: 50,
    value: 2,
    type: "upgrade",
  },
];
const calculateCookiesPerTick = (items) => {
  return items.cursor * 1 + items.grandma * 10 + items.farm * 80;
};
let clickerPower = 1;

const Game = () => {
  const [numCookies, setNumCookies] = React.useState(0);
  const [purchasedItems, setPurchasedItems] = React.useState({
    cursor: 0,
    grandma: 0,
    farm: 0,
    megacursor: 0,
  });
  const numOfGeneratedCookies = calculateCookiesPerTick(purchasedItems);
  const handleClick = (item) => {
    if (numCookies < item.cost) {
      window.alert("YOU NEED MORE COOKIES!!!!!!!");
      return;
    }
    setPurchasedItems({
      ...purchasedItems,
      [item.id]: purchasedItems[item.id] + 1,
    });
    if (item.type === "upgrade") {
      clickerPower = clickerPower * 2;
    }
    setNumCookies(numCookies - item.cost);
  };
  useInterval(() => {
    setNumCookies(numCookies + numOfGeneratedCookies);
  }, 1000);

  useDocumentTitle(numCookies, "Workshop");
  useKeyDown("Space", () => setNumCookies(numCookies + 1));

  return (
    <Wrapper>
      <GameArea>
        <Indicator>
          <Total>{numCookies} cookies</Total>
          <strong>{numOfGeneratedCookies}</strong> cookies per second
        </Indicator>
        <Button onClick={() => setNumCookies(numCookies + clickerPower)}>
          <Cookie src={cookieSrc} />
        </Button>
      </GameArea>

      <ItemArea>
        <SectionTitle>Items:</SectionTitle>
        {items.map((item, index) => {
          if (item.type === "building") {
            return (
              <Item
                index={index}
                key={item.id}
                item={item}
                type={item.type}
                numOwned={purchasedItems[item.name.toLowerCase()]}
                handleClick={handleClick}
              />
            );
          } else {
            return (
              <Item
                index={index}
                key={item.id}
                item={item}
                type={item.type}
                numOwned={purchasedItems[item.name.toLowerCase()]}
                handleClick={handleClick}
              />
            );
          }
        })}
      </ItemArea>
      <HomeLink to="/">Return home</HomeLink>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
`;
const GameArea = styled.div`
  flex: 1;
  display: grid;
  place-items: center;
`;
const Button = styled.button`
  border: none;
  background: transparent;
  cursor: pointer;
`;

const Cookie = styled.img`
  width: 200px;
`;

const ItemArea = styled.div`
  height: 100%;
  padding-right: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const SectionTitle = styled.h3`
  text-align: center;
  font-size: 32px;
  color: yellow;
`;

const Indicator = styled.div`
  position: absolute;
  width: 250px;
  top: 0;
  left: 0;
  right: 0;
  margin: auto;
  text-align: center;
`;

const Total = styled.h3`
  font-size: 28px;
  color: lime;
`;

const HomeLink = styled(Link)`
  position: absolute;
  top: 15px;
  left: 15px;
  color: #666;
`;

export default Game;
