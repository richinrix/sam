import React, { useState } from "react";
// import gsap from "gsap";
import { motion } from "framer-motion";
import { BsChevronRight as Right, BsChevronLeft as Left } from "react-icons/bs";
import { FiChevronRight } from "react-icons/fi";
import WorkVideo from "./WorkVideo";
// import { useGesture } from "react-use-gesture";
// import { useSpring } from "@react-spring/web";

// const calcX = (y, ly) => -(y - ly - window.innerHeight / 2) / 20;
// const calcY = (x, lx) => (x - lx - window.innerWidth / 2) / 20;
// import { useVideoConfig } from "remotion";
// import { Gif } from "@remotion/gif";

const works = [
  {
    id: 1,
    title: "BillEasy",
    domain: "Research",
    description:
      "Creating an efficient accounting process for evolving businesses and enhanced work systems.",
    gif: false,
    image: "http://theme.dsngrid.com/droow-l/assets/img/project/project5/1.jpg",
    video:
      "https://res.cloudinary.com/genesiscloudimages/video/upload/v1660394170/work_gifs/C01_yqtldj.mp4",
    link: "/billeasy",
  },
  {
    id: 2,
    title: "BillEasy",
    domain: "Visual Design",
    description:
      "Creating an efficient accounting process for evolving businesses and enhanced work systems.",
    gif: false,
    image: "http://theme.dsngrid.com/droow-l/assets/img/project/project5/1.jpg",
    video:
      "https://res.cloudinary.com/genesiscloudimages/video/upload/v1660394170/work_gifs/C01_yqtldj.mp4",
    link: "/billeasy-visual-design",
  },
  {
    id: 3,
    title: "HappilyEver",
    domain: "Branding",
    description:
      "Designing brands to be more people Interactive : Adding value to future Brand Identities ",
    gif: true,
    image: "http://theme.dsngrid.com/droow-l/assets/img/project/project5/3.jpg",
    video:
      "https://res.cloudinary.com/genesiscloudimages/image/upload/v1660394155/work_gifs/render_s6dzdu.gif",
    link: "/",
  },

  {
    id: 4,
    title: "Smart Vision",
    domain: "Case Study",
    description:
      "Making smartphones simpler for users with impaired vision : A step towards an inclusive and consumer-centric approach",
    gif: true,
    image: "http://theme.dsngrid.com/droow-l/assets/img/project/project5/2.jpg",
    video:
      "https://res.cloudinary.com/genesiscloudimages/image/upload/v1660394155/work_gifs/Comp_1_tdwzlp.gif",
    link: "/",
  },
];
const LandingSection = ({ textEnter, textLeave, imageEnter, largeEnter }) => {
  const [activeWork, setActiveWork] = useState(works[0]);
  // useEffect(() => {
  //   const preventDefault = (e) => e.preventDefault();
  //   document.addEventListener("gesturestart", preventDefault);
  //   document.addEventListener("gesturechange", preventDefault);

  //   return () => {
  //     document.removeEventListener("gesturestart", preventDefault);
  //     document.removeEventListener("gesturechange", preventDefault);
  //   };
  // }, []);
  // const domTarget = useRef(null);
  // const [
  //   { x, y, rotateX, rotateY, rotateZ, zoom, scale, translateY, translateX },
  //   api,
  // ] = useSpring(() => ({
  //   rotateX: 0,
  //   rotateY: 0,
  //   rotateZ: 0,
  //   translateY: 0,
  //   translateX: 0,

  //   scale: 1,
  //   zoom: 0,
  //   x: 0,
  //   y: 0,
  //   config: { mass: 5, tension: 350, friction: 40 },
  // }));
  // useGesture(
  //   {
  //     onMove: ({ xy: [px, py], dragging }) => {
  //       console.log(calcX(py, y.get()));
  //       return (
  // //         !dragging &&
  //         api({
  //           translateX: calcX(px, y.get()),
  //           translateY: calcY(py, x.get()),
  //           // scale: 1,
  //         })
  //       );
  //     },
  //   },
  //   { domTarget, eventOptions: { passive: false } }
  // );

  const sideNav = () => (
    <div
      class="hidden md:flex flex-col absolute "
      style={{
        top: "30%",
        left: "0",
      }}
      onMouseEnter={imageEnter}
      onMouseLeave={imageEnter}
    >
      {works.map((work) => (
        <div
          onClick={() => setActiveWork(work)}
          style={{
            backgroundImage: `url(${work.image})`,
          }}
          class={`${
            work.id === activeWork.id
              ? "w-24"
              : activeWork.id + 1 === work.id || work.id + 1 === activeWork.id
              ? "w-10 brightness-50 hover:brightness-75"
              : "w-0 brightness-75"
          } cursor-pointer  hover:w-24 relative h-16 bg-cover bg-center bg-no-repeat my-2 transition-all duration-500 ease-in-out rounded-r-md`}
        >
          <div
            class={`${
              work.id !== activeWork.id && "opacity-0"
            } transition-all duration-500 text-lg absolute right-0 -top-4 work-side-nav-text font-bold tracking-wider`}
          >
            0{work.id}
          </div>
        </div>
      ))}
    </div>
  );
  const cards = () => (
    <div
      className="text-black relative  select-none   h-full overflow-hidden w-full    bg-cover bg-no-repeat bg-center   flex flex-col justify-center  top-0 left-0 px-5 md:px-32  "
      onMouseEnter={imageEnter}
      onMouseLeave={textLeave}
    >
      <div
        style={{
          zIndex: "1",
        }}
        // onMouseEnter={imageEnter}
        // onMouseLeave={textLeave}
      >
        <div class="w-full md:w-2/5">
          <div class="flex items-center my-5 ">
            <div class="w-32 bg-brand-gray h-0.5 mr-3" />
            <div
              // onMouseOver={() => setFlag((state) => !state)}
              // onMouseOut={() => setFlag((state) => !state)}
              class="text-brand-gray text-xl font-lato "
            >
              {activeWork.domain}
            </div>
          </div>
          <div
            className=" text-5xl md:text-7xl font-bold w-max font-lora text-white my-5 flex items-center"
            onMouseEnter={largeEnter}
            onMouseLeave={imageEnter}
          >
            {activeWork.title}
            {/* <motion.div>
              {activeWork.title.split("").map((letter, index) => (
                <motion.span
                  animate={flag ? `delay${index + 1}` : "default"}
                  variants={trailVariants}
                  key={index}
                  initial={{ opacity: 0, y: -50 }}
                >
                  {letter}
                </motion.span>
              ))}
            </motion.div> */}
          </div>
          <div class="text-base font-lato text-white my-10 pr-5 md:pr-0">
            {activeWork.description}
          </div>
          <a className="" href={activeWork.link}>
            <div
              href="/"
              // ref={domTarget}
              // style={{
              //   translateX: `${translateX.get()}px`,
              //   translateY: `${translateY.get()}px`,
              // }}
              class=" py-4 duration-100 transition-all  w-max  flex items-center my-3 rounded-l-full rounded-r-full text-white  max-w-max tracking-wider             "
            >
              <FiChevronRight class=" text-3xl p-1  mr-4   rounded-full text-white border-2 border-white " />
              <div
                class={` text-lg 
                   
                `}
                style={{
                  letterSpacing: "0.2em",
                }}
              >
                VIEW CASE
              </div>
            </div>
          </a>
        </div>
        {/* the no. with text stroke */}
        <div class="absolute bottom-10   md:bottom-2 right-2 md:right-10 flex flex-col items-center">
          <div class="  flex items-center  ">
            <Left
              onClick={() =>
                works.indexOf(activeWork) > 0 &&
                setActiveWork(works[works.indexOf(activeWork) - 1])
              }
              class={` ${
                activeWork.id == 1 && "opacity-0 cursor-auto "
              }  p-0 md:p-3  text-2xl md:text-5xl cursor-pointer mx-5  rounded-full text-white`}
            />
            <div class=" text-stroke-white mb-4">0{activeWork.id}</div>
            <Right
              onClick={() =>
                works.indexOf(activeWork) < works.length - 1 &&
                setActiveWork(works[works.indexOf(activeWork) + 1])
              }
              class={` ${
                activeWork.id == 4 && "opacity-0 cursor-auto "
              }  p-0 md:p-3  text-2xl md:text-5xl cursor-pointer mx-5  rounded-full text-white`}
            />
          </div>
        </div>
      </div>
      {/* bg image */}
      {/* {works.map((work) => (
        <div class="w-full h-full absolute    left-0 top-0 z-0">
          <div
            style={{
              backgroundImage: `url(${work.image})`,
            }}
            class={`${
              work.id < activeWork.id
                ? "-translate-x-full  bg-center md:bg-left"
                : work.id > activeWork.id
                ? " translate-x-[100%]  bg-center md:bg-right"
                : "bg-center scale-125 "
            }  w-full bg-cover bg-no-repeat ease-linear transition-all  duration-700 brightness-50 h-full `}
          />
        </div>
      ))} */}
      {/* bg gif */}
      <div class={`w-full object-cover h-full absolute     left-0 top-0 z-0`}>
        {works.map((work) =>
          work.gif ? (
            <img
              class={`${
                work.id < activeWork.id
                  ? "-translate-x-full  bg-center md:bg-left"
                  : work.id > activeWork.id
                  ? " translate-x-[100%]  bg-center md:bg-right"
                  : "bg-center scale-125 "
              }  w-full bg-cover bg-no-repeat ease-linear transition-all  duration-700 brightness-50 h-screen  object-cover  absolute
             w-100 md:w-screen  md:opacity-100 opacity-100 md:object-cover  bg-red-100  `}
              src={work.video}
              alt="loading..."
            />
          ) : (
            <video
              // className=""
              class={`${
                work.id < activeWork.id
                  ? "-translate-x-full  bg-center md:bg-left"
                  : work.id > activeWork.id
                  ? " translate-x-[100%]  bg-center md:bg-right"
                  : "bg-center scale-125 "
              }  w-full bg-cover bg-no-repeat ease-linear transition-all  duration-700 brightness-50 h-screen  object-cover  absolute
               w-100 md:w-screen  md:opacity-100 opacity-100 md:object-cover  bg-red-100  `}
              loop
              autoPlay={activeWork.id == work.id ? true : false}
              muted
              // onLoadedData={toggleLoading}
            >
              <source
                // Changing source of video depending on size of the screen
                src={work.video}
                type="video/mp4"
              />
            </video>
            // <WorkVideo work={work.video} activeWork={activeWork} />
          )
        )}
      </div>
    </div>
  );

  return (
    <div
      id="work"
      className="h-screen overflow-y-hidden  flex bg-white w-full relative"
    >
      {cards()}
      {/* {sideNav()} */}
    </div>
  );
};

export default LandingSection;
