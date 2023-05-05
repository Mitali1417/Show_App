import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Cards = () => {
  const [shows, setShows] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchShows = async () => {
      const response = await axios.get(
        "https://api.tvmaze.com/search/shows?q=all"
      );
      setShows(response.data);
    };
    fetchShows();
  }, []);

  const handleClick = (show) => {
    navigate(`/shows/${show.id}`);
  };

  return (
    <>
      <div className="bg-primary">
        <div className="absolute z-0 w-[40%] h-[35%] top-0 blue__gradient"/>
        <h1
          className="flex-1 relative z-[5] font-poppins font-semibold sm:text-6xl ss:text-5xl text-[52px] text-white text-center py-8 pt-20"
      
        >
          Watch<span className="text-gradient font-bold "> Unlimited </span>
          Shows
        </h1>
        <ul className="p-6">
          <div className="grid lg:grid-cols-3 xl:grid-cols-3 grid-flow-row p-10 font-poppins xl:px-32 lg:px-32 sm:grid-cols-2 ss:grid-cols-2">
            {shows.map((show) => (
              <div className="card rounded-xl my-5 m-5 p-6 flex bg-black-gradient text-white text-center justify-center ">
                <li key={shows.indexOf(show)}>
                  <h2 className="text-gradient font-bold text-[20px] pt-2">
                    {show.show.name}
                  </h2>
                  <p className="py-1 pb-4 text-[12px] text-dimWhite">
                    {show.show.language}
                  </p>
                  <button
                    className=" bg-blue-gradient px-3 py-2 my-1 font-poppins font-medium text-[13px] text-primary outline-none rounded-[10px]"
                    onClick={() => handleClick(show.show)}
                  >
                    More Details
                  </button>
                </li>
              </div>
            ))}
          </div>
        </ul>
      </div>
    </>
  );
};

export default Cards;
