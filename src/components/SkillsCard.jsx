import styled from "styled-components";
const SkillsCard = ({ icon, title, text }) => {
  return (
    <div className="card w-96 grid shadow-xl">
      <figure className="mt-8">
        <span className="text-blue-500">{icon}</span>
      </figure>
      <div className="card-body">
        <h2 className="card-title text-blue-500">{title}</h2>
        <p className="text-slate-500">{text}</p>
      </div>
    </div>
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
