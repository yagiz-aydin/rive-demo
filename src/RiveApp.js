import React, { useEffect, useState } from 'react';
import { Rive } from '@rive-app/canvas';
import RoseAnim from './assets/Zapapa_Anim/_3_rose_animation-2.riv';
import HiAnim from './assets/Zapapa_Anim/_hi_animation-2.riv';
import RocketAnim from './assets/Zapapa_Anim/_rocket_move_animation-2.riv';
import StarsBoinkAnim from './assets/Zapapa_Anim/_stars_boink_animation-2.riv';
import DonutBoinkAnim from './assets/Zapapa_Anim/donut_boink_animation-3.riv';
import HandAnimation from './assets/Zapapa_Anim/hand_animation-3.riv';
import HiSoftAnim from './assets/Zapapa_Anim/hi_soft_animation-3.riv';
import Rocket3d from './assets/Zapapa_Anim/rocket_3d_animation-3.riv';
import RoseSwing from './assets/Zapapa_Anim/rose_swing_animation-3.riv';
import StarAnim from './assets/Zapapa_Anim/star_animation-3.riv';
import StarsAnim from './assets/Zapapa_Anim/stars_animation-3.riv';

function App() {
  const [anim, setAnim] = useState();
  const [animState, setAnimState] = useState();
  const [animQueue, setAnimQueue] = useState([]);

  const animArray = [
    {
      name: 'rose',
      src: RoseAnim,
      time: 5,
    },
    {
      name: 'hi',
      src: HiAnim,
      time: 2,
    },
    {
      name: 'rocket',
      src: RocketAnim,
      time: 3,
    },
    {
      name: 'stars-boink',
      src: StarsBoinkAnim,
      time: 4,
    },
    {
      name: 'donut',
      src: DonutBoinkAnim,
      time: 5,
    },
    {
      name: 'hand',
      src: HandAnimation,
      time: 3,
    },
    {
      name: 'hi-soft',
      src: HiSoftAnim,
      time: 2,
    },

    {
      name: 'rocket-3d',
      src: Rocket3d,
      time: 1,
    },
    {
      name: 'rose-swing',
      src: RoseSwing,
      time: 2,
    },
    {
      name: 'star-anim',
      src: StarAnim,
      time: 3,
    },
    {
      name: 'stars-anim',
      src: StarsAnim,
      time: 4,
    },
  ];

  const addQueue = (animFile) => {
    setAnimState(true);
    setAnimQueue((prevState) => [...prevState, animFile]);
  };

  useEffect(() => {
    if (animState && anim)
      new Rive({
        src: anim,
        canvas: document.getElementById('canvas'),
        autoplay: true,
      });
  }, [animState, anim]);

  useEffect(() => {
    let interval;
    if (animState && animQueue.length > 0) {
      interval = setInterval(() => {
        if (animQueue.length === 0) {
          setAnimState(false);
        }
        if (animQueue[0].time > 0) {
          animQueue[0].time = animQueue[0].time - 1;
          setAnimQueue(animQueue);
        }
        setAnimQueue((prevState) => [...prevState]);
        if (animQueue[0].time < 0 || animQueue[0].time === 0) {
          setAnimQueue((prevState) => [...prevState.slice(1)]);
        }
      }, 1000);
      return () => clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [animState, animQueue]);

  useEffect(() => {
    if (animQueue.length > 0) setAnim(animQueue[0].src);
    if (animQueue.length === 0) {
      setAnimState();
      setAnim();
    }
  }, [animQueue]);

  return (
    <div>
      <header>
        {animState && <canvas id='canvas' />}
        <h1>Playground</h1>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          {animArray.map((item) => (
            <div key={item.name}>
              <button onClick={() => addQueue(item)}>
                {item.name}
                <p>{item.time ? item.time + 'saniye' : ''}</p>
              </button>
            </div>
          ))}
        </div>
        <h1>Queue</h1>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          {animQueue.map((anim) => (
            <div
              key={anim.name}
              style={{
                border: '1px solid black',
                margin: '5px',
                padding: '5px',
              }}>
              <>{anim.name}</>
              <p>{anim.time}</p>
            </div>
          ))}
        </div>
      </header>
    </div>
  );
}

export default App;
