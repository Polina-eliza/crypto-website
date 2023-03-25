import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Features.css";
import BTC from '../assets/Btc-img.png';
import { FiArrowUpRight, FiArrowDown } from 'react-icons/fi';


const Features = () => {
    const [data, useData] = useState(null);

    const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=6&page=1&sparkline=false';

    useEffect(() => {
        axios.get(url).then((response) => {
            useData(response.data) // corrected function name
        }).catch((error) => {
            console.log(error)
        })
    }, [])


  return (
    <div className="Features">
      <div className="container">
        {/* Left */}
        <div className="left">
          <h2>Explore top Crypto's Like Bitcoin, Ethereum, and Dogecoin</h2>
          <p>See all available assets: Cryptocurrencies and NFT's</p>
          <button className="btn">See More Coins</button>
        </div>

        {/* Right */}
        <div className="right">
            <div className="top">
                <img src={BTC} alt="/" />
            </div>
        </div>
        <h5>Bitcoin</h5>
        <p>$30,000</p>
      </div>
      <span>
        <FiArrowUpRight />2.5%
      </span>
    </div>
  );
};

export default Features;