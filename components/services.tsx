import { ArrowPathIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import { MdOutlineFlight } from "react-icons/md";
import { BiHotel } from "react-icons/bi";

import { IoTrainOutline } from "react-icons/io5";
import { GiReceiveMoney } from "react-icons/gi";

const features = [
  {
    name: "Flights",
    description:
      "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
    icon: MdOutlineFlight,
  },
  {
    name: "Hotels",
    description:
      "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
    icon: BiHotel,
  },
  {
    name: "Changes & cancellations",
    description:
      "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
    icon: ArrowPathIcon,
  },
  {
    name: "Transportation",
    description:
      "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
    icon: IoTrainOutline,
  },
  {
    name: "Compensation",
    description:
      "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
    icon: GiReceiveMoney,
  },
  // {
  //   name: "Meet & Assist",
  //   description:
  //     "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
  //   icon: GiReceiveMoney,
  // },
];

export default function Services() {
  const testSecionVariant = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.4, when: "beforeChildren" },
    },
  };
  const serSecionVariant = {
    hidden: {
      opacity: 0,
    },
    visible: { opacity: 1, transition: { duration: 1 } },
  };
  return (
    <div className="relative bg-white py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
        {/* <h2 className="text-lg font-semibold text-cyan-600">Deploy faster</h2> */}
        <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Everything you need to deploy your app
        </p>
        <p className="mx-auto mt-5 max-w-prose text-xl text-gray-500">
        Let us handle the details, from start to finish, to make your trip an unforgettable and effortless experience.
        </p>
        <div className="mt-12">
          <motion.div
            variants={testSecionVariant}
            initial="hidden"
            whileInView="visible"
          >
            <div className="wrapper grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-6">
              {features.map((feature) => (
                <motion.div variants={serSecionVariant} className="card">
                  <div key={feature.name} className="card pt-6">
                    <motion.div
                      whileHover={{
                        scale: 1.1,
                        transition: { duration: 0.3 },
                        // backgroundColor: "hotpink",
                      }}
                      drag
                      dragSnapToOrigin
                      className="flow-root rounded-lg bg-gray-50 px-6 pb-8"
                    >
                      <div className="-mt-6">
                        <div>
                          <span className="inline-flex items-center justify-center rounded-md bg-gradient-to-r bg-[#2a58a8] p-3 shadow-lg">
                            <feature.icon
                              className="h-6 w-6 text-white"
                              aria-hidden="true"
                            />
                          </span>
                        </div>
                        <h3 className="mt-8 text-lg font-medium tracking-tight text-gray-900">
                          {feature.name}
                        </h3>
                        <p className="mt-5 text-base text-gray-500">
                          {feature.description}
                        </p>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
