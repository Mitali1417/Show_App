import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Details = () => {
  const [show, setShow] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchShow = async () => {
      const response = await axios.get(`https://api.tvmaze.com/shows/${id}`);
      setShow(response.data);
    };
    fetchShow();
  }, [id]);

  const handleBook = () => {
    const bookData = {
      showName: show.name,
      showImageUrl: show.image.original,
      showSummary: show.summary,
    };
    localStorage.setItem("bookData", JSON.stringify(bookData));
  };

  return (
    <div className="bg-primary min-h-screen">
      <div className="absolute z-0 w-[40%] h-[35%] top-0 blue__gradient" />
      {show ? (
        <div className="p-6 text-white text-center justify-center ">
          <h1
            className="flex-1 relative z-[5] font-poppins ss:text-[72px] text-[48px] text-white text-center pt-12  pb-16 
       ss:leading-[100px] leading-[75px] text-gradient font-bold "
          >
            {show.name}
          </h1>
          <div className="flex justify-center flex-wrap flex-row items-center">
            <div className="w-1/4 flex flex-wrap justify-start">
              <img
                className=" rounded-xl lg:w-11/12"
                src={show.image.original}
                alt={show.name}
              />
            </div>
            <div className="flex flex-wrap w-2/4 pl-20 md:pl-12 sm:pl-10">
              <p className="py-1 pb-8 text-[16px] lg:text-[16px] text-dimWhite font-poppins font-light text-left ">
                {show.summary}
              </p>
              <button
                className=" bg-blue-gradient flex justify-start items-start px-3 py-2 my-1 font-poppins font-medium text-[14px] lg:text-[16px] text-primary outline-none rounded-[10px]"
                onClick={handleBook}
              >
                Book Ticket
              </button>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Details;
