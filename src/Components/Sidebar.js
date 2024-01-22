import React, { useState } from "react";
import "./Sidebar.css";
import { GoSearch } from "react-icons/go";
import { CiHome } from "react-icons/ci";
import { CgMenuGridO } from "react-icons/cg";
import { MdOutlineBookmarkAdded } from "react-icons/md";
import { FaPaintRoller } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";
import { FaCode } from "react-icons/fa";
import { Link } from "react-router-dom";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoMdArrowDropup } from "react-icons/io";

const Sidebar = () => {
  const [mouseEnter, setMouseEnter] = useState(false);
  const [title, setTitle] = useState("");
  const handleMouseHover = (e) => {
    setMouseEnter(true);
    setTitle(e);
  };
  const handleMouseLeave = () => {
    setMouseEnter(false);
    setTitle("");
  };

  const handleMouseEnter = () => {
    setMouseEnter(false);
    setTitle("");
  };
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className="sliderComponet">
      <div className="SidebarRoot">
        <div className="SidebarWrapper">
          <div className="search" onMouseEnter={handleMouseEnter}>
            <div className="icon">
              <GoSearch />
            </div>
          </div>
          <div className="sectionWraper" onMouseEnter={handleMouseEnter}>
            <div className="icon">
              <CiHome />
            </div>
            <div className="title">Home</div>
          </div>
          <div
            className={
              title === "getstarted"
                ? "sectionWraper hoveredDiv"
                : "sectionWraper"
            }
            onMouseEnter={() => handleMouseHover("getstarted")}
          >
            <div className="icon">
              <CgMenuGridO />
            </div>
            <div className="title">Get started</div>
          </div>
          <div
            className={
              title === "develop" ? "sectionWraper hoveredDiv" : "sectionWraper"
            }
            onMouseEnter={() => handleMouseHover("develop")}
          >
            <Link
              to={"/develop"}
              style={{ textDecoration: "none", color: "white" }}
            >
              <div className="icon">
                <FaCode />
              </div>
              <div className="title">Devlop</div>
            </Link>
          </div>
          <div
            className={
              title === "foundations"
                ? "sectionWraper hoveredDiv"
                : "sectionWraper"
            }
            onMouseEnter={() => handleMouseHover("foundations")}
          >
            <div className="icon">
              <MdOutlineBookmarkAdded />
            </div>
            <div className="title">foundations</div>
          </div>
          <div className="sectionWraper" onMouseEnter={handleMouseEnter}>
            <div className="icon">
              <FaPaintRoller />
            </div>
            <div className="title">styles</div>
          </div>
          <div className="sectionWraper" onMouseEnter={handleMouseEnter}>
            <div className="icon">
              <IoMdAdd />
            </div>
            <div className="title">Components</div>
          </div>
          <div className="sectionWraper" onMouseEnter={handleMouseEnter}>
            <div className="icon">
              <CiHome />
            </div>
            <div className="title">Home</div>
          </div>
        </div>
      </div>
      {mouseEnter === true ? (
        <div
          className={`drawerRoot ${mouseEnter ? "open" : ""}`}
          onMouseEnter={() => handleMouseHover(title)}
          onMouseLeave={handleMouseLeave}
        >
          <div className="drawerWraper">
            <div className="drawerTitle"> {title} </div>
          </div>
          <div className="listSection">
            {title === "getstarted" ? (
              <ul>
                <li>android</li>
                <li>
                  <Link to={"/"} style={{ textDecoration: "none" }}>
                    getstarted
                  </Link>
                </li>
              </ul>
            ) : title === "develop" ? (
              <div className="linkWraper">
                <div className="dropdown">
                  <div className="dropdownHeader link" onClick={handleToggle}>
                    <div>Android</div>
                    <div>
                      {isOpen ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}
                    </div>
                  </div>
                  {isOpen && (
                    <div
                      className="link"
                      onClick={() => handleOptionClick("Option 1")}
                    >
                      <Link to={"/mdc"}>MDC-Android</Link>
                    </div>
                  )}
                </div>
              </div>
            ) : title === "foundations" ? (
              <ul>
                <li>foundations</li>
                <li>
                  <Link to={"/"} style={{ textDecoration: "none" }}>
                    foundations
                  </Link>
                </li>
              </ul>
            ) : (
              ""
            )}
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Sidebar;
