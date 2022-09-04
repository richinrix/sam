import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import { WorkHero, Navbar, WorkHeading, Loader } from "../../components";
import { ReactComponent as Quote } from "../../assets/icons/quotestart.svg";
import { ArrowRightCircle } from "react-feather";
import Problem from "../../assets/works/smartvision/smartVisionProblem.png";
import Problem2 from "../../assets/works/smartvision/smartVisionProblem2.png";
import Problem3 from "../../assets/works/smartvision/smartVisionProblem3.png";
import Phone1 from "../../assets/works/smartvision/smartVisionPhone1.png";
import Phone2 from "../../assets/works/smartvision/smartVisionPhone2.png";
import Phone3 from "../../assets/works/smartvision/smartVisionPhone3.png";
import Phone4 from "../../assets/works/smartvision/smartVisionPhone4.png";
import Phone5 from "../../assets/works/smartvision/smartVisionPhone5.png";
import Phone6 from "../../assets/works/smartvision/smartVisionPhone6.png";
import Hero from "../../assets/works/smartvision/smartVision.png";
import Challenges from "../../assets/works/smartvision/smartvisionChallenge.svg";
import colorGuides from "../../assets/works/smartvision/colorGuides.svg";

import {
  Teacup,
  BriefCase,
  Bullseye,
  Check,
  Clipboard,
  Family,
  OldKey,
  Fist,
  Calendar,
  TippingHand,
  GuideDog,
  Eye,
} from "../../assets/icons/fluent";

