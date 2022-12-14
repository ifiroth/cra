import {useSelector} from "react-redux";
import {selectDisplayText} from "../utils/selector";

export function Display() {

  const text = useSelector(selectDisplayText)
  return <p className="display">{text}</p>
}
