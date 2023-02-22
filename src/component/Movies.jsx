import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { useState } from "react";
import '../style/movies.scss'
import {UserAuth} from '../context/AuthContext';
import {db} from '../firebase'
import { arrayUnion, doc, updateDoc } from "firebase/firestore";


function Movies({ item, id }) {
  const [like, setLike] = useState(false);
  const [saved, setSaved] = useState(false)
  const {user} = UserAuth()

  const movieID = doc(db, 'users', `${user?.email}`)

  const saveShow = async () => {
    if(user?.email){
      setLike(!like)
      setSaved(true)
      await updateDoc(movieID, {
        savedShows : arrayUnion({
          id: item.id, 
          title: item.title,
          img: item.backdrop_path
        })
      })
    } else {
      alert('Please log in to save a movie')
    }
  };

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
        className="inner w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2"
      >
        <img
          src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`}
          alt="item"
        />
        <div className="">
          <p className="text-white w-[160px] whitespace-wrap flex mt-2 text-gray-200">
            {titleString(item?.title, 30)}
          </p>
            <p onClick={saveShow}>
            {like ?  <AiFillHeart className="text-white mt-1 absolute right-3"/> : <AiOutlineHeart className="text-white" />}
          </p>
        </div>
      </div>
    </div>
  );
} 

export default Movies;
