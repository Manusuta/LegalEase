

import React, { useState } from 'react';

  const data = [
    {
      "_id": { "$oid": "6506f11f3d0b555071b84d65" },
      "ID": { "$oid": "6506e93a93e6020c49f5f98f" },
      "uid": "23",
      "name": "abc",
      "price": 1500000,
      "phone_no": { "$numberDouble": "9193894923.0" },
      "title": "advocate",
      "position": "Document Writing",
      "description": {
        "experience": {
          "year": { "$numberInt": "21" },
          "winning": { "$numberInt": "323" },
          "total_case": { "$numberInt": "34" }
        },
        "about": ["23"],
        "achievements": ["34"]
      },
      "avilable": true,
      "tag": ["Intellectual Property"],
      "address": "djsadj",
      "T_rating": "0",
      "review": [],
      "points": [],
      "createdAt": { "$date": { "$numberLong": "1694953759988" } },
      "updatedAt": { "$date": { "$numberLong": "1694953759988" } },
      "__v": { "$numberInt": "0" },
      "photo": "https://res.cloudinary.com/dbvurfvz8/image/upload/v1694953601/eejt4xb4r4zbzjlhiira.jpg" ,
      "country": "United States",
      "state": "California"
    },
    {
      "_id": { "$oid": "6506f11f3d0b555071b84d65" },
      "ID": { "$oid": "6506e93a93e6020c49f5f98f" },
      "uid": "23",
      "name": "abc",
      "price": 1300000,
      "phone_no": { "$numberDouble": "9193894923.0" },
      "title": "advocate",
      "position": "court cases",
      "description": {
        "experience": {
          "year": { "$numberInt": "21" },
          "winning": { "$numberInt": "323" },
          "total_case": { "$numberInt": "34" }
        },
        "about": ["23"],
        "achievements": ["34"]
      },
      "avilable": true,
      "tag": ["Intellectual Property"],
      "address": "djsadj",
      "T_rating": "10",
      "review": [],
      "points": [],
      "createdAt": { "$date": { "$numberLong": "1694953759988" } },
      "updatedAt": { "$date": { "$numberLong": "1694953759988" } },
      "__v": { "$numberInt": "0" },
      "photo": "https://res.cloudinary.com/dbvurfvz8/image/upload/v1694953601/eejt4xb4r4zbzjlhiira.jpg",
      "country": "United States",
    "state": "California"
    },
];

function SearchLawyer() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({
    experience: '',
    rating: '',
    reviews: '',
    price: '',
    country: '',
    state: '',
  });
  const [sortBy, setSortBy] = useState(''); 

  

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };
  

  const filteredLawyers = data
  .filter((lawyer) => {
    const queryWords = searchQuery.toLowerCase().split(' ');

    return (
      queryWords.every((word) =>
        Object.values(lawyer).some(
          (value) =>
            typeof value === 'string' && value.toLowerCase().includes(word)
        )
      ) &&
      (!filters.experience || lawyer.description?.experience?.year?.$numberInt >= filters.experience) &&
      (!filters.rating || lawyer.T_rating >= filters.rating) &&
      (!filters.reviews || lawyer.review?.length >= filters.reviews)
      
    );
  })
  .sort((a, b) => {
   
    if (sortBy === 'experience') {
   
      const experienceDiff =
        (b.description?.experience?.year?.$numberInt || 0) -
        (a.description?.experience?.year?.$numberInt || 0);
      if (experienceDiff === 0) {
        return (b.T_rating || 0) - (a.T_rating || 0);
      }

      if (experienceDiff === 0 && (a.price || 0) && (b.price || 0)) {
        return (a.price || 0) - (b.price || 0);
      }

      return experienceDiff;
    } else if (sortBy === 'rating') {
   
      const ratingDiff = (b.T_rating || 0) - (a.T_rating || 0);

      
      if (ratingDiff === 0) {
        return (
          (b.description?.experience?.year?.$numberInt || 0) -
          (a.description?.experience?.year?.$numberInt || 0)
        );
      }

    
      if (ratingDiff === 0 && (a.price || 0) && (b.price || 0)) {
        return (a.price || 0) - (b.price || 0);
      }

      return ratingDiff;
    } else if (sortBy === 'price') {
     
      return (a.price || 0) - (b.price || 0);
    }

    return 0;
  });


  return (
  
    <div className="bg-blue-100 min-h-screen ">
    
    <div className="bg-blue-900 p-10 mb-4 h-50 ">
     
        <div className="flex space-x-4 justify-center  ">
        
          <div className="relative flex-1 p-8  ">
           
            
            <input
            
              type="text "
              placeholder=" Search here "
              className="p-2 pl-8 pr-8 border rounded-full w-full   bg- opacity-40  "
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            /> <div className="absolute inset-y-0 left-0 flex items-center pl-2">
        
          </div>
        
         

            
          </div>
      
       
      <div className="mt-20 flex items-center space-x-4 text-white">
      
           
              <select
              className="p-2 border rounded-md text-black"
              value={sortBy}
              onChange={handleSortChange}
            >
              <option value="">Sort By</option>
              <option value="experience">Experience</option>
              <option value="rating">Ratings</option>
              <option value="price">Price</option>
            </select>
          </div>
        </div>
      </div>
    

      <div className="mt- grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {filteredLawyers.map((lawyer, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-md shadow-md  hover:shadow-xl cursor-pointer "
          >
            <div className="relative">
            {lawyer.photo && (
              <img
                src={lawyer.photo}
                alt={`${lawyer.name}'s Photo`}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
            )}
             
      </div>
            <div className="text-center">
              <h2 className="text-lg font-semibold">{lawyer.name || 'No Name'}</h2>
              <p className="text-gray-600">{lawyer.title || 'No title'}</p>
              <p className="text-gray-600">{lawyer.position || 'No Position'}</p>
              <p className="text-gray-600">{lawyer.city || 'No City'}</p>
              <p className="text-gray-600">Hourly Rate: ${lawyer.hourlyRate || 'N/A'}</p>
              <p className="text-gray-600">{lawyer.T_rating || 'No title'}</p>
              <p className="text-gray-600">{lawyer.price || 'No title'}</p>
              
            </div>
            <div className=" mt-2">
        <button className="bg-blue-900 hover:bg-blue-600 text-white px-4 py-2 rounded-full">
          Connect
        </button>
      </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SearchLawyer;

