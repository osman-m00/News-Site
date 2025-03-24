import React from 'react'

const Main = () => {
  return (
    <div className="border border-black w-[900px] rounded-2xl overflow-hidden bg-white mt-30 ml-10">
      
      {/* Image Section */}
      <div className="w-full h-[450px]">
        <img className="w-full h-full object-cover" src="/news.jpg" alt="News" />
      </div>

      {/* Text Section */}
      <div className="p-8">
        <h1 className="text-3xl font-bold">Trump looms over Canada’s election as campaign begins</h1>
        <p className="text-xl mt-3">
          The country will vote on 28 April as President Trump wages a trade war and says he wants to make Canada the 51st US state.
        </p>
        <div className="text-gray-500 text-lg mt-3">
          <span>2 hrs ago</span> | <span>US & Canada</span>
        </div>
      </div>

    </div>
  )
}

export default Main
