import { useState } from "react";
import "./App.css";

import { MdOutlineSecurity } from "react-icons/md";
import { GrStorage } from "react-icons/gr";
import { TbArrowsExchange } from "react-icons/tb";
import websiteImage1 from "./assets/Website1.png";
import websiteImage2 from "./assets/Website2.png";
import logo from "./assets/logo.png";

function App() {
  const [emailBody, setEmailBody] = useState("");

  const mailtoLink = `mailto:businessdevelopment@medchain.pro?subject=Medchain&body=${encodeURIComponent(
    emailBody
  )}`;

  return (
    <div className="App min-h-screen flex flex-col bg-gray-800 text-gray-200">
      {/* Navbar */}
      <nav className="bg-blue-900 text-white w-full fixed top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <img src={logo} alt="MedChain Logo" className="h-12 w-18" />
          <a
            href="https://medchain.pro/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-200 focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Access App
          </a>
        </div>
      </nav>

      {/* Home Section */}
      <section className="home pt-24 pb-20 bg-blue-900 flex flex-col justify-center items-center space-y-4">
        <div className="text-center space-y-2">
          <h1 className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-600">
            Welcome to MedChain
          </h1>
          <h3 className="text-3xl font-semibold text-blue-200">
            Revolutionizing Healthcare Data Sharing
          </h3>
        </div>
        <p className="max-w-2xl text-xl text-center">
          A cutting-edge platform integrating blockchain technology for secure
          and efficient data management in healthcare.
        </p>
      </section>

      {/* About Section */}
      <section className="about bg-gray-900 py-20 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-center text-blue-500 mb-12">
            About MedChain
          </h2>
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="md:w-1/2 flex flex-col space-y-6">
              <img
                src={websiteImage1}
                alt="MedChain Interface"
                className="rounded-lg shadow-xl"
              />
              <img
                src={websiteImage2}
                alt="MedChain Data Management"
                className="rounded-lg shadow-xl"
              />
            </div>
            <div className="md:w-1/2 text-white md:pl-10">
              <p className="text-xl leading-relaxed">
                MedChain is revolutionizing the field of healthcare data
                management by integrating advanced blockchain technology. Our
                platform ensures secure and efficient data transfer across
                healthcare systems.
              </p>
              <p className="text-xl leading-relaxed mt-4">
                By leveraging the power of blockchain, IPFS, and FHIR standards,
                MedChain provides unparalleled security and efficiency in
                handling sensitive healthcare data. Our solution is designed to
                cater to the needs of general practitioners, medical
                specialists, and healthcare institutions.
              </p>
              <p className="text-xl leading-relaxed mt-4">
                MedChain is committed to enhancing data accessibility while
                maintaining the highest standards of privacy and integrity in
                the healthcare industry.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits py-20 bg-blue-800">
        <h2 className="text-5xl font-bold text-center text-white mb-10">
          Benefits of MedChain
        </h2>
        <div className="benefits-container grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
          <div className="card flex flex-col items-center p-8 bg-blue-700 shadow-xl rounded-lg hover:bg-blue-600 transition duration-300">
            <MdOutlineSecurity className="text-5xl text-white mb-4" />
            <h3 className="text-2xl font-semibold text-white mb-2">
              Unparalleled Security
            </h3>
            <p className="text-center text-white">
              Harnessing the power of blockchain technology for unmatched data
              security and integrity.
            </p>
          </div>
          <div className="card flex flex-col items-center p-8 bg-blue-700 shadow-xl rounded-lg hover:bg-blue-600 transition duration-300">
            <GrStorage className="text-5xl text-white mb-4" />
            <h3 className="text-2xl font-semibold text-white mb-2">
              Decentralized Storage
            </h3>
            <p className="text-center text-white">
              Utilizing IPFS for reliable, decentralized data storage solutions.
            </p>
          </div>
          <div className="card flex flex-col items-center p-8 bg-blue-700 shadow-xl rounded-lg hover:bg-blue-600 transition duration-300">
            <TbArrowsExchange className="text-5xl text-white mb-4" />
            <h3 className="text-2xl font-semibold text-white mb-2">
              Seamless Exchange
            </h3>
            <p className="text-center text-white">
              Facilitating smooth data exchange with FHIR standardization.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section className="contact py-20 bg-gray-800 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-5xl font-bold text-blue-500 mb-6">Contact Us</h2>
          <p className="text-xl text-white mb-8">
            Have questions or need a demo? Reach out to us.
          </p>

          <textarea
            className="w-full p-4 text-lg rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent mb-6 bg-gray-700 text-white"
            placeholder="Your Message"
            rows="4"
            value={emailBody}
            onChange={(e) => setEmailBody(e.target.value)}
          />
          <a
            href={mailtoLink}
            className="inline-block py-3 px-6 bg-blue-600 text-white rounded-md hover:bg-blue-500 transition duration-200 focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50"
            role="button"
          >
            Send Email
          </a>
        </div>
      </section>
    </div>
  );
}

export default App;
