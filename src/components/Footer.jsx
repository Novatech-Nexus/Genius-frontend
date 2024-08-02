// import React from 'react';

const Footer = () => {
  return (
    <footer className="text-center text-lg-start text-white bg-dark">
      <div className="container p-4 pb-0">
        <section>
          <div className="row">
            <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
              <h6 className="text-uppercase mb-4 font-weight-bold">Genius Restaurant</h6>
              <p>Welcome to Genius Restaurant, where culinary excellence meets warm hospitality.</p>
            </div>
            <hr className="w-100 clearfix d-md-none" />
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
              <h6 className="text-uppercase mb-4 font-weight-bold">Products</h6>
              <p>
                <a style={{ textDecoration: 'none' }} className="text-white" href="/orderMenuHome" >Menu</a>
              </p>
              <p>
                <a className="text-white"  href='/reservation'>Reservations</a>
              </p>
              <p>
                <a style={{ textDecoration: 'none' }} className="text-white">Specials</a>
              </p>
              <p>
                <a style={{ textDecoration: 'none' }} className="text-white">Events</a>
              </p>
            </div>
            <hr className="w-100 clearfix d-md-none" />
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
              <h6 className="text-uppercase mb-4 font-weight-bold">Useful links</h6>
              <p>
                <a style={{ textDecoration: 'none' }} className="text-white">About Us</a>
              </p>
              <p>
                <a style={{ textDecoration: 'none' }} className="text-white" href="/contact">Contact Us</a>
              </p>
              <p>
                <a style={{ textDecoration: 'none' }} className="text-white">Privacy Policy</a>
              </p>
              <p>
                <a style={{ textDecoration: 'none' }} className="text-white">Terms & Conditions</a>
              </p>
            </div>
            <hr className="w-100 clearfix d-md-none" />
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
              <h6 className="text-uppercase mb-4 font-weight-bold">Contact</h6>
              <p><i className="fas fa-home mr-3"></i> 173/1/B Kandy Rd, Mudungoda</p>
              <p><i className="fas fa-envelope mr-3"></i> geniusrestaurant3@gmail.com</p>
              <p><i className="fas fa-phone mr-3"></i> +94 123456789</p>
            </div>
          </div>
        </section>
        <hr className="my-3" />
        <section className="p-3 pt-0">
          <div className="row d-flex align-items-center">
            <div className="col-md-7 col-lg-8 text-center text-md-start">
              <div className="p-3">
                &copy; {new Date().getFullYear()} Genius Restaurant. All rights reserved.
              </div>
            </div>
          </div>
        </section>
      </div>
    </footer>
  );
};

export default Footer;