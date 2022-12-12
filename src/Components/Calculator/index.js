import React, {useState} from "react";
import store from "../../store";
import fields from "../Inputs/fields";

const Calculator = () => {

  const changeHandler = event => {
    store.dispatch({
      type: 'UPDATE_INPUT',
      payload: {
        name: event.target.name,
        value: event.target.value,
      },
    })
  }

  const [data, setData] = useState(fields);

  store.subscribe(() => {
    setData(store.getState().inputs)
  })

  return (
    <form id={"inputs"}>
      {data.map((item, key) => (
        <div
          className={"field-row"}
          key={[key, item.name].join('-')}
        >
          <label htmlFor={[key, item.name].join('-')}>
            {item.label}
          </label>
          <input
            {...item.attr}
            id={[key, item.name].join('-')}
            name={item.name}
            onChange={changeHandler}
          />
          <span className={"input-unit"}>
            {item.unit}
          </span>
        </div>
      ))}
    </form>
  )
}

export default Calculator
