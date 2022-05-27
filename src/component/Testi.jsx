import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const Testi = () => (
    <div>
      <div className="container-fluid grid-service grid-service1">
        <div className="row">
          <div className="col-sm text-center">
            {" "}
            <br />
            <h3>
              <b>Testimonial</b>
            </h3>
            <p className="pt-2">
              Berbagai review positif dari para pelanggan kami
            </p>
          </div>
        </div>
      </div>
      <OwlCarousel items={2} className="owl-theme" loop center margin={10} nav>
      <div class="item">
        <div class="row testi">
          <div class="col-md-4 gambar">
          <img src="image/ibnu.png" class="rounded-circle" style={{ width: "100px", margin: "auto" }}/>
          </div>
          <div class="col-md-8" style={{ marginTop: "1rem" }}>
            <img src="image/rate.png" style={{ width: "22%" }} class="bintang"/>
            <p style={{ marginTop: "10px" }}>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
              sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, 
              sed do eiusmod lorem ipsum dolor sit amet, 
              consectetur adipiscing elit, sed do eiusmod”</p>
            <h5>John Dee 32, Bromo</h5>
          </div>
        </div>
      </div>
      <div class="item">
        <div class="row testi">
          <div class="col-md-4 gambar">
          <img src="image/brembo.png" class="rounded-circle" style={{ width: "100px", margin: "auto" }}/>
          </div>
          <div class="col-md-8" style={{ marginTop: "1rem" }}>
            <img src="image/rate.png" style={{ width: "22%" }} class="bintang"/>
            <p style={{ marginTop: "10px" }}>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
              sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, 
              sed do eiusmod lorem ipsum dolor sit amet, 
              consectetur adipiscing elit, sed do eiusmod”</p>
            <h5>John Dee 32, Bromo</h5>
          </div>
        </div>
      </div>
      <div class="item">
        <div class="row testi">
          <div class="col-md-4 gambar">
          <img src="image/yaoming.png" class="rounded-circle" style={{ width: "100px", margin: "auto" }}/>
          </div>
          <div class="col-md-8" style={{ marginTop: "1rem" }}>
            <img src="image/rate.png" style={{ width: "22%" }} class="bintang"/>
            <p style={{ marginTop: "10px" }}>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
              sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, 
              sed do eiusmod lorem ipsum dolor sit amet, 
              consectetur adipiscing elit, sed do eiusmod”</p>
            <h5>John Dee 32, Bromo</h5>
          </div>
        </div>
      </div>
      </OwlCarousel>
      ;
    </div>
    );

export default Testi;
