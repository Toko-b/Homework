import JessImg from "./images/avatar-jessica.jpeg";
export default function Jess() {
  return (
    <>
      <div className="bg-gray-800 flex justify-center items-center">
        <div className="bg-gray-700 w-100 flex flex-col items-center my-35 rounded-md">
          <img src={JessImg} alt="" className="rounded-full w-25 my-10" />
          <h1 className="text-white text-2xl">Jessica Randall</h1>
          <p className="mt-5 mb-10 text-lime-400">London,United Kingdom</p>
          <p>"Front-end developer and avid reader."</p>
          <button className="bg-gray-600 w-80 h-10 text-white my-3 rounded-md p-2 cursor-pointer hover:bg-lime-400 hover:text-black duration-600">GitHub</button>
          <button className="bg-gray-600 w-80 h-10 text-white my-3 rounded-md p-2 cursor-pointer hover:bg-lime-400 hover:text-black duration-600">Frontend Mentor</button>
          <button className="bg-gray-600 w-80 h-10 text-white my-3 rounded-md p-2 cursor-pointer hover:bg-lime-400 hover:text-black duration-600">LinkedIn</button>
          <button className="bg-gray-600 w-80 h-10 text-white my-3 rounded-md p-2 cursor-pointer hover:bg-lime-400 hover:text-black duration-600">Twitter</button>
          <button className="bg-gray-600 w-80 h-10 text-white mt-3 mb-12 rounded-md p-2 cursor-pointer hover:bg-lime-400 hover:text-black duration-600">Instagram</button>
        </div>
      </div>
    </>
  );
}
