import { useEffect, useState } from 'react';
import './App.css';
import playersInfo from './Components/Players-data/playersinfo.json';
import Players from './Components/Players/Players';
import Sitecart from './Components/Sitecart/Sitecart';


// import { faTwitter } from '@fortawesome/free-brands-svg-icons'

function App() {
  const [players, setPlayers] = useState([])
useEffect(()=>{
  setPlayers(playersInfo);
},[]);
const [listedplayer, setListedplayer] = useState([]);
const clickHandeler =(para)=>{
  console.log(para);
  const newData = [...listedplayer, para]
  setListedplayer(newData);
  }
console.log(listedplayer);

  return (
    

      <div className="App">
        
        <div className="players-container">
          
          {
          players.map(player=><Players player={player} clickHandeler={clickHandeler} key={player.id}></Players> )
          }
        </div>
        <div className="sitedata-container">
          <Sitecart listedplayer={listedplayer}></Sitecart>
          
        </div>
        
    </div>
  );
}

export default App;