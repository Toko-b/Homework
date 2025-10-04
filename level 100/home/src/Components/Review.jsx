import Product from "./images/Product.jpg";

export default function Review() {
  return (
    <>
      <div className="bg-amber-100 h-full w-full flex items-center justify-center">
        <div className="flex m-65 rounded-lg">
          <img src={Product} alt="" className="w-75"/>
          <div className="bg-white w-75">
            <h2 className="tracking-widest my-5 ml-6 text-md opacity-45 font-[Montserrat]">PERFUME</h2>
            <h1 className="ml-6 text-4xl font-[Fraunces]">Gabrielle <br /> Essence Eau <br /> De Parfum</h1>
            <p className="font-[Montserrat] my-5 ml-6 text-lg">
              A floral,solar and voluptuous <br />
              interpretation composed by    <br />
              Oliver Polge, Perfumer-Creator <br />
              for the House of CHANEL <br />
            </p>
            <div className="flex">
                <h1 className="inline text-4xl text-green-600 ml-6 font-[Montserrat]">$149.99</h1>
                <p className="line-through inline ml-6 font-[Montserrat] opacity-45">$169.99</p>
            </div>
            <button className="mx-6 my-4 text-center bg-green-600 w-63 h-10 rounded-lg text-white hover:bg-green-700 cursor-pointer">🛒Add to Cart</button>
          </div>
        </div>
      </div>
    </>
  );
}
