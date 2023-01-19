import { useFrame } from "@react-three/fiber";
import React, { Fragment, useRef, useState } from "react";
import { DirectionalLight, Mesh } from "three";
import { Points, PointMaterial, Html } from "@react-three/drei";
import { random } from "maath";
import { motion } from "framer-motion";
import { Popover, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navigation = [
  { name: "About us", href: "#" },
  { name: "Services", href: "#" },
  { name: "Testimonials", href: "#" },
  { name: "Contact us", href: "#" },
];
export default function Stars(props: any) {
  const ref = useRef<Mesh>(null);
  const [sphere] = useState(() =>
    random.inSphere(new Float32Array(5000), { radius: 1.5 })
  );
  useFrame((state, delta) => {
    if (!ref.current) {
      return;
    }
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });
  return (
    <>
      <group rotation={[0, 0, Math.PI / 4]}>
        <Points
          ref={ref}
          positions={sphere}
          stride={3}
          frustumCulled={false}
          {...props}
        >
          <PointMaterial
            transparent
            color="white"
            size={0.004}
            sizeAttenuation={true}
            depthWrite={false}
          />
        </Points>
      </group>
    </>
  );
}

{
  /* <div className="grid grid-cols-1 justify-items-center place-items-center">
<h1 className="absolute w-max h-max tracking-tighter font-medium text-8xl text-slate-600">
  hello, world
</h1>
</div> */
}
