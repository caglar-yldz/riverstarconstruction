import React from "react";
import appData from "../../data/app.json";

const Contact = () => {
  return (
    <>
      <section className="contact cont-map">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-5 col-md-6 contact-form wow fadeInDown"
              data-wow-delay=".3s"
            >
              <form
                action="https://formsubmit.co/caglar.alylz@gmail.com"
                method="POST"
              >
                {/* Gerekli gizli alanlar */}
                <input type="hidden" name="_captcha" value="false" />
                <input
                  type="hidden"
                  name="_next"
                  value="https://seninsiten.com/tesekkurler"
                />

                {/* Form Alanları */}
                <div className="form-group">
                  <input
                    type="text"
                    name="name" // ✅ name attribute zorunlu
                    placeholder="Adınız"
                    required
                  />
                </div>

                <div className="form-group">
                  <input
                    type="email"
                    name="email" // ✅ name attribute zorunlu
                    placeholder="E-posta"
                    required
                  />
                </div>

                <div className="form-group">
                  <textarea
                    name="message" // ✅ name attribute zorunlu
                    placeholder="Mesajınız"
                    rows="4"
                    required
                  ></textarea>
                </div>

                <button type="submit" className="btn-curve btn-color">
                  <span>Gönder</span>
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="contact-map">
          <iframe src={appData.mapIframe}></iframe>
        </div>
        <div
          className="bg-img"
          style={{ backgroundImage: "url(/assets/img/2.jpg)" }}
        ></div>
      </section>
    </>
  );
};

export default Contact;
