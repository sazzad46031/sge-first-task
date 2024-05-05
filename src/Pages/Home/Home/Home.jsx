
import Banner from "../Banner/Banner";
import Connection from "../Connection/Connection";
import Contact from "../Contact/Contact";
import Counter from "../Counter/Counter";
import Footer from "../Footer/Footer";


import Tab from "../Tab/Tab";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Tab></Tab>
            <Connection></Connection>
            <Contact></Contact>
            <Counter></Counter>
            <Footer></Footer>
        </div>
    );
};

export default Home;