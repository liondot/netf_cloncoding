import React from 'react'
import SavedShows from '../component/SavedShows'

function Account() {
  return (
    <div className='w-full h-full text-white'>
      <img
          className="w-full h-[400px] object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/3d6cf7c4-ad17-457a-b6cf-ea952926ba74/55be2c2f-9500-489c-867b-2867c5235f8c/KR-ko-20230206-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt=""
        />
        <div className="bg-black/60 fixed top-0 left-0 w-full h-[400px]">
          <div className="absolute top-[30%] p-4 md:p-8">
            <h1 className="text-3xl md:text-5xl font-bold">My Shows</h1>
          </div>
        </div>
        <SavedShows/>
    </div>
  )
}

export default Account
