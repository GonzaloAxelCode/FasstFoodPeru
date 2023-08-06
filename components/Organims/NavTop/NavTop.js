import React from "react";
import styled from "styled-components";
import { ItemNav } from "../../Molecules/ItemNav";
import Logo from "../../Atoms/Logos/Logo";
import Links from "./ObjectLinks";
const WrapperNavTop = styled.div`
  margin-top: 1em;
  background-color: #222222;
  display: flex;
  justify-content: space-around;

  @media (max-width: ${(props) => props.theme.screens.tabletL}) {
    height: 40px;
  }
`;
const Left = styled.div`
  display: flex;
  padding-left: 3em;
`;
const Right = styled.div`
  display: flex;

  padding-right: 3em;
`;

export default function NavTop({ offset, openMenu }) {
  return (
    <WrapperNavTop>
      <Left>
        <ItemNav label="HOME" links={Links.linksListHome} />
        <ItemNav label="ABOUT LAFKA" links={Links.linksListBlog} />
        <ItemNav label="OUR BLOG" links={Links.linksListAbout} />
        <ItemNav label="ORDER MENU" path="/google" />
      </Left>
      <div>
        <Logo offset={offset} />
      </div>
      <Right>
        <ItemNav label="HOME" />
        <ItemNav label="ABOUT LAFKA" />
        <ItemNav label="OUR BLOG" />
        <ItemNav label="ORDER MENU" />
      </Right>
    </WrapperNavTop>
  );
}
