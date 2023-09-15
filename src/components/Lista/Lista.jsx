import { ItemLista } from "./ItemLista/ItemLista";

import "./Lista.css";

export function Lista({ listaDeLancamento, removeItemListaDeLancamento }) {
  return (
    <ul className="ListaDeLançamentos">
      {listaDeLancamento.map((itemObjeto) => {
        return (
          <ItemLista
            key={itemObjeto.id}
            itemObjeto={itemObjeto}
            removeItemListaDeLancamento={removeItemListaDeLancamento}
          />
        );
      })}
    </ul>
  );
}
