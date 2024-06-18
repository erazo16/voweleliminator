import { useState } from "react";
import { ButtonStyle, Container, ContainerResult, InputStyle, TextResult, containerContent } from "./styles";
import { FaRegTrashAlt } from "react-icons/fa";


function App() {
  const [wordUpdate, setWordUpdate] = useState("");
  const [wordResult, setWordResult] = useState("");

  const deleteVowel = () => {
    let result = wordUpdate.replace(/[aáAÁeéEÉiíIÍoOóÓuúUÚ]/g, "");

    setWordResult(result);
  };

  return (
    <Container>
        <div>
          <h1>Eliminar vocales</h1>
          <InputStyle
            type="text"
            onChange={(e) => setWordUpdate(e.target.value)}
          />{" "}
            <ButtonStyle onClick={() => deleteVowel()}><FaRegTrashAlt /></ButtonStyle>
        </div>
          <ContainerResult>
              Resultado :
                <TextResult>{wordResult }</TextResult>

          </ContainerResult>

    </Container>
  );
}

export default App;
