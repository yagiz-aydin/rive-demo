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
  const [animState, setAnimState] = useState();

  const animArray = [
    {
      name: 'rose',
      src: RoseAnim,
    },
    {
      name: 'hi',
      src: HiAnim,
    },
    {
      name: 'rocket',
      src: RocketAnim,
    },
    {
      name: 'stars-boink',
      src: StarsBoinkAnim,
    },
    {
      name: 'donut',
      src: DonutBoinkAnim,
    },
    {
      name: 'hand',
      src: HandAnimation,
    },
    {
      name: 'hi-soft',
      src: HiSoftAnim,
    },

    {
      name: 'rocket-3d',
      src: Rocket3d,
    },
    {
      name: 'rose-swing',
      src: RoseSwing,
    },
    {
      name: 'star-anim',
      src: StarAnim,
    },
    {
      name: 'stars-anim',
      src: StarsAnim,
    },
    {
      name: 'Clear',
      src: undefined,
    },
  ];

  useEffect(() => {
    if (animState)
      new Rive({
        src: animState,
        canvas: document.getElementById('canvas'),
        autoplay: true,
      });
  }, [animState]);

  return (
    <div>
      <header>
        {animState && <canvas id='canvas' />}
        <div>
          {animArray.map((item) => (
            <button onClick={() => setAnimState(item.src)}>{item.name}</button>
          ))}
        </div>
      </header>
    </div>
  );
}

export default App;
