import React from 'react';

const TestimonialSection = () => {
  const testimonials = [
    {
      id: 1,
      name: 'John Doe',
      image: 'testimonial1.jpg',
      quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque malesuada lacus eu vulputate.'
    },
    {
      id: 2,
      name: 'Jane Smith one',
      image: 'testimonial2.jpg',
      quote: 'Praesent posuere lobortis arcu quis blandit. Aliquam semper metus eget odio dapibus tincidunt.'
    },
    {
        id: 3,
        name: 'Jane Smith Two',
        image: 'testimonial2.jpg',
        quote: 'Praesent posuere lobortis arcu quis blandit. Aliquam semper metus eget odio dapibus tincidunt.'
      },
      {
        id: 4,
        name: 'Jane Smith Three',
        image: 'testimonial2.jpg',
        quote: 'Praesent posuere lobortis arcu quis blandit. Aliquam semper metus eget odio dapibus tincidunt.'
      },

    // Add more testimonials as needed
  ];

  return (
    <section className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-4">Testimonials</h2>
        <div className="row">
          <div className="col-md-8 offset-md-2">
            <div id="testimonialCarousel" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner">
                {testimonials.map((testimonial) => (
                  <div key={testimonial.id} className={`carousel-item ${testimonial.id === 1 ? 'active' : ''}`}>
                    <div className="d-flex justify-content-center align-items-center">
                      <img src={testimonial.image} className="img-fluid rounded-circle" alt={testimonial.name} />
                    </div>
                    <blockquote className="blockquote text-center">
                      <p className="mb-0">{testimonial.quote}</p>
                      <footer className="blockquote-footer">{testimonial.name}</footer>
                    </blockquote>
                  </div>
                ))}
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;