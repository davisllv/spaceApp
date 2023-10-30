import styled from "styled-components";


const FigureContainer = styled.figure`
    
`


const RCCImage = ({ foto }) => {
    console.log("FOTO", foto)
return (
    <figure>
        <img src={foto.path} alt={foto.titulo} /> 

        <figcaption>
            <h3>Nome da Foto</h3>
            <footer>
                <p>Path</p>

                <div>
                    <button>Fav</button>
                    <button>Expand</button>
                </div>
            </footer>
        </figcaption>
    </figure>
)
}

export default RCCImage;