import "./description.css"
import useFadeIn from '../../effects/FadeIn/useFadeIn.js';
import { chatbot } from '../../assets/Images.js';

function Description () {
    const fadeIn = useFadeIn();

    return (
        <div className = "paddingGlobal">
            <div className = {`largeContainer ${fadeIn ? 'fade-in' : ''}`}>
                <div className = "projectContainer paddingSection-M">

                    <div className = 'chatbotDetails'>
                        <div className = "textSizeM">AI Customer Support Chatbot</div>
                        <div className = "chatbotDescription textSizeS">
                            This project is designed to collect and analyze SigParser's existing 
                            clientele support articles, with the goal of training an advanced AI Chatbot. 
                            This initiative will significantly enhance the efficiency and responsiveness 
                            of SigParser's client services.
                        </div>
                    </div>
                    <div className = "chatbotImageWrapper">
                        <img src = {chatbot} loading = "lazy" className = "chatbotImage" alt = "Chatbot"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Description;