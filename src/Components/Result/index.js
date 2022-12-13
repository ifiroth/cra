import React, {useEffect, useState} from "react";
import store from "../../store";
import fields from "../Inputs/fields";
import results from "./results";

const Result = () => {
  /* Initialize store with outputs and inputs */

  const [inputs, setInputs] = useState(fields);
  const [outputs, setOutputs] = useState(results);

  store.subscribe(() => {
    setInputs(store.getState().inputs)
  })

  useEffect(() => {
    setOutputs(outputs)
  }, [inputs, outputs])

  /* Define getters */

  const getData = label => {

    let data = inputs.find(item => item.name === label)?.attr?.value

    if (data === undefined)
      data = outputs.find(item => item.id === label)?.value

    if (data === undefined)
      return label

    return data
  }

  /* Define Calculator functions */

  const calculate = (item, k) => {
    // TODO: remove eval with homemade stuff
    outputs[k].value = eval(item.formula.map(term => getData(term)).join(' '))
    outputs[k].isCritical = outputs[k].value <= item.critical
    return [outputs[k].value.toLocaleString('fr', {maximumFractionDigits: item.dec}), item.unit].join(' ')
  }

  /* Prints Outcome */

  return (
    <ul className={"result-list"}>
      {outputs.map((item,k) => (
        <li
          key={item.id}
          className={item.isCritical && 'critical'
        }>
          <label htmlFor={item.id}>{item.label}</label>
          <span id={item.id}>{calculate(item, k)}</span>
        </li>
      ))}
    </ul>
  )
}

export default Result
