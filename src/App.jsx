import styled from "styled-components";
import EstilosGlobais from "./components/EstilosGlobais";
import RCCHeader from "./components/RCCHeader";
import RCCAside from "./components/RCCAside";
import RCCBanner from "./components/RCCBanner";
import FotoBanner from "./images/FotoBanner.png"

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
function App() {
  return (
    <FundoGradient>
      <EstilosGlobais />

      <RCCHeader />


    <div style={{display: "flex", flexDirection: "row", width: "100%"}}>
    <RCCAside />

    <RCCBanner backgroundImage={FotoBanner} texto={"A galeria mais completa de fotos do espaço!"}/>
    </div>

    </FundoGradient>
  );
}

export default App;
