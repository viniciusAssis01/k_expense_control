/* import  "./Total.module.css"; */
import "./TotalDinheiro.css";

export function TotalDinheiro({ valorTotal }) {
  return (
    <div className="containerTotal">
      <div className="containerValor">
        <p className="titulo3">valor total</p>
        <p className="titulo3 valor">
          {valorTotal().toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </p>
      </div>
      <div className="containerDescricao">
        <p>o valor se refere ao saldo</p>
      </div>
    </div>
  );
}
