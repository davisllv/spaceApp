import React from "react";
import RCCTitle from "../RCCTitle";
import styled from "styled-components";
import RCCTags from "../RCCTags";

const GaleryContainer = styled.div`
  display: flex;
  margin: 0 24px;
`;
const GaleryTitle = styled.div`
  flex-grow: 1;
`;

const RCCGalery = ({ fotosGaleria }) => {
  return (
    <>
      <RCCTags />
      <GaleryContainer>
        <GaleryTitle>
          <RCCTitle>Navegue pela Galeria</RCCTitle>
          {fotosGaleria.map((foto) => foto.titulo)}
        </GaleryTitle>

        <RCCTitle $align="center">Populares</RCCTitle>
      </GaleryContainer>
    </>
  );
};

export default RCCGalery;
