import Nav from "../components/Nav";
import { AiFillGithub } from "react-icons/ai";
import { BsArrowRight, BsArrowDownShort } from "react-icons/bs";
import Tech from "../components/Home/Tech";
import Team from "../components/Home/Team";
import Footer from "../components/Footer/Footer";
import Features from "../components/Home/Features";
import HowToUse from "../components/Home/HowToUse";
import { BiCubeAlt } from "react-icons/bi";
import { useRef } from "react";
import Link from "next/link";
export default function Home() {
  const teamRef = useRef(null);
  return (
    <div className="flex flex-col items-center px-8">
      <h1 className="font-bold md:text-8xl mt-20 md:mt-32 text-5xl text-center">
        Anomaly Detector
      </h1>
      <h3 className="text-2xl mt-5 text-gray-400 text-center">
        Made by group 181{" "}
        <span
          className="border-b-2 border-b-gray-400 cursor-pointer"
          onClick={() => {
            teamRef.current.scrollIntoView({ behavior: "smooth" });
          }}
        >
          members
        </span>
        .
      </h3>
      <div className="flex flex-wrap justify-center mt-10 gap-x-3 gap-y-2">
        <Link href="/download">
          <a className="p-3 w-56 font-medium text-lg rounded bg-green-500 flex justify-center items-center gap-x-2">
            View product <BsArrowRight />
          </a>
        </Link>
        <a
          className="p-3 w-56 font-medium text-lg rounded border flex justify-center items-center gap-x-2"
          href="https://github.com/hacked-netizen/Anamoly-detection"
          target="_blank"
          rel="noreferrer"
        >
          View Source code <AiFillGithub />
        </a>
      </div>
      <Features />
      <Tech />
      <span ref={teamRef} style={{ scrollMarginTop: "-80px" }} />
      <Team />
    </div>
  );
}
