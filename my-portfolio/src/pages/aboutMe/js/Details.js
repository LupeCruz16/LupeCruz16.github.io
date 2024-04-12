import '../css/details.css'

function Details () {

    return (
        <div className="breakout">
        {/* Row 1 */}
        <div className="details-grid-item textSizeS">
            Recently I've been trying to go to a concert at least once a year. 
            This time we saw ____.
        </div>
        <div className="details-grid-item details-image-item">
            {/* <img src={image1} alt="Description of Image 1" /> */}
        </div>

        {/* Row 2 */}
        <div className="details-grid-item details-image-item">
            {/* <img src={image2} alt="Description of Image 2" /> */}
        </div>
        <div className="details-grid-item textSizeS">
            Museums are also a must, especially the dinosaur related ones.
        </div>

        {/* Row 3 */}
        <div className="grid-item textSizeS">
            I spend a lot of time at my computer, so touching grass is always good.
        </div>
        <div className="details-grid-item details-image-item">
            {/* <img src={image3} alt="Description of Image 3" /> */}
        </div>
        </div>
    )
}

export default Details;