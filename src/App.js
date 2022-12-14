import {Display} from "./Components/Display";
import {PlayPauseButton} from "./Components/PlayPauseButton";
import {PointScoredButton} from "./Components/PointScoredButton";
import {ResetButton} from "./Components/ResetButton";
import {PlayerScore} from "./Components/PlayerScore";
import {PlayerPoints} from "./Components/PlayerPoints";

function App() {

  return (
    <div>
      <PlayerPoints playerId={"player1"} playerName={"RauRu"} />
      <PlayerPoints playerId={"player2"} playerName={"Finao"} />
      <Display />
      <PlayerScore playerId={"player1"} playerName={"RauRu"} />
      <PlayerScore playerId={"player2"} playerName={"Finao"} />
      <div className="buttons-row">
        <PointScoredButton playerId="player1">Point Joueur 1</PointScoredButton>
        <PointScoredButton playerId="player2">Point Joueur 2</PointScoredButton>
      </div>
      <div className="buttons-row">
        <ResetButton />
        <PlayPauseButton />
      </div>
    </div>
  )
}

export default App;
