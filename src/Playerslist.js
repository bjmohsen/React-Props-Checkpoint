
import Players from "./Players";
import Pla from "./Player";
//pour manipule card  
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