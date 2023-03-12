import React from "react";
import { motion } from "framer-motion";

const About = () => {
  const cardVariants = {
    offscreen: {
      x: -50,
      opacity: 0,
    },
    onscreen: {
      x: 50,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 4,
      },
    },
  };
  const cardVariantsSmP1 = {
    offscreen: {
      x: -10,
      opacity: 0,
    },
    onscreen: {
      x: 8,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 4,
      },
    },
  };
  const cardVariantsSmP2 = {
    offscreen: {
      y: -10,
      opacity: 0,
    },
    onscreen: {
      y: 10,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 4,
      },
    },
  };
  const cardVariantsSmT1 = {
    offscreen: {
      x: 10,
      opacity: 0,
    },
    onscreen: {
      x: -8,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 4,
      },
    },
  };
  const cardVariantsSmT2 = {
    offscreen: {
      y: -10,
      opacity: 0,
    },
    onscreen: {
      y: 10,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 4,
      },
    },
  };
  const cardVariants2 = {
    offscreen: {
      x: 50,
      opacity: 0,
    },
    onscreen: {
      x: -50,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 4,
      },
    },
  };
  const titleVariant = {
    offscreen: {
      opacity: 0,
      y: 10,
    },
    onscreen: {
      y: -10,
      opacity: 2,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 4,
      },
    },
  };

  return (
    <div className="h-screen bg-black  ">
      <div className="pt-6 h-full sm:hidden ">
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true }}
          className="mt-[20%]"
        >
          <motion.h1
            className="text-4xl font-custom text-slate-100 flex justify-center"
            variants={titleVariant}
          >
            About me :)
          </motion.h1>
        </motion.div>
        <div className="flex flex-col">
          <motion.div
            className="flex items-center pb-6 h-1/4"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true }}
          >
            <motion.div
              className="basis-1/3 pl-6 mr-6"
              variants={cardVariantsSmP1}
            >
              <img
                className="h-full w-full"
                src="./my-photo.jpg"
                alt="my photo"
              />
            </motion.div>
            <motion.div className="basis-2/3" variants={cardVariantsSmT1}>
              <span className="font-custom text-lg font-medium text-white">
                I live in Argentina and i started my study on{" "}
                <a href="https://www.soyhenry.com/">Henry</a> in March 2022
                <br />
                After that I did a few projects. I worked on E-commerces,
                Newspapers, and other things.
                <br />
                I'm a curious person, who wants challenges and learn news
                tecnologies.
                <br />
              </span>
            </motion.div>
          </motion.div>
          <motion.div
            className="h-1/2 flex flex-col"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true }}
          >
            <motion.div className="h-1/3 " variants={cardVariantsSmT2}>
              <span className="font-custom text-lg font-medium text-white">
                I'm dedicated on my work, and responsable with everything i have
                to do. I like organization and team work.
                <br />
                With my proactivity i face any adversity and start any challenge
                that could make me grow.
              </span>
            </motion.div>
            <motion.div
              className="h-1/4 w-2/5 ml-[30%] mt-[8%]"
              variants={cardVariantsSmP2}
            >
              <img
                className="  rounded-full h-full"
                src="./Resiliencia.jpg"
                alt="resilience"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
      <div className="h-full hidden sm:grid">
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true }}
        >
          <motion.h1
            className="text-4xl font-custom text-slate-100 flex justify-center pt-5 lg:pt-5 "
            variants={titleVariant}
          >
            About me :)
          </motion.h1>
        </motion.div>
        <div className="sm:grid grid-cols-2   content-center h-full hidden">
          <motion.div
            className="pl-6  lg:mt-10"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true }}
          >
            <motion.div
              className=" h-[50%] w-[50%] md: lg:ml-20"
              variants={cardVariants}
            >
              <img
                src="./my-photo.jpg"
                alt="My photo"
                className="h-full w-full rounded-lg"
              />
            </motion.div>
            <motion.div className="pt-10" variants={cardVariants}>
              <span className="font-custom text-xl font-medium text-white">
                I'm dedicated on my work, and responsable with everything i have
                to do. I like organization and team work.
                <br />
                With my proactivity i face any adversity and start any challenge
                that could make me grow.
              </span>
            </motion.div>
          </motion.div>
          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true }}
            className="mt-20"
          >
            <motion.div variants={cardVariants2}>
              <span className="font-custom text-xl font-medium text-white">
                I live in Argentina and i started my study on{" "}
                <a href="https://www.soyhenry.com/">Henry</a> in March 2022
                <br />
                After that I did a few projects. I worked on E-commerces,
                Newspapers, and other things.
                <br />
                I'm a curious person, who wants challenges and learn news
                tecnologies.
                <br />
              </span>
            </motion.div>
            <motion.div
              variants={cardVariants2}
              className=" h-[50%] w-[50%] pt-14 ml-24 "
            >
              <img
                src="./Resiliencia.jpg"
                alt="Photo rock"
                className="h-full w-full rounded-full"
              />
            </motion.div>
          </motion.div>
      </div>
      </div>
    </div>
  );
};

export default About;
