import Carousel from 'react-bootstrap/Carousel';

export const Carousels = ({img1,img2,img3,img4,img5}) => {
    return (
    <div>
        <Carousel>
            <Carousel.Item>
                <img className="d-block w-100" src= {img1} alt="First slide" />
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100" src= {img2} alt="Second slide" />
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100" src= {img3} alt="Third slide" />
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100" src= {img4} alt="Fourth slide" />
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100" src= {img5} alt="Fifth slide" />
            </Carousel.Item>
        </Carousel>
    </div>
)}