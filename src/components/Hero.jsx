import styled from "styled-components";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import img from "../../project-assets/img.jpg";
const Hero = () => {
  return (
    <Wrapper>
      <div>
        <div className="mx-auto max-w-7xl px-8 grid md:grid-cols-2 items-center gap-8">
          <article>
            <h1 className="text-7xl font-bold tracking-wider">
              I&apos;m <span className="text-blue-600">Koushik</span>
            </h1>
            <p className="mt-4 text-3xl text-slate-700 capitalize tracking-wide">
              Front-End-Developer
            </p>
            <p className="mt-2 text-lg text-slate-700 capitalize tracking-wide">
              turning ideas into interactive reality.
            </p>
            <div className="flex gap-x-4 mt-4">
              <a href="https://github.com/devkoushiik">
                <FaGithubSquare className="h-8 w-8 text-slate-500 hover:text-black duration-300" />
              </a>
              <a href="https://www.linkedin.com/in/devkoushiik/">
                <FaLinkedin className="h-8 w-8 text-slate-500 hover:text-black duration-300" />
              </a>
              {/* <a href="">
              <FaTwitterSquare className="h-8 w-8 text-slate-500 hover:text-black duration-300" />
            </a> */}
            </div>
          </article>

          <div className="container">
            <div className="card">
              <div className="img-container">
                <img className="rounded-2xl" src={img} alt="" />
              </div>
              <div className="card-details">
                <h2 className="text-blue-500">Hi there,</h2>
                <p className="text-sm capitalize tracking-wide font-light">
                  I am Koushik Ahmed. Thanks for visiting my portfolio, that
                  means a lot to me. Visit my Github profile for check my coding
                  skills and consistency. Have a nice day.
                </p>
              </div>
            </div>
          </div>

          {/* <article className="hidden md:block">
          <img src={img} alt="img" className="h-80 lg:h-96 rounded-3xl" />
        </article> */}
        </div>
      </div>
    </Wrapper>
  );
};
export default Hero;

const Wrapper = styled.div`
  .container {
    max-width: 1000px;
    margin: 100px auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }

  .card {
    position: relative;
    margin: 20px 0;
    width: 300px;
    height: 400px;
    background: #fff;
    transform-style: preserve-3d;
    transform: perspective(2000px);
    transition: 1s;
  }

  .card:hover {
    z-index: 1111;
    transform: perspective(2000px) rotate(-10deg);
    box-shadow: inset 20px 0 50px rgba(0, 0, 0, 0.2);
  }

  .card .img-container {
    position: relative;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    transform-origin: left;
    z-index: 1;
    transition: 1s;
  }

  .card .img-container img {
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    object-fit: cover;
  }

  .card:hover .img-container {
    transform: rotateY(-135deg);
  }

  .card .card-details {
    position: absolute;
    left: 0;
    top: 0;
    box-sizing: border-box;
    padding: 20px;
    color: #000;
  }

  .card .card-details h2 {
    margin: 0;
    padding: 0.5em 0;
    text-transform: capitalize;
    font-size: 2em;
  }

  .card .card-details p {
    margin: 0;
    padding: 0;
    line-height: 25px;
    font-size: 1.1em;
  }
`;
