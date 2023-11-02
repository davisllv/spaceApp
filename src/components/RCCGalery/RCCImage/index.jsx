import { useState } from "react";
import styled from "styled-components";

const FigureContainer = styled.figure`
  position: relative;
  width: 49%;
  margin: 0;
`;

const ImageContainer = styled.img`
  width: 100%;
  border-radius: 20px 20px 0 0;
`;

const ButtonsContainer = styled.div`
  display: flex;
  gap: 12px;
  
  button {
    display: flex;
    background-color: transparent;
    border: none;
    align-items: center;
    cursor: pointer;
    
  }

    button:hover {
    img {
      transform: scale(1.2);
    }
  }
`;

const FotterBottom = styled.footer`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-left: 1rem;
`;

const RCCImage = ({ foto, onClickOpenModalExpanded, isModalExpanded}) => {
  const [favorite, setFavorite] = useState(false)
  console.log(foto)
  return (
    <FigureContainer>
      <ImageContainer src={foto.path} alt={foto.titulo} />

      <figcaption
        style={{
          backgroundColor: "#001634",
          padding: "16px",
          fontSize: "16px",
          color: "#FFFFFF",
          borderRadius: "0 0 20px 20px",
        }}
      >
        <h3 style={{ margin: 0 }}>{foto.titulo}</h3>
        <FotterBottom>
          <h4>{foto.fonte}</h4>

          <ButtonsContainer >
            <button onClick={() => setFavorite(prevState => !prevState)}><img src={favorite ? "../icones/favorito-ativo.png": "../icones/favorito.png"} alt="Favorito" /></button>
            {!isModalExpanded && <button onClick={() => onClickOpenModalExpanded(true, foto)}><img src="../icones/expandir.png" alt="" /></button>}
          </ButtonsContainer>
        </FotterBottom>
      </figcaption>
    </FigureContainer>
  );
};

export default RCCImage;
