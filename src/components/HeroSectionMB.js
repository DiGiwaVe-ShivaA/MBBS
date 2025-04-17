import React, { useState } from "react";
import Link from "next/link";

const colleges = [
  {
    name: "Maulana Azad Institute of Dental Sciences - BDS",
    location: "New Delhi",
    category: "BDS",
    fees: "₹85,000",
    deadline: "01 Apr - 30 Apr 2024",
    rating: "5/5",
    ranking: "#1 Dental College in India 2024",
    cutoff: "NEET 2024 Cut off 550",
    image: "/images/collegedata/maulana-azad.jpeg",
    link: "/maulana-azad",
  },
  {
    name: "AIIMS Delhi - MBBS",
    location: "New Delhi",
    category: "MBBS",
    fees: "₹1,500",
    deadline: "01 Apr - 30 Apr 2024",
    rating: "5/5",
    ranking: "#2 Medical College in India 2024",
    cutoff: "NEET 2024 Cut off 700",
    image: "/images/collegedata/AIIMS Delhi.png",
    link: "/aiims-delhi",
  },
];

const CollegeTable = () => {
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");
  const [category, setCategory] = useState("");

  const allLocations = [...new Set(colleges.map((c) => c.location))];

  const categoriesInLocation = [
    ...new Set(
      location
        ? colleges.filter((c) => c.location === location).map((c) => c.category)
        : colleges.map((c) => c.category)
    ),
  ];

  const filtered = colleges.filter((c) => {
    return (
      c.name.toLowerCase().includes(search.toLowerCase()) &&
      (location === "" || c.location === location) &&
      (category === "" || c.category === category)
    );
  });

  return (
    <div className="p-4 max-w-7xl mx-auto">
      {/* Filters */}
      <div className="mb-6 bg-white p-4 rounded-xl shadow-md">
        <h2 className="text-lg font-semibold mb-4 text-gray-800">
          Find Your College
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="relative">
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
              🔍
            </span>
            <input
              type="text"
              placeholder="Search colleges..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-md w-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <select
            value={location}
            onChange={(e) => {
              setLocation(e.target.value);
              setCategory(""); // Reset category when location changes
            }}
            className="border border-gray-300 p-2 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">Select Location</option>
            {allLocations.map((loc, i) => (
              <option key={i} value={loc}>
                {loc}
              </option>
            ))}
          </select>

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="border border-gray-300 p-2 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">Select Category</option>
            {categoriesInLocation.map((cat, i) => (
              <option key={i} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto rounded-lg shadow">
        <table className="min-w-full bg-white">
          <thead className="bg-[#1f2937] text-white text-left text-sm">
            <tr>
              <th className="py-3 px-4 font-semibold">College</th>
              <th className="py-3 px-4 font-semibold">Location</th>
              <th className="py-3 px-4 font-semibold">Ranking</th>
              <th className="py-3 px-4 font-semibold">Cutoff</th>
              <th className="py-3 px-4 font-semibold">Application Deadline</th>
            </tr>
          </thead>
          <tbody className="text-gray-800 text-sm">
            {filtered.map((college, i) => (
              <tr key={i} className="border-t hover:bg-gray-50">
                <td className="py-4 px-4 flex items-center gap-3">
                  <img
                    src={college.image}
                    alt={college.name}
                    className="w-10 h-10 object-contain"
                    onError={(e) =>
                      (e.currentTarget.src = "https://via.placeholder.com/40")
                    }
                  />
                  <div>
                    <Link href={college.link}>
                      <div className="font-medium hover:underline">
                        {college.name}
                      </div>
                    </Link>
                    <div className="text-yellow-500 text-sm">
                      ⭐ {college.rating}
                    </div>
                  </div>
                </td>
                <td className="py-4 px-4">{college.location}</td>
                <td className="py-4 px-4">{college.ranking}</td>
                <td className="py-4 px-4">{college.cutoff}</td>
                <td className="py-4 px-4">{college.deadline}</td>
              </tr>
            ))}
            {filtered.length === 0 && (
              <tr>
                <td
                  colSpan={5}
                  className="text-center py-6 text-gray-500 font-medium"
                >
                  No colleges found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CollegeTable;
