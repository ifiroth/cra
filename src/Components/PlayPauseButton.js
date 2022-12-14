import {useSelector, useStore} from "react-redux";
import {autoplay} from "../utils/store";
import {selectGameIsPlaying} from "../utils/selector";

export function PlayPauseButton() {
  const store = useStore()
  const playing = useSelector(selectGameIsPlaying)

  return (
    <button
      className={"button"}
      onClick={() => {
        autoplay(store)
      }}
    >
      {store.getState().playing
        ? 'Jeu en cours...'
        : 'Jouer'
      }
    </button>
  )
}
