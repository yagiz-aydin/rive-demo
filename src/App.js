import React, {useEffect} from 'react';
import './App.css';
import { Rive } from "@rive-app/canvas";
import BouncedCharacterAnimation from './assets/animations/bounce.riv';

function App() {
  useEffect(() => {
    new Rive({
      src: BouncedCharacterAnimation,
      canvas: document.getElementById("canvas"),
      autoplay: true
    });
  },[]);

  return (
    <div>
      <header className="App-header">
        <canvas id="canvas"/>
      </header>
    </div>
  );
}

export default App;
