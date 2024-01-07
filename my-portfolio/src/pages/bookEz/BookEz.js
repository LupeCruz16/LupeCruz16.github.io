import { bookez } from '../../assets/Images.js';
import { JavaSVGIcon } from '../../assets/SVGs.js';
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
                    title = "Bookkeeping Management Tool"
                    duration = "Spanning 2022-2023"
                    description =  "BookEz is an innovative solution crafted to streamline the bookkeeping process for eBay sellers, a challenge I've personally experienced. Developed collaboratively by diverse teams, this app is dedicated to significantly reducing the hours spent on bookkeeping tasks. Crafted exclusively using Java and enhanced with Apache PDFBox for efficient document management, BookEz stands as a testament to our commitment to solve real-world problems through targeted technological interventions."
                    svg = {<JavaSVGIcon />}
                    imageSrc = {bookez}
                />
                <Footer />
            </main>
        </div>
    );
}

export default RoamReady;