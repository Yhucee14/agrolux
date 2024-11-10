import React, { useState, useEffect } from 'react';
import { useAuth } from '../AuthContext';
import { useNavigate } from 'react-router-dom';
import nigeriaStates from './nigeriaStates';
import { Plant } from './Plant';

const Dashboard = () => {
  const { loggedIn } = useAuth();
  const navigate = useNavigate();

  const [temperature, setTemperature] = useState(null);
  const [humidity, setHumidity] = useState(null);
  const [state, setState] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Redirect to login page if not logged in
  useEffect(() => {
    if (!loggedIn) {
      navigate('/login');
    }
  }, [loggedIn, navigate]);

  // Fetch weather data for the selected state
  const handleGenerate = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(`https://agrolux.onrender.com/weather?state=${state}`);
      if (response.ok) {
        const data = await response.json();
        setTemperature(data.temperature);
        setHumidity(data.humidity);
      } else {
        console.error('Failed to fetch weather data');
      }
    } catch (error) {
      console.error('Error fetching weather data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleLocationChange = (e) => {
    setState(e.target.value);
  };

  return (
    <div className='flex-1 flex flex-col'>
      <div className="p-[1px] overflow-scroll">
        {/* <h1 className="text-[28px] font-medium text-[#204e51]">Your crops Progress</h1> */}
        {/* Plant Progress Section */}
        {/* <div className="flex gap-7 justify-between max-[1126px]:grid max-[1126px]:grid-rows-2 max-[1126px]:grid-flow-col max-[500px]:grid-rows-4 w-full">
          <Plant name="Rice" location="Benue State" progress="33%" color="bg-[#F7FFDD]" />
          <Plant name="Corn" location="Benue State" progress="18%" color="bg-[#204E51]" textColor="text-[#F7FFDD]" />
          <Plant name="Chickpeas" location="Benue State" progress="90%" color="bg-[#F7FFDD]" />
          <Plant name="Add New Crop" icon={true} />
        </div> */}
        
        {/* Temperature and Humidity Section */}
        {/* <div className="bg-[#F7FFDD] h-[400px] w-[100%] max-w-[350px] mt-[50px] rounded-[20px] p-[25px]">
          <h1 className="text-[#204e51] font-bold text-[20px]">Temperature/Humidity</h1>
          <select
            value={state}
            onChange={handleLocationChange}
            className="h-[50px] w-full max-w-[400px] border-b-[2px] mt-[8px] px-2 border-[#204e51]"
          >
            <option value="" disabled>Select a Location</option>
            {nigeriaStates.map((location, index) => (
              <option key={index} value={location}>
                {location}
              </option>
            ))}
          </select>

          <div className="bg-[#204e51] px-[15px] rounded-[20px] py-[10px] flex items-center justify-center text-[#ffff] mt-[20px]" onClick={handleGenerate}>
            {isLoading ? (
              <div className="spinner"></div>
            ) : (
              "Get Data"
            )}
          </div>
          <div className="border-[#204e51] border px-[15px] rounded-[20px] py-[10px] flex items-center justify-center text-[#204e51] gap-3 mt-[20px]">
            T: <p>{temperature ? `${temperature}°C` : 'N/A'}</p>
          </div>
          <div className="border-[#204e51] border px-[15px] rounded-[20px] py-[10px] flex items-center justify-center text-[#204e51] gap-3 mt-[20px]">
            H: <p>{humidity ? `${humidity}%` : 'N/A'}</p>
          </div>
        </div> */}

        <Plant />
      </div>
    </div>
  );
};

export default Dashboard;
