import styled from "styled-components";

const FigureContainer = styled.figure`
  width: 49%;
  margin: 0;
`;

const ImageContainer = styled.img`
  width: 100%;
  border-radius: 20px 20px 0 0;
`;

const ButtonsContainer = styled.div`
  display: flex;
  gap: 24px;
`;

const FotterBottom = styled.footer`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const RCCImage = ({ foto }) => {
  console.log("FOTO", foto);
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
          <p>{foto.path}</p>

          <ButtonsContainer>
            <button>Fav</button>
            <button>Expand</button>
          </ButtonsContainer>
        </FotterBottom>
      </figcaption>
    </FigureContainer>
  );
};

export default RCCImage;
