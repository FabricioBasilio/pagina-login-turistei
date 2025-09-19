import "./FormularioLogin.scss";

function FormularioLogin() {
  return (
    <section className="login_card__conteudo">
      <section className="conteudo__titulos">
        <h1>Bem-vindo ao Turistei</h1>
        <h4>Que bom vê-lo por aqui</h4>
      </section>
      {/* futuro componente */}
      <div className="conteudo__opcoes_entrar">
        <button>Login</button>
        <button>Criar conta</button>
      </div>
      <form className="conteudo__formulario">
        <input placeholder="E-mail" type="email" required />
        <input placeholder="Senha" type="password" required />
        <section className="formulario__opcoes">
          <input type="radio" id="lembrar_senha" />{" "}
          <label htmlFor="lembrar_senha">Lembrar minha senha</label>
          <a href="#">Esqueceu a senha?</a>
        </section>
        <button type="submit">Login</button>
      </form>
    </section>
  );
}

export default FormularioLogin;
