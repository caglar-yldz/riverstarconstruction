import { useState } from "react";

export default function ConcreteFormworkCard2() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div style={wrapperStyle}>
        <div style={cardStyle}>
          {/* Burada resim solda, yazı sağda */}
          <div style={imageStyle}>
            <img
              src="/assets/img/001.jpg"
              alt="Concrete Formwork"
              style={imgStyle}
            />
          </div>
          <div style={textStyle}>
            <h3 style={titleStyle}>Concrete Formwork</h3>
            <p style={descStyle}>
              We construct durable and precise formwork systems for all types of
              concrete structures — ensuring structural integrity from the base
              up. We construct durable and precise formwork systems for all
              types of concrete structures — ensuring structural integrity from
              the base up.
            </p>
            <button style={buttonStyle} onClick={() => setIsOpen(true)}>
              Learn more
            </button>
          </div>
        </div>
      </div>

      {isOpen && <Modal onClose={() => setIsOpen(false)} />}
    </>
  );
}

// Modal aynı olduğu için aynısını kullanabilirsin. İstersen yukarıdaki Modal componentini al yeter.

const wrapperStyle = {
  maxWidth: "1140px",
  height: "400px",
  margin: "0 auto",
  padding: "40px",
  boxSizing: "border-box",
  display: "flex",
  justifyContent: "flex-end", // sağa dayalı
  backgroundColor: "#1a1a1a",
  borderRadius: "16px",
  gap: "40px",
  alignItems: "center",
  color: "#ccc",
};

const cardStyle = {
  display: "flex",
  flexWrap: "wrap",
  width: "100%",
  gap: "40px",
};

const textStyle = {
  flex: 1,
  minWidth: "280px",
  textAlign: "right",
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
  marginBottom: "20px",
};

const buttonStyle = {
  background: "transparent",
  border: "1px solid #c7a254",
  color: "#c7a254",
  padding: "10px 20px",
  borderRadius: "6px",
  cursor: "pointer",
};
