

import React, { useState } from 'react';
import { State, City } from 'country-state-city';
import RatingStars from 'react-rating-stars-component';

const data = [
    {
      "_id": { "$oid": "6506f11f3d0b555071b84d65" },
      "ID": { "$oid": "6506e93a93e6020c49f5f98f" },
      "uid": "23",
      "name": "Dimpy",
      "price": 1500000,
      "phone_no": { "$numberDouble": "9193894923.0" },
      "title": "Advocate",
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
      "T_rating": "4",
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
      "title": "Advocate",
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
      "T_rating": "13",
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
    city: '',
  });
  const [sortBy, setSortBy] = useState('');
  const [sortDirection, setSortDirection] = useState('asc');
  
  const [stateData, setStateData] = useState();
  const [cityData, setCityData] = useState();
  
  const handleSortChange = (e) => {
    if (e.target.value === sortBy) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortDirection('asc');
    }
    setSortBy(e.target.value);
  };

  const getSortIcon = (criteria) => {
    if (sortBy === criteria) {
      return sortDirection === 'asc' ? '↓↑' : '↑↓' ;
    }
    return '';
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
        return sortDirection === 'asc' ? experienceDiff : -experienceDiff;
      } else if (sortBy === 'rating') {
        const ratingA = parseFloat(a.T_rating || 0); 
    const ratingB = parseFloat(b.T_rating || 0); 

    const ratingDiff = ratingB - ratingA;
        return sortDirection === 'asc' ? ratingDiff : -ratingDiff;
      } else if (sortBy === 'price') {
        const priceDiff = (b.price || 0) - (a.price || 0);
        return sortDirection === 'asc' ? priceDiff : -priceDiff;
      }
      return 0;
    });

  return (
    <div className="bg-blue-100 min-h-screen  ">
      <div className="bg-blue-900 p-10 mb-4  ">
        <div className="flex  justify-center items-center ">
          <div className="relative flex-1 p-8  ">
            <input
              type="text "
              placeholder=" Search here "
              className="p-2 pl-8 pr-8 border rounded-full w-1/2   bg- opacity-40  "
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="mt-20 flex items-center space-x-4 text-white">
            <button
              className={`bg-blue-500 text-white px-4 py-2 hover:bg-blue-700  rounded-md ${sortBy === 'experience' ? 'bg-blue-600' : ''}`}
              onClick={() => handleSortChange({ target: { value: 'experience' } })}
            >
              Sort by Experience {getSortIcon('experience')}
            </button>
            <button
              className={`bg-blue-500 text-white px-4 py-2 hover:bg-blue-700  rounded-md ${sortBy === 'rating' ? 'bg-blue-600' : ''}`}
              onClick={() => handleSortChange({ target: { value: 'rating' } })}
            >
              Sort by Ratings {getSortIcon('rating')}
            </button>
            <button
              className={`bg-blue-500 text-white px-4 hover:bg-blue-700  py-2 rounded-md ${sortBy === 'price' ? 'bg-blue-600' : ''}`}
              onClick={() => {
                handleSortChange({ target: { value: 'price' } });
                handleSortDirectionToggle();
              }}
            >
              Sort by Price {getSortIcon('price')}
            </button>
          </div>
        </div>
      </div>
      <div className="mt- grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {filteredLawyers.map((lawyer, index) => (
          <div
            key={index}
            className=" p-4 bg-white rounded-md shadow-md  hover:shadow-xl cursor-pointer  "
          >
            
            <div className="relative flex justify-center items-center ">
              {lawyer.photo && (
                <div className="w-1/2 h-full flex items-center justify-center">
                <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-blue-900  ">
                <img
                  src={lawyer.photo}
                  alt={`${lawyer.name}'s Photo`}
                  className="w-full  h-full  object-cover rounded-md mb-4"
                />
                   </div>
          </div>
              )}
            </div>
            <div className="text-center  h-1/2 flex flex-col justify-center">
              <h2 className="text-lg font-bold">{lawyer.name || 'No Name'}</h2>
              <p className="text-gray-600 font-semibold">{lawyer.title || 'No title'}</p>
              <p className="text-gray-600 font-semibold">{lawyer.position || 'No Position'}</p>
              <p className="text-gray-600 font-semibold">{lawyer.city || 'No City'}</p>
              <p className="text-gray-600 font-semibold">Hourly Rate: ${lawyer.hourlyRate || 'N/A'}</p>
              <div className= "flex justify-center items-center text-yellow-400">
                <RatingStars
                  count={5}
                  size={24}
                  value={parseFloat(lawyer.T_rating) || 0}
                  edit={false}
                />
              </div>
              <p className="text-gray-600 font-semibold ">{lawyer.price || 'No title'}</p>
            </div>
            <div className=" mt-2 ">
              <button className="bg-blue-900 hover:bg-blue-600 text-white px-4 py-2  rounded-full float-right">
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
