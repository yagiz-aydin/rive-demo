import React from 'react';
import 'aframe';
import 'aframe-particle-system-component';
import { Entity, Scene } from 'aframe-react';
 
const AframeApp = () => {
    return (
      <Scene light={{ color: 'black'}}>
        <Entity geometry={{primitive: 'box'}} material={{color: 'red'}} position={{x: 0, y: 0, z: -5}}/>
        <Entity particle-system={{preset: 'snow'}}/>
        <Entity geometry={{primitive: 'box'}} material={{color: 'blue'}} position={{x: 0, y: 0, z: -15}}/>
        <Entity light={{type: 'point'}}/>
        <Entity gltf-model={{src: 'virtualcity.gltf'}}/>
        <Entity text={{value: 'Hello, WebVR!'}} modify-materials/>
      </Scene>
    );
}
 
export default AframeApp;