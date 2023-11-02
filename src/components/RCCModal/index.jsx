import styled from "styled-components";
import RCCImage from "../RCCGalery/RCCImage";

const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  position: fixed; // Não Importa o scroll ou nada, o overlay vai cobrir tudo
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

const Dialog = styled.dialog`
    position: absolute;
    top: 294px;

`

const RCCModal = ({ openModal, closeModal, fotoSelecionada }) => {
  return (
    <>
      {openModal && (
        <>
          <Overlay />
          <Dialog open={openModal}>
            {!!fotoSelecionada && <RCCImage foto={fotoSelecionada} isModalExpanded={true}/>}
            <form method="dialog" onSubmit={() => closeModal(false)}>
              <button type="submit">ok</button>
            </form>
          </Dialog>
        </>
      )}
    </>
  );
};

export default RCCModal;
