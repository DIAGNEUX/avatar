import { OrbitControls } from "@react-three/drei";
import { Avatar } from "./avatar";

export const Experience = () => {
  return (
    <>
      <OrbitControls />
      <Avatar />
      <mesh>
        <meshNormalMaterial />
        <boxBufferGeometry />
      </mesh>
    </>
  );
};
