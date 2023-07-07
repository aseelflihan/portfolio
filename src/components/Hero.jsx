import { motion } from "framer-motion";
import { styles } from "../styles";
import "./styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import meImage from "./images/aseel.png";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto flex items-center justify-center`}>
      <div className={`absolute inset-x-0 max-w-7xl mx-auto ${styles.paddingX} flex flex-col sm:flex-row items-start gap-5`}>
        {/* Code for desktop version */}
        <div className="flex-col items-start justify-center hidden mt-5 sm:flex sm:flex-row">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 h-40 sm:h-auto sm:w-0 sm:flex-grow violet-gradient" />
        </div>

        <div className="flex flex-col">
          <div>
            <h1 className={`${styles.heroHeadText} text-white`}>
              Hi, I'm <span> Aseel </span>
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100 text-sm font-short text-justify`} style={{ wordSpacing: '-0.15rem', fontSize: '1.6rem' }}>
            I harmonizing the art of programming and the science of data analysis, orchestrating an immersive experience where numbers come alive and interfaces tell stories.{" "}
  <span className="font-bold">
  
  </span>
</p>




          </div>

          <div className="flex items-center mt-2">
            <a href="https://github.com/aseelflihan" target="_blank" rel="noopener noreferrer" className="mr-2 text-2xl text-white">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href="https://www.linkedin.com/in/aseelflihan/" target="_blank" rel="noopener noreferrer" className="text-2xl text-white">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>
        </div>

        <div className="flex items-end mt-5 sm:mt-0 sm:ml-auto">
          <div className="w-74 h-80 sm:w-80 sm:h-80">
            <img src={meImage} alt="Hero Image" className="w-full h-full object-contain" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
