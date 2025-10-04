import Kilimanjaro from "./assets/Kilimanjaro.jpg"

export default function App() {
  let greeting = "Welcome to React!"
  let input = document.getElementById("Name");
  let logName = () => {
    let name = input.value;
    if(name.length > 0){
      console.log(name);
    }else{
      console.log("you have to enter your name")
    }
  }
  return (
    <>
      <h2 className="text-2xl text-cyan-500">{greeting}</h2>
      <img src={Kilimanjaro} alt=""  className="w-sm h-60"/>
      <input type="text" placeholder="Enter Your Name" className="bg-slate-500 placeholder:text-white border-2 rounded-md border-blue-400 m-5 p-2" id="Name"/>
      <br />
      <button onClick={logName} className="bg-cyan-950 text-white w-25 h-10 rounded-md m-5 p-2 hover:brightness-110">Click me</button>
    </>
  )
}

