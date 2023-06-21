import React from 'react';

const expertises = [
  {
    heading: "Hiring",
    para: "Leveraging our deep understanding of the talent landscape, we devise effective hiring strategies to attract the best tech professionals."
  },
  {
    heading: "Human Resources ",
    para: "We ensure a healthy and productive work environment by implementing efficient HR practices tailored to the unique needs of your startup."
  },
  {
    heading: "Taxation",
    para: "Our team navigates through the complexities of the tax system, ensuring compliance while optimizing financial efficiency."
  },
  {
    heading: "Regulatory Guidance",
    para: "We stay abreast of the ever-changing regulatory landscape, providing timely advice to ensure your startup's operations stay within legal boundaries."
  }
];

function Expertise() {
  return (
    <div className="expertise-container  p-3" id="expertise">
      <div className="container">
        <div className="row d-flex flex-wrap justify-content-center align-items-center">
          <div className="col-12 text-center">
            <h1 className='expertise-heading mt-2' data-aos="fade-down">Our Expertise</h1>
          </div>
          {expertises.map((item, index) => (
            <div className="col-md-5 col-lg-4 m-3 box-item shadow p-3" data-aos={index % 2 === 0 ? "fade-right" : "fade-left"} key={index}>
              <h2>{item.heading}</h2>
              <p>{item.para}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Expertise;
