import { AWSSVGIcon } from '../../assets/SVGs.js'
import { chatbot } from '../../assets/Images.js'
import useFadeIn from '../../effects/FadeIn/useFadeIn.js';
import Footer from '../../components/footer/Footer.js';
import Navigation from '../../components/navigation/Navigation.js';
import Description from '../../components/projectDescription/Description.js';

function Chatbot () {
    const fadeIn = useFadeIn();

    return (
        <div className= {`App ${fadeIn ? 'fade-in' : ''}`}>
            <main className = "App-main">
                <Navigation />
                <Description 
                    title = "AI Customer Support Chatbot"
                    company = "SigParser"
                    duration = "Ongoing since 2023"
                    description =  "Working to enhance SigParser's customer support capabilities, my team and I have successfully mitigated staff challenges by deploying an AI Chatbot. This innovative solution has been meticulously trained using data extracted through web scraping from SigParser's comprehensive documentation. To optimize functionality and cost-efficiency, the Chatbot operates on a robust AWS infrastructure. Effectively reducing operational expenses while securely housing the collected data."
                    svg = {<AWSSVGIcon />}
                    imageSrc = {chatbot}
                />
                <Footer />
            </main>
        </div>
    );
};

export default Chatbot;