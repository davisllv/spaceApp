import styled from "styled-components";
import RCCInput from "../RCCInput";

const RCCHeaderStyled = styled.header`
  padding: 60px 0;
  display: flex;
  justify-content: space-between;

  img {
    max-width: 212px;
  }
`;

const RCCHeader = () => {
  return (
    <RCCHeaderStyled>
      <img src="/imagens/logo.png" alt="space app logo" />
      <RCCInput />
    </RCCHeaderStyled>
  );
};

export default RCCHeader;
