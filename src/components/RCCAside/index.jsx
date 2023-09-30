import { styled } from "styled-components";
import RCCAsideItemNavegacao from "./RCCAsideItemNavegacao";

const ListaEstilizada = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

`
const RCCAside = () => {
  return (
    <aside style={{width: "20%", margin: "0 24px"}}>
      <nav>
        <ListaEstilizada>
          <RCCAsideItemNavegacao iconeAtivo="icones/home-ativo.png" iconeInativo="icones/home-inativo.png" ativo>
            Inicio
          </RCCAsideItemNavegacao>
          <RCCAsideItemNavegacao  iconeAtivo="icones/mais-vistas-ativo.png" iconeInativo="icones/mais-vistas-inativo.png" ativo>
            Mais vistas
          </RCCAsideItemNavegacao>
          <RCCAsideItemNavegacao iconeAtivo="icones/mais-curtidas-ativo.png" iconeInativo="icones/mais-curtidas-inativo.png">
            Mais curtidas
          </RCCAsideItemNavegacao>
          <RCCAsideItemNavegacao iconeAtivo="icones/novas-ativo.png" iconeInativo="icones/novas-inativo.png">
            Novas
          </RCCAsideItemNavegacao>
          <RCCAsideItemNavegacao iconeAtivo="icones/surpreenda-me-ativo.png" iconeInativo="icones/surpreenda-me-inativo.png">
            Surpreenda-me
          </RCCAsideItemNavegacao>
        </ListaEstilizada>
      </nav>
    </aside>
  );
};

export default RCCAside;
