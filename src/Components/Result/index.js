import React, {useState} from "react";
import store from "../../store";
import fields from "../Inputs/fields";

const Result = () => {

  const [data, setData] = useState(fields);

  store.subscribe(() => {
    setData(store.getState().inputs)
  })

  const getValue = (label) => data.find(item => item.name === label)?.attr?.value

  const marginGoal = getValue('marginGoal') * getValue('paidCampaignLeverage') / 100
  const visitorCount = (getValue('budget') / getValue('costPerClick'))
  const orderCount = visitorCount * getValue('conversionRate') / 100
  const caff = getValue('averageBasket') * orderCount
  const grossMargin = getValue('marginRate') * caff  / 100
  const netMargin = getValue('budget') - grossMargin
  const roas = caff / getValue('budget') * 100
  const cpa = getValue('budget') / orderCount
  const dailyBudget = getValue('budget') / 30
  const roi = grossMargin - getValue('budget') - marginGoal
  const rentability = roi / getValue('budget') * 100

  return (
    <ul className={"result-list"}>
      <li>
        <label htmlFor={"paidCampaignMarginGoal"}>Objectif de marge sur le levier payant</label>
        <span id={"paidCampaignMarginGoal"}>{marginGoal} €</span>
      </li>
      <li>
        <label htmlFor={"visitorCount"}># Visiteurs</label>
        <span id={"visitorCount"}>{visitorCount.toFixed(0)}</span>
      </li>
      <li>
        <label htmlFor={"orderCount"}># Commandes</label>
        <span id={"orderCount"}>{orderCount.toFixed(0)}</span>
      </li>
      <li>
        <label htmlFor={"caff"}>CAFF Total</label>
        <span id={"caff"}>{caff.toFixed(2)} €</span>
      </li>
      <li>
        <label htmlFor={"grossMargin"}>Marge brute</label>
        <span id={"grossMargin"}>{grossMargin.toFixed(2)} €</span>
      </li>
      <li>
        <label htmlFor={"netMargin"}>Marge nette</label>
        <span id={"netMargin"}>{netMargin.toFixed(2)} €</span>
      </li>
      <li>
        <label htmlFor={"roas"}>ROAS</label>
        <span id={"roas"}>{roas.toFixed(2)} %</span>
      </li>
      <li>
        <label htmlFor={"cpa"}>CPA</label>
        <span id={"cpa"}>{cpa.toFixed(2)} €</span>
      </li>
      <li>
        <label htmlFor={"dailyBudget"}>Budget par jour</label>
        <span id={"dailyBudget"}>{dailyBudget.toFixed(0)} €</span>
      </li>
      <li>
        <label htmlFor={"roi"}>ROI</label>
        <span id={"roi"}>{roi.toFixed(0)} €</span>
      </li>
      <li>
        <label htmlFor={"rentability"}>Rentabilité de l'investissement</label>
        <span id={"rentability"}>{rentability.toFixed(2)} %</span>
      </li>
    </ul>
  )
}

export default Result
