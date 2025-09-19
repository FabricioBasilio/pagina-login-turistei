import "./SecaoBotoesLogin.scss"
import apple_logo from "../../assets/images/apple_logo.png"
import google_logo from "../../assets/images/google_logo.png"



function SecaoBotoesLogin() {
  return (
    <section className="login_card__secao_botoes">
      <button><div className="botoes_wrap"><img src={apple_logo} alt="Ícone" /><p>Login com Apple</p></div></button>
      <button><div className="botoes_wrap"><img src={google_logo} alt="Ícone" /><p>Login com Google</p></div></button>
    </section>
  );
}

export default SecaoBotoesLogin;
