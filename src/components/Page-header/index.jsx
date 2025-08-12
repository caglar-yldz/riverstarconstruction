/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const PageHeader = ({ title, fullPath = [], image }) => {
  const router = useRouter();

  return (
    <header
      className="work-header bg-img valign"
      style={{
        backgroundImage: `url(${image || "/assets/img/team.jpg"})`,
      }}
      data-overlay-dark="5"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="cont text-center">
              <h1>{title}</h1>

              <div className="path">
                {fullPath.map((item, index) => (
                  <React.Fragment key={item.id || index}>
                    <Link href={item.url}>
                      <a
                        className={router.pathname === item.url ? "active" : ""}
                      >
                        {item.name}
                      </a>
                    </Link>
                    {index !== fullPath.length - 1 && <span>/</span>}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .work-header {
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          height: 300px; /* Masaüstü yüksekliği */
          display: flex;
          align-items: center;
          justify-content: center;
        }

        @media (max-width: 768px) {
          .work-header {
            height: 200px; /* Mobilde daha küçük */
          }
        }

        .path {
          margin-top: 10px;
          font-size: 14px;
        }

        .path a {
          color: #fff;
          text-decoration: none;
        }

        .path a.active {
          font-weight: bold;
          color: #c7a254; /* Altın rengi vurgu */
        }

        .path span {
          margin: 0 5px;
          color: #ccc;
        }
      `}</style>
    </header>
  );
};

export default PageHeader;
