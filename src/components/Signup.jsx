import React from "react";
import "./Signup.css";
import Trade from "../assets/trade.png";

const Signup = () => {
  return (
    <div className="signup">
      <div className="container">
        {/* left */}
        <div className="left">
          <img src={Trade} alt="" />
        </div>

        {/* right */}
        <div className="right">
          <h2>Generate your passive income through cryptocurrency.</h2>
          <p>
            Hold your digital assets in the app and earn up to 13% annual
            rewards with no lockups or limits. Rewards are automatically paid
            out at the end of each month.
          </p>
          <div className="input-container">
            <input type="email" placeholder="Enter your email" />
            <button className="btn">Learn More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
