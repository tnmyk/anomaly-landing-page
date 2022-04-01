import { GrReactjs } from "react-icons/gr";
import { HiOutlineCube } from "react-icons/hi";
import { SiKeras, SiPython } from "react-icons/si";
import { GiArtificialIntelligence } from "react-icons/gi";
const techData = [
  {
    logo: <SiPython />,
    title: `Theano`,
    desc: `Theano is a Python library that allows you to optimize multi-dimensional input.
Here it will work for optimizing and skimming out the accurate information from the input videos.`,
  },
  {
    logo: <SiKeras />,
    title: `Keras`,
    desc: `Keras is an API designed for human beings, not machines. It follows best practices for reducing cognitive load: it offers consistent & simple APIs,
it minimizes the number of user actions required for common use cases.`,
  },
  {
    logo: <GrReactjs />,
    title: `React.js`,
    desc: `Downloadable application and support for the project provided online using React.js​ (Next.js) `,
  },
  {
    logo: <GiArtificialIntelligence />,
    title: `Deep learning`,
    desc: `Imitates from the sample videos to differentiate between normal and abnormal scenarios by dividing sample videos into 
segments and making instances.`,
  },
  {
    logo: <HiOutlineCube />,
    title: `Matlab`,
    desc: `Provides commands for interconnectiong different nodes of layers in neural networks of model.`,
  },
];

export default techData;
