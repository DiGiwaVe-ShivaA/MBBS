export default function ToppersAcademyReviews() {
  const reviews = [
    { detail: "Student Reviews", rating: "9.5" },
    { detail: "Student Placed", rating: "9000+" },
    { detail: "Batch Strength(Coaching*)", rating: "8" },
    { detail: "NEET Faculty Review(Coaching*)", rating: "8.5" },
    {
      detail: "Past Year NEET Results (Second Highest Till Date)",
      rating: "9.7",
    },
    // { detail: "Toppers Academy Infrastructure Review", rating: "8.2" },
    { detail: "Fees of NEET Coaching Review", rating: "9.2" },
    { detail: "NEET Mock Test Series Review", rating: "8.9" },
    { detail: "Parents Reviews", rating: "10.0" },
  ];

  return (
    <div className="px-6 py-8 bg-white">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">
        Reviews of Mbbs Wallah & those who Attended Coachings post Councelling
      </h2>

      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-200 text-left">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-3 text-sm font-semibold text-gray-700 border-b">
                Detail
              </th>
              <th className="px-4 py-3 text-sm font-semibold text-gray-700 border-b">
                Rating out of 10
              </th>
            </tr>
          </thead>
          <tbody>
            {reviews.map((item, index) => (
              <tr key={index} className="even:bg-gray-50">
                <td className="px-4 py-3 border-b text-gray-800">
                  {item.detail}
                </td>
                <td className="px-4 py-3 border-b text-gray-800">
                  {item.rating}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
