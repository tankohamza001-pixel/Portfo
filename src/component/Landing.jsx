import React from "react";

export default function LandingPage() {
  return (
    <section
      id="mainPage"
      className="mainPage min-vh-100 d-flex align-items-center"
    >
      <div className="container">
        <div className="row king">
          <div className="col-lg-6 d-flex flex-column justify-content-center text-start order-2 order-lg-1">
            <h1 data-aos="fade-up">MUFTI HAMXHA COLLECTION</h1>

            <h2 data-aos="fade-up" data-aos-delay="400">
              
            </h2>

            <div
              data-aos="fade-in"
              data-aos-delay="600"
              className="d-flex flex-row gap-4"
            >
              <div className="text-center text-lg-start mt-4">
                <a
                  href="/product"
                  className="btn btn-lg text-uppercase bg-warning rounded-5 scrollto d-inline-flex align-items-center justify-content-center align-self-center"
                >
                  VIEW MY JALLABIYAS
  </a>
</div>

<div className="text-center text-lg-start mt-4">
  <a
    href="/intouch"
    className="btn btn-lg text-uppercase rounded-5 btn-outline-warning scrollto d-inline-flex align-items-center justify-content-center align-self-center"
  >
                  Get In Touch
                </a>
              </div>
            </div>
          </div>
          <div
            className="col-lg-6 hero-img uper order-lg-1 order-1"
            data-aos="zoom-out"
            data-aos-delay="200"
          >
            <h4 className="d-lg-none img-head"></h4>
            <img src="/logo.jpg" className="img-fluid" alt="Jewelry Display" />
          </div>
        </div>
      </div>
    </section>
  );
}
