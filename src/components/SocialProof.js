import React, { useState } from "react";
import BlackQuote from "../assets/icons/quote-black.png";
import WhiteQuote from "../assets/icons/quote-white.png";
// import { GoDash } from "react-icons/go";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { motion, useViewportScroll, useTransform } from "framer-motion";
// Import Swiper styles
// import "swiper/css";
// import "swiper/css/effect-fade";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import { EffectFade, Navigation, Pagination } from "swiper";

// feedback
const feedbacks = [
  {
    name: "Soumya",
    company: "UI Developer at NinjaasLabs",
    feedback:
      "It’s rare that you come across a hardworking standout talent like Shradha. At NinjaasLabs, I had the opportunity of collaborating on several projects with her. I was particularly impressed by her ability to effectively collaborate between client and developer. fake:123 She has been a brilliant leader to work with, and I wholeheartedly endorse her as an invaluable team member! from scratch, which resulted in a rich user experience and helped advance our projects from a design and usability perspective.  She has been a brilliant leader to work with, and I wholeheartedly endorse her as an invaluable team member!",
  },
  {
    name: "Sanjana",
    company: "SDE at Amazon",
    feedback:
      "Shradha is one of the most creative designers that I’ve had the privilege of working with.  She managed to independently design, wireframe, and create the overall UI and UX for projects that we collaborated on. Her keen eye for details and strong work ethic added elegance and simplicity to all of our applications. She showed initiative in building the design architecture from scratch, which resulted in a rich user experience and helped advance our projects from a design and usability perspective.  She has been a brilliant leader to work with, and I wholeheartedly endorse her as an invaluable team member!",
  },
  {
    name: "Neeladri",
    company: "Product Designer at Descrypt",
    feedback:
      "Shradha is one of the colleagues who has immense dedication towards her work and art. Her knowledge in the field of design is impeccable. Shradha would be a great asset to any organization that she works with.fake:123  Her keen eye for details and strong work ethic added elegance and simplicity to all of our applications. She showed initiative in building the design architecture from scratch, which resulted in a rich user experience and helped advance our projects from a design and usability perspective.  She has been a brilliant leader to work with, and I wholeheartedly endorse her as an invaluable team member!",
  },
];
const SocialProof = ({ textEnter, textLeave, imageEnter, toggleTheme }) => {
  const theme = document.querySelector("html").classList;
  const quoteImg = theme.contains("dark") ? WhiteQuote : BlackQuote;
  const [feedback, setFeedback] = useState(feedbacks[0]);
  const [fade, setFade] = useState(false);

  return (
    <ParallaxProvider className="w-full h-full mx-auto">
      <div
        id="social-proof"
        onMouseEnter={imageEnter}
        onMouseLeave={textLeave}
        className="px-5 md:px-48 py-10 md:py-20 flex items-center justify-center my-10 md:my-5 bg-white dark:bg-black transition-all duration-500"
      >
        <div
          // modules={[EffectFade, Navigation, Pagination]}
          class=" bg-brand-lightGrey dark:bg-brand-footerGrey md:dark:bg-brand-darkGrey text-black dark:text-brand-gray w-full md:px-10 md:py-20 flex flex-col items-center justify-end relative"
        >
          {/* <Parallax
            class="text-4xl md:text-5xl w-full md:w-1/3 absolute -top-10 px-4 md:px-0 md:-top-12 md:left-12 font-bold"
            translateY={[-50, 20]}
          >
            <div>Feedback from my clients.</div>
          </Parallax> */}
          <div class="text-black flex items-center dark:text-brand-gray w-full text-xl uppercase tracking-widest">
            <div>Testimonials</div>
            <div
              style={{
                height: "2px",
              }}
              class="bg-brand-gray w-32 ml-8"
            ></div>
          </div>
          {/*  */}

          <div class=" text-xs md:text-base  w-full  px-5 md:px-0 py-16 md:py-0 flex flex-col justify-center">
            <div
              className={`italic my-6 transition-opacity ease-linear duration-1000 ${
                fade ? "opacity-0" : ""
              } `}
            >
              "{feedback.feedback.split("fake:123")[0]}"
              <span
                style={{
                  MozWindowDragging: "none",
                }}
                class={`text-transparent select-none    `}
              >
                {feedback.feedback.split("fake:123")[1]}
              </span>
            </div>
            <div
              class={`text-black flex items-center dark:text-white tracking-wider text-xl  my-6 ease-linear duration-1000 transition-opacity  ${
                fade ? "opacity-0" : ""
              } `}
            >
              <div class="w-14 h-14 rounded-full bg-brand-gray bg-cover bg-center bg-no-repeat mr-5" />
              {feedback.name}, {feedback.company}
            </div>
            <div class="flex justify-center items-center w-full">
              {feedbacks.map((item, index) => (
                <div
                  class="py-4 cursor-pointer"
                  onClick={() => {
                    setFade(true);
                    setTimeout(() => {
                      setFeedback(item);
                      setFade(false);
                    }, 800);
                  }}
                >
                  <div
                    style={{
                      height: "2px",
                    }}
                    class={` transition-all duration-200 ${
                      item.name === feedback.name
                        ? "bg-black dark:bg-white w-6 "
                        : " bg-gray-500 w-4"
                    }   mx-1 `}
                  />
                </div>
              ))}
            </div>
          </div>

          <img
            src={quoteImg}
            alt="quote"
            className="absolute -bottom-10 right-10 w-20"
          />
        </div>
      </div>
    </ParallaxProvider>
  );
};

export default SocialProof;
