import React, { useState } from "react";
import DashboardLayout from "../layout/DashboardLayout";
import Topbar from "../components/Topbar";
import nigeriaStates from "./nigeriaStates";

export const Plant = () => {
  const [temperature, setTemperature] = useState(null);
  const [humidity, setHumidity] = useState(null);
  const [state, setState] = useState("");
  const [states, setStates] = useState(false);
  const [season, setSeason] = useState("");
  const [timing, setTiming] = useState("");
  const [selectedCrop, setSelectedCrop] = useState("");
  const [crop, setCrop] = useState("");
  const [plantSeason, setPlantSeason] = useState("");

  const crops = ["Cassava", "Cotton", "Maize", "Rice", "Watermelon"];

  const handleGenerates = async () => {
    try {
      setStates(true);
      // if (!selectedCrop || !state) {
      //     console.error('Please select a crop and location');
      //     return;
      // }

      const data = {
        temperature: temperature,
        humidity: humidity,
        label_cassava: selectedCrop === "Cassava" ? 1 : 0,
        label_cotton: selectedCrop === "Cotton" ? 1 : 0,
        label_maize: selectedCrop === "Maize" ? 1 : 0,
        label_rice: selectedCrop === "Rice" ? 1 : 0,
        label_watermelon: selectedCrop === "Watermelon" ? 1 : 0,
      };
      console.log(data);

      const response = await fetch(
        "https://agrolox-models.onrender.com/season/predict",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (response.ok) {
        const result = await response.json();
        console.log("Predicted season:", result);
        setSeason(result.season_result);
        setTiming(result.harvest_timing);

        const plantSeason = result.season_result === "rainy season" ? "1" : "0";
        setPlantSeason(plantSeason);
        // Handle the predicted season data here
      } else {
        console.error("Failed to predict season");
      }
    } catch (error) {
      console.error("Error predicting season:", error);
    } finally {
      setStates(false);
    }
  };
  const handleGenerate = async () => {
    try {
      setStates(true);

      const response = await fetch(
        `https://agrolux.onrender.com/weather?state=${state}`
      );

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        console.log(data.temperature);
        setTemperature(data.temperature);
        setHumidity(data.humidity);
      } else {
        console.error("Failed to fetch weather data");
      }
    } catch (error) {
      console.error("Error fetching weather data:", error);
    } finally {
      setStates(false);
    }
  };
  const handleGeneratess = async () => {
    try {
      setStates(true);

      const data = {
        temperature: temperature,
        humidity: humidity,
        Plant_Season: "0",
      };
      console.log(data);

      const response = await fetch(
        "https://agrolox-models.onrender.com/crop/predict",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (response.ok) {
        const result = await response.json();
        console.log("Predicted season:", result);
        setCrop(result.crop_result);

        // Handle the predicted season data here
      } else {
        console.error("Failed to predict season");
      }
    } catch (error) {
      console.error("Error predicting season:", error);
    } finally {
      setStates(false);
    }
  };

  const handleLocationChange = (e) => {
    setState(e.target.value);
  };
  const handleCropChange = (e) => {
    setSelectedCrop(e.target.value);
  };
  return (
    <DashboardLayout>
      <div className="p-[30px] overflow-scroll ">
        <div className="flex justify-between ]">
          <h1 className="text-[28px] font-medium text-[#204e51]">
            Plant a crop
          </h1>
        </div>
        <div className="pt-[50px]">
          <div className="flex justify-between items-center max-[800px]:flex-col max-[1000px]:items-start max-[1000px]:gap-[20px] ">
            <select
              value={selectedCrop}
              onChange={handleCropChange}
              className="h-[50px] w-full max-w-[400px] border-b-[2px] mt-[8px] px-2  border-[#204e51]"
           
            >
              <option value="defaultCrop" disabled hidden>
                Select a Crop
              </option>
              {crops.map((crop, index) => (
                <option key={index} value={crop}>
                  {crop}
                </option>
              ))}
            </select>
            <select
              value={state}
              onChange={handleLocationChange}
              className="h-[50px] w-full max-w-[400px] border-b-[2px] mt-[8px] px-2 border-[#204e51]"
            >
              <option value="" disabled>
                Select a Location
              </option>
              {nigeriaStates.map((location, index) => (
                <option key={index} value={location}>
                  {location}
                </option>
              ))}
            </select>
          </div>
          <div className="text-[30px] text-[#204e51] flex justify-between items-center pt-[50px] font-medium max-[1000px]:items-start max-[1000px]:flex-col">
            <h1>
              Temperature :<span className="text-[18px]">{temperature} °C</span>
            </h1>
            <h1>
              Humidity :<span className="text-[18px]">{humidity} %</span>
            </h1>
            <div
              className="bg-[#204e51] w-[100%] max-w-[230px] rounded-[20px] py-[10px] h-[50px] items-center justify-center cursor-pointer flex text-[#ffff] mt-[30px] text-[18px] "
              onClick={handleGenerate}
            >
              {" "}
              {states ? (
                <div className="spinner-container">
                  <div className="spinner"></div>
                </div>
              ) : (
                "Generate"
              )}
            </div>
          </div>
          <div className="text-[30px] text-[#204e51] flex justify-between  pt-[80px] font-medium max-[1000px]:items-start max-[1000px]:flex-col ">
            <div>
              Harvest Season :
              <h1 className="text-[18px]">
                <span>{season}</span>
                <br />
                <span>{timing}</span>
              </h1>
            </div>

            <div className="bg-[#F7FFDD] h-auto  w-[100%] max-w-[400px] rounded-[20px] p-[35px] flex-col flex text-[25px] max-[700px]:mt-[10px]">
              Suggested Crops
              <div className="flex items-center gap-5 mt-[20px]">
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="0.5"
                    y="0.5"
                    width="29"
                    height="29"
                    rx="4.5"
                    fill="#F0F0F0"
                    stroke="#204E51"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M21.0303 10.9697C21.3232 11.2626 21.3232 11.7374 21.0303 12.0303L14.0303 19.0303C13.7374 19.3232 13.2626 19.3232 12.9697 19.0303L8.96967 15.0303C8.67678 14.7374 8.67678 14.2626 8.96967 13.9697C9.26256 13.6768 9.73744 13.6768 10.0303 13.9697L13.5 17.4393L19.9697 10.9697C20.2626 10.6768 20.7374 10.6768 21.0303 10.9697Z"
                    fill="black"
                  />
                </svg>

                <p className="text-[#204e51] text-[20px] font-light ">{crop}</p>
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center mt-[3rem] max-[850px]:flex-col max-[1000px]:w-[100%] max-[1000px]:items-start  ">
            <div
              className="bg-[#204e51] w-[100%] max-w-[230px] rounded-[20px] py-[10px] h-[50px] items-center justify-center cursor-pointer flex text-[#ffff] mt-[30px] "
              onClick={handleGenerates}
            >
              {states ? (
                <div className="spinner-container">
                  <div className="spinner"></div>
                </div>
              ) : (
                "Get Harvest Season"
              )}
            </div>

            <div
              className="bg-[#204e51] w-[100%] max-w-[230px] rounded-[20px] py-[10px] h-[50px] items-center justify-center cursor-pointer flex text-[#ffff] mt-[30px] "
              onClick={handleGeneratess}
            >
              Suggested Crops
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};
