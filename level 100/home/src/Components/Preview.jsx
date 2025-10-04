import Equilibrium from "./images/image-equilibrium.jpg"
import Etherium from "./images/icon-ethereum.svg"
import Clock from "./images/icon-clock.svg"
import Pfp from  "./images/image-avatar.png"

export default function Preview(){
    return (
        <>
            <div className="w-screen h-screen bg-blue-950 flex items-center justify-center">
                <div className="bg-blue-900 w-80 h-140 rounded-md shadow-2xl">
                    <img src={Equilibrium} alt=""  className="w-68 h-68 mx-6 my-4 hover:fill-cyan-400"/>
                    <h1 className="mx-6 text-white text-2xl font-[Outfit] hover:text-cyan-400">Equilibrium #3429</h1>
                    <p className="text-blue-500 mx-6 my-5 font-[Outfit]">Our Equilibrium collection promotes <br /> balance and calm.</p>
                    <img src={Etherium} alt="" className="ml-6 mr-2 inline"/>
                    <p className="inline text-cyan-400 font-[Outfit]">0.041 ETH</p>
                    <img src={Clock} alt="" className="inline ml-23 mr-2"/>
                    <p className="inline text-blue-500 font-[Outfit]">3 days left</p>
                    <hr className="w-68 mx-6 my-6 border-blue-500"/>
                    <img src={Pfp} alt="" className="inline w-10 ml-6 border-1 rounded-full"/>
                    <p className="inline ml-5 text-blue-500 font-[Outfit]">Creation of<span className="text-white ml-2 hover:text-cyan-400">Jules Wyvern</span></p>
                </div>
            </div>
        </>
    )
}