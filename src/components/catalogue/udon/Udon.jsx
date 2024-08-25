/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.0 public/models/udon_meal.glb 
Author: Wesai (https://sketchfab.com/Wesai)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/udon-meal-aeadafce557445df8d852109f2794f6a
Title: Udon Meal
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export function Udon({ rotationX, rotationY, ...props }) {
  const groupRef = useRef();
  const { nodes, materials } = useGLTF("./models/udon_meal.glb");

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.x = rotationX;
      groupRef.current.rotation.y = rotationY;
    }
  });

  return (
    <group {...props} ref={groupRef} dispose={null}>
      <mesh
        geometry={nodes.cloth_00_mat_misc_0.geometry}
        material={materials.mat_misc}
      />
      <mesh
        geometry={nodes.cloth_01_mat_misc_0.geometry}
        material={materials.mat_misc}
      />
      <mesh
        geometry={nodes.cloth_02_mat_misc_0.geometry}
        material={materials.mat_misc}
      />
      <mesh
        geometry={nodes.chopstick_01_mat_misc_0.geometry}
        material={materials.mat_misc}
      />
      <mesh
        geometry={nodes.chopstick_00_mat_misc_0.geometry}
        material={materials.mat_misc}
      />
      <mesh
        geometry={nodes.table_mat_table_0.geometry}
        material={materials.mat_table}
      />
      <mesh
        geometry={nodes.sushi_00_mat_ingredients_0.geometry}
        material={materials.mat_ingredients}
      />
      <mesh
        geometry={nodes.sushi_meat_00_mat_ingredients_0.geometry}
        material={materials.mat_ingredients}
      />
      <mesh
        geometry={nodes.sushi_00_mat_ingredients_0_1.geometry}
        material={materials.mat_ingredients}
      />
      <mesh
        geometry={nodes.sushi_meat_00_mat_ingredients_0_1.geometry}
        material={materials.mat_ingredients}
      />
      <mesh
        geometry={nodes.sushi_00_mat_ingredients_0_2.geometry}
        material={materials.mat_ingredients}
      />
      <mesh
        geometry={nodes.sushi_meat_00_mat_ingredients_0_2.geometry}
        material={materials.mat_ingredients}
      />
      <mesh
        geometry={nodes.sushi_00_mat_ingredients_0_3.geometry}
        material={materials.mat_ingredients}
      />
      <mesh
        geometry={nodes.sushi_meat_00_mat_ingredients_0_3.geometry}
        material={materials.mat_ingredients}
      />
      <mesh
        geometry={nodes.sushi_00_mat_ingredients_0_4.geometry}
        material={materials.mat_ingredients}
      />
      <mesh
        geometry={nodes.sushi_meat_00_mat_ingredients_0_4.geometry}
        material={materials.mat_ingredients}
      />
      <mesh
        geometry={nodes.sushi_00_mat_ingredients_0_5.geometry}
        material={materials.mat_ingredients}
      />
      <mesh
        geometry={nodes.sushi_meat_00_mat_ingredients_0_5.geometry}
        material={materials.mat_ingredients}
      />
      <mesh
        geometry={nodes.miniPlate_mat_misc_0.geometry}
        material={materials.mat_misc}
      />
      <mesh
        geometry={nodes.pumpkin_069_mat_ingredients_0.geometry}
        material={materials.mat_ingredients}
      />
      <mesh
        geometry={nodes.pumpkin_068_mat_ingredients_0.geometry}
        material={materials.mat_ingredients}
      />
      <mesh
        geometry={nodes.pumpkin_065_mat_ingredients_0.geometry}
        material={materials.mat_ingredients}
      />
      <mesh
        geometry={nodes.pumpkin_061_mat_ingredients_0.geometry}
        material={materials.mat_ingredients}
      />
      <mesh
        geometry={nodes.pumpkin_058_mat_ingredients_0.geometry}
        material={materials.mat_ingredients}
      />
      <mesh
        geometry={nodes.pumpkin_057_mat_ingredients_0.geometry}
        material={materials.mat_ingredients}
      />
      <mesh
        geometry={nodes.pumpkin_053_mat_ingredients_0.geometry}
        material={materials.mat_ingredients}
      />
      <mesh
        geometry={nodes.pumpkin_052_mat_ingredients_0.geometry}
        material={materials.mat_ingredients}
      />
      <mesh
        geometry={nodes.pumpkin_051_mat_ingredients_0.geometry}
        material={materials.mat_ingredients}
      />
      <mesh
        geometry={nodes.pumpkin_050_mat_ingredients_0.geometry}
        material={materials.mat_ingredients}
      />
      <mesh
        geometry={nodes.pumpkin_049_mat_ingredients_0.geometry}
        material={materials.mat_ingredients}
      />
      <mesh
        geometry={nodes.pumpkin_048_mat_ingredients_0.geometry}
        material={materials.mat_ingredients}
      />
      <mesh
        geometry={nodes.pumpkin_047_mat_ingredients_0.geometry}
        material={materials.mat_ingredients}
      />
      <mesh
        geometry={nodes.pumpkin_046_mat_ingredients_0.geometry}
        material={materials.mat_ingredients}
      />
      <mesh
        geometry={nodes.pumpkin_045_mat_ingredients_0.geometry}
        material={materials.mat_ingredients}
      />
      <mesh
        geometry={nodes.pumpkin_044_mat_ingredients_0.geometry}
        material={materials.mat_ingredients}
      />
      <mesh
        geometry={nodes.pumpkin_043_mat_ingredients_0.geometry}
        material={materials.mat_ingredients}
      />
      <mesh
        geometry={nodes.pumpkin_042_mat_ingredients_0.geometry}
        material={materials.mat_ingredients}
      />
      <mesh
        geometry={nodes.pumpkin_041_mat_ingredients_0.geometry}
        material={materials.mat_ingredients}
      />
      <mesh
        geometry={nodes.pumpkin_040_mat_ingredients_0.geometry}
        material={materials.mat_ingredients}
      />
      <mesh
        geometry={nodes.pumpkin_039_mat_ingredients_0.geometry}
        material={materials.mat_ingredients}
      />
      <mesh
        geometry={nodes.pumpkin_038_mat_ingredients_0.geometry}
        material={materials.mat_ingredients}
      />
      <mesh
        geometry={nodes.pumpkin_037_mat_ingredients_0.geometry}
        material={materials.mat_ingredients}
      />
      <mesh
        geometry={nodes.pumpkin_036_mat_ingredients_0.geometry}
        material={materials.mat_ingredients}
      />
      <mesh
        geometry={nodes.tomato_slice_020_mat_ingredients_0.geometry}
        material={materials.mat_ingredients}
      />
      <mesh
        geometry={nodes.tomato_slice_019_mat_ingredients_0.geometry}
        material={materials.mat_ingredients}
      />
      <mesh
        geometry={nodes.tomato_slice_018_mat_ingredients_0.geometry}
        material={materials.mat_ingredients}
      />
      <mesh
        geometry={nodes.tomato_slice_017_mat_ingredients_0.geometry}
        material={materials.mat_ingredients}
      />
      <mesh
        geometry={nodes.tomato_slice_016_mat_ingredients_0.geometry}
        material={materials.mat_ingredients}
      />
      <mesh
        geometry={nodes.tomato_slice_015_mat_ingredients_0.geometry}
        material={materials.mat_ingredients}
      />
      <mesh
        geometry={nodes.tomato_slice_014_mat_ingredients_0.geometry}
        material={materials.mat_ingredients}
      />
      <mesh
        geometry={nodes.tomato_slice_013_mat_ingredients_0.geometry}
        material={materials.mat_ingredients}
      />
      <mesh
        geometry={nodes.tomato_slice_012_mat_ingredients_0.geometry}
        material={materials.mat_ingredients}
      />
      <mesh
        geometry={nodes.tomato_slice_011_mat_ingredients_0.geometry}
        material={materials.mat_ingredients}
      />
      <mesh
        geometry={nodes.tomato_slice_010_mat_ingredients_0.geometry}
        material={materials.mat_ingredients}
      />
      <mesh
        geometry={nodes.tomato_slice_09_mat_ingredients_0.geometry}
        material={materials.mat_ingredients}
      />
      <mesh
        geometry={nodes.tomato_slice_08_mat_ingredients_0.geometry}
        material={materials.mat_ingredients}
      />
      <mesh
        geometry={nodes.tomato_slice_07_mat_ingredients_0.geometry}
        material={materials.mat_ingredients}
      />
      <mesh
        geometry={nodes.tomato_slice_06_mat_ingredients_0.geometry}
        material={materials.mat_ingredients}
      />
      <mesh
        geometry={nodes.tomato_slice_05_mat_ingredients_0.geometry}
        material={materials.mat_ingredients}
      />
      <mesh
        geometry={nodes.tomato_slice_04_mat_ingredients_0.geometry}
        material={materials.mat_ingredients}
      />
      <mesh
        geometry={nodes.tomato_slice_03_mat_ingredients_0.geometry}
        material={materials.mat_ingredients}
      />
      <mesh
        geometry={nodes.tomato_slice_01_mat_ingredients_0.geometry}
        material={materials.mat_ingredients}
      />
      <mesh
        geometry={nodes.tomato_slice_00_mat_ingredients_0.geometry}
        material={materials.mat_ingredients}
      />
      <mesh
        geometry={nodes.pea_042_mat_ingredients_0.geometry}
        material={materials.mat_ingredients}
      />
      <mesh
        geometry={nodes.pea_031_mat_ingredients_0.geometry}
        material={materials.mat_ingredients}
      />
      <mesh
        geometry={nodes.pea_030_mat_ingredients_0.geometry}
        material={materials.mat_ingredients}
      />
      <mesh
        geometry={nodes.pea_029_mat_ingredients_0.geometry}
        material={materials.mat_ingredients}
      />
      <mesh
        geometry={nodes.pea_028_mat_ingredients_0.geometry}
        material={materials.mat_ingredients}
      />
      <mesh
        geometry={nodes.pea_027_mat_ingredients_0.geometry}
        material={materials.mat_ingredients}
      />
      <mesh
        geometry={nodes.pea_026_mat_ingredients_0.geometry}
        material={materials.mat_ingredients}
      />
      <mesh
        geometry={nodes.pea_025_mat_ingredients_0.geometry}
        material={materials.mat_ingredients}
      />
      <mesh
        geometry={nodes.pea_024_mat_ingredients_0.geometry}
        material={materials.mat_ingredients}
      />
      <mesh
        geometry={nodes.pea_023_mat_ingredients_0.geometry}
        material={materials.mat_ingredients}
      />
      <mesh
        geometry={nodes.pea_022_mat_ingredients_0.geometry}
        material={materials.mat_ingredients}
      />
      <mesh
        geometry={nodes.pea_021_mat_ingredients_0.geometry}
        material={materials.mat_ingredients}
      />
      <mesh
        geometry={nodes.pea_020_mat_ingredients_0.geometry}
        material={materials.mat_ingredients}
      />
      <mesh
        geometry={nodes.pea_019_mat_ingredients_0.geometry}
        material={materials.mat_ingredients}
      />
      <mesh
        geometry={nodes.pea_018_mat_ingredients_0.geometry}
        material={materials.mat_ingredients}
      />
      <mesh
        geometry={nodes.pea_017_mat_ingredients_0.geometry}
        material={materials.mat_ingredients}
      />
      <mesh
        geometry={nodes.pea_016_mat_ingredients_0.geometry}
        material={materials.mat_ingredients}
      />
      <mesh
        geometry={nodes.pea_015_mat_ingredients_0.geometry}
        material={materials.mat_ingredients}
      />
      <mesh
        geometry={nodes.pea_014_mat_ingredients_0.geometry}
        material={materials.mat_ingredients}
      />
      <mesh
        geometry={nodes.pea_013_mat_ingredients_0.geometry}
        material={materials.mat_ingredients}
      />
      <mesh
        geometry={nodes.pea_012_mat_ingredients_0.geometry}
        material={materials.mat_ingredients}
      />
      <mesh
        geometry={nodes.pea_011_mat_ingredients_0.geometry}
        material={materials.mat_ingredients}
      />
      <mesh
        geometry={nodes.pea_010_mat_ingredients_0.geometry}
        material={materials.mat_ingredients}
      />
      <mesh
        geometry={nodes.pea_09_mat_ingredients_0.geometry}
        material={materials.mat_ingredients}
      />
      <mesh
        geometry={nodes.pea_08_mat_ingredients_0.geometry}
        material={materials.mat_ingredients}
      />
      <mesh
        geometry={nodes.pea_07_mat_ingredients_0.geometry}
        material={materials.mat_ingredients}
      />
      <mesh
        geometry={nodes.pea_06_mat_ingredients_0.geometry}
        material={materials.mat_ingredients}
      />
      <mesh
        geometry={nodes.pea_05_mat_ingredients_0.geometry}
        material={materials.mat_ingredients}
      />
      <mesh
        geometry={nodes.pea_04_mat_ingredients_0.geometry}
        material={materials.mat_ingredients}
      />
      <mesh
        geometry={nodes.pea_03_mat_ingredients_0.geometry}
        material={materials.mat_ingredients}
      />
      <mesh
        geometry={nodes.pea_02_mat_ingredients_0.geometry}
        material={materials.mat_ingredients}
      />
      <mesh
        geometry={nodes.pea_01_mat_ingredients_0.geometry}
        material={materials.mat_ingredients}
      />
      <mesh
        geometry={nodes.pea_00_mat_ingredients_0.geometry}
        material={materials.mat_ingredients}
      />
      <mesh
        geometry={nodes.cup_01_mat_bowl_0.geometry}
        material={materials.mat_bowl}
      />
      <mesh
        geometry={nodes.cup_01_liquid_mat_bowl_0.geometry}
        material={materials.mat_bowl}
      />
      <mesh
        geometry={nodes.cup_00_mat_bowl_0.geometry}
        material={materials.mat_bowl}
      />
      <mesh
        geometry={nodes.cup_00_liquid_mat_bowl_0.geometry}
        material={materials.mat_bowl}
      />
      <mesh
        geometry={nodes.bowl_mat_bowl_0.geometry}
        material={materials.mat_bowl}
      />
      <mesh
        geometry={nodes.bowl_liquid_mat_bowl_0.geometry}
        material={materials.mat_bowl}
      />
      <mesh
        geometry={nodes.noodle_mat_ingredients_0.geometry}
        material={materials.mat_ingredients}
      />
      <mesh
        geometry={nodes.naruto_mat_ingredients_0.geometry}
        material={materials.mat_ingredients}
      />
      <mesh
        geometry={nodes.egg_02_mat_ingredients_0.geometry}
        material={materials.mat_ingredients}
      />
      <mesh
        geometry={nodes.egg_01_mat_ingredients_0.geometry}
        material={materials.mat_ingredients}
      />
      <mesh
        geometry={nodes.chicken_cube_010_mat_ingredients_0.geometry}
        material={materials.mat_ingredients}
      />
      <mesh
        geometry={nodes.chicken_cube_06_mat_ingredients_0.geometry}
        material={materials.mat_ingredients}
      />
      <mesh
        geometry={nodes.chicken_cube_02_mat_ingredients_0.geometry}
        material={materials.mat_ingredients}
      />
      <mesh
        geometry={nodes.chicken_cube_01_mat_ingredients_0.geometry}
        material={materials.mat_ingredients}
      />
      <mesh
        geometry={nodes.chicken_cube_00_mat_ingredients_0.geometry}
        material={materials.mat_ingredients}
      />
      <mesh
        geometry={nodes.chicken_cube_05_mat_ingredients_0.geometry}
        material={materials.mat_ingredients}
      />
      <mesh
        geometry={nodes.chicken_cube_04_mat_ingredients_0.geometry}
        material={materials.mat_ingredients}
      />
      <mesh
        geometry={nodes.chicken_cube_09_mat_ingredients_0.geometry}
        material={materials.mat_ingredients}
      />
      <mesh
        geometry={nodes.chicken_cube_08_mat_ingredients_0.geometry}
        material={materials.mat_ingredients}
      />
      <mesh
        geometry={nodes.chicken_cube_07_mat_ingredients_0.geometry}
        material={materials.mat_ingredients}
      />
      <mesh
        geometry={nodes.chicken_cube_03_mat_ingredients_0.geometry}
        material={materials.mat_ingredients}
      />
      <mesh
        geometry={nodes.pCylinder46_mat_ingredients_0.geometry}
        material={materials.mat_ingredients}
      />
      <mesh
        geometry={nodes.pCylinder45_mat_ingredients_0.geometry}
        material={materials.mat_ingredients}
      />
      <mesh
        geometry={nodes.pCylinder44_mat_ingredients_0.geometry}
        material={materials.mat_ingredients}
      />
      <mesh
        geometry={nodes.pCylinder43_mat_ingredients_0.geometry}
        material={materials.mat_ingredients}
      />
      <mesh
        geometry={nodes.pCylinder42_mat_ingredients_0.geometry}
        material={materials.mat_ingredients}
      />
      <mesh
        geometry={nodes.pCylinder41_mat_ingredients_0.geometry}
        material={materials.mat_ingredients}
      />
      <mesh
        geometry={nodes.pCylinder40_mat_ingredients_0.geometry}
        material={materials.mat_ingredients}
      />
      <mesh
        geometry={nodes.pCylinder39_mat_ingredients_0.geometry}
        material={materials.mat_ingredients}
      />
      <mesh
        geometry={nodes.pCylinder38_mat_ingredients_0.geometry}
        material={materials.mat_ingredients}
      />
      <mesh
        geometry={nodes.pCylinder37_mat_ingredients_0.geometry}
        material={materials.mat_ingredients}
      />
      <mesh
        geometry={nodes.pCylinder36_mat_ingredients_0.geometry}
        material={materials.mat_ingredients}
      />
      <mesh
        geometry={nodes.pCylinder35_mat_ingredients_0.geometry}
        material={materials.mat_ingredients}
      />
      <mesh
        geometry={nodes.pCylinder34_mat_ingredients_0.geometry}
        material={materials.mat_ingredients}
      />
      <mesh
        geometry={nodes.pCylinder33_mat_ingredients_0.geometry}
        material={materials.mat_ingredients}
      />
      <mesh
        geometry={nodes.pCylinder32_mat_ingredients_0.geometry}
        material={materials.mat_ingredients}
      />
      <mesh
        geometry={nodes.pCylinder31_mat_ingredients_0.geometry}
        material={materials.mat_ingredients}
      />
      <mesh
        geometry={nodes.pCylinder30_mat_ingredients_0.geometry}
        material={materials.mat_ingredients}
      />
      <mesh
        geometry={nodes.pCylinder29_mat_ingredients_0.geometry}
        material={materials.mat_ingredients}
      />
      <mesh
        geometry={nodes.pCylinder28_mat_ingredients_0.geometry}
        material={materials.mat_ingredients}
      />
      <mesh
        geometry={nodes.pCylinder27_mat_ingredients_0.geometry}
        material={materials.mat_ingredients}
      />
      <mesh
        geometry={nodes.pCylinder20_mat_ingredients_0.geometry}
        material={materials.mat_ingredients}
      />
      <mesh
        geometry={nodes.pCylinder19_mat_ingredients_0.geometry}
        material={materials.mat_ingredients}
      />
      <mesh
        geometry={nodes.pCylinder18_mat_ingredients_0.geometry}
        material={materials.mat_ingredients}
      />
      <mesh
        geometry={nodes.pCylinder17_mat_ingredients_0.geometry}
        material={materials.mat_ingredients}
      />
      <mesh
        geometry={nodes.pCylinder16_mat_ingredients_0.geometry}
        material={materials.mat_ingredients}
      />
      <mesh
        geometry={nodes.pCylinder15_mat_ingredients_0.geometry}
        material={materials.mat_ingredients}
      />
      <mesh
        geometry={nodes.pCylinder14_mat_ingredients_0.geometry}
        material={materials.mat_ingredients}
      />
      <mesh
        geometry={nodes.pCylinder13_mat_ingredients_0.geometry}
        material={materials.mat_ingredients}
      />
      <mesh
        geometry={nodes.pCylinder12_mat_ingredients_0.geometry}
        material={materials.mat_ingredients}
      />
      <mesh
        geometry={nodes.pCylinder11_mat_ingredients_0.geometry}
        material={materials.mat_ingredients}
      />
      <mesh
        geometry={nodes.pCylinder10_mat_ingredients_0.geometry}
        material={materials.mat_ingredients}
      />
      <mesh
        geometry={nodes.pCylinder9_mat_ingredients_0.geometry}
        material={materials.mat_ingredients}
      />
      <mesh
        geometry={nodes.pCylinder8_mat_ingredients_0.geometry}
        material={materials.mat_ingredients}
      />
      <mesh
        geometry={nodes.pCylinder7_mat_ingredients_0.geometry}
        material={materials.mat_ingredients}
      />
      <mesh
        geometry={nodes.pCylinder25_mat_ingredients_0.geometry}
        material={materials.mat_ingredients}
      />
      <mesh
        geometry={nodes.pCylinder24_mat_ingredients_0.geometry}
        material={materials.mat_ingredients}
      />
      <mesh
        geometry={nodes.pCylinder23_mat_ingredients_0.geometry}
        material={materials.mat_ingredients}
      />
      <mesh
        geometry={nodes.pCylinder21_mat_ingredients_0.geometry}
        material={materials.mat_ingredients}
      />
      <mesh
        geometry={nodes.pCylinder22_mat_ingredients_0.geometry}
        material={materials.mat_ingredients}
      />
      <mesh
        geometry={nodes.pCylinder26_mat_ingredients_0.geometry}
        material={materials.mat_ingredients}
      />
      <mesh
        geometry={nodes.greanLeaf_00_mat_ingredients_0.geometry}
        material={materials.mat_ingredients}
      />
      <mesh
        geometry={nodes.greanLeaf_01_mat_ingredients_0.geometry}
        material={materials.mat_ingredients}
      />
      <mesh
        geometry={nodes.greanLeaf_02_mat_ingredients_0.geometry}
        material={materials.mat_ingredients}
      />
      <mesh
        geometry={nodes.meat_00_mat_ingredients_0.geometry}
        material={materials.mat_ingredients}
      />
      <mesh
        geometry={nodes.meat_01_mat_ingredients_0.geometry}
        material={materials.mat_ingredients}
      />
      <mesh
        geometry={nodes.meat_02_mat_ingredients_0.geometry}
        material={materials.mat_ingredients}
      />
      <mesh
        geometry={nodes.meat_03_mat_ingredients_0.geometry}
        material={materials.mat_ingredients}
      />
      <mesh
        geometry={nodes.meat_04_mat_ingredients_0.geometry}
        material={materials.mat_ingredients}
      />
    </group>
  );
}

useGLTF.preload("./models/udon_meal.glb");
