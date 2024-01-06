import "./description.css"
import { chatbot } from '../../assets/Images.js';

function Description () {
    return (
        <div className = "paddingGlobal">
            <div className = "largeContainer">
                <div className = "projectContainer paddingSection-M">

                    <div className = 'chatbotDetails'>
                        <div className = "textSizeM">AI Customer Support Chatbot</div>
                        <div className = "textSizeS textStyleMuted">
                            <div>Company: Sigparser</div>
                            <div>2023-Present</div>
                        </div>
                        <div className = "chatbotDescription textSizeS">
                            Working to enhance SigParser's customer support capabilities, ,my team and I have successfully 
                            mitigated staff shortage challenges by deploying an AI Chatbot. This innovative 
                            solution has been meticulously trained using data extracted through web scraping 
                            from SigParser's comprehensive documentation. To optimize functionality and 
                            cost-efficiency, the Chatbot operates on a robust AWS infrastructure. Effectively 
                            reducing operational expenses while securely housing the collected data.
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