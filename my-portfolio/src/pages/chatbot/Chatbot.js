import useFadeIn from '../../effects/FadeIn/useFadeIn.js';
import Description from "./Description.js"

function Chatbot () {
    const fadeIn = useFadeIn();

    return (
        <div className= {`App ${fadeIn ? 'fade-in' : ''}`}>
            <main className = "App-main">
                <Description />
            </main>
        </div>
    );
}

export default Chatbot;