import React from "react";
import "./LetterSection.css";

const LetterSection = () => {
  return (
    <>
      <section className="instagram_section mb-135">
        <div className="container-fluid p-0">
          <div className="section_title text-center mb-130">
            <h2>follow our instagram</h2>
          </div>
          <div id="instagramFeed"></div>
        </div>
      </section>

      <section className="newsletter_section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="newsletter_inner d-flex justify-content-between align-items-center">
                <div className="newsletter_text">
                  <h3>keep connected</h3>
                  <p>Get updates by subscribe our weekly newsletter</p>
                </div>
                <div className="newsletter_subscribe">
                  <form id="mc-form">
                    <input
                      className="border-0"
                      id="mc-email"
                      type="email"
                      autocomplete="off"
                      placeholder="Enter your email address"
                    />
                    <i className="fa-solid fa-envelope-open ms-2 text-muted"></i>
                    <button className="border-0 me-3" id="mc-submit">
                      Subscribe
                    </button>
                  </form>
                  <div className="mailchimp-alerts text-centre">
                    <div className="mailchimp-submitting"></div>
                    <div className="mailchimp-success"></div>
                    <div className="mailchimp-error"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LetterSection;
