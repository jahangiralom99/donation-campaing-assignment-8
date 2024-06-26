import "./Banner.css";
const Banner = ({handleSearchBtn}) => {
  return (
    <div className="hero min-h-screen banner-img ">
      <div className="hero-overlay bg-[#fff] bg-opacity-60 flex items-center justify-center h-screen ">
        <div className="text-center ">
          <h1 className="text-5xl font-bold text-black">
            I Grow By Helping People In Need
          </h1>
          <form onSubmit={handleSearchBtn}>
          <input
            className="border p-4 mt-6 rounded-lg "
            type="text" name="text"
            placeholder="Search here...."
          />
          <button className="btn hover:bg-red-700 bg-red-600 p-4 rounded-lg text-white px-6">
            Search
          </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Banner;
