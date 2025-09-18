import React, { useState } from 'react';
import PageTemplate from '../components/PageTemplate';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    state: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
    alert('Thank you for your message. We will get back to you soon!');
    setFormData({
      name: '',
      email: '',
      phone: '',
      state: '',
      subject: '',
      message: ''
    });
  };

  return (
    <PageTemplate
      breadcrumbPath={[
        { name: "About", link: null },
        { name: "Contact Us", link: null }
      ]}
      title="Get In Touch"
      subtitle="Contact Us"
      description="Have questions about our programs? Want to get involved? We'd love to hear from you. Reach out and let's start a conversation."
    >
      <div className="row">
        {/* Contact Form */}
        <div className="col-lg-8">
          <div className="card border-0 shadow-sm" style={{ borderRadius: "15px" }}>
            <div className="card-body p-4">
              <h3 
                style={{ 
                  color: "#212529", 
                  fontWeight: "600", 
                  marginBottom: "15px" 
                }}
              >
                Get In Touch
              </h3>
              <p 
                style={{ 
                  color: "#6c757d", 
                  marginBottom: "30px",
                  fontSize: "16px"
                }}
              >
                Fill out the form below and we'll get back to you as soon as possible.
              </p>
              
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label 
                      htmlFor="name" 
                      className="form-label"
                      style={{ color: "#495057", fontWeight: "500" }}
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="First Name"
                      required
                      style={{
                        borderRadius: "8px",
                        border: "1px solid #dee2e6",
                        padding: "12px 15px",
                        minHeight: "44px",
                        fontSize: "1rem"
                      }}
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label 
                      htmlFor="email" 
                      className="form-label"
                      style={{ color: "#495057", fontWeight: "500" }}
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      required
                      style={{
                        borderRadius: "8px",
                        border: "1px solid #dee2e6",
                        padding: "12px 15px",
                        minHeight: "44px",
                        fontSize: "1rem"
                      }}
                    />
                  </div>
                </div>
                
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label 
                      htmlFor="phone" 
                      className="form-label"
                      style={{ color: "#495057", fontWeight: "500" }}
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      className="form-control"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 12345 67890"
                      style={{
                        borderRadius: "8px",
                        border: "1px solid #dee2e6",
                        padding: "12px 15px",
                        minHeight: "44px",
                        fontSize: "1rem"
                      }}
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label 
                      htmlFor="state" 
                      className="form-label"
                      style={{ color: "#495057", fontWeight: "500" }}
                    >
                      State *
                    </label>
                    <select
                      className="form-control"
                      id="state"
                      name="state"
                      value={formData.state || ''}
                      onChange={handleChange}
                      required
                      style={{
                        borderRadius: "8px",
                        border: "1px solid #dee2e6",
                        padding: "12px 15px",
                        minHeight: "44px",
                        fontSize: "1rem"
                      }}
                    >
                      <option value="">Select your state</option>
                      <option value="andhra-pradesh">Andhra Pradesh</option>
                      <option value="telangana">Telangana</option>
                      <option value="karnataka">Karnataka</option>
                      <option value="tamil-nadu">Tamil Nadu</option>
                      <option value="kerala">Kerala</option>
                      <option value="maharashtra">Maharashtra</option>
                      <option value="gujarat">Gujarat</option>
                      <option value="rajasthan">Rajasthan</option>
                      <option value="delhi">Delhi</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="row">
                  <div className="col-12 mb-3">
                    <label 
                      htmlFor="subject" 
                      className="form-label"
                      style={{ color: "#495057", fontWeight: "500" }}
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="What is this about?"
                      style={{
                        borderRadius: "8px",
                        border: "1px solid #dee2e6",
                        padding: "12px 15px",
                        minHeight: "44px",
                        fontSize: "1rem"
                      }}
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label 
                    htmlFor="message" 
                    className="form-label"
                    style={{ color: "#495057", fontWeight: "500" }}
                  >
                    Message *
                  </label>
                  <textarea
                    className="form-control"
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    style={{
                      borderRadius: "8px",
                      border: "1px solid #dee2e6",
                      padding: "12px 15px",
                      resize: "vertical",
                      minHeight: "120px",
                      fontSize: "1rem"
                    }}
                    placeholder="Tell us more about your inquiry..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{
                    backgroundColor: "#06038F",
                    borderColor: "#06038F",
                    padding: "12px 30px",
                    fontSize: "16px",
                    fontWeight: "600",
                    borderRadius: "25px",
                    minHeight: "48px",
                    width: "100%",
                    transition: "all 0.3s ease"
                  }}
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="col-lg-4">
          <div className="card border-0 shadow-sm mb-4" style={{ borderRadius: "15px" }}>
            <div className="card-body p-4">
              <h4 
                style={{ 
                  color: "#212529", 
                  fontWeight: "600", 
                  marginBottom: "15px" 
                }}
              >
                Contact Information
              </h4>
              <p 
                style={{ 
                  color: "#6c757d", 
                  marginBottom: "25px",
                  fontSize: "14px"
                }}
              >
                Let's Start a Conversation
              </p>
              <p 
                style={{ 
                  color: "#6c757d", 
                  marginBottom: "25px",
                  fontSize: "14px",
                  lineHeight: "1.6"
                }}
              >
                We're here to help and answer any questions you might have. Reach out to us through any of these channels.
              </p>
              
              <div className="mb-4">
                <div className="d-flex align-items-start mb-3">
                  <div 
                    style={{ 
                      backgroundColor: "#06038F", 
                      color: "white", 
                      borderRadius: "50%", 
                      width: "40px", 
                      height: "40px", 
                      display: "flex", 
                      alignItems: "center", 
                      justifyContent: "center", 
                      marginRight: "15px",
                      fontSize: "16px"
                    }}
                  >
                    📧
                  </div>
                  <div>
                    <h6 style={{ color: "#212529", fontWeight: "600", marginBottom: "5px" }}>
                      Our Address
                    </h6>
                    <p style={{ color: "#6c757d", margin: "0" }}>
                      22-2-472/3, Panjathan colony,<br />
                      Hyderabad, TS, 500024 IN.
                    </p>
                  </div>
                </div>

                <div className="d-flex align-items-start mb-3">
                  <div 
                    style={{ 
                      backgroundColor: "#06038F", 
                      color: "white", 
                      borderRadius: "50%", 
                      width: "40px", 
                      height: "40px", 
                      display: "flex", 
                      alignItems: "center", 
                      justifyContent: "center", 
                      marginRight: "15px",
                      fontSize: "16px"
                    }}
                  >
                    📧
                  </div>
                  <div>
                    <h6 style={{ color: "#212529", fontWeight: "600", marginBottom: "5px" }}>
                      Email Us
                    </h6>
                    <p style={{ color: "#6c757d", margin: "0" }}>
                      feedback@neiea.org
                    </p>
                  </div>
                </div>

                <div className="d-flex align-items-start mb-3">
                  <div 
                    style={{ 
                      backgroundColor: "#06038F", 
                      color: "white", 
                      borderRadius: "50%", 
                      width: "40px", 
                      height: "40px", 
                      display: "flex", 
                      alignItems: "center", 
                      justifyContent: "center", 
                      marginRight: "15px",
                      fontSize: "16px"
                    }}
                  >
                    📞
                  </div>
                  <div>
                    <h6 style={{ color: "#212529", fontWeight: "600", marginBottom: "5px" }}>
                      Call Us
                    </h6>
                    <p style={{ color: "#6c757d", margin: "0" }}>
                      +91 70907 70784
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Working Hours & Why Contact Us */}
          <div className="card border-0 shadow-sm mb-4" style={{ borderRadius: "15px" }}>
            <div className="card-body p-4">
              <h5 
                style={{ 
                  color: "#212529", 
                  fontWeight: "600", 
                  marginBottom: "15px" 
                }}
              >
                Working Hours
              </h5>
              <div style={{ color: "#6c757d", lineHeight: "1.6" }}>
                <p style={{ margin: "0 0 5px 0", fontSize: "14px" }}>
                  <strong style={{ color: "#495057" }}>Monday - Friday:</strong> 9:00 AM - 6:00 PM IST
                </p>
              </div>
            </div>
          </div>

          <div className="card border-0 shadow-sm" style={{ borderRadius: "15px" }}>
            <div className="card-body p-4">
              <h5 
                style={{ 
                  color: "#212529", 
                  fontWeight: "600", 
                  marginBottom: "15px" 
                }}
              >
                Why Contact Us?
              </h5>
              <ul style={{ color: "#6c757d", paddingLeft: "20px", margin: "0", lineHeight: "1.8" }}>
                <li style={{ marginBottom: "8px", fontSize: "14px" }}>Learn about our educational programs</li>
                <li style={{ marginBottom: "8px", fontSize: "14px" }}>Get information about volunteering</li>
                <li style={{ marginBottom: "8px", fontSize: "14px" }}>Discuss partnership opportunities</li>
                <li style={{ marginBottom: "0", fontSize: "14px" }}>Share feedback and suggestions</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
};

export default Contact;
