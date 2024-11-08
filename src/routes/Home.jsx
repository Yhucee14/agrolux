import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/header";
import Footer from "../components/footer";
import cropData from "./cropData";

const Home = () => {
  return (
    <div className="">
      <Header />

      <div
        className="h-[100vh]  justify-center flex flex-col   opacity-2 backdrop-blur-lg relative "
        style={{
          backgroundImage: `url('/img/bg.png')`,
          backgroundSize: "cover",
        }}
      >
        <div className="flex justify-center items-center text-[90px] font-bold text-center text-[white] flex-shrink-0 max-[955px]:text-[70px]  max-sm:text-[2.5rem] ">
          AN INTUITIVE CROP
          <br /> PRODUCTION SUITE <br />
          FOR FARMERS
        </div>

        <div className="flex items-center justify-center gap-[4rem] mt-[30px]  max-md:gap-[1rem] ">
          <Link to="/login">
            <button className="bg-[#204E51] h-[45px] px-[25px] rounded-[10px] text-[#ffff] text-[15px]">
              Get Started
            </button>
          </Link>
          <button className="rounded-[10px] border-[#ffff] border h-[45px] px-[25px] text-[white] text-[15px]">
            Learn more
          </button>
        </div>
      </div>
      <div className="h-[100vh] flex items-center justify-center  max-[1331px]:flex-col  gap-[4rem] max-[1331px]:mx-[0px] ">
        <div className="max-[1331px]:mx-[10px] ">
          <h1 className="text-[4rem] text-[#204e51] font-bold justify-start mt-[25px] max-md:text-[3rem] ">
            Our Product
          </h1>
          <div className="max-w-[660px] w-[100%] font-normal text-[1.5rem] max-[1331px]:text-[20px] flex-shrink max-md:text-[1rem] ">
            <p>
              Tailored for maximum crop yield, our system is meticulously
              designed to optimize agricultural output through strategic and
              data-driven approaches. By leveraging advanced technologies,
              precision farming techniques, and insightful analytics, we aim to
              enhance productivity and ensure the efficient utilization of
              resources, contributing to local and national economy.
            </p>
            <Link to="/login">
              <button className="bg-[#204E51] h-[45px] px-[25px] rounded-[10px] text-[15px] text-[#ffff] mt-[15px]">
                Get Started
              </button>
            </Link>
          </div>
        </div>

        <div
          className="h-[550px]  rounded-[25px] flex-shrink  max-w-[545px] w-[100%]"
          style={{
            backgroundImage: `url('/img/img.png')`,
            backgroundSize: "cover",
          }}
        ></div>
      </div>
      {/* <div className="h-auto justify-center flex mt-[20px] ">
        <div className="flex items-center flex-col">
          <h1 className="text-[#204E51] text-[72px] font-bold max-[745px]:text-[50px] mx-[20px]">
            Our Awesome Features
          </h1>
          <div>
           

            <div className=" ">
              <div className="max-[1245px]:grid max-[1245px]:grid-rows-2 max-[1245px]:grid-flow-col flex max-[645px]:grid-rows-4 gap-5">
                {cropData.map((crop, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-[17px] min-w-[300px] text-center border px-[25px] py-[20px] mt-[0px] mr-3 flex items-center justify-center flex-col"
                  >
                    <img
                      src={require(`../assets/${crop.Image}`)}
                      alt="imawdcw"
                    />
                    <h1 className="text-[18px] text-[#204e51] font-medium py-[20px]">
                      {crop.title}
                    </h1>
                    <p className="text-[15px] font-normal">
                      {crop.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div> */}
      {/* <div className="h-[100vh] ">
        <div
          className="h-[688px] w-full  px-[150px] py-[10rem] max-[1331px]:px-[120px] max-[731px]:px-[2rem] justify-between text-white flex flex-col"
          style={{
            backgroundImage: `url('/img/img1.png')`,
            backgroundSize: "cover",
          }}
        >
          <h1 className="text-[4rem] font-bold  max-md:text-[3rem]">
            {" "}
            Farming Meets <br />
            Technology
          </h1>
          <h1 className="text-[4rem] font-semibold max-md:text-[3rem] ">
            32°C Mostly sunny
          </h1>
          <div>
            <div className="flex items-center justify-start gap-[1rem] mt-[30px] max-[1331px]:mt-[30px] max-md:gap-[2rem]">
              <Link to="/login">
                <button className="bg-[#204E51] h-[45px] w-[110px] rounded-[10px] text-[#ffff] text-[15px]">
                  Learn more
                </button>
              </Link>
              <button className="rounded-[10px] border-[#ffff] border h-[45px] w-[110px] text-[white] text-[15px]">
                View Forcast
              </button>
            </div>
          </div>
        </div>
      </div> */}
      {/* <div className="h-[100vh] flex items-center justify-center gap-[5rem] max-[1331px]:flex-col max-[1331px]:mx-[5px] mb-[30px]">
        <div className="max-w-[660px] w-[100%] font-normal text-[25px] ">
          <h1 className="text-[72px] text-[#204e51] font-semibold max-[731px]:text-[50px]">
            The Benefits of Choosing to Use Agrolux
          </h1>
          <p className="text-[15px] font-light ">
            What you stand to gain from using our product.
          </p>
          <Link to="/login">
            <button className="bg-[#204E51] h-[45px] px-[25px] rounded-[10px] text-[15px] text-[#ffff] mt-[35px] flex items-center gap-[7px]">
              Learn more{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="18"
                viewBox="0 0 21 18"
                fill="none"
              >
                <path
                  d="M12.9366 1L19.5656 8.83208L12.9366 16.6642M1 8.83208H19.3799"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </Link>
        </div>
        <div
          className="h-[550px] max-w-[545px] w-[100%] rounded-[25px]  flex-shrink "
          style={{
            backgroundImage: `url('/img/img.png')`,
            backgroundSize: "cover",
          }}
        ></div>
      </div> */}
      <div className="h-[100vh] relative md:h-[50vh]">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
