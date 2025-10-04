import Everest from "./assets/Everest.jpg"

export default function App() {
  const name = "Tornike";
  const lastName = "Buskivadze";
  const handleClick = () => {
    console.log("ვა ღილაკს დააჭირე საღოლ საღოლ")
  }
  return (
    <>
      <p className="text-2xl text-amber-700">{`my name is ${name} and my last name is ${lastName}`}</p>
      <img src={Everest} alt=""  className="w-140"/>
      <button onClick={handleClick} className="bg-amber-900 border-1 rounded-md ">Click me</button>
      <img src="/public/k2.jpg" alt="" />
    </>
  );
}
