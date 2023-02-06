import React from "react";
import styled from "styled-components";

import { DropdownSelect } from "@kleros/ui-components-library";
import EthereumIcon from "svgs/icons/ethereum.svg";

import ListsDisplay from "~src/components/ListsDisplay";
import Title from "~src/components/Title";
import ItemCard from "~src/components/ItemCard";
import SearchAndFilters from "~src/components/ListsDisplay/SearchAndFilters";

const ItemList: React.FC = () => {
  const Header = () => (
    <div>
      <Title text="Ethereum" Icon={EthereumIcon} />
      <StyledLabel>
        {" "}
        All Community Curated Lists on{" "}
        <DropdownSelect
          simpleButton
          smallButton
          alignRight
          items={[
            { text: "Ethereum", value: 0 },
            { text: "Gnosis", value: 1 },
            { text: "Polygon", value: 2 },
          ]}
          defaultValue={0}
          callback={() => {}}
        />
      </StyledLabel>
    </div>
  );

  const Footer = () => (
    <CardFooter>
      <div>Make Sure you read and understand the Policies</div>
      <div>Curation Policy</div>
    </CardFooter>
  );
  return (
    <Container>
      <Content>
        <ItemCard {...{ Header, Footer }} />
        <SearchAndFilters />
        <ListsDisplay />
      </Content>
    </Container>
  );
};

export default ItemList;

const Container = styled.div`
  width: 80%;
  margin: 0 auto;
  min-height: 100vh;
  height: auto;
  padding: 32px 0;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
`;

const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 48px;
  width: 100%;
  position: absolute;
  left: 0;
  bottom: 0;
  padding: 0 24px;
  font-size: 13px;
  font-weight: 400;
  background-color: ${({ theme }) => theme.mediumBlue};
  color: ${({ theme }) => theme.primaryBlue};
`;

const StyledLabel = styled.label`
  display: flex;
  gap: 8px;
`;
