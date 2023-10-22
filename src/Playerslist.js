
import Players from "./Players";
import Pla from "./Player";
const PlayersList = () => {
  return (
    <div>
      {Players.map((Player) => 
      <Pla{...Player}/>      
      )}   
  
  </div>
  );
};

export default PlayersList;