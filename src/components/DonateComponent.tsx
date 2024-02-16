import React, { useState } from "react";
import { DonatePageData } from "../data";
import { FaArrowDown, FaCreditCard } from "react-icons/fa";

interface DonateSection {
  donateSection: DonatePageData;
}

const DonateComp: React.FC<DonateSection> = ({ donateSection }) => {
  const currencies = ["MKD", "EUR"];
  const [selectedCurrency, setSelectedCurrency] = useState("MKD");

  const handleCurrencyChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedCurrency(event.target.value);
  };

  return (
    <div className="container">
      <div className="row text-center">
        <div className="col-11">
          <h1 className="my-5 donate-title">
            {donateSection.donate_Section.title}
          </h1>
        </div>
      </div>
      <div className="row text-center my-5">
        <div className="col-6 ">
          <h4 className="donate-descriptions">
            {donateSection.donate_Section.description1}
          </h4>
        </div>
        <div className="col-6">
          <h4 className="donate-descriptions">
            {donateSection.donate_Section.description2}
          </h4>
        </div>
        <hr />
      </div>
      <div
        className="row bg-white my-5 py-5"
        style={{
          borderRadius: "30px",
          boxShadow: "5px 5px 100px 5px rgba(0, 0, 0, 0.10)",
        }}
      >
        <div className="col-12 mt-5 mx-5">
          <h2>{donateSection.donate_Section.text}</h2>
        </div>
        <div className="col-3 mt-4 px-5">
          <button className="donate-buttons">1000 {selectedCurrency}</button>
        </div>
        <div className="col-3 mt-4 px-5">
          <button className="donate-buttons">3000 {selectedCurrency}</button>
        </div>
        <div className="col-3 mt-4 px-5">
          <button className="donate-buttons">6000 {selectedCurrency}</button>
        </div>
        <div className="col-3 mt-4 px-5">
          <button className="donate-buttons">
            Промени Валута <FaArrowDown />
            {/* <select value={selectedCurrency} onChange={handleCurrencyChange}>
              {currencies.map((currency) => (
                <option key={currency} value={currency}>
                  {currency}
                </option>
              ))}
            </select> */}
          </button>
        </div>
        <div className="col-12 my-5  mx-5">
          <p className="donate-description">
            {donateSection.donate_Section.description3}
          </p>
        </div>
        <div className="col-12  mx-5">
          <h4 className="value-text">{donateSection.donate_Section.text2}</h4>
          <input
            type="number"
            placeholder="Input"
            className="donate-buttons"
            style={{
              width: "362px",
            }}
          />
        </div>
        <div className="col-2 my-5  mx-5 ">
          <button className="btn-credit">
            Донирај со <FaCreditCard />
          </button>
        </div>
        <div className="col-2 my-5">
          <button className="btn-paypal">PayPal</button>
        </div>
      </div>
      <div className="row  my-5 mx-auto">
        <div className="col-4 my-4 mx-5 mb-0">
          <h2 className="donate-txt">
            {donateSection.donate_Section.donatorname}
          </h2>
          <input
            type="text"
            placeholder="Example Namington"
            className="input-styles"
          />
        </div>
        <div className="col-4 my-4 mx-5 mb-0 ">
          <h5 className="card-txt">
            {donateSection.donate_Section.donatorcard}
          </h5>
          <input
            type="number"
            placeholder="**** **** **** ****"
            className="input-styles mt-4 mb-0"
          />
        </div>
        <div className="col-4 my-2 mx-5 mb-0">
          <h2 className="donate-txt">
            {donateSection.donate_Section.donatoremail}
          </h2>
          <input
            type="text"
            placeholder="example@email.com"
            className="input-styles"
          />
        </div>
        <div className="col-2 my-5 mx-5 mb-0 pt-1">
          <input type="number" placeholder="MM/YY" className="card-style" />
        </div>
        <div className="col-2 my-5 mx-1 mb-0 pt-1">
          <input type="number" placeholder="CVV" className="card-style" />
        </div>
        <div className="col-4 my-2 mx-5">
          <h2 className="donate-txt">
            {donateSection.donate_Section.donatorphone}
          </h2>
          <input
            type="number"
            placeholder="+38900000000"
            className="input-styles"
          />
        </div>
        <div className="col-4 my-2 mx-5 mb-0">
          <h2 className="donate-txt">
            {donateSection.donate_Section.donatorcardname}
          </h2>
          <input
            type="text"
            placeholder="Example Namington"
            className="input-styles"
          />
        </div>
        <div className="col-4 my-2 mx-5">
          <h2 className="donate-txt">
            {donateSection.donate_Section.donatorprice}
          </h2>
          <input
            type="number"
            placeholder="a million?"
            className="input-styles"
          />
        </div>
        <div className="col-4 mt-5 mx-5 mb-0">
          <button className="last-btn">Донирај</button>
        </div>
      </div>
    </div>
  );
};

export default DonateComp;
