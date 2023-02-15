import axios from "axios";
import React, { useEffect, useState } from "react";
import Movies from "./Movies";
import { BiChevronLeftCircle, BiChevronRightCircle } from "react-icons/bi";

const Row = ({ title, fetchURL, rowID }) => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    axios.get(fetchURL).then((responsive) => {
      setMovies(responsive.data.results);
    });
  }, [fetchURL]);

  const sliderLeft = () => {
    var slider = document.getElementById('slider' + rowID)
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const sliderRight = () => {
    var slider = document.getElementById('slider' + rowID)
    slider.scrollLeft = slider.scrollLeft + 500;
  };


  return (
    <div className="row bg-gray-800">
      <h2 className="text-white font-bold md:text-xl p-4">{title}</h2>
      <div className="relative flex items-center group">
        <BiChevronLeftCircle
        onClick={sliderLeft}
          className="bg-white rounded-full absolute t-10 left-0 opacity-30 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
          size={40}
        />
        <div
          id={'slider' + rowID}
          className="w-full h-full overflow-x-scroll scroll-bar-hide relative whitespace-nowrap scroll-smooth flex"
        >
          {movies.map((item, id) => (
            <Movies key={id} id={id} item={item} />
          ))}
        </div>
        <BiChevronRightCircle
          onClick={sliderRight}
          className="bg-white rounded-full absolute right-0 opacity-30 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
          size={40}
        />
      </div>
    </div>
  );
};

export default Row;
