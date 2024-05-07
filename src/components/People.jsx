/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 public/Models/People Poses.glb -o src/components/People.jsx -k -K -r public 
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function People(props) {
  const { nodes, materials } = useGLTF('/Models/People Poses.glb')
  console.log(nodes)
  return (
    <group {...props} dispose={null}>
      <group>
        <mesh name="group2096096100" geometry={nodes.group2096096100.geometry} material={materials.mat21} />
        <mesh name="group1943059473" geometry={nodes.group1943059473.geometry} material={materials.mat21} />
        <mesh name="group1764449281" geometry={nodes.group1764449281.geometry} material={materials.mat21} />
        <mesh name="group69367443" geometry={nodes.group69367443.geometry} material={materials.mat21} />
        <mesh name="group755564586" geometry={nodes.group755564586.geometry} material={materials.mat21} />
        <mesh name="group288875696" geometry={nodes.group288875696.geometry} material={materials.mat21} />
        <mesh name="group1301016886" geometry={nodes.group1301016886.geometry} material={materials.mat21} />
        <mesh name="group2142830839" geometry={nodes.group2142830839.geometry} material={materials.mat21} />
        <mesh name="group770179980" geometry={nodes.group770179980.geometry} material={materials.mat21} />
        <mesh name="group496716248" geometry={nodes.group496716248.geometry} material={materials.mat21} />
        <mesh name="group502646950" geometry={nodes.group502646950.geometry} material={materials.mat21} />
        <mesh name="group44931226" geometry={nodes.group44931226.geometry} material={materials.mat21} />
        <mesh name="group1058225897" geometry={nodes.group1058225897.geometry} material={materials.mat21} />
        <mesh name="group951580632" geometry={nodes.group951580632.geometry} material={materials.mat21} />
        <mesh name="group133419775" geometry={nodes.group133419775.geometry} material={materials.mat21} />
        <mesh name="group1642355346" geometry={nodes.group1642355346.geometry} material={materials.mat21} />
        <mesh name="group217660079" geometry={nodes.group217660079.geometry} material={materials.mat21} />
        <mesh name="group1258757071" geometry={nodes.group1258757071.geometry} material={materials.mat21} />
        <mesh name="group1670162148" geometry={nodes.group1670162148.geometry} material={materials.mat21} />
      </group>
    </group>
  )
}

useGLTF.preload('/Models/People Poses.glb')
