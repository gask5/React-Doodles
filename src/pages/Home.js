import Section from "../components/Section";
import Paragraph from "../components/Paragraph";
import Title from "../components/Title";
import Container from "../components/Container";
import doodle1 from "./doodle1.png";
import doodle2 from "./doodle2.png";
import doodle3 from "./doodle3.png";
import doodle4 from "./doodle4.png";




function Home() {
  return (
    <>
      <Container content={
      <div>
        <Section content={<Title text="Lorem Ipsum" />}></Section>
        <Section
        background={"rgba(255, 255, 255,1.0)"}
          content={
            <Paragraph
              img={doodle1}
              content={
                <div>
                  <h1>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...</h1>
                  "There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..."
                </div>
              }
            />
          }
        />
        <svg className = "topSvg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="rgba(238, 251, 252,1)" fill-opacity="1" d="M0,256L48,218.7C96,181,192,107,288,117.3C384,128,480,224,576,245.3C672,267,768,213,864,181.3C960,149,1056,139,1152,122.7C1248,107,1344,85,1392,74.7L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
        <Section
          background={"rgba(86, 212, 227,0.1)"}
          content={
            <Paragraph
              content={
                <div>
                  <h1 style={{textAlign: 'center'}}>What is Lorem Ipsum?</h1>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                </div>
              }
            />
          }
        />
        <svg className="bottomSvg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="rgba(86, 212, 227,0.1)" fill-opacity="1" d="M0,160L60,138.7C120,117,240,75,360,69.3C480,64,600,96,720,106.7C840,117,960,107,1080,117.3C1200,128,1320,160,1380,176L1440,192L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg>
        <Section
          content={
            <Paragraph
              img={doodle2}
              direction="reverse"
              content={
                <div>
                  <div>
                    <h1>Where does it come from?</h1>
                    <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>
                  </div>
                  <div>
                    <h1>Why do we use it?</h1>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                  </div>
                </div>
              }
            />
          }
        />
        <svg className="topSvg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="rgba(252, 240, 247,1)" fill-opacity="1" d="M0,192L40,165.3C80,139,160,85,240,90.7C320,96,400,160,480,192C560,224,640,224,720,213.3C800,203,880,181,960,181.3C1040,181,1120,203,1200,218.7C1280,235,1360,245,1400,250.7L1440,256L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path>
          </svg>
        <Section
          background={"rgba(227, 109, 172,0.1)"}
          content={
            <Paragraph
              img={doodle3}
              content={
                <div>
                  <div>
                    <h1>Where does it come from?</h1>
                    <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>
                  </div>
                  <div>
                    <h1>Why do we use it?</h1>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                  </div>
                </div>
              }
            />
          }
        />   
      </div>}/>  
    </>
  );
}

export default Home;
