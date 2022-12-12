import './Styles/main.scss'
import Calculator from "./Components/Calculator";
import Result from "./Components/Result";

function App() {

  return (
    <>
      <h1>Calculateur de ROAS</h1>
      <p>Le ROI est mort, vive le ROAS !</p>
      <div className={"card-wrapper"}>
        <section className={"card"} id={"data"}>
          <h2>Données</h2>
          <Calculator />
        </section>
        <section className={"card"} id={"results"}>
          <h2>Résultat</h2>
          <Result/>
        </section>
        <section className={"card"}>
          <h2>Améliorations</h2>
          <ul>
            <li>Graphique de l'évolution du ROI en fonctions du Tx de marge</li>
            <li>Graphique de l'évolution du ROI en fonctions du Tx de conversion</li>
            <li>Graphique de l'évolution du ROI en fonctions du Panier moyen</li>
            <li>Idem pour le ROAS</li>
          </ul>
        </section>
      </div>
    </>
  )
}

export default App;
