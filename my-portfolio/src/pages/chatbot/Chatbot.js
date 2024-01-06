import useFadeIn from '../../effects/FadeIn/useFadeIn.js';
import Description from "./Description.js"
import Footer from '../../components/footer/Footer.js';
import Navigation from '../../components/navigation/Navigation.js';

function Chatbot () {
    const fadeIn = useFadeIn();

    return (
        <div className= {`App ${fadeIn ? 'fade-in' : ''}`}>
            <main className = "App-main">
                <Navigation />
                <Description />
                <Footer />
            </main>
        </div>
    );
}

export default Chatbot;