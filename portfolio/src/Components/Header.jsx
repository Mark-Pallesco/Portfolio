function Header() {
  return (
        <div className="absolute w-full text-white" >
            <div  className="px-10 py-5 relative">
                <header className="flex justify-between" >
                    <h3 className="text-3xl font-bold" >mark.dev</h3>
                    <nav>
                        <ul className="flex gap-4" >
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#services">Skills</a></li>
                        <li><a href="#contact">Contact</a></li>
                        </ul>
                    </nav>
                    </header>
            </div>
        </div>

  );
}

export default Header;
