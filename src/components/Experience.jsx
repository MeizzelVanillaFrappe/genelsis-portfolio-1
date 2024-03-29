import { VerticalTimeline, VerticalTimelineElement} from "react-vertical-timeline-component";
import {motion} from "framer-motion";

import "react-vertical-timeline-component/style.min.css";
import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ExperienceCard = ({ experience })  => (
  <VerticalTimelineElement
      contentStyle={{ background: "#1d1836", color: "#fff"}}
      contentArrowStyle={{ borderRight: "7px solid #232631"}}
      date={experience.date}
      iconStyle={{ background: experience.iconBg}}
      icon={
        <div className="flex justify-center items-center w-full h-full">
         <img
            src={experience.icon}
            alt={experience.company_name}
            className="w-[90%] h-[90%] object-contain"
         />
        </div>
      }
   >
    <div>
      <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
      <p
          className='text-secondary text-[16px] font-semibold'
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
    </div>

    <ul className="mt-5 list-disc ml-5 space-y-2">
      {experience.points.map((point, index) => (
        <li
          key={`experience-point-${index}`}
          className="text-white-100 text-[14px] pl-1 tracking-wider"
        >

          {point}


        </li>

      ))}
    </ul>
  </VerticalTimelineElement>
  )


const Experience = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
    <p className={styles.sectionSubText}>What I Have Done So far</p>
    <h2 className={styles.sectionHeadText}>Work Experience.</h2>
    
  </motion.div>

  <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        I've worked with all sorts of companies, to level up and test my programming knowledge.
        And to practice my English communication skills. <br/>Here's the rundown:
      </motion.p>


  <div className="mt-20 flex flex-col">
    <VerticalTimeline>
       {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />

       ))}
    </VerticalTimeline>
  </div>
  </>
  )
}

export default SectionWrapper (Experience, "work");