import React from "react";
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import { Canvas, extend } from "@react-three/fiber";
import Sphere from "./stars";
import { Float, Html, OrbitControls } from "@react-three/drei";
import Stars from "./stars";
import AirPlane from "../components/Plane";
import { useControls } from "leva";
import { PerspectiveCamera } from "three";

const navigation = [
  { name: "About us", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Contact us", href: "#contact us" },
];
function CameraHelper() {
  const camera = new PerspectiveCamera(60, 1, 1, 3);
  return (
    <group position={[0, 0, 2]}>
      <cameraHelper args={[camera]} />
    </group>
  );
}
const HeroSection = () => {
  return (
    <Html fullscreen>
      <div
        // className="sm:pt-5 lg:overflow-hidden lg:pt-5 lg:pb-14"
        // style={{
        //   backgroundImage: `url("test.png")`,
        //   backgroundPosition: "center",
        //   backgroundSize: "cover",
        //   backgroundRepeat: "no-repeat",
        // }}
      >
        <Popover as="header" className="relative">
          <div className="pt-1">
            <nav
              className="relative mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:py-0 sm:px-6"
              aria-label="Global"
            >
              <div className="flex flex-1 justify-between items-center">
                <div className="flex w-full items-center justify-between md:w-auto">
                  <a href="#">
                    <span className="sr-only">Your Company</span>
                    <img
                      className="h-8 w-auto sm:h-10"
                      src="mark-2.png"
                      alt=""
                    />
                  </a>
                  <div className="-mr-2 flex items-center md:hidden">
                    <Popover.Button className="focus-ring-inset inline-flex items-center justify-center rounded-md bg-gray-900 p-2 text-gray-400 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-white">
                      <span className="sr-only">Open main menu</span>
                      <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
                <div className="hidden space-x-8 md:ml-10 md:flex">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="text-base font-medium text-white hover:text-gray-300"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </nav>
          </div>

          <Transition
            as={Fragment}
            enter="duration-150 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-100 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Popover.Panel
              focus
              className="absolute inset-x-0 top-0 origin-top transform p-2 transition md:hidden"
            >
              <div className="overflow-hidden rounded-lg bg-white shadow-md ring-1 ring-black ring-opacity-5">
                <div className="flex items-center justify-between px-5 pt-4">
                  <div>
                    <img
                      className="h-8 w-auto"
                      src="https://tailwindui.com/img/logos/mark.svg?from-color=teal&from-shade=500&to-color=cyan&to-shade=600&toShade=600"
                      alt=""
                    />
                  </div>
                  <div className="-mr-2">
                    <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-600">
                      <span className="sr-only">Close menu</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
                <div className="pt-5 pb-6">
                  <div className="space-y-1 px-2">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-50"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                  <div className="mt-6 px-5">
                    <a
                      href="#"
                      className="block w-full rounded-md bg-gradient-to-r from-teal-500 to-cyan-600 py-3 px-4 text-center font-medium text-white shadow hover:from-teal-600 hover:to-cyan-700"
                    >
                      Start free trial
                    </a>
                  </div>
                  <div className="mt-6 px-5">
                    <p className="text-center text-base font-medium text-gray-500">
                      Existing customer?{" "}
                      <a href="#" className="text-gray-900 hover:underline">
                        Login
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </Popover>
        <div className="h-screen flex items-center text-center pt-10 sm:pt-16 lg:overflow-hidden lg:pt-8 lg:pb-14">
          <div className="mx-auto max-w-7xl lg:px-8">
            {/* <div className="lg:grid lg:grid-cols-2 lg:gap-8"> */}
            <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 text-center items-center lg:items-center lg:px-0 lg:text-center">
              <div className="lg:py-24">
                <h1 className="mt-4 text-4xl font-bold tracking-tight text-white  lg:mt-6 xl:text-6xl">
                  <span className="block">A hassle-free </span>
                  <span className="block bg-gradient-to-r from-teal-200 to-cyan-400 bg-clip-text pb-3 text-transparent sm:pb-5">
                  travel experience
                  </span>
                </h1>
                <p className="text-base text-gray-300 sm:text-xl lg:text-lg xl:text-xl">
                Enjoy the journey and let us handle the details!
                </p>
                <div className="relative mx-auto mt-10 max-w-sm flex sm:max-w-none  justify-center">
                  <a
                    href="https://m.me/helloworldeg/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="flex items-center justify-center rounded-md border border-transparent bg-[#1EE09A] px-4 py-3 sm:justify-center text-base font-medium text-white shadow-sm hover:bg-[#1EE09A] sm:px-8"
                    >
                      Get started
                    </motion.button>
                  </a>
                </div>
              </div>
            </div>
            {/* </div> */}
          </div>
        </div>
      </div>
      </Html>
    // <Html className="pt-4" fullscreen>
    //   <Popover as="header" className="relative">
    //     <div className="pt-1">
    //       <nav
    //         className="relative mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6"
    //         aria-label="Global"
    //       >
    //         <div className="flex flex-1 justify-between items-center">
    //           <div className="flex w-full items-center justify-between md:w-auto">
    //             <a href="#">
    //               <span className="sr-only">Your Company</span>
    //               <img className="h-8 w-auto sm:h-10" src="mark-2.png" alt="" />
    //             </a>
    //             <div className="-mr-2 flex items-center md:hidden">
    //               <Popover.Button className="focus-ring-inset inline-flex items-center justify-center rounded-md bg-gray-900 p-2 text-gray-400 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-white">
    //                 <span className="sr-only">Open main menu</span>
    //                 <Bars3Icon className="h-6 w-6" aria-hidden="true" />
    //               </Popover.Button>
    //             </div>
    //           </div>
    //           <div className="hidden space-x-8 md:ml-10 md:flex">
    //             {navigation.map((item) => (
    //               <a
    //                 key={item.name}
    //                 href={item.href}
    //                 className="text-base font-medium text-white hover:text-gray-300"
    //               >
    //                 {item.name}
    //               </a>
    //             ))}
    //           </div>
    //         </div>
    //       </nav>
    //     </div>

    //     <Transition
    //       as={Fragment}
    //       enter="duration-150 ease-out"
    //       enterFrom="opacity-0 scale-95"
    //       enterTo="opacity-100 scale-100"
    //       leave="duration-100 ease-in"
    //       leaveFrom="opacity-100 scale-100"
    //       leaveTo="opacity-0 scale-95"
    //     >
    //       <Popover.Panel
    //         focus
    //         className="absolute inset-x-0 top-0 origin-top transform p-2 transition md:hidden"
    //       >
    //         <div className="overflow-hidden rounded-lg bg-white shadow-md ring-1 ring-black ring-opacity-5">
    //           <div className="flex items-center justify-between px-5 pt-4">
    //             <div>
    //               <img
    //                 className="h-8 w-auto"
    //                 src="https://tailwindui.com/img/logos/mark.svg?from-color=teal&from-shade=500&to-color=cyan&to-shade=600&toShade=600"
    //                 alt=""
    //               />
    //             </div>
    //             <div className="-mr-2">
    //               <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-600">
    //                 <span className="sr-only">Close menu</span>
    //                 <XMarkIcon className="h-6 w-6" aria-hidden="true" />
    //               </Popover.Button>
    //             </div>
    //           </div>
    //           <div className="pt-5 pb-6">
    //             <div className="space-y-1 px-2">
    //               {navigation.map((item) => (
    //                 <a
    //                   key={item.name}
    //                   href={item.href}
    //                   className="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-50"
    //                 >
    //                   {item.name}
    //                 </a>
    //               ))}
    //             </div>
    //             <div className="mt-6 px-5">
    //               <a
    //                 href="#"
    //                 className="block w-full rounded-md bg-gradient-to-r from-teal-500 to-cyan-600 py-3 px-4 text-center font-medium text-white shadow hover:from-teal-600 hover:to-cyan-700"
    //               >
    //                 Start free trial
    //               </a>
    //             </div>
    //             <div className="mt-6 px-5">
    //               <p className="text-center text-base font-medium text-gray-500">
    //                 Existing customer?{" "}
    //                 <a href="#" className="text-gray-900 hover:underline">
    //                   Login
    //                 </a>
    //               </p>
    //             </div>
    //           </div>
    //         </div>
    //       </Popover.Panel>
    //     </Transition>
    //   </Popover>
    //   <div className=" pt-10 sm:pt-16 lg:overflow-hidden lg:pt-8 lg:pb-14">
    //     <div className="mx-auto max-w-7xl lg:px-8">
    //       <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:flex lg:items-center lg:px-0 lg:text-center">
    //         <div className="lg:py-24">
    //           <h1 className="mt-4 text-4xl font-bold tracking-tight text-white  lg:mt-6 xl:text-6xl">
    //             <span className="block">A better way to</span>
    //             <span className="block bg-gradient-to-r from-[#c850c0] to-[#ffcc70] bg-clip-text pb-3 text-transparent sm:pb-5">
    //               ship web apps
    //             </span>
    //           </h1>
    //           <p className="text-base text-gray-300 sm:text-xl lg:text-lg xl:text-xl">
    //             Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
    //             Lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
    //             fugiat.
    //           </p>
    //           <div className="relative mx-auto mt-10 max-w-sm sm:flex sm:max-w-none  sm:justify-center">
    //             <a
    //               href="https://m.me/helloworldeg/"
    //               target="_blank"
    //               rel="noreferrer"
    //             >
    //               <motion.button
    //                 whileHover={{ scale: 1.1 }}
    //                 whileTap={{ scale: 0.9 }}
    //                 className="flex items-center justify-center rounded-md border border-transparent bg-[#1EE09A] px-4 py-3 sm:justify-center text-base font-medium text-white shadow-sm hover:bg-[#1EE09A] sm:px-8"
    //               >
    //                 Get started
    //               </motion.button>
    //             </a>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </Html>
  );
};

export default HeroSection;
