import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./banner.css"


import Bnar2 from "./assets/slide/list4.jpg"
import Bnar3 from "./assets/slide/list8.png"
import Bnar4 from "./assets/slide/slide1.jpg"
import Bnar5 from "./assets/slide/slide2.jpg"
import Bnar6 from "./assets/slide/slide3.jpg"

import Bnar8 from "./assets/body/body1.jpg"
import Bnar9 from "./assets/body/body3.jpg"
import Bnar10 from "./assets/body/body4.jpg"

const Slide = () =>{
   
                const settings = {
                dots: true,
                infinite: true,
                slidesToShow: 2,
                slidesToScroll: 1,
                autoplay: true,
                speed: 2000,
                autoplaySpeed: 2000,
                };
                const list = [
                
                    {
                        key:2,
                        title:"Battlefield 5",
                        description:"Unrgui tatah site",
                        title2:"tatah bol holboos deer darna uu",
                        img: Bnar2,
            
                    },
                    {
                        key:3,
                        title:"Battlefield 5",
                        description:"Unrgui tatah site",
                        title2:"tatah bol holboos deer darna uu",
                        img: Bnar3,
            
                    },
                    {
                        key:4,
                        title:"Battlefield 5",
                        description:"Unrgui tatah site",
                        title2:"tatah bol holboos deer darna uu",
                        img: Bnar4,
            
                    },
                    {
                        key:5,
                        title:"Battlefield 5",
                        description:"Unrgui tatah site",
                        title2:"tatah bol holboos deer darna uu",
                        img: Bnar5,
            
                    },
                    {
                        key:6,
                        title:"Battlefield 5",
                        description:"Unrgui tatah site",
                        title2:"tatah bol holboos deer darna uu",
                        img: Bnar6,
            
                    },
                    {
                        key:8,
                        title:"Battlefield 5",
                        description:"Unrgui tatah site",
                        title2:"tatah bol holboos deer darna uu",
                        img: Bnar8,
            
                    },
                    {
                        key:9,
                        title:"Battlefield 5",
                        description:"Unrgui tatah site",
                        title2:"tatah bol holboos deer darna uu",
                        img: Bnar9,
            
                    },
                    {
                        key:10,
                        title:"Battlefield 5",
                        description:"Unrgui tatah site",
                        title2:"tatah bol holboos deer darna uu",
                        img: Bnar10,
            
                    },
                ];
                
                return (
                    
                <div className="banner">
                            <h2>Tawlan suuj  togloomoo tataarai</h2>
                            <h1>THEPCGAMES.NET</h1>
                            
                     <div className="banners">
                        
                                <Slider {...settings}>
                                {
                            list.map((row)=>(
                            <div className="bane">
                                    <img src={row.img} alt={row.title} />
                                    
                                    <p>{row.description}</p>
                                    <h3>{row.title2}</h3>
                            </div>
                            
                                    ))
                                }
                                </Slider>
                            </div>
                   
                    
                </div>
                );
            }
        

export default Slide
