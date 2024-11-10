import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../AuthContext";

const Topbar = ({ handleLogout }) => {
  const { user } = useAuth();

  const [showAdditionalContent, setShowAdditionalContent] = useState(false);

  const toggleAdditionalContent = () => {
    setShowAdditionalContent(!showAdditionalContent);
  };
  return (
    <div className=" flex  h-[81px]  text-black bg-[white]">
      <div className=" mx-2 my-1  flex z-10 w-full items-center justify-between  px-[20px]">
        <div className="text-[#204e51] font-bold text-[28px]">Agrolux</div>

        <div className="flex items-center gap-5 ">
          <div className="border h-[40px] w-[90px] text-[18px] flex items-center justify-center rounded-[15px]">
            <p>{user?.firstName}</p>
          </div>
          <div
            className="cursor-pointer hidden max-md:flex "
            onClick={toggleAdditionalContent}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="34"
              height="34"
              viewBox="0 0 24 24"
              fill="none"
            >
             <path
  fillRule="evenodd"
  clipRule="evenodd"
  d="M19.75 12C19.75 11.5858 19.4142 11.25 19 11.25H5C4.58579 11.25 4.25 11.5858 4.25 12C4.25 12.4142 4.58579 12.75 5 12.75H19C19.4142 12.75 19.75 12.4142 19.75 12Z"
  fill="#204E51"
/>
<path
  fillRule="evenodd"
  clipRule="evenodd"
  d="M19.75 7C19.75 6.58579 19.4142 6.25 19 6.25H5C4.58579 6.25 4.25 6.58579 4.25 7C4.25 7.41421 4.58579 7.75 5 7.75H19C19.4142 7.75 19.75 7.41421 19.75 7Z"
  fill="#204E51"
/>
<path
  fillRule="evenodd"
  clipRule="evenodd"
  d="M19.75 17C19.75 16.5858 19.4142 16.25 19 16.25H5C4.58579 16.25 4.25 16.5858 4.25 17C4.25 17.4142 4.58579 17.75 5 17.75H19C19.4142 17.75 19.75 17.4142 19.75 17Z"
  fill="#204E51"
/>

            </svg>
          </div>
        </div>
        <div
          className={`${
            showAdditionalContent
              ? "fixed top-0 right-0 w-[70%] bg-white h-[100vh] transition-transform transform translate-x-0"
              : "fixed top-0 right-0 w-[70%] bg-white h-[100vh] transition-transform transform translate-x-full"
          }`}
        >
          <div className="flex justify-end p-9">
            <button
              className="focus:outline-none"
              onClick={toggleAdditionalContent}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#000000"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-x"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          <div className="flex max-[780px]:flex  flex-col px-[4rem] max-[780px]:px-[2rem]">
            <div className="mt-[20px] text-white">
              <ul className=" flex flex-col gap-1 text-[20px] items-start text-[black] max-[700px]:text-[15px] ">
                {/* <Link to="/overview" className="w-full ">
                  <li className="cursor-pointer hover:bg-[#204e51] hover:text-white w-full h-[60px] flex items-center px-3 rounded-[10px]">
                    Overview
                  </li>
                </Link> */}

                {/* <li className="cursor-pointer hover:bg-[#204e51] hover:text-white w-full h-[60px] flex items-center px-3 rounded-[10px]">
                  Weather forecast
                </li> */}
                <Link to="/plant" className="w-full">
                  <li className="cursor-pointer font-bold border shadow-md hover:bg-[#000000] hover:text-white w-full h-[60px] flex items-center px-3 rounded-[10px]">
                    Precision Agriculture
                  </li>
                </Link>

              </ul>
            </div>
            <div className="flex gap-[2rem] md:max-lg:gap-[1rem]   max-sm:flex-col">
              <div className="flex text-[#ED4129] text-[20px]  cursor-pointer gap-5  mt-[70px] flex-col">
                <div
                  className=" flex gap-5 items-center"
                  onClick={handleLogout}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                  >
                    <path
                      d="M34.9066 30.72C34.8905 31.2951 34.7589 31.8611 34.5198 32.3844C34.2806 32.9077 33.9388 33.3776 33.5146 33.7662C33.0903 34.1549 32.5923 34.4543 32.0501 34.6468C31.508 34.8393 30.9326 34.9208 30.3583 34.8867C26.77 34.9067 23.18 34.8867 19.5916 34.8867C19.3706 34.8867 19.1587 34.7989 19.0024 34.6426C18.8461 34.4863 18.7583 34.2743 18.7583 34.0533C18.7583 33.8323 18.8461 33.6204 19.0024 33.4641C19.1587 33.3078 19.3706 33.22 19.5916 33.22C23.2583 33.22 26.925 33.2733 30.5916 33.22C32.4366 33.1933 33.24 31.8067 33.24 30.1567V9.38333C33.2526 8.85881 33.1047 8.34295 32.8161 7.9048C32.5275 7.46665 32.1119 7.12712 31.625 6.93166C31.0495 6.77477 30.4508 6.72116 29.8566 6.77333H19.5916C19.3706 6.77333 19.1587 6.68553 19.0024 6.52925C18.8461 6.37297 18.7583 6.16101 18.7583 5.94C18.7583 5.71898 18.8461 5.50702 19.0024 5.35074C19.1587 5.19446 19.3706 5.10666 19.5916 5.10666C23.3 5.10666 27.0333 4.965 30.7383 5.10666C31.3055 5.12078 31.8642 5.24762 32.3819 5.47979C32.8996 5.71195 33.3659 6.04481 33.7537 6.45896C34.1415 6.87312 34.443 7.3603 34.6406 7.89212C34.8383 8.42394 34.9281 8.98977 34.905 9.55666L34.9066 30.72Z"
                      fill="#ED4129"
                    />
                    <path
                      d="M26.3232 20.59C26.4639 20.4527 26.5462 20.2664 26.5532 20.07C26.5582 20.0469 26.5616 20.0235 26.5632 20C26.5615 19.977 26.5582 19.9542 26.5532 19.9317C26.5473 19.7345 26.4648 19.5474 26.3232 19.41L20.2082 13.2967C20.0511 13.1449 19.8406 13.0609 19.6221 13.0628C19.4036 13.0647 19.1946 13.1523 19.0401 13.3068C18.8855 13.4613 18.7979 13.6703 18.796 13.8888C18.7941 14.1073 18.8781 14.3178 19.0299 14.475L23.7232 19.1667H5.81991C5.59889 19.1667 5.38693 19.2545 5.23065 19.4107C5.07437 19.567 4.98657 19.779 4.98657 20C4.98657 20.221 5.07437 20.433 5.23065 20.5893C5.38693 20.7455 5.59889 20.8333 5.81991 20.8333H23.7232L19.0299 25.525C18.8781 25.6822 18.7941 25.8927 18.796 26.1112C18.7979 26.3297 18.8855 26.5387 19.0401 26.6932C19.1946 26.8477 19.4036 26.9353 19.6221 26.9372C19.8406 26.9391 20.0511 26.8551 20.2082 26.7033L26.3232 20.59Z"
                      fill="#ED4129"
                    />
                  </svg>
                  Log Out
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
