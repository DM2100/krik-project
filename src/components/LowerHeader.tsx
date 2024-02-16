import Link from "next/link";
import React, { useState } from "react";

export const LowerHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  return (
    <div className="container-fluid header2 px-5 ">
      <div className="row mx-2">
        <div className="col-4 mx-5 px-5">
          <Link href="/homepage">
       
              <div className="logo mx-5 my-1"></div>
          
          </Link>
        </div>
        <div
          className="col-1 header2-btns py-4 px-4"
          onMouseLeave={closeDropdown}
        >
          <button
            type="button"
            className={`dropdown-button ${isOpen ? "active" : ""}`}
            onClick={toggleDropdown}
          >
            За нас {isOpen && <span className="arrow down"></span>}
          </button>
          {isOpen && (
            <div className="dropdown">
              <ul role="menu">
                <li>
                  <a href="/aboutus" className="" onClick={closeDropdown}>
                    За Крик
                  </a>
                </li>
                <li>
                  <a href="ourteam" className="" onClick={closeDropdown}>
                    Тимот на Крик
                  </a>
                </li>
                <li>
                  <a href="volunteerpage" className="" onClick={closeDropdown}>
                    Волонтери
                  </a>
                </li>
                <li>
                  <a href="archivepage" className="" onClick={closeDropdown}>
                    Архива
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>

        <div className="col-1 header2-btns py-4 px-4">
          <Link href="/servicespage">
         
              <button>Услуги</button>
          
          </Link>
        </div>
        <div className="col-1 header2-btns py-4 px-4">
          <Link href="projects">
        
              <button>Проекти</button>
          
          </Link>
        </div>
        <div className="col-1 header2-btns py-4 px-4">
          <Link href="#footer">
         
            <div>

            <button>Контакт</button>
            </div>
       
          </Link>
        </div>
        <div className="col-1 header2-btns-color py-4 px-4">
          <Link href="/donatepage">
            <button>Донирај</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
