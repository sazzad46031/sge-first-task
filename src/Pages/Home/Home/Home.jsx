
import Banner from "../Banner/Banner";
import Connection from "../Connection/Connection";
import Contact from "../Contact/Contact";
import Counter from "../Counter/Counter";


import Tab from "../Tab/Tab";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Tab></Tab>
            <Connection></Connection>
            <Contact></Contact>
            <Counter></Counter>
        </div>
    );
};

export default Home;