import "./FormularioLogin.scss";
import mail from "../../assets/images/mail.png";
import visibility from "../../assets/images/visibility.png";
import { useState } from "react";

function FormularioLogin() {
  const [loginMethod, setLoginMethod] = useState("sign_in");

  function changeMethod(e) {
    e.target.id === "botao_sign_in"
      ? setLoginMethod("sign_in")
      : setLoginMethod("sign_up");
  }

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <section className="login_card__conteudo">
      <section className="conteudo__titulos">
        <h1>Bem-vindo ao Turistei</h1>
        <h4>Que bom vê-lo por aqui</h4>
      </section>
      {/* futuro componente */}
      <div className="conteudo__opcoes_entrar">
        <button
          id="botao_sign_in"
          className={loginMethod === "sign_in" ? "--active" : ""}
          onClick={changeMethod}
        >
          Login
        </button>
        <button
          id="botao_sign_up"
          className={loginMethod === "sign_up" ? "--active" : ""}
          onClick={changeMethod}
        >
          Criar conta
        </button>
      </div>
      <form className="conteudo__formulario" onSubmit={handleSubmit}>
        <div className="entrada">
          <input placeholder="E-mail" type="email" maxLength={30} required />{" "}
          <img src={mail} alt="Ícone de e-mail" />
        </div>
        <div className="entrada">
          <input placeholder="Senha" type="password" maxLength={10} required />{" "}
          <img src={visibility} alt="Ícone de visualização" />
        </div>
        <section className="formulario__opcoes">
          <div>
            <input type="radio" id="lembrar_senha" />{" "}
            <label htmlFor="lembrar_senha">Lembrar minha senha</label>
          </div>
          <a href="#">Esqueceu a senha?</a>
        </section>
        <button type="submit">Login</button>
      </form>
    </section>
  );
}

export default FormularioLogin;
