import styled from "styled-components";

const LinhaEstilizada = styled.li`
    font-size: 24px;
    font-family: ${props => props.$ativo ? "GandhiSansBold" : "GandhiSansRegular"};
    line-height: 29px;
    color: ${props => props.$ativo ? "#7B78E5" : "#D9D9D9"}; 

    display: flex;
    align-items: center;
    
    gap: 22px;
    padding: 8px;

    cursor: pointer;
`

const RCCAsideItemNavegacao = ({iconeAtivo, iconeInativo, ativo = false, children}) => {
return (
    <LinhaEstilizada $ativo={ativo}>
            {ativo ? <img src={iconeAtivo} alt="Icone ativo home" /> : <img src={iconeInativo} alt="Icone inativo home" /> }{children}
    </LinhaEstilizada>
)
}

export default RCCAsideItemNavegacao;