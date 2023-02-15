import { BiMoviePlay } from "react-icons/bi";
// import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
// import { useState } from "react";
import '../style/movies.scss'

function Movies({ item, id }) {
  // const [like, setLike] = useState([]);

  const titleString = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  };

 


  return (
    <div className="movies">
      <div
        key={id}
        className="inner w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2 "
      >
        <img
          src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`}
          alt="item"
        />
        <div className="">
          <p className="text-white w-[160px] whitespace-wrap flex mt-2 text-gray-200">
            <BiMoviePlay className="mt-1 mr-2" />
            {titleString(item?.title, 30)}
          </p>
          <p>
            {/* {like ? <AiFillHeart className="f" /> : <AiOutlineHeart className=""/>} */}
          </p>
        </div>
      </div>
    </div>
  );
} 

export default Movies;
