import React from "react";
import styled from "styled-components";

const Frame = styled.div`
  width: 100%;
  background-image: url(${'./images/banner.png'});
  height: 275px;
  background-position: center;  	
  background-repeat: no-repeat;
  background-color: #E5E5E5;
`;

export const MenuBanner = ()=>(
  <Frame>
  </Frame>
);