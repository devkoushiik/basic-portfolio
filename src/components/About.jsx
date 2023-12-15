import styled from "styled-components";
import img from "../../project-assets/img.jpg";
import SectionTitle from "./SectionTitle";
const About = () => {
  return (
    <Wrapper>
      <section className="bg-white py-10" id="about">
        <div className="mx-auto max-w-7xl px-8 items-center gap-16 grid md:grid-cols-2">
          <div className="container">
            <div className="box">
              <div className="imgBox">
                <img src={img} alt="img" />
              </div>
              <div className="content">
                <h2>
                  Koushik Ahmed <br />
                  <span>JS Developer.</span>
                </h2>
              </div>
            </div>
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
  .container {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }

  .container .box {
    position: relative;
    width: 30rem;
    height: 30rem;
    margin: 4rem;
  }

  .container .box:hover .imgBox {
    transform: translate(-3.5rem, -3.5rem);
  }

  .container .box:hover .content {
    transform: translate(3.5rem, 3.5rem);
  }

  .imgBox {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
    transition: all 0.5s ease-in-out;
  }

  .imgBox img {
    width: 30rem;
    height: 30rem;
    object-fit: cover;
    resize: both;
  }

  .content {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 1.5rem;
    display: flex;
    justify-content: center;
    background-color: #70b7f152;
    z-index: 1;
    align-items: flex-end;
    text-align: center;
    transition: 0.5s ease-in-out;
  }

  .content h2 {
    display: block;
    font-size: 2rem;
    color: #111;
    font-weight: 500;
    line-height: 2rem;
    letter-spacing: 1px;
  }

  .content span {
    color: #555;
    font-size: 1.4rem;
    font-weight: 300;
    letter-spacing: 2px;
  }

  @media (max-width: 600px) {
    .container .box:hover .content {
      transform: translate(0, 3.5rem);
    }
    .container .box:hover .imgBox {
      transform: translate(0, -3.5rem);
    }
  }
`;
