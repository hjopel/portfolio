import { Canvas, useFrame } from "@react-three/fiber";
import React, { useRef, useState } from "react";
import { Container } from "@chakra-ui/react";
const Background = () => {
  return (
    <>
      <Container w="full" h="full">
        <Canvas>
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          <AnimatedObject position={[-1.2, 0, 0]} />
          <AnimatedObject position={[1.2, 0, 0]} />
        </Canvas>
      </Container>
    </>
  );
};

const AnimatedObject = (props: any) => {
  const mesh = useRef<THREE.Mesh>(null!);
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);
  useFrame(({ mouse, clock }) => {
    mesh.current.rotation.x += 0.01;
    mesh.current.rotation.y += 0.02;
    mesh.current.position.y = Math.sin(clock.getElapsedTime() * 2);
    mesh.current.position.x = Math.sin(clock.getElapsedTime()) * 19;
    // mesh.current.position.z = Math.cos(clock.getElapsedTime()) * 0.01;
  });
  return (
    <mesh
      {...props}
      ref={mesh}
      scale={active ? 1.5 : 1}
      onClick={(event) => setActive(!active)}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? "hotpink" : "orange"} />
    </mesh>
  );
};
export default Background;
