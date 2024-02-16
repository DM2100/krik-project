import Link from "next/link";
import { FaPlay } from "react-icons/fa";

export const VideoSection = () => {
  return (
    <div className="container-fluid mt-5 mb-5 px-5">
      <div className="row text-start d-flex align-items-center mx-5 px-3 ">
        <div className="col-8">
          <div className="video-img">
            <img src="" alt="" />
            <div className="play-button">
              <FaPlay />
            </div>
          </div>
        </div>
        <div className="col-4 vl-section px-5">
          <h1 className="pt-3">Стани Волонтер</h1>
          <p className="pt-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, unde
            animi. Et?
          </p>
          <Link href="volunteernow">
            <button className="btn-join-us">Придружи Ни Се</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
