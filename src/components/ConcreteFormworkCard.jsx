import { useState } from "react";

export default function ConcreteFormworkCard() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div style={wrapperStyle}>
        <div style={cardStyle}>
          <div style={textStyle}>
            <h3 style={titleStyle}>Concrete Formwork</h3>
            <p style={descStyle}>
              We construct durable and precise formwork systems for all types of
              concrete structures — ensuring structural integrity from the base
              up. We construct durable and precise formwork systems for all
              types of concrete structures — ensuring structural integrity from
              the base up. We construct durable and precise formwork systems for
              all types of concrete structures — ensuring structural integrity
              from the base up.
            </p>
            <button style={buttonStyle} onClick={() => setIsOpen(true)}>
              Learn more
            </button>
          </div>
          <div style={imageStyle}>
            <img
              src="/assets/img/001.jpg"
              alt="Concrete Formwork"
              style={imgStyle}
            />
          </div>
        </div>
      </div>

      {isOpen && (
        <div style={backdropStyle} onClick={() => setIsOpen(false)}>
          <div style={modalStyle} onClick={(e) => e.stopPropagation()}>
            <h2 style={modalTitleStyle}>🛠️ Concrete Formwork</h2>
            <p style={modalText}>
              We provide full-scope concrete formwork services with a focus on
              precision, efficiency, and safety. From footings and foundation
              walls to columns, beams, and slabs, our team ensures every form is
              accurately set and cleanly stripped.
            </p>

            <p style={{ ...modalText, fontWeight: "bold" }}>
              We manage formwork installation with strict attention to
              dimensional control, site tolerances, and sequencing
              requirements—ensuring consistency across all structural elements.
            </p>

            <p style={modalText}>
              With many years of on-site experience, we ensure smooth workflow
              and reliable, specification-compliant results on every project.
            </p>

            <ul style={modalList}>
              <li>
                <strong>Commercial Projects</strong>: We deliver efficient and
                code-compliant formwork systems for multi-storey buildings,
                plazas, and commercial sites.
              </li>
              <li>
                <strong>Residential Projects</strong>: From custom homes to
                large-scale housing, we provide clean and precise formwork for
                all types of residential concrete work.
              </li>
              <li>
                <strong>Industrial Projects</strong>: We execute durable and
                load-bearing formwork solutions for foundations, slabs, pits,
                and equipment pads in industrial facilitiesaa.
              </li>
            </ul>

            <button style={closeBtn} onClick={() => setIsOpen(false)}>
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}

const wrapperStyle = {
  maxWidth: "1140px",
  width: "100%",
  margin: "60px auto",
  padding: "0 20px",
  boxSizing: "border-box",
  color: "#ccc",
};

const cardStyle = {
  display: "flex",
  gap: "40px",
  alignItems: "center",
  flexWrap: "wrap",
  paddingTop: "60px",
  paddingBottom: "60px",
  backgroundColor: "#1a1a1a",
  borderRadius: "16px",
};

const textStyle = {
  flex: "1 1 300px",
  marginLeft: "40px",
};

const imageStyle = {
  width: "300px",
  flexShrink: 0,
};

const imgStyle = {
  width: "100%",
  borderRadius: "12px",
  boxShadow: "0 0 4px #c7a25430",
};

const titleStyle = {
  fontSize: "24px",
  color: "#c7a254",
  marginBottom: "20px",
};

const descStyle = {
  fontSize: "16px",
  lineHeight: 1.6,
  marginBottom: "40px",
};

const buttonStyle = {
  background: "transparent",
  border: "1px solid #c7a254",
  color: "#c7a254",
  padding: "10px 20px",
  borderRadius: "6px",
  cursor: "pointer",
};

const backdropStyle = {
  position: "fixed",
  inset: 0,
  backgroundColor: "rgba(0, 0, 0, 0.7)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 9999,
};

const modalStyle = {
  backgroundColor: "#1b1b1b",
  padding: "60px",
  borderRadius: "18px",
  maxWidth: "1100px",
  width: "95%",
  boxShadow: "0 0 10px rgba(199, 162, 84, 0.2)",
  color: "#fff",
  textAlign: "left",
  maxHeight: "90vh",
  overflowY: "auto",
};

const modalTitleStyle = {
  fontSize: "32px",
  color: "#f7f7f7",
  fontWeight: "bold",
  marginBottom: "30px",
};

const modalText = {
  fontSize: "18px",
  lineHeight: 1.85,
  marginBottom: "25px",
  color: "#eee",
};

const modalList = {
  paddingLeft: "25px",
  marginBottom: "35px",
  color: "#ddd",
  fontSize: "17px",
  lineHeight: 1.9,
};

const closeBtn = {
  padding: "12px 30px",
  backgroundColor: "#c7a254",
  color: "#1a1a1a",
  border: "none",
  borderRadius: "8px",
  fontSize: "16px",
  fontWeight: "bold",
  cursor: "pointer",
  boxShadow: "0 0 5px rgba(199, 162, 84, 0.4)",
};
