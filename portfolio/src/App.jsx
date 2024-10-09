import Header from "./Components/Header"

export default function App() {
  return (
    <div className="bg-darkbg" >
    <Header/>
      <div className="w-full h-screen flex justify-center items-center" id="home">
        <div className="text-white" > 
           <h3 className="font-sans text-3xl" >Hi there, I am</h3>
           <h1>Mark Angelo Pallesco</h1>
           <h2>Im a Front-End Developer</h2>
           <button className="px-8 py-2 bg-transparent text-xl text-white rounded-3xl border border-white" >Learn More</button>
        </div>
      </div>
    </div>
  
  )
}