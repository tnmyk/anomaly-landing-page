import { AiFillCamera } from "react-icons/ai";
import { HiCursorClick } from "react-icons/hi";
import { BsSpeedometer, BsGithub } from "react-icons/bs";
const featuresData = [
  {
    icon: <HiCursorClick />,
    background: "bg-green-500",
    title: "Easy UI",
    desc: `The program has a simplistic and minimalist UI design, making it easy for the users to navigate through it and automatically recognize flower species in the park and detect invasive plant species.`,
  },
  {
    icon: <AiFillCamera />,
    background: "bg-red-500",
    title: "Surveillance",
    desc: `Spot when anomaly plant species are detected, that way a trained botanist can inspect the plant and determine if it's harmful to the park's environment.
`,
  },

  {
    title: "Fast",
    icon: <BsSpeedometer />,
    background: "bg-cyan-600",
    desc: `The program is entirely written in Python, enabling it to be faster than others.`,
  },
  {
    title: "Open-sourced",
    icon: <BsGithub />,
    background: "bg-white",
    color: "text-black",
    desc: `The project is entirely open-sourced, with the entire source code available on Github. From around the world, developers, designers, creators, enthusiasts, and more, have free and open access to all the repos, assets, and information to make their contributions.`,
  },
];
export default featuresData;
