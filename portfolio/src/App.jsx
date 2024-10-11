import Header from "./Components/Header";

export default function App() {

  
  return (
    <div className="bg-darkbg">
      <Header />
      <main className="w-full h-screen flex justify-center items-center" id="info">
        <section className="text-white gap-4 flex flex-col items-center w-full ">
          <h3 className="font-sans text-3xl">Hi there, I am</h3>
          <h1 className="font-bold text-5xl">Mark Angelo Pallesco</h1>
          <h2 className="text-2xl">Im a Front-End Developer</h2>
          <button className="px-8 py-2 bg-transparent text-xl text-white rounded-3xl border border-white hover:bg-white hover:text-darkbg transition duration-300">
            Learn More
          </button>
        </section>
      </main>
    </div>
  );
}
