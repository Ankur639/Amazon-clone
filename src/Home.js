import React from "react";
import "./Home.css";
import Product from "./Product";
//
function Home() {
  return (
    <div className="home">
      <img
        className="home_image"
        src="https://vidooly.com/blog/wp-content/uploads/2019/10/best-amazon-prime-original-web-series.jpg"
        alt=""
      />
      <div className="home__row">
        <Product
          id="12321341"
          title="The Lean Startup:Constant Innovation"
          price={11.96}
          rating={3}
          image="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg"
        />

        <Product
          id="12321342"
          title="DS ALGO BOOK"
          price={315}
          rating={5}
          image="https://www.docdroid.net/file/view/ZPfHmS5/data-structures-and-algorithms-narasimha-karumanchi-pdf.jpg"
        />
      </div>

      <div className="home__row">
        <Product
          id="12321343"
          title="Mixer Grinder"
          price={1500}
          rating={7}
          image="https://www.myborosil.com/media/catalog/product/cache/83d1798589160ed719728cafde2f5745/a/3/a3_borosil_kitchen_appliances_mixer_grinder_mixergrinder_blender_chutney_starmaroon.jpg"
        />

        <Product
          id="12321344"
          title="IPhone XR"
          price={53000}
          rating={8}
          image="https://rukminim1.flixcart.com/image/832/832/jnj7iq80/mobile/u/a/p/apple-iphone-xr-mryg2hn-a-original-imafa6zkzyntrt3t.jpeg?q=70"
        />

        <Product
          id="12321345"
          title="One Plus 8"
          price={42000}
          rating={9}
          image="https://images-na.ssl-images-amazon.com/images/I/619iTNHSCGL._SL1500_.jpg"
        />
      </div>

      <div className="home__row">
        <Product
          id="12321346"
          title="India 2020"
          price={200}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/51XxhGgSKUL._SX332_BO1,204,203,200_.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
