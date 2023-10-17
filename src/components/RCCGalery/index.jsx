import React from "react";
import RCCTitle from "../RCCTitle";
import styled from "styled-components";

const GaleryContainer = styled.div`
  display: flex;
  margin: 0 24px;
`;
const GaleryTitle = styled.div`
  flex-grow: 1;
`;

const RCCGalery = () => {
  return (
    <>
      <GaleryContainer>
        <GaleryTitle>
          <RCCTitle>Navegue pela Galeria</RCCTitle>
        </GaleryTitle>

        <RCCTitle $align="center">Populares</RCCTitle>
      </GaleryContainer>
    </>
  );
};

export default RCCGalery;
