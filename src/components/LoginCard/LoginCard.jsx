import FormularioLogin from "../FormularioLogin/FormularioLogin";
import LinhaSegmentacao from "../LinhaSegmentacao/LinhaSegmentacao";
import SecaoBotoesLogin from "../SecaoBotoesLogin/SecaoBotoesLogin";
import "./LoginCard.scss";

function LoginCard() {
  /* componentes: FormularioLogin, LinhaSegmentacao, SecaoBotoesLogin */

  return (
    <main className="login_card">
      <FormularioLogin />
      <LinhaSegmentacao />
      <SecaoBotoesLogin />
    </main>
  );
}

export default LoginCard;
