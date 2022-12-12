import {combineReducers, createStore} from "redux"
import fields from "./Components/Inputs/fields";

const errorsReducer = (state = { errors: [] }, action) => {
  switch(action.type) {
    case 'ADD':
      return {errors: [...state.errors, action.payload]}
    case 'RESET':
      return {errors: []}
    default:
      return state
  }
}

const inputsInitialState = fields

const inputsReducer = (state = inputsInitialState, action) => {

  switch(action.type) {
    case 'UPDATE_INPUT':

      let result = [...state]
      const index = result.findIndex(item => item.name === action.payload.name)

      switch (result[index].type)
      {
        case 'dec':
          result[index].attr.value = parseFloat(action.payload.value)
          break;
        default:
          result[index].attr.value = parseInt(action.payload.value)
          break;
      }
      return [ ...result ]

    default:
      return state
  }
}

const rootReducer = combineReducers({
  inputs: inputsReducer,
  errors: errorsReducer,
})

const store = createStore(rootReducer)

export default store
