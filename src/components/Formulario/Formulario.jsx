import { useState } from "react";

import "./Formulario.css";

export function Formulario({ addItemListaDeLancamento }) {
  const [formData, setFormData] = useState({
    descricao: "",
    valor: "",
    tipoValor: "",
  });

  const enviaFormulario = (e) => {
    e.preventDefault();
    if (
      formData.descricao == "" ||
      formData.valor == "" ||
      formData.tipoValor == ""
    ) {
      alert("Por favor, preecha todos os campos");
    } else {
      addItemListaDeLancamento({ ...formData, valor: formData.valor });
    }

    setFormData({
      descricao: "",
      valor: "",
      tipoValor: "",
    });
  };

  return (
    <form onSubmit={enviaFormulario}>
      <label htmlFor="">descrição</label>
      <input
        type="text"
        placeholder="Digite sua descrição"
        value={formData.descricao}
        onChange={(e) =>
          setFormData({ ...formData, descricao: e.target.value })
        }
      />

      <label htmlFor="">Valor(R$)</label>
      <input
        className="inputNumber"
        type="number"
        placeholder="R$..."
        value={formData.valor}
        onChange={(e) => setFormData({ ...formData, valor: e.target.value })}
      />

      <label htmlFor="">Tipo de valor</label>
      <select
        value={formData.tipoValor}
        onChange={(e) =>
          setFormData({ ...formData, tipoValor: e.target.value })
        }
      >
        <option value="">tipo de valor</option>
        <option value="Entrada"> entrada</option>
        <option value="Despesa"> Despesa</option>
      </select>
      <button type="submit" className="btnForm">
        inserir valor
      </button>
    </form>
  );
}
