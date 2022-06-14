import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./SpecialOffers.css";
import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";
import { useNavigate, Link } from "react-router-dom";
import axios from "../../api/axios";

const PreviousBtn = (props) => {
    // console.log(props);
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

const SpecialOffers = () => {
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
        <div className="carousel">
            <h1 >Special Offers</h1>
            <div
                className="BootstrapMulti"
                style={{ display: "flex", justifyContent: "center", marginTop: 20 }}
            >
                <div style={{ width: "90%" }}>
                    <Slider
                        prevArrow={<PreviousBtn />}
                        nextArrow={<NextBtn />}
                        slidesToShow={4}
                        slidesToScroll={3}
                        autoplaySpeed={2000}
                        autoplay={true}
                    //   dots
                    >
                        {
                            multiData.map((item) =>
                            (
                                <div className="col-md-4 mb-5" key={item.id}>
                                    <div className="card h-60 text-center"
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
                                                <h6 className="card-title mb-0">{item.discount}%</h6>
                                                <h3 className="card-text lead fw-bold mb-0">{item.sell_price}₹</h3>
                                            </Link>
                                            <div className="btn btn-primary" onClick={() => { handleAddToCart() }} > Add to Cart</div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                    </Slider>
                </div>
            </div>
        </div>
    );
};


export default SpecialOffers;