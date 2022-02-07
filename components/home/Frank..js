import { Canvas } from '@react-three/fiber';
import React, { Suspense } from 'react'
import {OrbitControls, 
  ContactShadows, 
  Environment, 
  Cloud,} from '@react-three/drei';
import FrankincentsModel from './Frankincents04Anim';

const Frank = () =>{

    return (
        <div>
        <Canvas
        dpr={[1, 2]}
        camera={{ position: [0, 0, 20], fov: 20 }}
        style={{height:'650px', width:'650px', background:'none'}}
        className="canvas">

        <Suspense fallback={null}>
         
            <FrankincentsModel/>
            </Suspense>
        <OrbitControls
            minPolarAngle={Math.PI / 2} 
            maxPolarAngle={Math.PI / 2} 
            enableZoom={false} 
            enablePan={true}/>
        </Canvas>
        </div>
    )
}

export default Frank