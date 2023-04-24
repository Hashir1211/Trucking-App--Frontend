import React from "react"
import { Card } from "../../components/blog/Card"
import { Category } from "../../components/category/Category"
import bizInsider from "../../assets/images/bizinsider.png"
import mashable from "../../assets/images/mashable.png"
import tnw from "../../assets/images/tnw.png"
import hannan from "../../assets/images/hannan.png"
import huma from "../../assets/images/huma.jpeg"
import moving from "../../assets/images/movingBoxes.jpeg"

export const Home = () => {
  return (
    <>

  <section className="container">
    <div className="row">
      <div className="col-sm">
          <h1 className="headingContainer">Stress-free moving services</h1>
          <h2 className="headingContainerh2">Moving you forward, box by box.</h2>
          <button className="btn btn-block btn-md btn-outline-dark" type="button">GET A FREE QUOTE</button>
      </div>

      <div className="col-sm">
        <img src={moving} className="imageBox" alt="Moving Services"/>
      </div>
    </div>
  </section>

  <section id="features">
    <div className="row">
      <div className="feature-box col-lg-4">
        <div className="icon">
          <span className="fas fa-check-circle fa-4x"></span>
        </div>
        <h3>15+</h3>
        <p>Years in Business</p>
      </div>

      <div className="feature-box col-lg-4">
        <div className="icon">
          <span className="icon fas fa-bullseye fa-4x"></span>
        </div>
        <h3>Elite Clientele</h3>
        <p>From homes to shops to businesses, we serve all</p>
      </div>

      <div className="feature-box  col-lg-4">
        <div className="icon">
          <span className="icon fas fa-heart fa-4x"></span>
        </div>
        <h3>50K+</h3>
        <p>Reviews of satisfied clients</p>
      </div>
    </div>
  </section>

  <section id="testimonials">
<div id="testimonial-carousel" className="carousel slide">
  <div className="carousel inner" data-ride="false">
    <div className="carousel-item active">
    <h2 className="testimonial-text">A PERFECT JOB.They were great every item had 0 damages. The best moving experience I have ever had. 100 percent perfect. I highly recommend. They are the best. Thanks.
</h2>
    <img className="testimonial-img" src={hannan} alt="your-daddy-profile"/>
    <em>Abdul Hannan, West Virginia</em>
      </div>
      <div className="carousel-item">
        <h2 className="testimonial-text">I really liked the professionalism, courtesy and respect these guys approached the job. They were great and I would recommend them to friends.</h2>
       <img className="testimonial-img" src={huma} alt="lady-profile"/>
       <em>Huma Kazmi, Ohio</em>
      </div>

  </div>
  <a className="carousel-control-prev fpbutton" href="#testimonial-carousel" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon"></span>
  </a>
  <a className="carousel-control-next fpbutton" href="#testimonial-carousel" role="button" data-slide="next">
    <span className="carousel-control-next-icon"></span>
  </a>
</div>
  </section>



  <section id="press">
    <img className="press-img" src={tnw} alt="tnw-logo"/>
    <img className="press-img" src={bizInsider} alt="biz-insider-logo"/>
    <img className="press-img" src={mashable} alt="mashable-logo"/>

  </section>

  <section id="pricing">

    <h2 className="pricing-h2">Our Services</h2>
    <p>A small overview of our company's services.</p>

<div className="row servicesHome">
  <div className="pricing-col col-lg-4 col-md-6">
  <div className="card">
  <div className="card-header">
<h3>Full-service moving company</h3>
  </div>
  <div className="card-body">
    <p className="servicesPara">We offer comprehensive moving services to help you get from point A to point B without lifting a finger. Our professional movers will take care of all your items safely and securely from initial packing and truck loading/unloading to that final walk-through.</p>
  </div>
</div>
</div>

<div className="pricing-col col-lg-4 col-md-6">
  <div className="card">
  <div className="card-header">
  <h3>Hourly moving & packing services</h3>

  </div>
  <div className="card-body">
  <p className="servicesPara">Our nationwide locations offer hourly moving services like packing, furniture staging, vehicle loading, and unloading to help with every part of your home, apartment, or business project.</p>
  </div>
  </div>
</div>


<div className="pricing-col col-lg-4">

  <div className="card">
  <div className="card-header">
  <h3>Junk Removal & Trash Pickup</h3>
  </div>
  <div className="card-body">
        <p className="servicesPara">Our professional junk removal teams can help assist with decluttering your home or office by removing just about any unwanted item(s). Whether you’re preparing for a move, cleaning out an estate, or downsizing, College HUNKS Hauling Junk is here to help.</p>
  </div>
  </div>
</div>
</div>
<button className="btn btn-block btn-lg btn-outline-dark estimateBtn" type="button">GET A FREE ESTIMATE</button>

  </section>

  <section id="cta">

    <h3 className="cta-h3">WE MOVE WHAT YOU NEED</h3>
    <div>
      <p className="ctaText">Reliable Trucking LLC® will take the weight off your shoulders and the strain off your back, with our stress-free junk removal and moving services. We offer comprehensive packages, item transport, packing, and unloading services. We even sell packing materials to get you started. Call us to get a detailed package that's made exclusively for you!</p>
    </div>
   
    <button className="btn-cta btn btn-lg btn-light" type="button"><i>304-123-123</i> </button>

  </section>

 
    </>
  ) 
}
