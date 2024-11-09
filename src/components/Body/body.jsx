import React, { useState } from "react";
import "./body.css";

export default function Body() {
  const [value, setValue] = useState(null);

  const handleover = (id) => {
    setValue(id);
  };
  const handleout = () => {
    setValue(false);
  };

  return (
    <>
      <div className="main">
        <div className="main2">
          <h1 className="heading">
            We Ensure better education for a better world
          </h1>
          <p className="parag">
            Our cutting-edge curriculum is designed to empower students with the
            knowledge, skills, and experiences needed to excel in the dynamic
            field of education
          </p>
          <button className="btn">Explore more </button>
        </div>
      </div>
      <div className="text">
        <p>OUR PROGRAM</p>
        <h2>What We Offer</h2>
      </div>

      <div className="container containere">
        <div className="row">
          <div className="col-12 col-md-4 img-container ">
            <img src="images/girlimage.png" className="image " alt="girl" />
            <div
              className="imageclon"
              onMouseOver={() => handleover(0)}
              onMouseOut={handleout}
              style={{ opacity: value === 0 ? "1" : "0" }}
            >
              <img
                src="images/girlimages.png"
                className=""
                style={{ width: "100px" }}
                alt="girl"
              />
              <p>Graduation Degree</p>
            </div>
          </div>
          <div className="col col-12 col-md-4 img-container">
            <img src="images/boyimage.png" className="image " alt="boy" />
            <div
              className="imageclon"
              onMouseOver={() => handleover(1)}
              onMouseOut={handleout}
              style={{ opacity: value === 1 ? "1" : "0" }}
            >
              <img
                src="images/girlimages.png"
                className=""
                style={{ width: "100px" }}
                alt="girl"
              />
              <p>Masters Degree</p>
            </div>
          </div>
          <div className="col col-12 col-md-4 img-container">
            <img src="images/menimage.png" className="image " alt="man" />
            <div
              className="imageclon"
              onMouseOver={() => handleover(2)}
              onMouseOut={handleout}
              style={{ opacity: value === 2 ? "1" : "0" }}
            >
              <img
                src="images/girlimages.png"
                className=""
                style={{ width: "100px" }}
                alt="girl"
              />
              <p>Post Graduation</p>
            </div>
          </div>
        </div>
      </div>

      <div className="containers">
        <div className='row'>
            <div className="col-12 col-md-6  leftcontainer">
            <img src="images/videoimage.png" className="videoimage img-fluid  videoimage" alt="video" />
            <img src="images/videoicon.png" alt="videoicon" className="videoimageclon" />
            </div>

        <div className="col-12 col-md-6 secondcontainer">
          <h3>ABOUT UNIVERSITY</h3>
          <h2>Nurturing Tomorrow's Leaders Today</h2>
          <p>
            Embark on a transformative educational journey with our university's
            comprehensive education programs. Our cutting-edge curriculum is
            designed to empower students with the knowledge, skills, and
            experiences needed to excel in the dynamic field of education.
          </p>
          <p>
            With a focus on innovation, hands-on learning, and personalized
            mentorship, our programs prepare aspiring educators to make a
            meaningful impact in classrooms, schools, and communities.
          </p>
          <p>
            Whether you aspire to become a teacher, administrator, counselor, or
            educational leader, our diverse range of programs offers the perfect
            pathway to achieve your goals and unlock your full potential in
            shaping the future of education.
          </p>
        </div>
        </div>
      </div>


      <div className="secondtext">
        <p>Gallery</p>
        <h2>Campus Photos</h2>
      </div>

      <div className="container thirdsection">
        <div className="row">
          <div className="col-6 col-md-3  gradeimages">
            <img src="images/boysfrontoflaptop.png" className='imagegrade' alt="" />
          </div>



          <div className="col-6 col-md-3 gradeimages">
          <img src="images/girlsfrontoflaptop.png" className='imagegrade' alt="" />
          </div>



          <div className="col-6 col-md-3 gradeimages">
          <img src="images/girlsingarden.png" className='imagegrade' alt="" />
          </div>

          <div className="col-6 col-md-3 gradeimages">
          <img src="images/girlimage.png" className='imagegrade' height={'220px'} alt="" />
          </div>
        </div>

      </div>

      <div className="button2">
        <button>See more here &#8594;</button>
      </div>

      <div className="thirdtext">
      <p>TESTIMONIALS</p>
      <h2>What Student Says</h2>
      </div>
    </>
  );
}
