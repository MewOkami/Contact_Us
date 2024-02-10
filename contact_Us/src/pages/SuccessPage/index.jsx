import { Link } from "react-router-dom";
import { StyledSucessPage } from "./style";

export const SuccessPage = () => {
  return (
    <StyledSucessPage>
      <div className="SuccessPage__divContainer">
        <h2>Agradecemos seu contato</h2>
        <p>Sua mensagem foi enviado com sucesso!</p>
        <Link to="/" className="SuccessPage__divContainer--buttonBack">
          Voltar
        </Link>
      </div>
    </StyledSucessPage>
  );
};
