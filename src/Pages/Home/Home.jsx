import About from '../About/About';
import Banner from '../Banner/Banner'
import Projects from '../Projects/Projects';
import Skills from '../Skills/Skills';

const Home = () => {
    return (
        <div>
            <Banner/>
            <About/>
            <Skills/>
            <Projects/>
        </div>
    );
};

export default Home;