import "./index.css";
import bgvideo from "/bg-1-vid.mp4";
import dominant from "/dominant.jpg";
import about from "/about.jpg";
//import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";
import footer from "/footer.jpg";
import { FaInfoCircle } from "react-icons/fa";
import { Fade, Bounce } from "react-awesome-reveal";
//import react-helmet
import { Helmet } from "react-helmet";
//import "./index.css";

function App() {
  return (
    <>
      <Helmet>
        <title>RCF OAU| INDEX</title>
        <meta name="description" content="Redeemed Christian Fellowship OAU " />
        <link rel="icon" href="/favicon.ico" />
      </Helmet>
      <div className="App">
        {/* create an header with dropdown fo */}

        {/*r mobile screens and a nav bar for bigger screens with styling in tailwind css give the header a video backgroubnd*/}
        <header className="App-header">
          <nav className="hidden md:flex md:justify-between md:items-center md:px-4 md:py-2 z-30 relative top-0">
            <div className="flex justify-between items-center">
              <div>
                <img className="w-10 h-10" src={dominant} alt="React Logo" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white mb-4">
                  RCF OAU | Dominant Army
                </h1>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex justify-between items-center">
                <Link
                  className="text-white hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium"
                  to="/"
                >
                  Home
                </Link>
                <Link
                  className="text-white hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium"
                  to="/"
                >
                  About Us
                </Link>
                <Link
                  className="text-white hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium"
                  to="/"
                >
                  Contact Us
                </Link>
              </div>
              <div>
                <Link
                  className="bg-red-500 hover:bg-transparent px-3 py-2 rounded-md text-sm font-medium text-white"
                  to="/join"
                >
                  Join Us
                </Link>
              </div>
            </div>
          </nav>
          <div className="md:hidden flex justify-between items-center px-4 py-2">
            <div>
              <img className="w-10 h-10" src={dominant} alt="React Logo" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white mb-4">RCF OAU</h1>
            </div>
            <div>
              <button className="bg-red-500 hover:bg-transparent px-3 py-2 rounded-md text-sm font-medium text-white">
                Join Us
              </button>
            </div>
          </div>
          <video
            className="w-screen h-screen object-cover"
            autoPlay
            loop
            muted
            playsInline
            src={bgvideo}
          ></video>
          {/* create a nav bar for bigger screens */}
          {/* create a dropdown for mobile screens */}
          {/* <div className="absolute top-[10.6%] left-0 w-full h-full bg-black opacity-50"></div>*/}
          <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center md:items-start  pl-5 pt-3">
            <h1 className="text-xl font-bold text-white mb-4 justify-start md:w-[45%]">
              ✦ What we envision
            </h1>
            <h1 className="text-4xl font-bold text-white mb-4 justify-start md:w-[45%]">
              A billion souls...
            </h1>
            <h1 className="text-2xl font-bold text-white mb-4 justify-start md:w-[45%]">
              in 10,000 cities!
            </h1>
            <h1 className="text-lg font-bold text-white mb-4 justify-start md:w-[30%]">
              We envision all men celebrating endless life in Christ. Our reach
              is to the ends of the earth, we are redeploying people in Christ,
              for Christ, with Joy.
            </h1>
            <div>
              <button className="bg-red-500 hover:bg-transparent px-3 py-2 rounded-md text-sm font-medium text-white mr-5">
                <FaInfoCircle className="inline" /> Who we are
              </button>
              <button className="bg-transparent hover:text-red-500 hover:border-red-500 px-3 py-2 rounded-md text-sm font-medium text-white">
                Contact Us
              </button>
            </div>
            <p className="text-white">
              Lorem <code>Ipsum Dolor</code> sit amet
            </p>
            <p className="text-white">
              <a
                className="text-blue-400 hover:underline"
                href="#"
                target="_blank"
                rel="noopener noreferrer"
              >
                Locate Us
              </a>{" "}
              |{" "}
              <a
                className="text-blue-400 hover:underline"
                href="#"
                target="_blank"
                rel="noopener noreferrer"
              >
                Watch us live
              </a>
            </p>
          </div>
        </header>
        {/* create a section for the about us page */}
        <div className="about-us">
          <div className="container mx-auto">
            <div className="flex flex-col justify-center items-center">
              <h1 className="text-4xl font-bold text-white mb-4">About us</h1>
              <h1 className="text-2xl font-bold text-white mb-4">....</h1>
              <Bounce duration={1000}>
                <div className="flex flex-col md:flex-row justify-center items-center">
                  <img
                    className="object-left w-1/4 h-1/4 pr-2 rounded-full"
                    src={about}
                    alt="React Logo"
                  />
                  <blockquote className="text-white">
                    Lorem Ipsum Dolor sit amet, consectetur adipiscing elit.
                    Donec euismod, nisl eget fermentum aliquam, ipsum tortor
                    ultricies dolor, quis aliquam odio quam sed nunc. Donec
                    euismod, nisl eget fermentum aliquam, ipsum tortor ultricies
                    dolor, quis aliquam odio quam sed nunc. Lorem Ipsum Dolor
                    sit amet, consectetur adipiscing elit. Donec euismod, nisl
                    eget fermentum aliquam, ipsum tortor ultricies dolor, quis
                    aliquam odio quam sed nunc. Donec euismod, nisl eget
                    fermentum aliquam, ipsum tortor ultricies dolor, quis
                    aliquam odio quam sed nunc. Lorem Ipsum Dolor sit amet,
                    consectetur adipiscing elit. Donec euismod, nisl eget
                    fermentum aliquam, ipsum tortor ultricies dolor, quis
                    aliquam odio quam sed nunc. Donec euismod, nisl eget
                    fermentum aliquam, ipsum tortor ultricies dolor, quis
                    aliquam odio quam sed nunc. Lorem Ipsum Dolor sit amet,
                    consectetur adipiscing elit. Donec euismod, nisl eget
                    fermentum aliquam, ipsum tortor ultricies dolor, quis
                    aliquam odio quam sed nunc. Donec euismod, nisl eget
                    fermentum aliquam, ipsum tortor ultricies dolor, quis
                    aliquam odio quam sed nunc.
                  </blockquote>
                </div>
              </Bounce>
            </div>
          </div>
        </div>
        <div className="about-us">
          <div className="container mx-auto">
            <div className="flex flex-col justify-center items-center">
              <h1 className="text-4xl font-bold text-white mb-4">Section2</h1>
              <h1 className="text-2xl font-bold text-white mb-4">....</h1>
              <Bounce duration={1000}>
                <div className="flex flex-col md:flex-row justify-center items-center">
                  <img
                    className="object-left w-1/4 h-1/4 pr-2 rounded-full"
                    src={about}
                    alt="React Logo"
                  />
                  <blockquote className="text-white">
                    Lorem Ipsum Dolor sit amet, consectetur adipiscing elit.
                    Donec euismod, nisl eget fermentum aliquam, ipsum tortor
                    ultricies dolor, quis aliquam odio quam sed nunc. Donec
                    euismod, nisl eget fermentum aliquam, ipsum tortor ultricies
                    dolor, quis aliquam odio quam sed nunc. Lorem Ipsum Dolor
                    sit amet, consectetur adipiscing elit. Donec euismod, nisl
                    eget fermentum aliquam, ipsum tortor ultricies dolor, quis
                    aliquam odio quam sed nunc. Donec euismod, nisl eget
                    fermentum aliquam, ipsum tortor ultricies dolor, quis
                    aliquam odio quam sed nunc. Lorem Ipsum Dolor sit amet,
                    consectetur adipiscing elit. Donec euismod, nisl eget
                    fermentum aliquam, ipsum tortor ultricies dolor, quis
                    aliquam odio quam sed nunc. Donec euismod, nisl eget
                    fermentum aliquam, ipsum tortor ultricies dolor, quis
                    aliquam odio quam sed nunc. Lorem Ipsum Dolor sit amet,
                    consectetur adipiscing elit. Donec euismod, nisl eget
                    fermentum aliquam, ipsum tortor ultricies dolor, quis
                    aliquam odio quam sed nunc. Donec euismod, nisl eget
                    fermentum aliquam, ipsum tortor ultricies dolor, quis
                    aliquam odio quam sed nunc.
                  </blockquote>
                </div>
              </Bounce>
              <p className="text-white">
                <a
                  className="text-blue-400 hover:underline"
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Locate Us
                </a>{" "}
                |{" "}
                <a
                  className="text-blue-400 hover:underline"
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Watch Us Live
                </a>
              </p>
            </div>
          </div>
        </div>
        {/* create a section for the contact us page */}
        {/* create the footer */}
        <footer className="footer bg-red-500 relative md:pt-3 md:mt-2 border-b-2 border-red-500 pt-5 mt-4">
          {/* make a picture background for the footer */}
          <img
            className="w-screen h-screen md:h-64 left-0  object-cover"
            src={footer}
            alt="React Logo"
          />
          {/* add a black overlay */}
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
          <div className="absolute top-0  left-0 w-full h-full container mx-auto px-6">
            <div className="sm:flex sm:mt-8">
              <div className="mt-8 sm:mt-0 sm:w-full sm:px-8 flex flex-col md:flex-row justify-between">
                <div className="flex flex-col">
                  <span className="font-bold text-white uppercase mb-2">
                    Footer header 1
                  </span>
                  <span className="my-2">
                    <a
                      className="text-blue-400 hover:underline"
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Link 1
                    </a>
                  </span>
                  <span className="my-2">
                    <a
                      className="text-blue-400 hover:underline"
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Link 2
                    </a>
                  </span>
                  <span className="my-2">
                    <a
                      className="text-blue-400 hover:underline"
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Link 3
                    </a>
                  </span>
                  <span className="my-2">
                    <a
                      className="text-blue-400 hover:underline"
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Link 4
                    </a>
                  </span>
                </div>
                <div className="flex-col flex">
                  <span className="font-bold text-white uppercase mt-4 md:mt-0 mb-2">
                    Footer header 2
                  </span>
                  <span className="my-2">
                    <a
                      className="text-blue-400 hover:underline"
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Link 1
                    </a>
                  </span>
                  <span className="my-2">
                    <a
                      className="text-blue-400 hover:underline"
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Link 2
                    </a>
                  </span>
                  <span className="my-2">
                    <a
                      className="text-blue-400 hover:underline"
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Link 3
                    </a>
                  </span>
                  <span className="my-2">
                    <a
                      className="text-blue-400 hover:underline"
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Link 4
                    </a>
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-white uppercase mt-4 md:mt-0 mb-2">
                    Footer header 3
                  </span>
                  <span className="my-2">
                    <a
                      className="text-blue-400 hover:underline"
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Link 1
                    </a>
                  </span>
                  <span className="my-2">
                    <a
                      className="text-blue-400 hover:underline"
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Link 2
                    </a>
                  </span>
                </div>
                <div className="hidden md:flex flex-col">
                  <span className="font-bold text-white uppercase mt-4 md:mt-0 mb-2">
                    Footer header 4
                  </span>
                  <span className="my-2">
                    <a
                      className="text-blue-400 hover:underline"
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Link 1
                    </a>
                  </span>
                  <span className="my-2">
                    <a
                      className="text-blue-400 hover:underline"
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Link 2
                    </a>
                  </span>
                  <span className="my-2">
                    <a
                      className="text-blue-400 hover:underline"
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Link 3
                    </a>
                  </span>
                </div>
                {/* add copyright ino
                 */}
              </div>
            </div>
            <p className="text-center underline font-mono text-xl">
              ©2023 Dipo for RCFOAU
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}
export default App;
