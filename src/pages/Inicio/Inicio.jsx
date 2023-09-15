import { useState } from "react";
import { TotalDinheiro } from "../../components/TotalDinheiro/TotalDinheiro";
import { Cabecalho } from "../../components/Cabecalho/Cabecalho";
import { Formulario } from "../../components/Formulario/Formulario";
import { Lista } from "../../components/Lista/Lista";
import { v4 as uuidv4 } from "uuid";

import "../../styles/index.css";

import "./Inicio.css";

export function Inicio() {
  const [listaDeLancamento, setListaDeLancamento] = useState([]);
  function addItemListaDeLancamento(objetoFormData) {
    const novoItemObjeto = {
      ...objetoFormData,
      id: uuidv4(),
      valor: Number(objetoFormData.valor),
    };
    const novaListaDeLancamento = [...listaDeLancamento, novoItemObjeto];
    setListaDeLancamento(novaListaDeLancamento);
  }

  function valorTotal() {
    const valorTotal = listaDeLancamento.reduce((acumulador, valorAtual) => {
      if (valorAtual.tipoValor == "Entrada") {
        return acumulador + valorAtual.valor;
      } else {
        return acumulador - valorAtual.valor;
      }
    }, 0);
    return valorTotal;
  }

  function removeItemListaDeLancamento(itemId) {
    const novaListaDeLancamento = listaDeLancamento.filter(
      (itemObjeto) => itemObjeto.id !== itemId
    );
    setListaDeLancamento(novaListaDeLancamento);
  }

  return (
    <>
      <Cabecalho />
      <main>
        <section className="section1Esq">
          <Formulario addItemListaDeLancamento={addItemListaDeLancamento} />
          <div>
            {listaDeLancamento.length > 0 ? (
              <TotalDinheiro valorTotal={valorTotal} />
            ) : null}
          </div>
        </section>

        <section className="section2Dir">
          <h3 className="title3">Resumo financeiro</h3>
          {listaDeLancamento.length == 0 ? (
            <h2 className="titulo2">Voce ainda ñ possui nenhum lançamento</h2>
          ) : (
            <Lista
              listaDeLancamento={listaDeLancamento}
              removeItemListaDeLancamento={removeItemListaDeLancamento}
            />
          )}
        </section>
      </main>
    </>
  );
}
