import Bmw from "./assets/bwm.jpg";
import Lamb from "./assets/STO.jpg";
import One from "./assets/One.jpg";

export default function App() {
  return (
    <>
      <div className="flex justify-evenly h-screen gap-2 items-center">
        <div className="w-[400px] card px-5 py-2 h-[700px]">
          <h1 className="text-3xl">BMW M3 F80 generation</h1>
          <img src={Bmw} alt="" className="w-full" />
          <p>
            The M3 version of the F30 3 Series was designated the F80 and was
            produced from 2014 to 2018. The F80 M3 was powered by the BMW S55
            twin-turbocharged straight-six engine, therefore being the first
            turbocharged M3 model. Despite the smaller displacement than the V8
            engine used by the previous generation of M3, the switch from
            naturally aspirated engines to turbocharging resulted in peak power
            being increased from 309 to 317 kW (420 to 431 PS; 414 to 425 hp),
            and peak torque being increased from 400 to 550 N⋅m (295 to 406
            lb⋅ft). The official 0-97 km/h acceleration times are 3.9 seconds
            with the M-DCT transmission and 4.1 seconds with the manual
            transmission.Top speed is limited to 250 km/h but an optional M
            Driver's package raises this to 280 km/h. The kerb weight is 1,621
            kg.
          </p>
        </div>
        <div className="w-[400px] card px-5 py-2 h-[700px]">
          <h1 className="text-3xl">The Lamborghini Huracán</h1>
          <img src={Lamb} alt="" className="w-full" />
          <p>
            The Lamborghini Huracán is a sports car built by Italian automotive
            manufacturer Lamborghini from 2014 to 2024. The Huracán was revealed
            online in December 2013, making its worldwide debut at the 2014
            Geneva Auto Show and was released to the market in the second
            quarter of 2014, replacing the Gallardo.The Huracán retains the
            5.2-litre naturally aspirated Audi/Lamborghini V10 engine of the
            facelifted Gallardo, tuned to generate a maximum power output of 449
            kW To ensure its balance and performance, the car is mid-engined.
            The engine has both direct fuel injection and multi-point fuel
            injection. It combines the benefits of both of these systems; it is
            the first time this combination is used in a V10 engine. The firing
            order of the engine is 1, 6, 5, 10, 2, 7, 3, 8, 4, 9. This is
            printed on a metal plate on the top of the engine, as with all other
            Lamborghini models.
          </p>
        </div>
        <div className="w-[400px] px-5 py-2 card h-[700px]">
          <h1 className="text-3xl">Koenigsegg One:1</h1>
          <img src={One} alt="" className="w-full" />
          <p>
            The Koenigsegg One:1 was presented at the 2014 Geneva Motor Show
            held in March.Koenigsegg built six cars apart from the car
            presented at the Geneva Motor Show, all of which were already
            sold.Koenigsegg took two cars to the 2014 Goodwood Festival of
            Speed, where they were displayed alongside other sports cars such as
            the McLaren P1, LaFerrari, the Porsche 918 Spyder and the Pagani
            Huayra. The car is fitted with a variant of the same 5.0 L
            twin-turbocharged V8 engine used in the other Agera variants. It
            generates a maximum power output of 1,360 PS  at
            7,500 rpm and 1,371 N⋅m of torque at 6,000 rpm.
            The transmission is a 7-speed dual clutch paddle shift as used in
            other variants of the Agera. The name One:1 comes from the
            power-to-weight ratio giving the car 1 PS per
            1 kg mass.
          </p>
        </div>
      </div>
    </>
  );
}
