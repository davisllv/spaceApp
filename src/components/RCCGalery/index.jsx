import React from "react";
import RCCTitle from "../RCCTitle";
import styled from "styled-components";
import RCCTags from "../RCCTags";
import RCCImage from "./RCCImage";

const GaleryContainer = styled.div`
  display: flex;
  width: 100%;
  margin: 0 24px;
`;
const GaleryTitle = styled.div`
  width: 75%;
  flex-grow: 1;
  flex-direction: row;
`;

const GaleryPictures = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;

const RCCGalery = ({ fotosGaleria }) => {
  return (
    <>
      <RCCTags />
      <GaleryContainer>
        <GaleryTitle>
          <RCCTitle>Navegue pela Galeria</RCCTitle>
          <GaleryPictures>
            {fotosGaleria.map((foto) => (
              <RCCImage foto={foto} />
            ))}
          </GaleryPictures>
        </GaleryTitle>

        <RCCTitle $align="center" style={{ width: "25%" }}>
          Populares
        </RCCTitle>
      </GaleryContainer>
    </>
  );
};

export default RCCGalery;
