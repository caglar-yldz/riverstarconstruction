import { useState } from "react";
import { FaBuilding, FaHome, FaIndustry } from "react-icons/fa";

export default function EIFSCard() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* KART */}
      <div style={wrapperStyle}>
        <div style={cardStyle}>
          <div style={textStyle}>
            <h3 style={titleStyle}>EIFS</h3>
            <p style={descStyle}>
              Stucco System (EIFS – Exterior Insulation and Finish System) We
              specialize in high-performance EIFS applications designed to
              provide both exterior insulation and seamless finishing...
            </p>
            <button style={buttonStyle} onClick={() => setIsOpen(true)}>
              Learn more
            </button>
          </div>
          <div style={imageStyle}>
            <img
              src="/assets/img/resimler/51.jpeg"
              alt="EIFS"
              style={imgStyle}
            />
          </div>
        </div>
      </div>

      {/* MODAL */}
      {isOpen && (
        <div style={modalBackdrop} onClick={() => setIsOpen(false)}>
          <div style={modalContainer} onClick={(e) => e.stopPropagation()}>
            <div style={modalHeader}>
              <h2 style={modalTitle}>
                <FaBuilding style={{ marginRight: 8, color: "#c7a254" }} />
                EIFS - Stucco System
              </h2>
              <button style={closeButton} onClick={() => setIsOpen(false)}>
                ✕
              </button>
            </div>

            {/* Scrollable Modal Body */}
            <div style={modalBody} className="modal-scroll">
              <p style={modalText}>
                Stucco System (EIFS – Exterior Insulation and Finish System) We
                specialize in high-performance EIFS applications designed to
                provide both exterior insulation and seamless finishing.
              </p>

              <p style={modalText}>
                Our team applies multi-layer systems — including insulation
                boards, mesh reinforcement, base coat, and finish coat — using
                approved materials and methods for both traditional and acrylic
                stucco.
              </p>
              <p style={modalText}>
                We maintain strict control over surface preparation, adhesion
                quality, curing cycles, and finish texture to ensure
                long-lasting performance and uniform appearance.
              </p>
              <p style={modalText}>
                With extensive experience across residential and commercial
                projects, we deliver EIFS solutions that meet thermal efficiency
                targets while achieving a clean, modern façade.
              </p>

              <div style={sectionDivider}></div>

              <div style={infoGrid}>
                <div style={infoCard}>
                  <div style={iconCircle}>
                    <FaHome color="#c7a254" size={22} />
                  </div>
                  <h4 style={infoTitle}>Residential Applications</h4>
                  <p style={infoDesc}>
                    We apply EIFS systems to new homes and renovations to
                    improve exterior aesthetics and thermal efficiency while
                    protecting the building envelope.
                  </p>
                </div>

                <div style={infoCard}>
                  <div style={iconCircle}>
                    <FaBuilding color="#c7a254" size={22} />
                  </div>
                  <h4 style={infoTitle}>Commercial Applications</h4>
                  <p style={infoDesc}>
                    From retail units to low-rise office buildings, our EIFS
                    solutions meet performance specs for energy code compliance,
                    moisture control, and visual uniformity.
                  </p>
                </div>

                <div style={infoCard}>
                  <div style={iconCircle}>
                    <FaIndustry color="#c7a254" size={22} />
                  </div>
                  <h4 style={infoTitle}>Industrial Applications</h4>
                  <p style={infoDesc}>
                    We deliver EIFS cladding on select light industrial or
                    institutional projects where insulation, weather protection,
                    and low-maintenance finishes are essential.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Scrollbar Style */}
      <style jsx global>{`
        .modal-scroll {
          max-height: 70vh;
          overflow-y: auto;
          scrollbar-width: thin;
          scrollbar-color: #c7a254 transparent;
        }

        .modal-scroll::-webkit-scrollbar {
          width: 6px;
        }

        .modal-scroll::-webkit-scrollbar-thumb {
          background-color: #c7a254;
          border-radius: 10px;
        }

        .modal-scroll::-webkit-scrollbar-track {
          background: transparent;
        }
      `}</style>
    </>
  );
}

// STYLES
const wrapperStyle = {
  maxWidth: "1140px",
  margin: "60px auto",
  padding: "0 20px",
  color: "#ccc",
};

const cardStyle = {
  backgroundColor: "#1a1a1a",
  display: "flex",
  flexWrap: "wrap",
  gap: "40px",
  padding: "60px",
  borderRadius: "16px",
};

const textStyle = {
  flex: "1 1 300px",
};

const imageStyle = {
  width: "300px",
  flexShrink: 0,
};

const imgStyle = {
  width: "100%",
  borderRadius: "12px",
  boxShadow: "0 0 4px #c7a25440",
};

const titleStyle = {
  fontSize: "26px",
  color: "#c7a254",
  marginBottom: "20px",
};

const descStyle = {
  fontSize: "17px",
  lineHeight: 1.7,
  marginBottom: "30px",
};

const buttonStyle = {
  border: "1px solid #c7a254",
  color: "#c7a254",
  padding: "10px 22px",
  borderRadius: "6px",
  background: "transparent",
  cursor: "pointer",
  fontWeight: "bold",
};

const modalBackdrop = {
  position: "fixed",
  inset: 0,
  backgroundColor: "rgba(0, 0, 0, 0.85)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 9999,
  padding: "20px",
};

const modalContainer = {
  backgroundColor: "#1e1e1e",
  borderRadius: "16px",
  maxWidth: "900px",
  width: "100%",
  color: "#f0f0f0",
  boxShadow: "0 0 5px rgba(199, 162, 84, 0.3)",
  display: "flex",
  flexDirection: "column",
  maxHeight: "90vh",
};

const modalHeader = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "24px",
  borderBottom: "1px solid #333",
};

const modalTitle = {
  fontSize: "24px",
  fontWeight: "bold",
  color: "#fff",
  display: "flex",
  alignItems: "center",
};

const closeButton = {
  fontSize: "20px",
  background: "none",
  border: "none",
  color: "#aaa",
  cursor: "pointer",
};

const modalBody = {
  padding: "30px 24px",
};

const modalText = {
  fontSize: "17px",
  lineHeight: 1.8,
  color: "#ddd",
  marginBottom: "30px",
};

const sectionDivider = {
  height: "1px",
  backgroundColor: "#444",
  marginBottom: "30px",
};

const infoGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
  gap: "24px",
};

const infoCard = {
  backgroundColor: "#2a2a2a",
  padding: "20px",
  borderRadius: "12px",
  textAlign: "center",
  boxShadow: "0 0 5px rgba(199, 162, 84, 0.1)",
};

const iconCircle = {
  backgroundColor: "#c7a25420",
  width: "50px",
  height: "50px",
  borderRadius: "50%",
  margin: "0 auto 12px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "22px",
  color: "#c7a254",
};

const infoTitle = {
  fontSize: "18px",
  fontWeight: "bold",
  color: "#fff",
  marginBottom: "8px",
};

const infoDesc = {
  fontSize: "15px",
  lineHeight: 1.6,
  color: "#ccc",
};
