/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 public/Models/tree.gltf -o src/components/Tree.jsx -k -K -r public 
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Tree(props) {
  const { nodes, materials } = useGLTF('/Models/tree.gltf')
  return (
    <group {...props} dispose={null}>
      <group name="Scene">
        <mesh name="tree-beech" geometry={nodes['tree-beech'].geometry} material={materials.color_main} />
      </group>
    </group>
  )
}

useGLTF.preload('/Models/tree.gltf')
