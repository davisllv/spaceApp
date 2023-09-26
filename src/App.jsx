import styled from "styled-components";
import EstilosGlobais from "./components/EstilosGlobais";
import RCCHeader from "./components/RCCHeader";

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
    </FundoGradient>
  );
}

export default App;