const SmartVision = () => {
  const [mousePos, setMousePos] = useState({
    x: 0,
    y: 0,
  });
  const [cursorVariant, setcursorVariant] = useState("default");
  useEffect(() => {
    const mouseMove = (e) => {
      setMousePos({
        x: e.clientX,
        y: e.clientY,
      });
    };
    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);
  const variants = {
    default: {
      x: mousePos.x - 10,
      y: mousePos.y - 10,
      bounce: 0,
    },
    text: {
      height: 50,
      width: 50,
      x: mousePos.x - 25,
      y: mousePos.y - 25,
      backgroundColor: "#ffc7d1",
      mixBlendMode: "difference",
      bounce: 0,
    },
    secondary: {
      x: mousePos.x - 10,
      y: mousePos.y - 10,
      backgroundColor: "#ffc7d1",
      mixBlendMode: "difference",
      bounce: 0,
    },
    large: {
      height: 80,
      width: 80,
      x: mousePos.x - 40,
      y: mousePos.y - 40,
      backgroundColor: "#ffc7d1",
      mixBlendMode: "difference",
      bounce: 0,
    },
  };

  const textEnter = () => setcursorVariant("text");
  const imageEnter = () => setcursorVariant("secondary");
  const textLeave = () => setcursorVariant("default");
  const largeEnter = () => setcursorVariant("large");
  const work = {
    image: Hero,
    video:
      "https://res.cloudinary.com/genesiscloudimages/image/upload/v1660394155/work_gifs/Comp_1_tdwzlp.gif",
    title: "Smart Vision",
    gif: true,
    domain: "Case Study",
  };
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);
  return (
    <div
      onMouseEnter={imageEnter}
      className="text-justify bg-brand-black text-brand-white"
    >
      {loading && (
        <div class="fixed w-full h-full z-50">
          {" "}
          <Loader />{" "}
        </div>
      )}
      <Navbar defaultColor={"white"} />
      <WorkHero
        largeEnter={largeEnter}
        textEnter={textEnter}
        textLeave={textLeave}
        imageEnter={imageEnter}
        work={work}
      />
      {/* project brief */}
      <div class=" p-5 md:px-24 md:my-20 flex flex-wrap justify-between   ">
        <div className="  my-5   ">
          <div class="text-xl font-bold font-lato-bold flex items-center -ml-1">
            <img src={Clipboard} className="mr-2 w-5 " alt="" /> Project Type
          </div>
          <div className="font-lato  mt-2">Personal Project</div>
        </div>
        <div className=" w-1/2 md:w-auto my-5  ">
          <div class="text-xl font-bold font-lato-bold flex items-center -ml-2">
            <img src={Calendar} className="mr-2 w-5 " alt="" /> Timeline
          </div>
          <div className="font-lato  mt-2">3 months</div>
        </div>
        <div className=" w-1/2 md:w-auto my-5  ">
          <div class="text-xl font-bold font-lato-bold flex items-center -ml-1">
            <img src={TippingHand} className="mr-2 w-5 " alt="" /> My Role
          </div>
          <div className="font-lato  mt-2">UX & UI Designer</div>
        </div>
        <div className=" w-1/2 md:w-auto my-5  ">
          <div class="text-xl font-bold font-lato-bold flex items-center -ml-1">
            <img src={Fist} className="mr-2 w-5 " alt="" /> Design Team
          </div>
          <div className="font-lato  mt-2">Myself</div>
        </div>
      </div>
      {/* project concept */}
      <div class=" p-5 md:px-24 md:mb-36 md:pr-0 grid grid-cols-12  h-full">
        <WorkHeading text={"concept"} />

        <div class="col-span-12 md:col-span-6 h-full flex flex-col    ">
          <div class="flex items-center">
            <div
              style={{
                marginBottom: "30px",
              }}
              class="  text-2xl md:text-4xl  tracking-1.5 font-lato flex items-center"
            >
              <img src={Eye} className="mr-2 w-9 " alt="" /> Smart Vision
            </div>
          </div>
          <div className="  leading-6 tracking-0.5   ">
            Smart Vision is an{" "}
            <span style={{ color: "#7CCBCD" }}>
              Accessible, Independent and Secure
            </span>{" "}
            messaging App designed to make smartphones more accessible for users
            with visual impairments.
            <br />
            <br />
            <span style={{ color: "#7CCBCD" }}>
              Allows people to engage in hassle-free conversations,
            </span>{" "}
            Provides the{" "}
            <span style={{ color: "#7CCBCD" }}>
              finest accessibility features and secures privacy
            </span>{" "}
            to improve the quality of life.
          </div>
        </div>
        <div class="hidden md:block col-span-1"></div>

        <div class="col-span-12 md:col-span-5  flex flex-col items-center  justify-center md:pl-10 rounded-xl text-brand-white ">
          <div className="  px-4 md:pr-24 rounded-l-lg flex flex-col justify-center bg-brand-darkGrey2 md:pl-14 py-14  ">
            <div className=" mb-8">
              <div className=" mb-2 flex items-center">
                <img src={Check} className="mr-2 w-5 " alt="" /> Results
              </div>
              <div className=" leading-6 tracking-0.5">
                Raised awareness,{" "}
                <span style={{ color: "#7CCBCD" }}>
                  advanced accessibility features, Inclusive and easy to use
                  space.
                </span>
              </div>
            </div>
            <div className=" ">
              <div className=" mb-2 flex items-center">
                <img src={BriefCase} className="mr-2 w-5 " alt="" />{" "}
                <div>Contribution</div>
              </div>
              <div className=" leading-6 tracking-0.5">
                Secondary Research, Brainstorming Business goals, User
                Interviews, Journey Mapping, Ideation, Interface Design,
                Prototyping.
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* purpose */}
      <div className="p-5 md:p-20">
        <WorkHeading text={"purpose"} />

        <div class="grid grid-cols-12 font-lato">
          <div class="col-span-12 md:col-span-4">
            <div class=" text-2xl  tracking-1.5 mb-8 flex items-center">
              <img src={Bullseye} className="mr-2 w-6 " alt="" /> Goals
            </div>
            <div className="my-5 ">
              1. Allow them to connect with people{" "}
              <span style={{ color: "#7CCBCD" }}>Independently.</span>
              <br />
              2. Provide essential{" "}
              <span style={{ color: "#7CCBCD" }}>Accessibility features.</span>
              <br />
              3. Make it easier to share information.
              <br />
              4.{" "}
              <span style={{ color: "#7CCBCD" }}>
                Protect privacy and security
              </span>
              .
              <br />
              5. <span style={{ color: "#7CCBCD" }}>Promote awareness</span>
            </div>
          </div>
        </div>
      </div>
      {/* user segmentation */}
      <div className="p-5 md:p-20 font-lato">
        <div className="text-2xl md:text-4xl mb-8 tracking-1.5 flex items-center">
          <img src={Family} className="mr-2 w-8 " alt="" /> User segmentation
        </div>
        <div class="ml-3">
          <div className=" text-base font-lato-bold my-5 bg-brand-darkGrey2 px-5 py-3 w-max rounded-lg -ml-5 ">
            User Type
          </div>
          <div className="" style={{ letterSpacing: "0.5px" }}>
            Legally blind
            <ul className="list-disc">
              <li className="">
                A legally blind individual is considered sightless if contact
                lenses or{" "}
                <span style={{ color: "#7CCBCD" }}>
                  eyeglasses cannot correct their vision.
                </span>
              </li>
              <li className="my-5">
                The{" "}
                <span style={{ color: "#7CCBCD" }}>normal vision is 20/20</span>
                . That means an object can be seen correctly 20 feet away. But
                the vision of a{" "}
                <span style={{ color: "#7CCBCD" }}>legally blind</span> is
                <span style={{ color: "#7CCBCD" }}>20/200 or less</span>. This
                means if an object is 200 feet away, they have to stand 20 feet
                away to see it evidently.
              </li>
            </ul>
          </div>
          {/* primary  */}
          <div className=" text-base font-lato-bold my-5  mt-8 bg-brand-darkGrey2 px-5 py-3 w-max rounded-lg -ml-5 ">
            Primary User
          </div>
          <div className="" style={{ letterSpacing: "0.5px" }}>
            <ul className="list-disc">
              <li className="">
                These are the users who{" "}
                <span style={{ color: "#7CCBCD" }}>
                  require messaging apps the most.
                </span>
              </li>
              <li className="my-5">
                They mostly utilize the app to{" "}
                <span style={{ color: "#7CCBCD" }}>
                  share work-related information,{" "}
                </span>
                promote their business, share valuable data, and have a shared
                platform for professional discussions, meetings, and so on.
              </li>
              <li className="my-5">
                Examples :{" "}
                <span style={{ color: "#7CCBCD" }}>
                  Teachers, Bloggers, Youtubers, Advocates etc.
                </span>{" "}
              </li>
              <li className="my-5">
                Age : <span style={{ color: "#7CCBCD" }}>23 - 60</span>{" "}
              </li>
            </ul>
          </div>
          {/* secondary  */}
          <div className=" text-base font-lato-bold my-5  mt-8 bg-brand-darkGrey2 px-5 py-3 w-max rounded-lg -ml-5 ">
            Secondary User
          </div>
          <div className="" style={{ letterSpacing: "0.5px" }}>
            <ul className="list-disc">
              <li className="">
                People who use it for{" "}
                <span style={{ color: "#7CCBCD" }}>casual interactions.</span>
              </li>
              <li className="my-5">
                Text messaging is the most common way for{" "}
                <span style={{ color: "#7CCBCD" }}>
                  teenagers and young adults
                </span>{" "}
                to communicate.
              </li>
              <li className="my-5">
                Examples : High school and{" "}
                <span style={{ color: "#7CCBCD" }}>College students. </span>
              </li>
              <li class="my-5">
                {" "}
                Age : <span style={{ color: "#7CCBCD" }}>15+</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* challenge */}
      <div class="bg-brand-darkGrey2 font-lato  p-5 md:px-24 md:py-32 py-10 ">
        <WorkHeading text={"challenge"} />

        <div class="grid grid-cols-12  items-center">
          <div class="col-span-12 md:col-span-6 relative ">
            <Quote
              className="absolute -top-4 md:-top-7  w-4 md:w-7 h-4 md:h-6  "
              stroke="none"
            />
            <div
              className="font-lato-light tracking-0.5  ml-4 md:ml-9"
              style={{
                color: "#FEFEFE",
              }}
            >
              How might we design a Messaging app which is{" "}
              <span style={{ color: "#7CCBCD" }}>Inclusive</span> to people with
              impaired vision making their{" "}
              <span style={{ color: "#7CCBCD" }}>
                communication experience hassle -free and economical.
              </span>
            </div>
          </div>
          <div class="hidden md:block col-span-1"></div>

          <img
            src={Challenges}
            className="w-full h-full col-span-12 mt-4 md:mt-0 object-contain  object-center md:col-span-5 "
            alt=""
          />
        </div>
      </div>
      {/* problem identification */}
      <div class=" p-5 md:p-24   h-full">
        <div class="   ">
          <WorkHeading text={"research"} />

          <div class="  text-2xl md:text-4xl flex items-center  md:-ml-2  tracking-1.5 font-lato ">
            <img src={GuideDog} alt="" class="w-9 mr-2" /> Identifying the
            problem
          </div>
          <ul className="my-8 list-disc ml-5">
            <li className="my-3">
              While searching for users to interview, I couldn't find any
              relevant people, thanks to the pandemic :') During which, I
              discovered that{" "}
              <span style={{ color: "#7CCBCD" }}>
                people in India are unfamiliar of legal <br /> blindness
              </span>
            </li>
            <br />
            <li className="my-3">
              I was able to interview two of the teammates with different levels
              of work experience.
            </li>{" "}
            <li className="my-3">
              As a result, I reached out to individuals on the internet and, to
              my surprise, I was able to connect with{" "}
              <span style={{ color: "#7CCBCD" }}>global audience </span>fitting
              into the right category.
            </li>
            <li className="my-3">
              I interviewed around 8 participants in total through{" "}
              <span style={{ color: "#7CCBCD" }}>
                videoconferencing and Google forms.
              </span>
            </li>
            <div class="px-0 md:px-5 w-full my-8">
              <img src={Problem} className="w-full" alt="" />
            </div>
            <li className="my-3">
              Next, I Grouped Insights based on{" "}
              <span style={{ color: "#7CCBCD" }}>
                similarity of cognitive patterns and characteristics{" "}
              </span>
              for the segmented users to create personas.
            </li>
            <div class="px-0 md:px-5 w-full my-8">
              <img src={Problem2} className="w-full" alt="" />
            </div>{" "}
            <li className="my-3">
              Finally, I developed a{" "}
              <span style={{ color: "#7CCBCD" }}>
                Journey map for prospective scenarios
              </span>{" "}
              to help me understand and analyze the problem in depth.
            </li>
            <div class="px-0 md:px-5 w-full my-8">
              <img src={Problem3} className="w-full" alt="" />
            </div>
          </ul>
        </div>
      </div>
      {/* key points */}
      <div class="p-5 md:p-24 h-full">
        <div class="  text-2xl flex items-center md:text-4xl my-8 tracking-1.5 font-lato  ">
          <img src={OldKey} alt="" class="w-8 mr-2" /> Key pain-points
        </div>
        <div class="px-3 grid grid-cols-1 md:grid-cols-2 ">
          <div class="col-span-1 p-2 md:p-5">
            <div
              style={{
                // background: "#FAFAFA",
                borderRadius: "4px",
              }}
              className="w-full p-5 h-full rounded-md bg-brand-darkGrey2 "
            >
              <div class="text-lg font-lato font-bold">Letters</div>
              <ul class="my-0 md:my-8 list-decimal">
                <li className="ml-4">Struggles while reading.</li>
                <li class="ml-4">
                  Prefers{" "}
                  <span style={{ color: "#7CCBCD" }}>
                    bold and enlarged letters.
                  </span>
                </li>
                <li class="ml-4">
                  Keyboard letters are{" "}
                  <span style={{ color: "#7CCBCD" }}>not legible enough.</span>{" "}
                  Feels <span style={{ color: "#7CCBCD" }}>time consuming</span>{" "}
                  with TTS unless you've mastered it.
                </li>
              </ul>
            </div>
          </div>
          <div class="col-span-1 p-2 md:p-5">
            <div
              style={{
                // background: "#FAFAFA",
                borderRadius: "4px",
              }}
              className="w-full p-5 h-full rounded-md bg-brand-darkGrey2 "
            >
              <div class="text-lg font-lato font-bold">TTS</div>
              <ul class="my-0 md:my-8 list-decimal ml-4">
                <li>
                  <span style={{ color: "#7CCBCD" }}>
                    Cannot describe texts in images.
                  </span>
                </li>
                <li>Over informative</li>
                <li>
                  It's a{" "}
                  <span style={{ color: "#7CCBCD" }}>
                    pain texting in group chats since
                  </span>{" "}
                  most of the times messages are read from the first if a new
                  external message pops up.
                </li>
                <li>Searching messages from long back is difficult.</li>
              </ul>
            </div>
          </div>
          <div class="col-span-1 p-2 md:p-5 h-auto">
            <div
              style={{
                // background: "#FAFAFA",
                borderRadius: "4px",
              }}
              className="w-full h-full p-5 rounded-md bg-brand-darkGrey2 "
            >
              <div class="text-lg font-lato font-bold">Images and Videos</div>
              <ul class="my-0 md:my-8 ">
                <li className="">
                  Emojis and images are{" "}
                  <span style={{ color: "#7CCBCD" }}>
                    difficult to perceive.
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-span-1 p-2 md:p-5 h-full">
            <div
              style={{
                // background: "#FAFAFA",
                borderRadius: "4px",
              }}
              className="w-full h-full p-5 rounded-md bg-brand-darkGrey2 "
            >
              <div class="text-lg font-lato font-bold">Letters</div>
              <ul class="my-0 md:my-8 list-decimal ml-4">
                <li>
                  Doesn't prefer people to{" "}
                  <span style={{ color: "#7CCBCD" }}>
                    hear their messages aloud.
                  </span>
                </li>
                <li>Requests someone else to read it for him</li>
                <li>
                  Colors are either very bright or too dull, and{" "}
                  <span style={{ color: "#7CCBCD" }}>
                    Light mode strains eyes.
                  </span>
                </li>
                <li>Reads messages in the evening.</li>
                <li>Quick way to connect with people is needed</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* features */}
      <div class="bg-brand-black md:pt-24  h-full">
        <WorkHeading text={"solutions"} />

        <div class="grid grid-cols-12 font-lato">
          {/* 1 */}
          <div class="col-span-12 grid grid-cols-12  px-5 md:px-24">
            <div class="col-span-12 md:col-span-7 flex bg-brand-black  items-center justify-center text-brand-white  ">
              <div className="h-full w-full">
                <div class="text-4xl">📐 Features</div>
                <div className="mt-130 flex  md:pl-24">
                  <div className="">
                    <div className="my-8">1. Screen recorder</div>
                    <ul class="list-disc ml-4">
                      <li className="my-9">
                        Screen readers speak what is on the screen as the finger
                        explores. <br /> They are simple to understand and
                        control.
                      </li>
                      <li className="my-9">
                        At any moment,{" "}
                        <span style={{ color: "#7CCBCD" }}>
                          double-tap the text to activate the screen reader.
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="md:col-span-5 col-span-12 hidden md:flex -mt-10 mb-130  md:pr-24 justify-end">
              <img
                src={Phone1}
                className=""
                style={{
                  width: "290px",
                }}
                alt=""
              />
            </div>
            <div class="md:col-span-5 col-span-12 flex md:hidden items-center justify-center">
              <img src={Phone1} className="w-2/4" alt="" />
            </div>
          </div>
          {/* 2 */}
          <div className="col-span-12 grid grid-cols-12  px-5 md:px-24 bg-brand-darkGrey2">
            <div class="hidden md:flex md:col-span-5 col-span-12  -mt-32 items-center md:pl-24">
              <img
                src={Phone2}
                className=""
                style={{
                  width: "290px",
                }}
                alt=""
              />
            </div>
            <div class="col-span-12 md:col-span-7 flex   justify-end text-brand-white px-3 md:pr-24  mt-10 md:mt-24">
              <div>
                <div className="">2. Image description</div>
                <ul class="list-disc ml-4">
                  <li className="my-9">
                    Legally blind individuals can{" "}
                    <span style={{ color: "#7CCBCD" }}>
                      understand the texts better than <br />
                      images.
                    </span>{" "}
                    Screen readers can't interpret images.
                  </li>
                  <li className="my-9">
                    Hence, Image descriptions are used to{" "}
                    <span style={{ color: "#7CCBCD" }}>
                      describe Information from <br />
                      images.
                    </span>{" "}
                    They can also generate{" "}
                    <span style={{ color: "#7CCBCD" }}>
                      alt text automatically
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div class="md:col-span-5 col-span-12 flex md:hidden items-center justify-center">
              <img src={Phone2} className="w-2/4" alt="" />
            </div>
            <div class="col-span-12 grid grid-cols-12">
              <div class="col-span-12 md:col-span-7 flex md:mb-20   md:pl-24 text-white md:mt-32">
                <div>
                  <div className="my-8">3. Speech Recognition</div>
                  <ul class="list-disc ml-4">
                    <li className="mt-9">
                      It enables a program to process{" "}
                      <span style={{ color: "#7CCBCD" }}>
                        human speech to readable text.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="md:col-span-5 col-span-12 hidden md:flex -mt-10 absolute   right-48 justify-end">
                <img
                  src={Phone3}
                  className=""
                  style={{
                    width: "290px",
                  }}
                  alt=""
                />
              </div>
              <div class="md:col-span-5 col-span-12 flex md:hidden items-center justify-center">
                <img src={Phone3} className="w-2/4" alt="" />
              </div>
            </div>
          </div>

          {/* 3 */}

          {/* 4 */}
          <div class="col-span-12 md:px-24 px-5 grid grid-cols-12">
            <div class="md:col-span-5 mt-36 col-span-12 hidden md:flex md:pl-24 ">
              <img
                src={Phone4}
                className=""
                style={{
                  width: "290px",
                }}
                alt=""
              />
            </div>
            <div class="col-span-12 md:col-span-7 flex   justify-end text-white px-3 md:pr-24  md:mt-96">
              <div>
                <div className="my-8">4. OCR</div>
                <ul class="list-disc ml-4">
                  <li className="my-9">
                    <span style={{ color: "#7CCBCD" }}>
                      Optical Character Recognition
                    </span>{" "}
                    is the technology that detects{" "}
                    <span style={{ color: "#7CCBCD" }}>
                      text <br /> inside digital pictures{" "}
                    </span>
                    whether typed or handwritten
                  </li>
                </ul>
              </div>
            </div>
            <div class="md:col-span-5 col-span-12 flex md:hidden items-center justify-center">
              <img src={Phone4} className="w-2/4" alt="" />
            </div>
          </div>
          {/* 5 */}
          <div class="col-span-12 md:px-24 grid grid-cols-12 px-5 relative">
            <div class="col-span-12 md:col-span-7 flex   text-white px-3 md:pl-24 md:mt-36 ">
              <div>
                <div className="">5. Magnifier</div>
                <ul class="list-disc ml-4">
                  <li className="my-9">
                    The user will not always be pleased with the screen readers
                    and <br /> their{" "}
                    <span style={{ color: "#7CCBCD" }}>
                      privacy may be compromised
                    </span>
                  </li>
                  <li className="my-9">
                    The magnifier allows the user to have a closer look at the
                    text or <br />
                    image while{" "}
                    <span style={{ color: "#7CCBCD" }}>
                      respecting their privacy.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div class="md:col-span-5 col-span-12 hidden md:flex -mt-10 absolute  right-48">
              <img
                src={Phone5}
                className=""
                style={{
                  width: "290px",
                }}
                alt=""
              />
            </div>
            <div class="md:col-span-5 col-span-12 flex md:hidden items-center justify-center">
              <img src={Phone5} className="w-2/4" alt="" />
            </div>
          </div>
          {/* 6 */}
          <div class="col-span-12 grid grid-cols-12 md:px-24 px-5 bg-brand-darkGrey2 md:pt-80">
            <div class="md:col-span-6 col-span-12 hidden md:flex  md:pl-24 md:mb-48">
              <img
                src={Phone6}
                className=""
                style={{
                  height: "290px",
                }}
                alt=""
              />
            </div>
            <div class="col-span-12 md:col-span-6 flex   justify-end text-white px-3 md:pr-28 my-5">
              <div>
                <div className="">6. Braille keyboard</div>
                <ul class="list-disc ml-4">
                  <li className="my-9">
                    Braille keyboard that can be{" "}
                    <span style={{ color: "#7CCBCD" }}>
                      calibrated to human touch.
                    </span>{" "}
                    Private <br /> and Alternative option to speech recognition.
                  </li>
                  <li class="my-9">
                    Prerequisite : A person must be{" "}
                    <span style={{ color: "#7CCBCD" }}>
                      familiar with braille.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div class="md:col-span-5 col-span-12 flex md:hidden items-center justify-center">
              <img src={Phone6} className="w-4/5" alt="" />
            </div>
          </div>
        </div>
      </div>
      {/* ui guide system */}
      <div style={{}} class="p-5 md:px-24 h-full pt-140">
        <div class="flex items-center  text-2xl md:text-4xl my-8 tracking-1.5 font-lato ">
          <img src={GuideDog} alt="" class="w-9 mr-2" /> UI guide system
        </div>
        <ul class="ml-4 list-disc">
          <li className="my-4 md:my-8">
            The visual designs were made by considering the{" "}
            <span style={{ color: "#7CCBCD" }}>
              WCAG accessibility guidelines.
            </span>
          </li>

          <li className="my-4 md:my-8">
            The goal was to use{" "}
            <span style={{ color: "#7CCBCD" }}>
              contrasting yet relaxing hues
            </span>{" "}
            to help readers read the strain-free content.
          </li>

          <li className="my-4 md:my-8">
            Our users emphasized on having a{" "}
            <span style={{ color: "#7CCBCD" }}>
              dark mode to achieve maximum contrast.
            </span>{" "}
            Because pure black caused eye strain, this was modified to #121212
            with a high contrast ratio.
          </li>
        </ul>
        {/* color thingy */}
        <div className="w-full">
          <img src={colorGuides} className="w-full" alt="" />
        </div>
        {/* <div class="grid grid-cols-1 md:grid-cols-2">
          <div class="col-span-1 my-4  ">
            <div
              class=" text-2xl font-google-sans md:mb-10 mb-5"
              style={{ color: "#72C3C4" }}
            >
              Color
            </div>
            <div class="flex items-center justify-center  ">
              <div className="flex flex-col items-center">
                <div
                  class="  rounded-full mx-3 md:mx-14 border-4 "
                  style={{
                    width: "68px",
                    height: "68px",
                    background: "#0A0A0A",
                    boxShadow: "0px 2.08333px 2.60417px rgba(41, 41, 41, 0.32)",
                  }}
                />
                <div className="my-6">#0A0A0A</div>
              </div>
              <div className="flex flex-col items-center">
                <div
                  class="  rounded-full mx-3 md:mx-14 border-4  "
                  style={{
                    width: "68px",
                    height: "68px",
                    background: "#FFFFFF",
                    boxShadow:
                      "0px 2.08333px 2.60417px rgba(41, 41, 41, 0.12) ",
                  }}
                />
                <div className="my-6">#FFFFFF</div>
              </div>
              <div className="flex flex-col items-center">
                <div
                  class="  rounded-full mx-3 md:mx-14 border-4 "
                  style={{
                    width: "68px",
                    height: "68px",
                    background: "#7CCBCD",
                    boxShadow: "0px 2.08333px 2.60417px rgba(41, 41, 41, 0.12)",
                  }}
                />
                <div className="my-6">#7CCBCD</div>
              </div>
            </div>
            <img src={colorGuide} className="w-10/12" alt="" />
          </div>
          <div class="col-span-1 my-4 ">
            <img src={colorChecker} alt="" />
          </div>
          <div class="col-span-1 md:-mt-20">
            <img src={typography} className="w-10/12" alt="" />

            <div
              class=" text-2xl font-google-sans"
              style={{ color: "#72C3C4" }}
            >
              Typography
            </div>

            <div class="md:pl-20 font-google-sans ">
              <div className="my-8">Google Sans</div>
              <div class="flex items-center   font-google-sans">
                <div className="mx-4 md:mr-24 font-bold">
                  <div style={{ color: "#7CCBCD" }} class=" text-xl ">
                    Aa
                  </div>
                  <div>Bold</div>
                </div>
                <div className="mx-4 md:mr-24 font-medium">
                  <div style={{ color: "#7CCBCD" }} class=" text-xl ">
                    Aa
                  </div>
                  <div>Medium</div>
                </div>
                <div className="mx-4 md:mx-0 font-normal">
                  <div style={{ color: "#7CCBCD" }} class=" text-xl ">
                    Aa
                  </div>
                  <div>Regular</div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-span-1  md:py-20 ">
            <img src={fonts} alt="" />
          </div>
        </div> */}
      </div>
      <a
        onMouseEnter={largeEnter}
        onMouseLeave={imageEnter}
        style={{ color: "#7CCBCD" }}
        href="https://www.notion.so/Smart-Vision-c7010846836246598e1c49aba44640eb"
        target="_blank"
        rel="noreferrer"
        className="tracking-3 mb-10 md:mb-40 md:mt-24 px-5 flex items-center md:px-24 text-sm md:text-base  uppercase font-lato-bold"
      >
        <ArrowRightCircle
          width={30}
          height={30}
          color="#7CCBCD"
          strokeWidth={1.5}
          className="mr-4"
        />
        read full case study <img src={Teacup} alt="" class="w-9 ml-2" />
      </a>
      <WorkHero
        largeEnter={largeEnter}
        imageEnter={imageEnter}
        work={{
          domain: "Branding",
          title: "HappilyEver",
          video:
            "https://res.cloudinary.com/genesiscloudimages/image/upload/v1660394155/work_gifs/render_s6dzdu.gif",
          gif: true,
          link: "/happilyever",
        }}
        next={true}
      />{" "}
      <motion.div
        className="cursor hidden md:flex"
        variants={variants}
        animate={cursorVariant}
      />
    </div>
  );
};

export default SmartVision;
