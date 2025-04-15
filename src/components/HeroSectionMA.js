// import React from "react";

// const colleges = [
//   {
//     rank: 1,
//     logo: "/college1.jpg",
//     name: "Maulana Azad Institute of Dental Sciences - BDS",
//     location: "New Delhi",
//     ranking: "#1 Dental College in India 2024",
//     cutoff: "NEET 2024 Cut off 550",
//     deadline: "01 Apr - 30 Apr 2024",
//     fees: "₹85,000 1st Year Fees",
//     rating: "5/5",
//   },
//   {
//     rank: 2,
//     logo: "/college2.jpg",
//     name: "Manipal College of Dental Sciences - BDS",
//     location: "Manipal, Karnataka",
//     ranking: "#2 Dental College in India 2024",
//     cutoff: "NEET 2024 Cut off 520",
//     deadline: "10 May - 31 May 2024",
//     fees: "₹5,50,000 1st Year Fees",
//     rating: "4.9/5",
//   },
//   {
//     rank: 3,
//     logo: "/college3.jpg",
//     name: "Indian Institute of Science - M.Sc Physics",
//     location: "Bangalore, Karnataka",
//     ranking: "#1 Science University in India 2024",
//     cutoff: "JEST 2024 Cut off 90%",
//     deadline: "05 June - 20 June 2024",
//     fees: "₹30,000 1st Year Fees",
//     rating: "4.9/5",
//   },
//   {
//     rank: 4,
//     logo: "/college4.jpg",
//     name: "Government Dental College - BDS",
//     location: "Mumbai, Maharashtra",
//     ranking: "#3 Dental College in India 2024",
//     cutoff: "NEET 2024 Cut off 500",
//     deadline: "15 Apr - 10 May 2024",
//     fees: "₹75,000 1st Year Fees",
//     rating: "4.8/5",
//   },
//   {
//     rank: 5,
//     logo: "/college5.jpg",
//     name: "University of Hyderabad - M.Sc Biochemistry",
//     location: "Hyderabad, Telangana",
//     ranking: "#2 Life Sciences University in India 2024",
//     cutoff: "CUET 2024 Cut off 88%",
//     deadline: "01 May - 25 May 2024",
//     fees: "₹20,000 1st Year Fees",
//     rating: "4.9/5",
//   },
//   {
//     rank: 6,
//     logo: "/college6.jpg",
//     name: "SRM Dental College - BDS",
//     location: "Chennai, Tamil Nadu",
//     ranking: "#4 Dental College in India 2024",
//     cutoff: "NEET 2024 Cut off 480",
//     deadline: "10 June - 30 June 2024",
//     fees: "₹4,00,000 1st Year Fees",
//     rating: "4.7/5",
//   },
//   {
//     rank: 7,
//     logo: "/college7.jpg",
//     name: "Jawaharlal Nehru University - M.Sc Biotechnology",
//     location: "New Delhi",
//     ranking: "#1 Science University in India 2024",
//     cutoff: "CUET 2024 Cut off 90%",
//     deadline: "20 May - 10 June 2024",
//     fees: "₹12,000 1st Year Fees",
//     rating: "4.8/5",
//   },
//   {
//     rank: 8,
//     logo: "/college8.jpg",
//     name: "Bangalore Institute of Dental Sciences - BDS",
//     location: "Bangalore, Karnataka",
//     ranking: "#5 Dental College in India 2024",
//     cutoff: "NEET 2024 Cut off 470",
//     deadline: "05 Apr - 20 Apr 2024",
//     fees: "₹3,50,000 1st Year Fees",
//     rating: "4.7/5",
//   },
//   {
//     rank: 9,
//     logo: "/college9.jpg",
//     name: "Pondicherry University - M.Sc Environmental Science",
//     location: "Puducherry",
//     ranking: "#3 Science University in India 2024",
//     cutoff: "CUET 2024 Cut off 85%",
//     deadline: "10 Apr - 30 Apr 2024",
//     fees: "₹15,000 1st Year Fees",
//     rating: "4.7/5",
//   },
//   {
//     rank: 10,
//     logo: "/college10.jpg",
//     name: "Saveetha Dental College - BDS",
//     location: "Chennai, Tamil Nadu",
//     ranking: "#6 Dental College in India 2024",
//     cutoff: "NEET 2024 Cut off 460",
//     deadline: "15 May - 10 June 2024",
//     fees: "₹5,00,000 1st Year Fees",
//     rating: "4.6/5",
//   },
// ];

// const CollegeTable = () => {
//   return (
//     <div className="overflow-x-auto p-4 px-48">
//       <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden text-sm md:text-base">
//         <thead className="bg-gray-800 text-white">
//           <tr>
//             <th className="p-3 text-left">College</th>
//             <th className="p-3 text-left hidden md:table-cell">Location</th>
//             <th className="p-3 text-left">Ranking</th>
//             <th className="p-3 text-left hidden md:table-cell">Cutoff</th>
//             <th className="p-3 text-left hidden md:table-cell">
//               Application Deadline
//             </th>
//             <th className="p-3 text-left">Fees</th>
//           </tr>
//         </thead>
//         <tbody>
//           {colleges.map((college, index) => (
//             <tr key={index} className="border-b hover:bg-gray-100">
//               <td className="p-3 flex items-center space-x-2">
//                 <img
//                   src={college.logo}
//                   alt={college.name}
//                   className="h-10 w-10 object-contain"
//                 />
//                 <div>
//                   <span className="font-semibold block">{college.name}</span>
//                   <span className="text-yellow-500 flex items-center">
//                     ⭐ {college.rating}
//                   </span>
//                 </div>
//               </td>
//               <td className="p-3 hidden md:table-cell">{college.location}</td>
//               <td className="p-3">{college.ranking}</td>
//               <td className="p-3 hidden md:table-cell">{college.cutoff}</td>
//               <td className="p-3 hidden md:table-cell">{college.deadline}</td>
//               <td className="p-3 font-bold">{college.fees}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default CollegeTable;
