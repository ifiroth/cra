import {useDispatch} from "react-redux";
import {restartGame} from "../utils/store";

export function ResetButton() {
  const dispatch = useDispatch()

  return (
    <button
      className={"button"}
      onClick={() => {
        dispatch(restartGame())
      }}
    >
      Remettre à zéro
    </button>
  );
}
