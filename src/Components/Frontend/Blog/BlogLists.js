import React from 'react';

const BlogLists = () => {
  return (
    <section className="py-5">
      <div className="container">
        <div className="row">
          {/* First Blog Post */}
          <div className="col-md-3">
            <div className="card mb-4">
              <img src="blog1.jpg" className="card-img-top" alt="Blog 1" />
              <div className="card-body">
                <h5 className="card-title">Blog Post 1</h5>
                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <a href="#" className="btn btn-primary">Read More</a>
              </div>
            </div>
          </div>
          {/* Second Blog Post */}
          <div className="col-md-3">
            <div className="card mb-4">
              <img src="blog2.jpg" className="card-img-top" alt="Blog 2" />
              <div className="card-body">
                <h5 className="card-title">Blog Post 2</h5>
                <p className="card-text">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <a href="#" className="btn btn-primary">Read More</a>
              </div>
            </div>
          </div>
        
          {/* Third Blog Post */}
          <div className="col-md-3">
            <div className="card mb-4">
              <img src="blog3.jpg" className="card-img-top" alt="Blog 3" />
              <div className="card-body">
                <h5 className="card-title">Blog Post 3</h5>
                <p className="card-text">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
                <a href="#" className="btn btn-primary">Read More</a>
              </div>
            </div>
          </div>
          {/* Fourth Blog Post */}
          <div className="col-md-3">
            <div className="card mb-4">
              <img src="blog4.jpg" className="card-img-top" alt="Blog 4" />
              <div className="card-body">
                <h5 className="card-title">Blog Post 4</h5>
                <p className="card-text">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                <a href="#" className="btn btn-primary">Read More</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogLists;