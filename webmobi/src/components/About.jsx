import React from "react";

export default function About({heading,para,value,id}) {
  return (
    <div  className={`${value?"about-container":"success-container"} p-lg-5  p-md-4 p-4 `} id={id}>
      <h2 data-aos="fade-right">{heading}</h2>
      <p data-aos="fade-right"  className= {`${value?"null":"text-center"} p`}>
        {para}
      </p>
    </div>
  );
}
