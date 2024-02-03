import React from "react";
import styled from "./Hero.module.css";

function Hero() {
  return (
    <main className={styled.hero}>
      <div className={styled.hero_content}>
        <h1>YES ADIDAS IS YOUR FIRST CHOICE</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s,Lorem Ipsum is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s,
        </p>

        <div className={styled.herobtn}>
          <button className={styled.shopbtn}>SHOP NOW</button>
          <button className={styled.secondbtn}>CATEGORY</button>
        </div>

        <div className={styled.shopping}>
          <p>Also Available</p>
          <div className={styled.social}>
            <img src="/images/p11.png" alt="instagram" />
            <img src="/images/12.png" alt="facebook" />
          </div>
        </div>
      </div>
      <div className={styled.hero_img}>
        <img src="/images/tshirt.png" alt="t-shirt img" />
      </div>
    </main>
  );
}
export default Hero;
