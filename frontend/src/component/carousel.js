import Carousel from 'react-bootstrap/Carousel';

function Slider() {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
      <img src="image1.png" style={{width: "80%", height: "auto"}} alt="image here" />
        <Carousel.Caption>
          <h3>Birotojob</h3>
          <p>Assessment Portal</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
      <img src="image2.png" style={{width: "80%", height: "auto"}} alt="image here" />
        <Carousel.Caption>
          <h3>Birotojob</h3>
          <p>Take a practice test.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src="image3.png" style={{width: "80%", height: "auto"}} alt="image here" />
        <Carousel.Caption>
          <h3>Birotojob</h3>
          <p>
            Get your result instantly.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;