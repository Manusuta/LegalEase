import React from 'react'
import { Link } from 'react-router-dom';
function Tutor({index}) {
  
  
   
    const bestTutorData = {
        name: "Tutor's Name",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        image: 'https://via.placeholder.com/300x200', // Replace with the tutor's image URL
      };
    
      const tutors = [
        {
          name: 'Tutor 1',
          description: 'Description of Tutor 1',
          image: 'https://source.unsplash.com/user/erondu/400x200', // Replace with image URL
        },
        {
          name: 'Tutor 2',
          description: 'Description of Tutor 2',
          image: 'https://source.unsplash.com/user/erondu/400x200', // Replace with image URL
        },
        {
            name: 'Tutor 2',
            description: 'Description of Tutor 2',
            image: 'https://source.unsplash.com/user/erondu/400x200', // Replace with image URL
          },
        
      ];
    
      return (
        // <div className="bg-gray-200 p-2">
        <div className="relative bg-gradient-to-b from-blue-100  to-blue-500 min-h-screen">
        <div className="absolute inset-x-0 bottom-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 250"
            fill="#ffff" // Wave color
          >
            <path
              fillOpacity="1"
              d="M0,64L34.3,74.7C68.6,85,137,107,206,101.3C274.3,96,343,64,411,80C480,96,549,160,617,176C685.7,192,754,160,823,133.3C891.4,107,960,85,1029,96C1097.1,107,1166,149,1234,165.3C1302.9,181,1371,171,1406,165.3L1440,160L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165,320,1096,320,1027,320C959,320,890,320,822,320C753.1,320,684,320,615,320C546.9,320,478,320,409,320C340,320,272,320,203,320C134.3,320,65,320,34,320L0,320Z"
            ></path>
          </svg>
        </div>
      
       
          <div className="container mx-auto ">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-gray-800 mt-4">
                Our Best tutor on the platform
              </h1>
              <p className="text-gray-600 mt-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
    

            <div className="mt-20 grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-4   ">
             
              {tutors.map((tutor, index) => (
                <div
                  key={index}
                  className="max-w-xs mx-auto mb-6"
                >
                  <div className=" bg-white shadow-lg rounded-lg  hover:translate-y-2 group-hover:translate-x-1 hover:rounded-3xl transition-all duration-300 ease-in-out  border rounded-t-3xl relative hover:shadow-2xl hover:shadow-black">
                    
                    
                    <img
                      className=" rounded-3xl hover:rounded-t-3xl w-full h-56 object-cover object-center "
                      
                      src={tutor.image} 
                      alt={tutor.name}
                      
                    />
                   <div className="p-5">
        <a href="#">
          <h5 className="mb-6 text-xl font-bold tracking-tight text-gray-900 dark:text-gray">
           {tutor.name}
          </h5>
        </a>
        
        <div className="absolute overflow-auto top-0 left-0 w-full h-full bg-white bg-opacity-90 p-3 opacity-0 transition-opacity duration-300 ease-in-out hover:opacity-100 hover:rounded-2xl">
          <div
            className="text-gray-900 dark:text-gray-400 duration-700 transition transform ease-in-out group-hover:-translate-y-0
    translate-y-5"
          >
            A bunch of things about the course Lorem ipsum dolor, sit
            amet consectetur adipisicing elit. Illo, assumenda ipsum
            atur?
          </div>

          <Link to="/desc">
            <div
              className="duration-700 transition transform ease-in-out group-hover:-translate-y-0
    translate-y-7"
            >
              <button className="border-2  border-blue-500 text-sm font-medium text-center text-gray-500 rounded-lg hover:bg-blue-400 hover:text-white p-2 focus:ring-1  focus:ring-blue-300 ">
                More Details
              </button>
            </div>
          </Link>
        </div>
        </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
    
  </div>
      );
    }
    
  

export default Tutor;