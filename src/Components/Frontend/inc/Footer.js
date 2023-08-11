import React from 'react';

function Footer() {
    return (
        <footer className="bg-dark text-white py-5">
        <div className="container">
          <div className="row">
            {/* Footer Menu with 4 columns */}
            <div className="col-md-3">
              <h5>Menu</h5>
              <ul className="list-unstyled">
                <li>Home</li>
                <li>About</li>
                <li>Services</li>
                <li>Contact</li>
              </ul>
            </div>
            {/* Social Links */}
            <div className="col-md-3">
              <h5>Follow Us</h5>
              <ul className="list-unstyled social-links">
                <li>
                  <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
                {/* Add more social links as needed */}
              </ul>
            </div>
            {/* Logo */}
            <div className="col-md-3">
              <h5>Logo</h5>
              <img src="logo.png" alt="Logo" />
            </div>
            {/* Contact Information */}
            <div className="col-md-3">
              <h5>Contact Us</h5>
              <ul className="list-unstyled">
                <li>Email: contact@example.com</li>
                <li>Phone: +1234567890</li>
                {/* Add more contact information as needed */}
              </ul>
            </div>
          </div>
          {/* Blogs and other content */}
          <div className="row mt-4">
            <div className="col-md-12">
              <h5>Blogs</h5>
              {/* Add your blog posts here */}
            </div>
          </div>
        </div>
      </footer>
    );
}


export default Footer;