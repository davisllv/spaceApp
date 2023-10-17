import styled from "styled-components";
import EstilosGlobais from "./components/EstilosGlobais";
import RCCHeader from "./components/RCCHeader";
import RCCAside from "./components/RCCAside";
import RCCBanner from "./components/RCCBanner";
import FotoBanner from "./images/FotoBanner.png";
import RCCGalery from "./components/RCCGalery";

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

function App() {
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

            <RCCGalery />
          </GaleryContent>
        </MainContent>
      </AppContainer>
    </FundoGradient>
  );
}

export default App;
