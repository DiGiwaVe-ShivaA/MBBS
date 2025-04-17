// "use client";

// import { useState } from "react";
// import { motion } from "framer-motion";

// export default function NeetRankPredictor() {
//   const [formData, setFormData] = useState({
//     name: "",
//     mobile: "",
//     otp: "",
//     score: "",
//     application: "",
//     dob: "",
//     gender: "male",
//   });
//   const [otpSent, setOtpSent] = useState(false);
//   const [otpVerified, setOtpVerified] = useState(false);
//   const [error, setError] = useState("");

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const validateForm = () => {
//     if (
//       !formData.name ||
//       !formData.mobile ||
//       !formData.score ||
//       !formData.dob
//     ) {
//       setError("Please fill all required fields.");
//       return false;
//     }
//     if (!/^\d{10}$/.test(formData.mobile)) {
//       setError("Enter a valid 10-digit mobile number.");
//       return false;
//     }
//     if (formData.score < 0 || formData.score > 720) {
//       setError("NEET score must be between 0 and 720.");
//       return false;
//     }
//     setError("");
//     return true;
//   };

//   const sendOtp = () => {
//     if (!/^\d{10}$/.test(formData.mobile)) {
//       setError("Enter a valid 10-digit mobile number before sending OTP.");
//       return;
//     }
//     setOtpSent(true);
//     setError("");
//     alert("OTP sent successfully! (Simulated)");
//   };

//   const verifyOtp = () => {
//     if (formData.otp === "123456") {
//       setOtpVerified(true);
//       setError("");
//       alert("OTP verified successfully!");
//     } else {
//       setError("Invalid OTP. Please enter 123456 to simulate success.");
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!validateForm()) return;
//     if (!otpVerified) {
//       setError("Please verify OTP before submitting.");
//       return;
//     }

//     // WhatsApp integration
//     const message = `NEET Rank Predictor 2024\nName: ${formData.name}\nMobile: ${formData.mobile}\nScore: ${formData.score}/720\nDOB: ${formData.dob}\nGender: ${formData.gender}`;
//     const whatsappUrl = `https://wa.me/919557911144?text=${encodeURIComponent(
//       message
//     )}`;
//     window.open(whatsappUrl, "_blank");
//   };

//   return (
//     <motion.div
//       className="max-w-2xl mx-auto my-10 p-6 bg-white rounded-xl shadow-md"
//       initial={{ opacity: 0, y: 30 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5 }}
//     >
//       <h2 className="text-xl font-bold text-center text-blue-800 mb-6">
//         NEET Rank Predictor 2024
//       </h2>
//       <hr className="mb-6 border-gray-300" />

//       <form onSubmit={handleSubmit} className="space-y-4">
//         {error && <p className="text-red-600 text-sm font-medium">{error}</p>}

//         <Input
//           label="Enter Your Name"
//           name="name"
//           value={formData.name}
//           onChange={handleChange}
//           required
//         />
//         <Input
//           label="Enter Your Mobile"
//           name="mobile"
//           value={formData.mobile}
//           onChange={handleChange}
//           required
//         />

//         <div className="flex gap-2">
//           <Input
//             label="OTP Verification"
//             name="otp"
//             value={formData.otp}
//             onChange={handleChange}
//           />
//           {!otpSent ? (
//             <button
//               type="button"
//               onClick={sendOtp}
//               className="text-sm px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 mt-6"
//             >
//               Send OTP
//             </button>
//           ) : (
//             <button
//               type="button"
//               onClick={verifyOtp}
//               className="text-sm px-3 py-1 bg-green-600 text-white rounded hover:bg-green-700 mt-6"
//             >
//               Verify OTP
//             </button>
//           )}
//         </div>

//         <Input
//           label="Enter NEET Score out of 720"
//           name="score"
//           type="number"
//           value={formData.score}
//           onChange={handleChange}
//           required
//         />
//         <Input
//           label="Enter Application No."
//           name="application"
//           value={formData.application}
//           onChange={handleChange}
//         />
//         <Input
//           label="Enter Date Of Birth"
//           name="dob"
//           placeholder="dd-mm-yyyy"
//           value={formData.dob}
//           onChange={handleChange}
//           required
//         />

//         <div>
//           <label className="block font-semibold text-sm mb-1">Gender</label>
//           <div className="flex items-center space-x-6">
//             {["male", "female"].map((gender) => (
//               <label key={gender} className="inline-flex items-center">
//                 <input
//                   type="radio"
//                   name="gender"
//                   value={gender}
//                   checked={formData.gender === gender}
//                   onChange={handleChange}
//                   className="form-radio text-blue-600"
//                 />
//                 <span className="ml-2 capitalize">{gender}</span>
//               </label>
//             ))}
//           </div>
//         </div>

//         <div className="flex justify-center pt-4">
//           <motion.button
//             whileTap={{ scale: 0.95 }}
//             whileHover={{ scale: 1.03 }}
//             type="submit"
//             className="bg-gradient-to-r from-pink-500 to-blue-800 text-white px-6 py-2 rounded-md shadow hover:opacity-90 transition"
//           >
//             Predict My Rank
//           </motion.button>
//         </div>
//       </form>
//     </motion.div>
//   );
// }

// const Input = ({
//   label,
//   name,
//   value,
//   onChange,
//   type = "text",
//   required = false,
//   placeholder,
// }) => (
//   <div>
//     <label className="block font-semibold text-sm">{label}</label>
//     <input
//       type={type}
//       name={name}
//       value={value}
//       onChange={onChange}
//       placeholder={placeholder || label}
//       required={required}
//       className="w-full p-2 border border-gray-300 bg-gray-100 rounded"
//     />
//   </div>
// );
