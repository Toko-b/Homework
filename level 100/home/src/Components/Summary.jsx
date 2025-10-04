import Hero from "./images/Hero.svg";
import Music from "./images/Music.svg";

export default function Summary() {
  return (
    <>
      <div className="h-screen w-full bg-blue-50 flex items-center justify-center">
        <div className="w-105 rounded-md h-150">
          <div>
            <img src={Hero} alt="" className="rounded-t-xl" />
          </div>
          <div className="flex flex-col rounded-b-xl bg-white h-105 items-center text-center">
            <h1 className="mt-10 mb-5 text-3xl font-[Red Hat Display]">Order Summary</h1>
            <p className="text-gray-600 mb-5 font-[Red Hat Display]">
              You can now listen to millions of songs, <br /> audiobooks, and
              podcasts on any device <br /> anywhere you like!
            </p>
            <div className="bg-blue-50 w-75 h-20 flex items-center rounded-2xl mb-7">
              <img src={Music} alt=""  className="ml-5 mr-4"/>
              <div className="flex flex-col mr-10 font-[Red Hat Display]">
                <h1 className="inline font-[Red Hat Display]">Annual Plan</h1>
                <p className="inline text-gray-600 font-[Red Hat Display]">$59.99/year</p>
              </div>
              <p className="text-blue-700 underline shadow-2xl shadow-blue-700 font-[Red Hat Display]">Change</p>
            </div>
            <button className="bg-blue-700 w-75 h-12 rounded-lg text-white shadow-4xl shadow-blue-700 mb-5 font-[Red Hat Display]">Proceed to Payment</button>
            <button className="text-gray-600 font-[Red Hat Display]">Cancel Order</button>
          </div>
        </div>
      </div>
    </>
  );
}
