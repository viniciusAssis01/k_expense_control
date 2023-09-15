import "./Cabecalho.css";

import Logo from "../../images/logo_NuKenzie.svg";

export function Cabecalho() {
  return (
    <header>
      <figure>
        <img src={Logo} alt="logo NuKenzie" />
      </figure>
    </header>
  );
}
