import styled from "styled-components";

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
      <img src="/imagens/logo.png" alt="Qualquer Ccoisa" />
    </RCCHeaderStyled>
  );
};

export default RCCHeader;
