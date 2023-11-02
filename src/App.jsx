import styled from "styled-components";
import EstilosGlobais from "./components/EstilosGlobais";
import RCCHeader from "./components/RCCHeader";
import RCCAside from "./components/RCCAside";
import RCCBanner from "./components/RCCBanner";
import FotoBanner from "./images/FotoBanner.png";
import RCCGalery from "./components/RCCGalery";
import FotosGaleria from './fotos.json'
import { useState } from "react";
import RCCModal from "./components/RCCModal";

const FundoGradient = styled.div`
  background: linear-gradient(
    175deg,
    #041833 4.16%,
    #04244f 48%,
    #154580 96.76%
  );
  width: 100%;
  min-height: 100vh;
`;

const AppContainer = styled.div`
  width: 1440px;
  max-width: 100%;
  margin: 0 auto;
`;

const MainContent = styled.main`
  display: flex;
  gap: 24px;
`;

const GaleryContent = styled.section`
  display: "flex";
  flex-grow: 1;
  flex-direction: column;
`;

const App = () => {
  const [fotosGaleria] = useState(FotosGaleria);
  const [fotoSelecionada, setFotoSelecionada] = useState(undefined)
  const [openModalExpanded, setOpenModalExpanded] = useState(false)
  return (
    <FundoGradient>
      <EstilosGlobais />
      <AppContainer>
        <RCCHeader />

        <MainContent>
          <RCCAside />
          <GaleryContent>
            <RCCBanner
              backgroundImage={FotoBanner}
              texto={"A galeria mais completa de fotos do espaço!"}
            />

            <RCCGalery fotosGaleria={fotosGaleria} onClickOpenModalExpanded={(openModal, picture) =>{setOpenModalExpanded(openModal); setFotoSelecionada(picture)}}/>
          </GaleryContent>
        </MainContent>
      </AppContainer>

      <RCCModal openModal={openModalExpanded} closeModal={setOpenModalExpanded} fotoSelecionada={fotoSelecionada}/>
    </FundoGradient>
  );
};

export default App;
