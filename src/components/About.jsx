import styled from "styled-components";
import img from "../../project-assets/img.jpg";
import SectionTitle from "./SectionTitle";
const About = () => {
  return (
    <Wrapper>
      <section className="bg-white mx-auto max-w-7xl px-8" id="about">
        <SectionTitle text={"About Me"} />
        <div className="px-8 mt-4 mx-auto max-w-7xl  items-center gap-16 grid md:grid-cols-2">
          <div className="container">
            <div className="box w-[18rem] h-[18rem] md:w-[26rem] md:h-[26rem] mt-12">
              <div className="imgBox">
                <img
                  className="w-[18rem] h-[18rem] md:w-[26rem] md:h-[26rem]"
                  src={img}
                  alt="img"
                />
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
            <h2 className="text-2xl text-blue-400 capitalize hover:text-blue-500">
              Some information
            </h2>
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
    flex-wrap: wrap;
  }

  .container .box {
    position: relative;
    /* width: 26rem;
    height: 26rem; */
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
    /* width: 26rem;
    height: 26rem; */
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
    font-size: 1.5rem;
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
