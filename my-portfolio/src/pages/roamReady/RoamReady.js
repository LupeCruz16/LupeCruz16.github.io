import { roamReady } from '../../assets/Images.js';
import { ReactSVGIcon } from '../../assets/SVGs.js';
import useFadeIn from '../../effects/FadeIn/useFadeIn.js';
import Footer from '../../components/footer/Footer.js';
import Navigation from '../../components/navigation/Navigation.js';
import Description from '../../components/projectDescription/Description.js';

function RoamReady () {
    const fadeIn = useFadeIn();

    return (
        <div className= {`App ${fadeIn ? 'fade-in' : ''}`}>
            <main className = "App-main">
                <Navigation />
                <Description 
                    title = "AI Customer Support Chatbot"
                    duration = "2023"
                    description =  "RoamReady, conceived as a class project, was designed to inspire students to identify real-world problems and develop websites to address them. At its core, RoamReady employs a combination of HTML, CSS, JavaScript, PHP, and SQL to create an engaging and interactive experience. The platform's standout feature is its ability to help users discover new travel destinations through a randomized selection process, adding an element of surprise and excitement to travel planning."
                    svg = {<ReactSVGIcon />}
                    imageSrc = {roamReady}
                />
                <Footer />
            </main>
        </div>
    );
}

export default RoamReady;