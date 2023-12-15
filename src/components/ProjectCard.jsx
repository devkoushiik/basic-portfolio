import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";
import { motion } from "framer-motion";
const cardVariants = {
  offscreen: {
    y: 50,
  },
  onscreen: {
    y: 1,
    rotate: 0,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};
const ProjectCard = ({ url, img, github, title, text }) => {
  return (
    <article className="bg-white rounded-lg shadow-md hover:shadow-xl duration-300 ">
      <img
        src={img}
        alt={title}
        className="w-full object-cover rounded-t-lg h-64"
      />
      <div className="capitalize p-8">
        <h2 className="text-xl tracking-wide font-medium text-blue-500">
          {title}
        </h2>
        <p className="mt-4 text-slate-700 leading-loose">{text}</p>
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }}
          className="mt-4 flex gap-x-4"
        >
          <motion.a variants={cardVariants} href={url}>
            <TbWorldWww className="h-8 w-8 text-slate-500 hover:text-black duration-300" />
          </motion.a>
          <motion.a variants={cardVariants} href={github}>
            <FaGithubSquare className="h-8 w-8 text-slate-500 hover:text-black duration-300" />
          </motion.a>
        </motion.div>
      </div>
    </article>
  );
};
export default ProjectCard;
