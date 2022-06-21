import Section from "../components/Section";
import Paragraph from "../components/Paragraph";
import Title from "../components/Title";
import Container from "../components/Container";

function Home() {
    return (
        <>
            <Container content={
                <Section content={<Title text="My Contacts" />}></Section>
            }/>
        </>
    );
}

export default Home;
