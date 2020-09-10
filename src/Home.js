import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_2x._CB432458382_.jpg"
          alt=""
        />
        <div className="home__row">
          <Product
            id="18328287"
            title="Start with Why: How Great Leaders Inspire Everyone to Take Action"
            price={12.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51BlNddi+NL._SY344_BO1,204,203,200_.jpg"
            rating={5}
          />

          <Product
            id={1642678}
            title="Apple iPhone XS Max, 64GB, Gold - For AT&T (Renewed)"
            price={999.99}
            image="https://m.media-amazon.com/images/I/81yMd8xSFAL._AC_UL640_FMwebp_QL65_.jpg"
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            id={768256}
            title="Kindle Paperwhite – Now Waterproof with 2x the Storage – Ad-Supported"
            price={129.99}
            image="https://m.media-amazon.com/images/I/61eAq6gg-XL._AC_UY436_FMwebp_QL65_.jpg"
            rating={5}
          />
          <Product
            id={9762739}
            title="Beats Ep Wired On-Ear Headphones - Battery Free For Unlimited Listening, Built In Mic And Controls - Red"
            price={91.0}
            image="https://m.media-amazon.com/images/I/51Gm1kSEJRL._AC_UY436_FMwebp_QL65_.jpg"
            rating={3}
          />
          <Product
            id={198623}
            title="Marshall Stanmore II Bluetooth Speaker, Brown"
            price={299.99}
            image="https://m.media-amazon.com/images/I/71fAjuDqbdL._AC_UY436_FMwebp_QL65_.jpg"
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            id={1986398}
            title="Newest Flagship Sony Play Station 4 1TB HDD Only on Playstation PS4 Console Slim Bundle - Included 3X Games (The Last of Us, God of War, Horizon Zero Dawn) 1TB Hard Drive "
            price={489.0}
            image="https://m.media-amazon.com/images/I/71ZrwxeXnXL._AC_UY436_FMwebp_QL65_.jpg"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
