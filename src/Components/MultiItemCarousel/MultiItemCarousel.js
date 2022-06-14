import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./MultiItemCarousel.css";
import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";
import axios from "../../api/axios";
import { useNavigate,Link } from "react-router-dom";

const PreviousBtn = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowBackIos style={{ color: "blue", fontSize: "30px" }} />
    </div>
  );
};
const NextBtn = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowForwardIos style={{ color: "blue", fontSize: "30px" }} />
    </div>
  );
};

const carouselProperties = {
  prevArrow: <PreviousBtn />,
  nextArrow: <NextBtn />,
  slidesToShow: 3,
  // infinite={false}
  // slidesToScroll={3}
  centerMode: true,
  centerPadding: "170px",
  autoplay: true,
  adaptiveHeight: true,
  autoplaySpeed: 2000,
  pauseOnHover: true,
  responsive: [
    {
      breakpoint: 426,
      settings: {
        slidesToShow: 1,
        centerMode: false,
      },
    },
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 3,
        centerMode: false,
      },
    },
    {
      breakpoint: 1025,
      settings: {
        slidesToShow: 4,
        centerMode: false,
        slidesToScroll: 2,
      },
    },
  ],
};

const MultiItemCarousel = () => {

  const history = useNavigate();
  const [multiData, setMultiData] = useState([]);


  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios.get("/machines")
      .then(response => {
        console.log("Machines list", response.data);
        setMultiData(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }
  const handleAddToCart = () => {
   history("/login")
}



  return (
    <div className="carousel1">
      <h1>Agriculture Machines</h1>
      <Slider {...carouselProperties}>
        {
          multiData.map((item) => (
            <div className="col-md-4 mb-4 mt-0" key={item.id}>
              <div className="card h-50 text-center " 
               style={{
                textAlign: "center",
                margin: 10,
                // padding: "0 10px",
                width: "90%",
                boxShadow: "0 1px 6px 0 rgb(32 33 36 / 28%)",
                borderRadius: 7,
            }}>
                <Link to={`/login`}>
                  <img src={item.image} className="card-img-top" alt={item.name} height="200px" /></Link>
                <div className="card-body">
                  <Link to={"/login"} style={{ textDecoration: "none", color: "black" }}>
                    <h5 className="card-title mb-0">{item.name.substring(0, 12)}</h5>
                    <p className="card-text lead fw-bold mb-0">{item.sell_price}₹</p>
                  </Link>
                  <div className="btn btn-primary" onClick={() => { handleAddToCart() }} > Add to Cart</div>
                </div>
              </div>
            </div>
          ))}
      </Slider>
    </div>
  );
};

export default MultiItemCarousel;
