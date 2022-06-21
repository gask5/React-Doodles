import Section from "../components/Section";
import Paragraph from "../components/Paragraph";
import Title from "../components/Title";
import Container from "../components/Container";


function About() {
    return (
        <>
            <Container content={
                <Section content={<Title text="About" />}></Section>
            }/>
        </>
    );
}
export default About;
