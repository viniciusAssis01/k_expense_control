import "./ItemLista.css";

export function ItemLista({ itemObjeto, removeItemListaDeLancamento }) {
  return (
    <li className={itemObjeto.tipoValor === "Entrada" ? "bordaEntrada" : null}>
      <div className="liDescricaoLançamento">
        <h2>{itemObjeto.descricao}</h2>
      </div>
      <div className="liContainer_tipoValor_valor_botao">
        <p>{itemObjeto.tipoValor}</p>
        <div className="liValorEButton">
          <p>
            {itemObjeto.valor.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </p>
          <button
            className="btnCardItem"
            onClick={() => removeItemListaDeLancamento(itemObjeto.id)}
          >
            Excluir
          </button>
        </div>
      </div>
    </li>
  );
}
