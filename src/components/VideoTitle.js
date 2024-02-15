const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[20%] px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="text-lg py-6 w-1/4">{overview}</p>
      <div className="">
        <button className="bg-gray-500  hover:bg-opacity-80 p-4 px-12 text-xl bg-opacity-50 rounded-lg text-white">
          ▶ Play
        </button>
        <button className=" mx-2 bg-gray-500 p-4 px-12 text-xl bg-opacity-50 rounded-lg text-white">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
