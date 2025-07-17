import React from "react";
import appData from "../../data/app.json";

const ContactWithMap = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-6 map-box">
          <iframe src={appData.mapIframe}></iframe>
        </div>
        <div className="col-lg-6 form">
          <form
            action="https://formsubmit.co/caglar.alylz@gmail.com"
            method="POST"
          >
            <input type="hidden" name="_captcha" value="false" />
            <input
              type="hidden"
              name="_next"
              value="http://localhost:3000/contact/"
            />

            <div className="form-group">
              <input type="text" name="name" placeholder="Name" required />
            </div>

            <div className="form-group">
              <input type="email" name="email" placeholder="Email" required />
            </div>

            <div className="form-group">
              <textarea
                name="message"
                rows="4"
                placeholder="Message"
                required
              ></textarea>
            </div>

            <button type="submit" className="btn-curve btn-color">
              <span>Send Message</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactWithMap;
