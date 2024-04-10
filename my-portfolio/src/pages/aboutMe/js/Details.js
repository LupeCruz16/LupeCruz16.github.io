import '../css/details.css'

function Details () {

    return (
        <div className="breakout">
        {/* Row 1 - Text on Left, Image on Right */}
        <div className="grid-item text-item">
            <p>Your text here for the first item</p>
        </div>
        <div className="grid-item image-item">
            {/* <img src={image1} alt="Description of Image 1" /> */}
        </div>

        {/* Row 2 - Image on Left, Text on Right */}
        <div className="grid-item image-item">
            {/* <img src={image2} alt="Description of Image 2" /> */}
        </div>
        <div className="grid-item text-item">
            <p>Your text here for the second item</p>
        </div>

        {/* Row 3 - Text on Left, Image on Right */}
        <div className="grid-item text-item">
            <p>Your text here for the third item</p>
        </div>
        <div className="grid-item image-item">
            {/* <img src={image3} alt="Description of Image 3" /> */}
        </div>
        </div>
    )
}

export default Details;