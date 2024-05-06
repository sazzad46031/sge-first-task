
import Banner from "../Banner/Banner";
import Connection from "../Connection/Connection";
import Contact from "../Contact/Contact";
import Counter from "../Counter/Counter";
import DestinationCard from "../DestinationCard/DestinationCard";



import Tab from "../Tab/Tab";
import Testimonial from "../Testimonial/Testimonial";
import Ticker from "../Ticker/Ticker";
import UniversityList from "../UniversityList/UniversityList";

const Home = () => {
    return (
        <main>
            <Banner></Banner>
            <Tab></Tab>
            <Counter></Counter>
            <Ticker></Ticker>
            <Testimonial></Testimonial>
            <Connection></Connection>
            <DestinationCard></DestinationCard>
            <UniversityList></UniversityList>
            <Contact></Contact>
        </main>
    );
};

export default Home;