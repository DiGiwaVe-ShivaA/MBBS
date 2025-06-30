import Footer from "@/components/Footer";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
// import kazan from "../../countries/[country]/kazan.png";
const countryColleges = {
  nepal: [
    {
      name: 'Devdaha Medical College',
      image: '/images/devdaha.png',
      description: 'Devdaha Medical College for MBBS Course in Nepal 2025...',
      country: 'Nepal',
      estYear: 2008
    },
    {
      name: 'Kathmandu University School of Medical Sciences',
      image: '/images/kathmandu.png',
      description: 'Kathmandu University School of Medical Sciences...',
      country: 'Nepal',
      estYear: 1994
    },
    {
  name: 'B & C Medical College Teaching Hospital',
  image: '/images/BNC.png',
  description: 'B & C Medical College Teaching Hospital and Research Center, located in Birtamode, Jhapa, Nepal.',
  country: 'Nepal',
  estYear: 2013
},
{
  name: 'Nobel Medical College',
  image: '/images/nobel.png',
  description: 'Nobel Medical College, located in Biratnagar, Nepal, is one of the leading private medical institutions in the country. ',
  country: 'Nepal',
  estYear: 2004
}

  ],
 bangladesh: [
  {
    name: 'President Abdul Hamid Medical College',
    image: '/images/AHM.png',
    description: 'President Abdul Hamid Medical College, located in Kishoreganj, is a renowned private medical institution in Bangladesh.',
    country: 'Bangladesh',
    estYear: 2013
  },
  {
    name: 'MH Samorita Medical College',
    image: '/images/MH.png',
    description: 'MH Samorita Medical College & Hospital is a well-established private medical college located in Dhaka.',
    country: 'Bangladesh',
    estYear: 2010
  },
  {
    name: 'Jalalabad Ragib-Rabeya Medical College',
    image: '/images/jalalabad.png',
    description: 'Jalalabad Ragib-Rabeya Medical College, situated in Sylhet, is one of the leading private medical colleges in Bangladesh. ',
    country: 'Bangladesh',
    estYear: 1995
  }
],

 russia: [
  {
    name: 'North Western State Medical University',
    image: '/images/northwestern.png',
    description: 'North Western State Medical University named after I.I. Mechnikov is located in Saint Petersburg, Russia. ',
    country: 'Russia',
    estYear: 1907
  },
  {
    name: 'Kazan Federal University',
    image: '/images/kazan.png',
    description: 'Kazan Federal University, located in Kazan, Russia, is a top-ranked public university offering MBBS programs in English.',
    country: 'Russia',
    estYear: 1804
  },
  {
    name: 'Krasnoyarsk State Medical University',
    image: '/images/krasnoyarsk.png',
    description: 'Krasnoyarsk State Medical University, located in Krasnoyarsk, Russia, is a government medical university.',
    country: 'Russia',
    estYear: 1942
  },
  {
    name: 'Petrozavodsk State University',
    image: '/images/petrozavodsk.png',
    description: 'Petrozavodsk State University is a major public university in the Republic of Karelia, Russia. ',
    country: 'Russia',
    estYear: 1940
  },
  {
    name: 'Ural State Medical University',
    image: '/images/ural.png',
    description: 'Ural State Medical University, situated in Yekaterinburg, Russia.',
    estYear: 1930
  }
],

   georgia: [
    {
  name: 'European University Georgia',
  image: '/images/euro.png',
  description: 'European University, located in Tbilisi, Georgia, is one of the top private medical universities.',
  country: 'Georgia',
  estYear: 2011
}

  ],
  philippines: [
  {
    name: 'Emilio Aguinaldo College',
    image: '/images/emilio.png',
    description: 'Emilio Aguinaldo College, located in Manila, Philippines, is a well-recognized institution offering the Doctor, ',
    country: 'Philippines',
    estYear: 1957
  },
  {
    name: 'University of Perpetual Help System',
    image: '/images/perpetual.png',
    description: 'The University of Perpetual Help System DALTA is a top-ranked private university in Las Piñas, Philippines. ',
    country: 'Philippines',
    estYear: 1975
  },
  {
    name: 'AMA School of Medicine',
    image: '/images/AMA.png',
    description: 'AMA School of Medicine, located in Makati City, Metro Manila, is part of the AMA Education System. ',
    country: 'Philippines',
    estYear: 2008
  }
],
uzbekistan: [
  {
    name: 'Bukhara State Medical Institute',
    image: '/images/bukhara.png',
    description: 'Bukhara State Medical Institute, located in the historical city of Bukhara, Uzbekistan, is one of the leading government medical universities.',
    country: 'Uzbekistan',
    estYear: 1990
  },
  {
    name: 'Tashkent State Medical University',
    image: '/images/tashkent.png',
    description: 'Tashkent State Medical University is a top-ranked government medical university in Uzbekistan.  ',
    country: 'Uzbekistan',
    estYear: 2020
  },
  {
    name: 'Andijan State Medical Institute',
    image: '/images/andijan.png',
    description: 'Andijan State Medical Institute is a reputed government medical university located in Andijan, Uzbekistan. ',
    country: 'Uzbekistan',
    estYear: 1955
  },
  {
    name: 'Samarkand State Medical University',
    image: '/images/samarkand.png',
    description: 'Samarkand State Medical University is one of the oldest and most prestigious medical universities in Central Asia.  ',
    country: 'Uzbekistan',
    estYear: 1930
  }
],
kyrgyzstan:[
  
  {
    name: "International School of Medicine",
    image: "/images/international.png",
    description: "International School of Medicine in Kyrgyzstan is one of the most popular medical universities for Indian students.",
    country: "Kyrgyzstan",
    estYear: 2003
  },
  {
    name: "Asian Medical Institute",
    image: "/images/asian.png",
    description: "Asian Medical Institute is recognized by major medical councils and provides MBBS education in English medium. ",
    country: "Kyrgyzstan",
    estYear: 2004
  },
  {
    name: "Osh State University",
    image: "/images/osh.png",
    description: "Osh State University is one of the oldest and most reputed government universities in Kyrgyzstan.",
    country: "Kyrgyzstan",
    estYear: 1951
  },
  {
    name: "Kyrgyz State Medical Academy",
    image: "/images/kyrgyz.png",
    description: "Kyrgyz State Medical Academy is a premier medical institution in Kyrgyzstan, known for its excellent faculty.",
    country: "Kyrgyzstan",
    estYear: 1939
  }
],
kazakhstan: [
  {
    name: "Kazakh National Medical University",
    image: "/images/kazakh.png",
    description: "Kazakh National Medical University is one of the top medical universities in Kazakhstan. ",
    country: "Kazakhstan",
    estYear: 1930
  },
  {
    name: "Astana Medical University",
    image: "/images/astana.png",
    description: "Astana Medical University offers globally recognized MBBS programs and provides quality .",
    country: "Kazakhstan",
    estYear: 1964
  },
  {
    name: "Al-Farabi Kazakh National University",
    image: "/images/farabi.png",
    description: "Al-Farabi Kazakh National University is a prestigious institution offering MBBS .",
    country: "Kazakhstan",
    estYear: 1934
  },
  {
    name: "Karaganda State Medical University",
    image: "/images/karaganda.png",
    description: "Karaganda State Medical University is known for its comprehensive MBBS curriculum.",
    country: "Kazakhstan",
    estYear: 1950
  }
]






};

const CountryPage = ({ params }) => {
  const { country } = params;
  const colleges = countryColleges[country] || [];

  return (
    <>
    <TopBar />
    <Navbar />
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
      <Footer/>
    </>
  );
};

export default CountryPage;
