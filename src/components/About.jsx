/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";

function ServiceCard(props) {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * [props.index], 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[15px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img
            src={props.icon}
            alt={props.title}
            className="w-16 h-16 object-contain"
          />
          <h3 className="text-white text-[20px] font-bold text-center">
            {props.title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Hello, I&apos;m Awab Mohamed. A seasoned full-stack developer with 4
        years of hands-on experience in crafting websites and applications. I
        thrive on the creative process of bringing ideas to life through code.
        Passionate about building intuitive and user-friendly sites and apps
        that leave a lasting impression. Let&apos;s turn your vision into a
        digital reality.
      </motion.p>
      <div className=" mt-20 mb-20 flex flex-wrap  gap-10">
        {services.map((service, index) => {
          return (
            <ServiceCard
              title={service.title}
              key={index}
              index={index}
              {...service}
            />
          );
        })}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
