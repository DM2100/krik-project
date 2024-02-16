import Link from "next/link";

export const Header = () => {
  return (
    <div className="container-fluid header1">
      <div className="row ">
        <div className="col-3">
          <Link href="newsletter">
            <button className="btn1">NEWSLETTER</button>
          </Link>
        </div>
        <div className="col-3 mt-2">
          <div className="button-search">
            <input type="text" placeholder="Search" />
          </div>
        </div>
        <div className="col-3 mt-3">
          <div className="switcher">
            <button>En/Mk</button>
          </div>
        </div>
        <div className="col-3 mt-2">
          <div className="shop-button">
            <button className="d-flex ">E-shop</button>
          </div>
        </div>
      </div>
    </div>
  );
};
