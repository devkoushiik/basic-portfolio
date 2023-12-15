import styled from "styled-components";
import img from "../../project-assets/img.jpg";
import SectionTitle from "./SectionTitle";
const About = () => {
  return (
    <Wrapper>
      <section className="bg-white py-10" id="about">
        <div className="mx-auto max-w-7xl px-8 items-center gap-16 grid md:grid-cols-2">
          <div className="card">
            <img src={img} className="rounded-2xl object-cover" />
          </div>

          <article>
            <SectionTitle text={"about me"} />
            <p className="text-slate-600 mt-8 leading-loose text-lg">
              Hi, I am Koushik Ahmed.I am currently completing my undergraduate
              program in Bangladesh University Of Business and Technology.
              Beside that I am exploring new technologies. I am extremely
              passionate about coding.I hope if you need any help, i can help
              you out. Again Thanks.
            </p>
          </article>
        </div>
      </section>
    </Wrapper>
  );
};
export default About;

const Wrapper = styled.div`
  .card {
    cursor: pointer;
    width: 400px;
    background: rgb(255, 255, 255);
    border-radius: 20px;
    border: 1px solid rgba(0, 0, 255, 0.2);
    transition: all 0.2s;
    box-shadow: 12px 12px 2px 1px rgba(0, 0, 255, 0.2);
  }

  .card:hover {
    box-shadow: -12px 12px 2px -1px rgba(0, 0, 255, 0.2);
  }
`;
