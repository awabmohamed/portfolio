/* eslint-disable react-refresh/only-export-components */
import { motion } from "framer-motion";
import { testimonials } from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";

// eslint-disable-next-line react/prop-types
const FeedbackCard = ({ index, title, testimonial, image }) => {
  return (
    <motion.div
      variants={fadeIn("", "spring", index * 0.5, 0.75)}
      className="bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full"
    >
      <p className="text-white font-black text-[30px]">{title}</p>
      <div className="mt-1">
        <p>{testimonial}</p>
        <div className="mt-7 flex justify-center items-center gap-1">
          <img src={image} alt={title} className="w-15 h-15 rounded-full" />
        </div>
      </div>
    </motion.div>
  );
};

const Feedbacks = () => {
  return (
    <div className="mt-12 bg-black-100 rounded-[20px]">
      <div
        className={[styles.padding] + " bg-tertiary rounded-2xl min-h-[300px]"}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>
            The values that i can add to your project
          </p>
          <h2 className={styles.sectionHeadText}>Expertise.</h2>
        </motion.div>
      </div>
      <div className={[styles.paddingX] + " -mt-20 pb-14 flex flex-wrap gap-7"}>
        {testimonials.map((testimonial, index) => {
          return (
            <FeedbackCard
              key={testimonial.name}
              index={index}
              {...testimonial}
            />
          );
        })}
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");
