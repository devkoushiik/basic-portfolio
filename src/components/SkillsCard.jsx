import { motion } from "framer-motion";
const cardVariants = {
  offscreen: {
    y: 200,
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
const SkillsCard = ({ icon, title, text }) => {
  return (
    <motion.div
      className="card  w-96 grid shadow-md"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
    >
      <figure className="mt-8">
        <motion.span variants={cardVariants} className="text-blue-500">
          {icon}
        </motion.span>
      </figure>
      <div className="card-body">
        <h2 className="card-title text-blue-500">{title}</h2>
        <p className="text-slate-500">{text}</p>
      </div>
    </motion.div>
  );
};
export default SkillsCard;

{
  /* <article>
<span className="h-16 w-16 text-blue-500">{icon}</span>
<h4 className="mt-6 font-bold">{title}</h4>
<p className="mt-2 text-slate-500">{text}</p>
</article> */
}
