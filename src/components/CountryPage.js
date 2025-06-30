const countryColleges = {
  nepal: [
    {
      name: 'Devdaha Medical College',
      image: '/images/devdaha.jpg',
      description: 'Devdaha Medical College for MBBS Course in Nepal 2025...',
      country: 'Nepal',
      estYear: 2008
    },
    {
      name: 'Kathmandu University School of Medical Sciences',
      image: '/images/kathmandu.jpg',
      description: 'Kathmandu University School of Medical Sciences...',
      country: 'Nepal',
      estYear: 1994
    },
  ],
  bangladesh: [
    {
      name: 'Dhaka Medical College',
      image: '/images/dhaka.jpg',
      description: 'One of the top medical colleges in Bangladesh...',
      country: 'Bangladesh',
      estYear: 1946
    },
  ],
};

const CountryPage = ({ params }) => {
  const { country } = params;
  const colleges = countryColleges[country] || [];

  return (
    <div className="lg:px-20 my-16 p-6 bg-white rounded-xl shadow-lg">
      <h2 className="text-3xl font-semibold text-gray-800 text-center mb-8">
        Explore the Best MBBS Options in <span className="text-orange-500 uppercase">{country}</span>
      </h2>

      {colleges.length === 0 ? (
        <p className="text-center text-gray-500">No colleges found for this country.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {colleges.map((college, index) => (
            <div key={index} className="border border-gray-300 rounded-xl p-4 shadow hover:shadow-md transition">
              <img src={college.image} alt={college.name} className="w-full h-48 object-cover rounded mb-4" />
              <h3 className="font-bold text-blue-700">{college.name}</h3>
              <p className="text-gray-600 text-sm mt-2">{college.description}</p>
              <p className="text-gray-500 text-xs mt-2">Country: {college.country}</p>
              <p className="text-gray-500 text-xs">Est. Year: {college.estYear}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CountryPage;
