/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.2 plane.gltf -t
Author: Noah (https://sketchfab.com/Noaah)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/plane-4c3598cd0ba547aeb10a4833d6a36566
Title: Plane
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { OrbitControls, useGLTF, useHelper } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { useFrame } from "@react-three/fiber";
import { Group } from 'three';
import { DirectionalLight, DirectionalLightHelper } from "three";
import { useControls } from 'leva'

type GLTFResult = GLTF & {
  nodes: {
    Object_4: THREE.Mesh
    Object_6: THREE.Mesh
    Object_8: THREE.Mesh
    Object_10: THREE.Mesh
    Object_11: THREE.Mesh
    Object_13: THREE.Mesh
    Object_15: THREE.Mesh
    Object_17: THREE.Mesh
    Object_19: THREE.Mesh
    Object_21: THREE.Mesh
    Object_23: THREE.Mesh
    Object_25: THREE.Mesh
    Object_27: THREE.Mesh
    Object_29: THREE.Mesh
    Object_31: THREE.Mesh
    Object_33: THREE.Mesh
    Object_35: THREE.Mesh
    Object_37: THREE.Mesh
    Object_39: THREE.Mesh
    Object_41: THREE.Mesh
    Object_43: THREE.Mesh
    Object_45: THREE.Mesh
    Object_47: THREE.Mesh
    Object_48: THREE.Mesh
    Object_49: THREE.Mesh
    Object_51: THREE.Mesh
    Object_53: THREE.Mesh
    Object_54: THREE.Mesh
    Object_55: THREE.Mesh
  }
  materials: {
    ['chrome.001']: THREE.MeshStandardMaterial
    ['tire.001']: THREE.MeshStandardMaterial
    ['body_texture.001']: THREE.MeshPhysicalMaterial
    ['Wwhitepaint.001']: THREE.MeshPhysicalMaterial
    ['plastic_rough_grey_plus.001']: THREE.MeshStandardMaterial
    ['metal_yellow.001']: THREE.MeshStandardMaterial
    ['glass_clear.001']: THREE.MeshPhysicalMaterial
    ['light_white.001']: THREE.MeshStandardMaterial
    ['metal_rough_plus.001']: THREE.MeshStandardMaterial
    ['plastic_rough_black.001']: THREE.MeshStandardMaterial
    ['plastic_rough_black_plus.001']: THREE.MeshStandardMaterial
    ['board.001']: THREE.MeshPhysicalMaterial
    ['metal_rough.001']: THREE.MeshStandardMaterial
    carpaint: THREE.MeshPhysicalMaterial
  }
}

export default function AirPlane(props: JSX.IntrinsicElements['group']) {
  const ref = useRef<Group>(null);

  const directionalLightRef = useRef<DirectionalLight>(null!);
  useHelper(directionalLightRef, DirectionalLightHelper, 1, 'red')

  const {intensity, x, y, z} = useControls({intensity : {value: 1, min: 0, max: 5}, x: {value: 0,  min: -5, max: 5}, y: {value: 0,  min: -5, max: 5}, z: {value: 0,  min: -5, max: 5}})
  const { nodes, materials } = useGLTF('/plane.gltf') as unknown as GLTFResult
  useFrame((state, delta) => {
    if (!ref.current) {
      return;
    }
    // ref.current.rotation.x += 0.01;
    //ref.current.rotation.y += 0.005;
  });

  return (
    <>
    <directionalLight ref={directionalLightRef} position={[x,y,z]} intensity={intensity}/>
    <OrbitControls/>
    <group ref={ref} position={[0, 0, 0]} rotation={[0, Math.PI/2, 0]} scale={.006} {...props} dispose={null}>
      <group  position={[0, 0.06, -0.14]} rotation={[-1.66, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[0.02, 1.04, 0.42]} rotation={[0, Math.PI / 2, 0]} scale={0.020}>
            <mesh geometry={nodes.Object_10.geometry} material={materials['Wwhitepaint.001']}  />
            <mesh geometry={nodes.Object_11.geometry} material={materials['Wwhitepaint.001']} />
        
          </group>
          <group position={[0.01, 1.2, 0.84]} rotation={[0, Math.PI / 2, 0]} scale={0.020}>
            <mesh geometry={nodes.Object_47.geometry} material={materials.carpaint}  />
            <mesh geometry={nodes.Object_48.geometry} material={materials.carpaint}  />
            <mesh geometry={nodes.Object_49.geometry} material={materials.carpaint}  />
          </group>
          <group position={[0.01, 1.2, 0.84]} rotation={[0, Math.PI / 2, 0]} scale={0.020}>
            <mesh geometry={nodes.Object_53.geometry} material={materials['body_texture.001']}  />
            <mesh geometry={nodes.Object_54.geometry} material={materials['body_texture.001']}  />
            <mesh geometry={nodes.Object_55.geometry} material={materials['body_texture.001']}  />
          </group>
          <mesh geometry={nodes.Object_4.geometry} material={materials['chrome.001']} position={[0.01, 1.33, -2.91]} rotation={[0, Math.PI / 2, 0]} scale={0.020} />
          <mesh geometry={nodes.Object_6.geometry} material={materials['tire.001']} position={[0.01, 0.64, -0.44]} rotation={[0, Math.PI / 2, 0]} scale={0.020} />
          <mesh geometry={nodes.Object_8.geometry} material={materials['body_texture.001']} position={[0.01, 0.4, -0.07]} rotation={[0, Math.PI / 2, 0]} scale={0.020} />
          <mesh geometry={nodes.Object_13.geometry} material={materials['plastic_rough_grey_plus.001']}  position={[0.01, 0.31, -0.31]} rotation={[0, Math.PI / 2, 0]} scale={0.020} />
          <mesh geometry={nodes.Object_15.geometry} material={materials['chrome.001']}  position={[-0.02, 0.38, 1.46]} rotation={[0, Math.PI / 2, 0]} scale={0.020} />
          <mesh geometry={nodes.Object_17.geometry} material={materials['tire.001']} position={[0.01, 0.2, 0.71]} rotation={[0, Math.PI / 2, 0]} scale={0.020} />
          <mesh geometry={nodes.Object_19.geometry} material={materials['chrome.001']}   position={[0.01, 0.41, -0.05]} rotation={[0, Math.PI / 2, 0]} scale={0.020} />
          <mesh geometry={nodes.Object_21.geometry} material={materials['metal_yellow.001']}  position={[0.02, 0.18, 3.4]} rotation={[0, Math.PI / 2, 0]} scale={0.020} />
          <mesh geometry={nodes.Object_23.geometry} material={materials['body_texture.001']} position={[0.01, 0.62, -0.11]} rotation={[0, Math.PI / 2, 0]} scale={0.020} />
          <mesh geometry={nodes.Object_25.geometry} material={materials['glass_clear.001']}  position={[0.01, 1.18, 0]} rotation={[0, Math.PI / 2, 0]} scale={0.020} />
          <mesh geometry={nodes.Object_27.geometry} material={materials['chrome.001']} position={[0.01, 1.46, -3.46]} rotation={[0, Math.PI / 2, 0]} scale={0.020} />
          <mesh geometry={nodes.Object_29.geometry} material={materials['light_white.001']} position={[0.05, 1.33, -1.55]} rotation={[0, Math.PI / 2, 0]} scale={0.020} />
          <mesh geometry={nodes.Object_31.geometry} material={materials['metal_rough_plus.001']}  position={[-0.09, 1, -0.21]} rotation={[0, Math.PI / 2, 0]} scale={0.020} />
          <mesh geometry={nodes.Object_33.geometry} material={materials['glass_clear.001']} position={[0.01, 1.56, 1.38]} rotation={[0, Math.PI / 2, 0]} scale={0.020} />
          <mesh geometry={nodes.Object_35.geometry} material={materials['chrome.001']} position={[0.06, 1.32, -0.8]} rotation={[0, Math.PI / 2, 0]} scale={0.020} />
          <mesh geometry={nodes.Object_37.geometry} material={materials['plastic_rough_black.001']} material-color={"white"}  position={[0.03, 1.69, -1.13]} rotation={[0, Math.PI / 2, 0]} scale={0.020} />
          <mesh geometry={nodes.Object_39.geometry} material={materials['plastic_rough_black_plus.001']} material-color={"white"}  position={[-0.03, 1.16, 1.08]} rotation={[0, Math.PI / 2, 0]} scale={0.020} />
          <mesh geometry={nodes.Object_41.geometry} material={materials['board.001']} position={[0.01, 1.34, 2.6]} rotation={[0, Math.PI / 2, 0]} scale={0.020} />
          <mesh geometry={nodes.Object_43.geometry} material={materials['metal_rough.001']} position={[0.01, 0.83, 0.69]} rotation={[0, Math.PI / 2, 0]} scale={0.020} />
          <mesh geometry={nodes.Object_45.geometry} material={materials['chrome.001']} position={[0, 1.37, -1.68]} rotation={[0, Math.PI / 2, 0]} scale={0.020} />
          <mesh geometry={nodes.Object_51.geometry} material={materials['plastic_rough_black.001']} position={[0.01, 1.56, 1.38]} rotation={[0, Math.PI / 2, 0]} scale={0.020} />
        </group>
      </group>
    </group>
    </>
  )
}
