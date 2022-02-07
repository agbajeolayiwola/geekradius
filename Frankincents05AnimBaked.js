/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/Frankincents05AnimBaked.glb')
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Empty" position={[0.01, -0.64, 0.34]} rotation={[0, 0, 0.1]}>
        <mesh
          name="BezierCircle"
          geometry={nodes.BezierCircle.geometry}
          material={nodes.BezierCircle.material}
          position={[-0.01, 0.37, -0.34]}
          rotation={[0.39, 0.03, 0.39]}
          scale={[2.1, 1.09, 2.1]}>
          <mesh
            name="Sphere001"
            geometry={nodes.Sphere001.geometry}
            material={materials.Stones}
            position={[-1.04, -0.18, 0.22]}
            rotation={[0.07, -0.07, -0.56]}
            scale={[0.62, 0.83, 0.48]}
          />
          <mesh
            name="Sphere002"
            geometry={nodes.Sphere002.geometry}
            material={nodes.Sphere002.material}
            position={[-0.04, -0.18, -0.78]}
            rotation={[-0.43, 0.14, -0.43]}
            scale={[0.14, 0.21, 0.14]}
          />
          <mesh
            name="Sphere003"
            geometry={nodes.Sphere003.geometry}
            material={nodes.Sphere003.material}
            position={[-0.04, -0.18, 1.22]}
            rotation={[-0.43, 0.14, -0.43]}
            scale={[0.14, 0.21, 0.14]}
          />
          <mesh
            geometry={nodes.Aset_nature_rock_S_umiledehw_LOD0.geometry}
            material={materials['Material.005']}
            position={[0.96, -0.18, 0.22]}
            rotation={[0.12, 0.55, 0.72]}
            scale={[0.03, 0.03, 0.02]}
          />
        </mesh>
      </group>
      <mesh
        geometry={nodes.Cube.geometry}
        material={materials.Material}
        position={[0.14, -3.07, -1.12]}
        rotation={[-0.19, 0, 0]}
        scale={[1.89, 1, 1]}
      />
      <mesh
        name="Cube001"
        geometry={nodes.Cube001.geometry}
        material={materials.Frankincents_card}
        position={[0.01, -0.58, 0.34]}
        rotation={[0.28, -0.64, -0.57]}
      />
      <mesh
        geometry={nodes.Cylinder.geometry}
        material={materials.Frankencent_Coin}
        position={[0, 0.36, -3.24]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[3.37, -0.23, 3.37]}
      />
      <mesh
        name="Cube006"
        geometry={nodes.Cube006.geometry}
        material={materials.Cash}
        position={[-1.75, 0.52, -0.06]}
        rotation={[-0.95, -0.66, 1.09]}
      />
      <mesh
        name="Sphere"
        geometry={nodes.Sphere.geometry}
        material={materials['Material.002']}
        position={[-1.95, 0.44, 0.18]}
        rotation={[0.87, -0.45, 0.72]}
      />
      <mesh
        geometry={nodes.BezierCircle001.geometry}
        material={nodes.BezierCircle001.material}
        rotation={[0.39, 0.03, 0.39]}
        scale={[2.1, 1.09, 2.1]}
      />
      <mesh
        geometry={nodes.Cube002.geometry}
        material={nodes.Cube002.material}
        position={[-0.77, -1.61, -3.11]}
        scale={0.89}
      />
      <mesh
        geometry={nodes.Cube003.geometry}
        material={nodes.Cube003.material}
        position={[-0.3, -1.19, -3.11]}
        scale={0.89}
      />
      <mesh
        geometry={nodes.Cube004.geometry}
        material={nodes.Cube004.material}
        position={[-0.57, 0.64, -3.01]}
        scale={0.89}
      />
      <mesh
        geometry={nodes.Cube005.geometry}
        material={nodes.Cube005.material}
        position={[0.08, 0.79, -3.11]}
        scale={0.89}
      />
      <mesh
        geometry={nodes.Cube007.geometry}
        material={nodes.Cube007.material}
        position={[-0.49, 1.6, -3.11]}
        scale={0.89}
      />
      <mesh
        geometry={nodes.Cube008.geometry}
        material={nodes.Cube008.material}
        position={[-0.04, 1.4, -3.11]}
        scale={0.89}
      />
      <mesh
        geometry={nodes.Cube009.geometry}
        material={nodes.Cube009.material}
        position={[-0.04, 1.19, -3.01]}
        scale={0.89}
      />
    </group>
  )
}

useGLTF.preload('/Frankincents05AnimBaked.glb')
