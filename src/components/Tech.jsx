/* eslint-disable react-refresh/only-export-components */
import { motion } from "framer-motion";
import { technologies } from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";
import { BallCanvas } from "./canvas";
const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()} className="mb-12">
        <p className={styles.sectionSubText}>what i can</p>
        <h2 className={styles.sectionHeadText}>Skills 👇</h2>
      </motion.div>
      <div className="flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((technology) => {
          return (
            <div className="w-40 h-40" key={technology.name}>
              <BallCanvas icon={technology.icon} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "");
