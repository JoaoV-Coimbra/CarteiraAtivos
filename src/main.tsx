// React: biblioteca principal para montar componentes.
import React from "react";

// ReactDOM: conecta a árvore React ao elemento #root do index.html.
import ReactDOM from "react-dom/client";

// App: tela principal da carteira.
import App from "./PortfolioApp";

// CSS global: reaproveita a identidade visual do protótipo antigo.
import "../styles.css";

// Ponto de entrada: tudo que aparece na tela nasce dentro de #root.
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
