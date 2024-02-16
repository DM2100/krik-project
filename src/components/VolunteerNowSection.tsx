import React from "react";

export const VolunteerNowSec = () => {
  return (
    <div className="container">
      <h1 className="volunteer-text my-5">Волонтирај Сега!</h1>
      <div className="row volunteer-bg-color pt-5 px-5 mx-auto">
        <div className="col-6">
          <h1 className="volunteers-text">Име на волонтер*</h1>
          <input
            type="text"
            className="name-input"
            placeholder="Example Namington"
          />
        </div>
        <div className="col-6 ">
          <h2 className="age-text">Возраст*</h2>
          <button className="btn-18 mx-2">Под 18 Години</button>
          <button className="btn-18 mx-2"> Над 18 Години</button>
        </div>
        <div className="col-6">
          <h1 className="volunteers-text">Адреса*</h1>
          <input
            type="text"
            className="name-input"
            placeholder="Example Street 24"
          />
        </div>
        <div className="col-6">
          <h1 className="volunteers-text">Искуство со волонтирање*</h1>
          <div className="slider-container">
            <input
              type="range"
              min="1"
              max="10"
              className="experience-slider"
            />
             <div className="slider-scale">
            {[...Array(10)].map((_, index) => (
              <span key={index} className="slider-scale-number">
                {index + 1}
              </span>
            ))}
          </div>
          </div>
        </div>
        <div className="col-6">
          <h1 className="volunteers-text">Телефонски број*</h1>
          <input
            type="number"
            className="name-input"
            placeholder="+38900000000"
          />
        </div>
        <div className="col-3 mt-2 ">
          <h1 className="volunteers-text">Волонтерски интереси*</h1>
          <button className="mx-2  my-2  volunteers-btn">Lorem Ipsum</button>
          <button className="mx-2 my-2   volunteers-btn">Lorem Ipsum</button>
        </div>
        <div className="col-3 mt-5">
          <button className="mx-2 my-2 volunteers-btn">Lorem Ipsum</button>
          <button className="mx-2 my-2  volunteers-btn">Lorem Ipsum</button>
        </div>
        <div className="col-6 email-text">
          <h1 className="volunteers-text">Email*</h1>
          <input
            type="text"
            className="name-input"
            placeholder="example@email.com"
          />
        </div>
        <div className="col-12 text-center">
          <button className="volunteers-btn-last text-white">Пријави Се</button>
        </div>
      </div>
    </div>
  );
};
