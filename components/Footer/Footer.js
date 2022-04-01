import { BsGithub } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="mx-auto w-10/12 border-t border-gray-600 mt-16 flex flex-wrap-reverse justify-between p-7 text-gray-400 font-medium text-lg">
      <div>Group 181</div>
      <div className="flex gap-x-7 flex-wrap ">
        <a
          href="https://github.com/hacked-netizen/Anamoly-detection"
          target="_blank"
          className="flex items-center gap-x-1"
          rel="noreferrer"
        >
          Github <BsGithub />
        </a>
        <a
          href="https://github.com/tnmyk/anomaly-detection-landing"
          target="_blank"
          className="flex items-center gap-x-1"
          rel="noreferrer"
        >
          Webpage Github <BsGithub />
        </a>
        <a
          href="https://github.com/hacked-netizen/Anamoly-detection/issues"
          target="_blank"
          className="flex items-center gap-x-1"
          rel="noreferrer"
        >
          Report a bug
        </a>
      </div>
    </footer>
  );
};

export default Footer;
