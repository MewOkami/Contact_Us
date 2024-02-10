import { StyledMainContacts } from "./style";
import { toast } from "react-toastify";

export const ContactUsPage = () => {
  const notify = () => {
    toast.success("Email enviado com Sucesso!");
  };

  return (
    <StyledMainContacts>
      <div className="StyledMainContacts__divContainer">
        <h2 className="StyledMainContacts__h2Title">Contate-nos</h2>

        <form
          className="StyledMainContacts__divContainer--Form"
          action="https://api.staticforms.xyz/submit"
          method="post"
        >
          <label htmlFor="">Nome</label>
          <input
            className="StyledMainContacts__divContainer--FormInput"
            type="text"
            name="name"
            required
          ></input>

          <label htmlFor="">Email</label>
          <input
            className="StyledMainContacts__divContainer--FormInput"
            type="text"
            name="email"
            required
          ></input>

          <label htmlFor="">Telefone</label>
          <input
            className="StyledMainContacts__divContainer--FormInput"
            type="number"
            name="phone"
            required
          />

          <label htmlFor="">Mensagem</label>
          <textarea
            className="StyledMainContacts__divContainer--FormTextArea"
            name="message"
            required
          ></textarea>

          <button
            // onClick={notify}
            className="StyledMainContacts__divContainer--FormButtonSubmit"
            type="submit"
          >
            Enviar
          </button>

          {/* Altere esse input com o ID do seu gmail */}
          <input
            type="hidden"
            name="accessKey"
            value="Coloque o Id do seu gmail"
          ></input>

          <input
            type="hidden"
            name="redirectTo"
            value="http://localhost:5173/success"
          />
        </form>
      </div>
    </StyledMainContacts>
  );
};
