import image from "../components/pics/profile.jpg";

const Header = () => {
  return (
    <div className="flex justify-center items-start  gap-5">
      <img
        src={image}
        alt="profile-picture"
        className="w-40 rounded-full border-3 border-red-700"
      />
      <div className="flex flex-col gap-2 mt-10">
        <h1 className="font-bold text-4xl sm:text-5xl md:text-6-l text-nowrap tracking-tighter">
          {" "}
          <span className="bg-gradient-to-r from-red-800 to-red-600 bg-clip-text text-transparent">
            Hi, I'm Ashley
          </span>{" "}
        </h1>
        <p className=" font-bold max-w[500px] text-lg md:text-x1">
          Hello and Welcome to my React Portfolio
        </p>
      </div>
    </div>
  );
};

export default Header;
