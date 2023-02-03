import React from "react";
import "./home.css"
import Banner from "./banner";
import Header from "./header";
import Slide from "./slide";

const Home = () =>{
  return(
        <div className="home">
            <div>
                    <Header/>
            </div>
            <div>
                    <Banner/>
            </div>
            <div>
                    <Slide/>
           </div>
        </div>
    )

}

export default Home;