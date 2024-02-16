import { FaLinkedin, FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";

export const Footer = () => {
  return (
    <div className="container-fluid footer-bg d-flex justify-content-center align-items-center px-5" id="footer">
      <div className="row pt-5 mx-5 px-5">
        <div className="col-4">
          <div className="headline">
            <h1 className="justify-content-start  text-white">
              Месечен <br />
              билтен
            </h1>
          </div>
        </div>
        <div className="col-4 text-white">
          <p className="lorem-text">
            Lorem ipsum dolor sit amet consectetur. Non at at risus dolor
            accumsan vitae dignissim.
          </p>
        </div>
        <div className="col-4 buttons">
          <button className="btn-mail">Вашата Емаил Адреса</button>
          <button className="cta-btn mt-3">CTA</button>
        </div>
        <hr style={{ color: "white"}} />
        <div className="row ">
          <div className="col-4 buttons">
            <h3 className="lower-text">Контактирај Не!</h3>
            <button className="btn-mail mt-3">Вашето Име</button>
            <button className="btn-mail mt-3">Вашата Емаил Адреса</button>
            <button className="cta-btn mt-3">CTA</button>
          </div>
          <div className="col-4 px-4">
            <h3 className="lower-text2">Приклучи Се</h3>
            <p className="lower-p">
              Lorem ipsum dolor sit amet consectetur. Non at at risus dolor
              accumsan vitae dignissim. Est dapibus turpis metus ac rhoncus
              tellus volutpat.
            </p>
          </div>
          <div className="col-4">
            <div className="lower-text-3 ">
              <h3 className="text-white">За Крик</h3>
            </div>
            <p className="lower-p-2">
              Lorem ipsum dolor sit amet consectetur. Non at at risus dolor
              accumsan vitae dignissim.
            </p>
            <div className="icons">
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="icon-link"
              >
                <FaLinkedin
                  style={{ color: "white", width: "48px", height: "48px" }}
                />
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="icon-link"
              >
                <FaInstagram
                  style={{ color: "white", width: "48px", height: "48px" }}
                />
              </a>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="icon-link"
              >
                <FaFacebook
                  style={{ color: "white", width: "48px", height: "48px" }}
                />
              </a>
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="icon-link"
              >
                <FaTwitter
                  style={{ color: "white", width: "48px", height: "48px" }}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
