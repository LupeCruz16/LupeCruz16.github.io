import "./description.css"
import { roamReady } from '../../assets/Images.js';

function Description () {
    return (
        <div className = "paddingGlobal">
            <div className = "largeContainer">
                <div className = "roamProjectContainer paddingSection-M">

                    <div className = 'roamDetails'>
                        <div className = "textSizeM">Random Trip Location Generator</div>
                        <div className = "textSizeS textStyleMuted">
                            <div>2023</div>
                        </div>
                        <div className = "roamDescription textSizeS">
                            Working to enhance SigParser's customer support capabilities, ,my team and I have successfully 
                            mitigated staff shortage challenges by deploying an AI Chatbot. This innovative 
                            solution has been meticulously trained using data extracted through web scraping 
                            from SigParser's comprehensive documentation. To optimize functionality and 
                            cost-efficiency, the Chatbot operates on a robust AWS infrastructure. Effectively 
                            reducing operational expenses while securely housing the collected data.
                        </div>
                    </div>
                    <div className = "roamImageWrapper">
                        <img src = {roamReady} loading = "lazy" className = "roamImage" alt = "RoamReady"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Description;