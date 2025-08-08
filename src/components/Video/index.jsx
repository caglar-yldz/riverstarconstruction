import React from "react";
import "react-modal-video/css/modal-video.css";

const Video = () => {
  React.useEffect(() => {
    console.clear();
  }, []);

  const [isOpen, setOpen] = React.useState(false);

  return (
    <section
      className="video bg-img parallaxie"
      style={{ backgroundImage: "url(/assets/img/kapak.png)" }}
    >
      {isOpen && (
        <div className="custom-video-modal">
          <div className="custom-video-content">
            <span className="close" onClick={() => setOpen(false)}>
              &times;
            </span>
            <video
              src="/assets/img/video/construction.mp4"
              controls
              autoPlay
              style={{ width: "100%", height: "auto" }}
            />
          </div>
        </div>
      )}

      <a
        className="vid valign"
        onClick={(e) => {
          e.preventDefault();
          setOpen(true);
        }}
        href="#"
      >
        <div className="vid-butn">
          <span className="icon">
            <i className="pe-7s-play"></i>
          </span>
        </div>
      </a>

      <style jsx>{`
        .custom-video-modal {
          position: fixed;
          z-index: 9999;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.8);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .custom-video-content {
          position: relative;
          max-width: 1200px; /* 900px yerine büyütüldü */
          width: 80%;
          background: #000;
        }
        .close {
          position: absolute;
          top: -30px;
          right: -10px;
          color: #fff;
          font-size: 30px;
          cursor: pointer;
        }
      `}</style>
    </section>
  );
};

export default Video;
