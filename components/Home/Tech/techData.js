import { GrReactjs } from "react-icons/gr";
import { SiScikitlearn, SiNumpy, SiOpencv } from "react-icons/si";
const techData = [
  {
    logo: <SiNumpy />,
    title: `NumPy`,
    desc: `NumPy supports a wide range of hardware and computing platforms, and plays well with distributed, GPU, and sparse 
array libraries.`,
  },
  {
    logo: <SiScikitlearn />,
    title: `Scikit-Learn`,
    desc: `Simple and efficient tools for predictive data analysis accessible to everybody, and reusable in various contexts built on 
NumPy, SciPy, and matplotlib open source.`,
  },
  {
    logo: <GrReactjs />,
    title: `React.js`,
    desc: `Downloadable application and support for the project provided online using React.js​ (Next.js)`,
  },
  {
    logo: <SiOpencv />,
    title: `OpenCV`,
    desc: `OpenCV is an open-sourced library of programming functions mainly aimed at real-time computer vision. It is a great tool for image 
processing and performing computer vision tasks like face detection, objection tracking, landmark detection`,
  },
];

export default techData;
