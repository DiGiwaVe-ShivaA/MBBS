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
  description: 'B & C Medical College Teaching Hospital and Research Center, located in Birtamode, Jhapa, Nepal, is a modern and rapidly growing medical institution.',
  country: 'Nepal',
  estYear: 2013
},
{
  name: 'Nobel Medical College',
  image: '/images/nobel.png',
  description: 'Nobel Medical College, located in Biratnagar, Nepal, is one of the leading private medical institutions in the country. Affiliated with Kathmandu University, it offers MBBS and other health science programs with a strong focus on clinical training and research. The college has a large teaching hospital that provides hands-on experience to students and caters to thousands of patients across eastern Nepal.',
  country: 'Nepal',
  estYear: 2004
}

  ],
 bangladesh: [
  {
    name: 'President Abdul Hamid Medical College',
    image: '/images/AHM.png',
    description: 'President Abdul Hamid Medical College, located in Kishoreganj, is a renowned private medical institution in Bangladesh. The college is known for its modern infrastructure, qualified faculty, and quality education in medical sciences. It offers MBBS programs to both local and international students.',
    country: 'Bangladesh',
    estYear: 2013
  },
  {
    name: 'MH Samorita Medical College',
    image: '/images/MH.png',
    description: 'MH Samorita Medical College & Hospital is a well-established private medical college located in Dhaka. It offers high-quality education and clinical training in a modern hospital setting, and is recognized by BMDC, MCI, and WHO. The college has a strong focus on practical training and medical research.',
    country: 'Bangladesh',
    estYear: 2010
  },
  {
    name: 'Jalalabad Ragib-Rabeya Medical College',
    image: '/images/jalalabad.png',
    description: 'Jalalabad Ragib-Rabeya Medical College, situated in Sylhet, is one of the leading private medical colleges in Bangladesh. Affiliated with Shahjalal University of Science and Technology, the college has excellent teaching facilities and a reputable hospital for clinical practice.',
    country: 'Bangladesh',
    estYear: 1995
  }
],

 russia: [
  {
    name: 'North Western State Medical University',
    image: '/images/northwestern.png',
    description: 'North Western State Medical University named after I.I. Mechnikov is located in Saint Petersburg, Russia. It is one of the oldest and most prestigious medical institutions in the country, offering MBBS programs in English medium with advanced research, training hospitals, and global recognition.',
    country: 'Russia',
    estYear: 1907
  },
  {
    name: 'Kazan Federal University',
    image: '/images/kazan.png',
    description: 'Kazan Federal University, located in Kazan, Russia, is a top-ranked public university offering MBBS programs in English. With over 200 years of academic legacy, it is known for world-class infrastructure, international collaborations, and excellent FMGE results for Indian students.',
    country: 'Russia',
    estYear: 1804
  },
  {
    name: 'Krasnoyarsk State Medical University',
    image: '/images/krasnoyarsk.png',
    description: 'Krasnoyarsk State Medical University, located in Krasnoyarsk, Russia, is a government medical university offering high-quality MBBS education with modern teaching methods. It is recognized by NMC, WHO, and provides a strong clinical foundation through affiliated hospitals.',
    country: 'Russia',
    estYear: 1942
  },
  {
    name: 'Petrozavodsk State University',
    image: '/images/petrozavodsk.png',
    description: 'Petrozavodsk State University is a major public university in the Republic of Karelia, Russia. It offers NMC-approved MBBS programs with excellent faculty, research-oriented environment, and advanced simulation labs. The university is well-known among international students.',
    country: 'Russia',
    estYear: 1940
  },
  {
    name: 'Ural State Medical University',
    image: '/images/ural.png',
    description: 'Ural State Medical University, situated in Yekaterinburg, Russia, is a prestigious government medical institution offering English-taught MBBS programs. It is recognized by WHO, NMC, and provides strong academic and clinical exposure through multi-specialty hospitals.',
    country: 'Russia',
    estYear: 1930
  }
],

   georgia: [
    {
  name: 'European University Georgia',
  image: '/images/euro.png',
  description: 'European University, located in Tbilisi, Georgia, is one of the top private medical universities recognized for its quality education and international standards. It offers an English-taught MBBS program, approved by NMC (India), WHO, and ECFMG. The university has modern labs, simulation centers, and partnerships with reputed hospitals for clinical training.',
  country: 'Georgia',
  estYear: 2011
}

  ],
  philippines: [
  {
    name: 'Emilio Aguinaldo College',
    image: '/images/emilio.png',
    description: 'Emilio Aguinaldo College, located in Manila, Philippines, is a well-recognized institution offering the Doctor of Medicine (MD) program equivalent to MBBS. The college is known for its advanced infrastructure, experienced faculty, and clinical training through affiliated hospitals. It is approved by NMC and WHO.',
    country: 'Philippines',
    estYear: 1957
  },
  {
    name: 'University of Perpetual Help System',
    image: '/images/perpetual.png',
    description: 'The University of Perpetual Help System DALTA is a top-ranked private university in Las Piñas, Philippines. It offers the MD (MBBS equivalent) program to international students with strong clinical exposure, skilled faculty, and US-based curriculum structure. Recognized by NMC, WHO, and other global bodies.',
    country: 'Philippines',
    estYear: 1975
  },
  {
    name: 'AMA School of Medicine',
    image: '/images/AMA.png',
    description: 'AMA School of Medicine, located in Makati City, Metro Manila, is part of the AMA Education System. It offers an MD program aligned with international standards, approved by NMC and WHO. The school focuses on modern digital learning and hands-on hospital training.',
    country: 'Philippines',
    estYear: 2008
  }
],
uzbekistan: [
  {
    name: 'Bukhara State Medical Institute',
    image: '/images/bukhara.png',
    description: 'Bukhara State Medical Institute, located in the historical city of Bukhara, Uzbekistan, is one of the leading government medical universities. Known for its FMGE passing rate and affordable fee structure, the university offers a 6-year MBBS program in English with modern facilities and globally recognized degrees.',
    country: 'Uzbekistan',
    estYear: 1990
  },
  {
    name: 'Tashkent State Medical University',
    image: '/images/tashkent.png',
    description: 'Tashkent State Medical University is a top-ranked government medical university in Uzbekistan. It was recently established by merging TMA, TDMI, and TPMI to enhance the quality of medical education and research. The university provides MBBS programs approved by NMC and WHO, with strong clinical exposure.',
    country: 'Uzbekistan',
    estYear: 2020
  },
  {
    name: 'Andijan State Medical Institute',
    image: '/images/andijan.png',
    description: 'Andijan State Medical Institute is a reputed government medical university located in Andijan, Uzbekistan. Established in the Soviet era, the institute is known for its high academic standards, qualified faculty, and excellent clinical training through its own hospital facilities. It offers an NMC-approved MBBS program in English.',
    country: 'Uzbekistan',
    estYear: 1955
  },
  {
    name: 'Samarkand State Medical University',
    image: '/images/samarkand.png',
    description: 'Samarkand State Medical University is one of the oldest and most prestigious medical universities in Central Asia. Located in the historic city of Samarkand, it offers globally recognized MBBS programs taught in English. The university boasts strong FMGE results and top-tier academic and clinical infrastructure.',
    country: 'Uzbekistan',
    estYear: 1930
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
