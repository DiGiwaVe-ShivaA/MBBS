import React, { useState } from "react";
import Link from "next/link";

const colleges = [
  {
    name: "Maulana Azad Institute of Dental Sciences",
    location: "New Delhi",
    categories: [
      "BDS",
      "MDS",
      "Dental Hygiene",
      "Oral Surgery",
      "Public Health Dentistry",
    ],
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
    image: "/images/collegedata/maulana-azad.jpeg",
    link: "/aiims-delhi",
  },
  {
    name: "National Institute of Ayurveda - BHMS",
    location: "New Delhi",
    category: "BHMS",
    fees: "₹45,000",
    deadline: "15 Apr - 25 Apr 2024",
    rating: "4.5/5",
    ranking: "#3 Ayurveda College in India 2024",
    cutoff: "NEET 2024 Cut off 600",
    image: "/images/collegedata/maulana-azad.jpeg",
    link: "/national-institute-ayurveda",
  },
  {
    name: "Institute of Medical Sciences - BAMS",
    location: "Mumbai",
    category: "BAMS",
    fees: "₹70,000",
    deadline: "05 Apr - 25 Apr 2024",
    rating: "4.7/5",
    ranking: "#4 Medical College in India 2024",
    cutoff: "NEET 2024 Cut off 620",
    image: "/images/collegedata/maulana-azad.jpeg",
    link: "/institute-of-medical-sciences",
  },
  {
    name: "College of Nursing - Nursing",
    location: "Chennai",
    category: "Nursing",
    fees: "₹65,000",
    deadline: "10 Apr - 30 Apr 2024",
    rating: "4.6/5",
    ranking: "#5 Nursing College in India 2024",
    cutoff: "NEET 2024 Cut off 580",
    image: "/images/collegedata/maulana-azad.jpeg",
    link: "/college-of-nursing",
  },

  // 👉 Bihar Medical Colleges

  {
    name: "Katihar Medical College",
    location: "Bihar",
    category: "MBBS",
    deadline: "15 Apr - 30 Apr 2024",
    rating: "4.3/5",
    ranking: "#6 Medical College in Bihar 2024",
    cutoff: "NEET 2024 Cut off 520",
    image: "/images/collegedata/maulana-azad.jpeg",
    link: "/katihar-medical-college",
  },
  {
    name: "Madhubani Medical College",
    location: "Bihar",
    category: "MBBS",
    deadline: "20 Apr - 30 Apr 2024",
    rating: "4.0/5",
    ranking: "#7 Medical College in Bihar 2024",
    cutoff: "NEET 2024 Cut off 510",
    image: "/images/collegedata/maulana-azad.jpeg",
    link: "/madhubani-medical-college",
  },
  {
    name: "Narayan Medical College & Hospital",
    location: "Bihar",
    category: "MBBS",
    deadline: "01 May - 15 May 2024",
    rating: "4.4/5",
    ranking: "#8 Medical College in Bihar 2024",
    cutoff: "NEET 2024 Cut off 530",
    image: "/images/collegedata/maulana-azad.jpeg",
    link: "/narayan-medical-college",
  },
  {
    name: "Netaji Subhas Medical College & Hospital",
    location: "Bihar",
    category: "MBBS",
    deadline: "10 Apr - 25 Apr 2024",
    rating: "4.2/5",
    ranking: "#9 Medical College in Bihar 2024",
    cutoff: "NEET 2024 Cut off 500",
    image: "/images/collegedata/netaji-subhas-medical-college.jpg",
    link: "/netaji-subhas-medical-college",
  },
  {
    name: "R.D.J.M. Medical College & Hospital",
    location: "Bihar",
    category: "MBBS",
    deadline: "05 Apr - 25 Apr 2024",
    rating: "3.9/5",
    ranking: "#10 Medical College in Bihar 2024",
    cutoff: "NEET 2024 Cut off 490",
    image: "/images/collegedata/rdjm-medical-college.jpg",
    link: "/rdjm-medical-college",
  },
  {
    name: "Shree Narayan Medical Institute & Hospital",
    location: "Bihar",
    category: "MBBS",
    deadline: "01 Apr - 20 Apr 2024",
    rating: "4.1/5",
    ranking: "#11 Medical College in Bihar 2024",
    cutoff: "NEET 2024 Cut off 500",
    image: "/images/collegedata/shree-narayan-medical-institute.jpg",
    link: "/shree-narayan-medical-institute",
  },
  {
    name: "Mata Gujri Memorial Medical College & Lion Seva Kendra Hospital",
    location: "Bihar",
    category: "MBBS",
    deadline: "10 Apr - 30 Apr 2024",
    rating: "4.3/5",
    ranking: "#12 Medical College in Bihar 2024",
    cutoff: "NEET 2024 Cut off 515",
    image: "/images/collegedata/mata-gujri-medical-college.jpg",
    link: "/mata-gujri-medical-college",
  },
  {
    name: "Lord Buddha Medical College",
    location: "Bihar",
    category: "MBBS",
    deadline: "15 Apr - 30 Apr 2024",
    rating: "4.0/5",
    ranking: "#13 Medical College in Bihar 2024",
    cutoff: "NEET 2024 Cut off 505",
    image: "/images/collegedata/lord-buddha-medical-college.jpg",
    link: "/lord-buddha-medical-college",
  },

  {
    name: "Shri Shankaracharya Institute of Medical Science",
    location: "Chhattisgarh",
    category: "MBBS",
    fees: "₹9,00,000",
    deadline: "10 Apr - 30 Apr 2024",
    rating: "4.1/5",
    ranking: "#1 Private Medical College in Chhattisgarh 2024",
    cutoff: "NEET 2024 Cut off 505",
    image: "/images/collegedata/shankaracharya-medical-bhilai.jpg",
    link: "/shankaracharya-medical-bhilai",
  },
  {
    name: "Raipur Institute of Medical Sciences",
    location: "Chhattisgarh",
    category: "MBBS",
    fees: "₹8,75,000",
    deadline: "12 Apr - 28 Apr 2024",
    rating: "4.0/5",
    ranking: "#2 Private Medical College in Chhattisgarh 2024",
    cutoff: "NEET 2024 Cut off 495",
    image: "/images/collegedata/rims-raipur.jpg",
    link: "/rims-raipur",
  },
  {
    name: "Shri Balaji Institute of Medical Science",
    location: "Chhattisgarh",
    category: "MBBS",
    fees: "₹8,60,000",
    deadline: "08 Apr - 27 Apr 2024",
    rating: "4.2/5",
    ranking: "#3 Private Medical College in Chhattisgarh 2024",
    cutoff: "NEET 2024 Cut off 500",
    image: "/images/collegedata/balaji-medical-raipur.jpg",
    link: "/balaji-medical-raipur",
  },
  {
    name: "All India Institute of Medical Sciences (AIIMS), Rishikesh",
    location: "Uttarakhand",
    category: "MBBS",
    fees: "₹1,628",
    deadline: "01 Apr - 30 Apr 2024",
    rating: "4.8/5",
    ranking: "#1 Government Medical College in Uttarakhand 2024",
    cutoff: "NEET 2024 Cut off 680",
    image: "/images/collegedata/aiims-rishikesh.jpg",
    link: "/aiims-rishikesh",
  },
  {
    name: "Doon Medical College",
    location: "Uttarakhand",
    category: "MBBS",
    fees: "₹4,26,500",
    deadline: "05 Apr - 25 Apr 2024",
    rating: "4.3/5",
    ranking: "#2 Government Medical College in Uttarakhand 2024",
    cutoff: "NEET 2024 Cut off 600",
    image: "/images/collegedata/doon-medical-college.jpg",
    link: "/doon-medical-college",
  },
  {
    name: "Government Medical College, Haldwani",
    location: "Uttarakhand",
    category: "MBBS",
    fees: "₹4,00,000",
    deadline: "10 Apr - 30 Apr 2024",
    rating: "4.4/5",
    ranking: "#3 Government Medical College in Uttarakhand 2024",
    cutoff: "NEET 2024 Cut off 610",
    image: "/images/collegedata/gmc-haldwani.jpg",
    link: "/gmc-haldwani",
  },
  {
    name: "Veer Chandra Singh Garhwali Government Institute of Medical Science & Research",
    location: "Uttarakhand",
    category: "MBBS",
    fees: "₹4,00,000",
    deadline: "12 Apr - 28 Apr 2024",
    rating: "4.2/5",
    ranking: "#4 Government Medical College in Uttarakhand 2024",
    cutoff: "NEET 2024 Cut off 590",
    image: "/images/collegedata/vcsgimsr-srinagar.jpg",
    link: "/vcsgimsr-srinagar",
  },
  {
    name: "Soban Singh Jeena Government Institute of Medical Science and Research",
    location: "Uttarakhand",
    category: "MBBS",
    fees: "₹4,00,000",
    deadline: "08 Apr - 27 Apr 2024",
    rating: "4.1/5",
    ranking: "#5 Government Medical College in Uttarakhand 2024",
    cutoff: "NEET 2024 Cut off 580",
    image: "/images/collegedata/ssjgimsr-almora.jpg",
    link: "/ssjgimsr-almora",
  },
  {
    name: "All India Institute of Medical Sciences (AIIMS) Rishikesh",
    location: "Uttarakhand",
    category: "MBBS",
    fees: "₹1,628",
    deadline: "01 Apr - 30 Apr 2024",
    rating: "5/5",
    ranking: "#1 Government Medical College in Uttarakhand 2024",
    cutoff: "NEET 2024 Cut off 680",
    image: "/images/collegedata/aiims-rishikesh.jpg",
    link: "/aiims-rishikesh",
  },
  {
    name: "Government Medical College, Haldwani",
    location: "Uttarakhand",
    category: "MBBS",
    fees: "₹10,79,000",
    deadline: "01 Apr - 30 Apr 2024",
    rating: "4.5/5",
    ranking: "#2 Government Medical College in Uttarakhand 2024",
    cutoff: "NEET 2024 Cut off 620",
    image: "/images/collegedata/gmc-haldwani.jpg",
    link: "/gmc-haldwani",
  },
  {
    name: "Doon Medical College, Dehradun",
    location: "Uttarakhand",
    category: "MBBS",
    fees: "₹4,26,500",
    deadline: "01 Apr - 30 Apr 2024",
    rating: "4.4/5",
    ranking: "#3 Government Medical College in Uttarakhand 2024",
    cutoff: "NEET 2024 Cut off 610",
    image: "/images/collegedata/doon-medical-college.jpg",
    link: "/doon-medical-college",
  },
  {
    name: "Veer Chandra Singh Garhwali Government Institute of Medical Science & Research",
    location: "Uttarakhand",
    category: "MBBS",
    fees: "₹10,00,000",
    deadline: "01 Apr - 30 Apr 2024",
    rating: "4.3/5",
    ranking: "#4 Government Medical College in Uttarakhand 2024",
    cutoff: "NEET 2024 Cut off 600",
    image: "/images/collegedata/vcsg-garhwali-medical.jpg",
    link: "/vcsg-garhwali-medical",
  },
  {
    name: "Soban Singh Jeena Government Institute of Medical Science & Research",
    location: "Uttarakhand",
    category: "MBBS",
    fees: "₹10,00,000",
    deadline: "01 Apr - 30 Apr 2024",
    rating: "4.2/5",
    ranking: "#5 Government Medical College in Uttarakhand 2024",
    cutoff: "NEET 2024 Cut off 590",
    image: "/images/collegedata/ssj-gimsr-almora.jpg",
    link: "/ssj-gimsr-almora",
  },
  {
    name: "Graphic Era Institute of Medical Sciences",
    location: "Uttarakhand",
    category: "MBBS",
    fees: "₹15,00,000",
    deadline: "01 Apr - 30 Apr 2024",
    rating: "4.0/5",
    ranking: "#6 Private Medical College in Uttarakhand 2024",
    cutoff: "NEET 2024 Cut off 580",
    image: "/images/collegedata/graphic-era-medical.jpg",
    link: "/graphic-era-medical",
  },
  {
    name: "Kingston Imperial Institute of Medical Sciences",
    location: "Uttarakhand",
    category: "MBBS",
    fees: "₹14,00,000",
    deadline: "01 Apr - 30 Apr 2024",
    rating: "3.9/5",
    ranking: "#7 Private Medical College in Uttarakhand 2024",
    cutoff: "NEET 2024 Cut off 570",
    image: "/images/collegedata/kingston-imperial-medical.jpg",
    link: "/kingston-imperial-medical",
  },
  {
    name: "Shri Ram Murti Smarak Institute of Medical Sciences",
    location: "Uttar Pradesh",
    category: "MBBS",
    fees: "₹12,00,000",
    deadline: "01 Apr - 30 Apr 2024",
    rating: "4.4/5",
    ranking: "#1 Private Medical College in Uttar Pradesh 2024",
    cutoff: "NEET 2024 Cut off 500",
    image: "/images/collegedata/srms-medical-college.jpg",
    link: "/srms-medical-college",
  },
  {
    name: "School of Medical Sciences & Research (Sharda University)",
    location: "Uttar Pradesh",
    category: "MBBS",
    fees: "₹11,50,000",
    deadline: "05 Apr - 25 Apr 2024",
    rating: "4.3/5",
    ranking: "#2 Private Medical College in Uttar Pradesh 2024",
    cutoff: "NEET 2024 Cut off 495",
    image: "/images/collegedata/sharda-medical-college.jpg",
    link: "/sharda-medical-college",
  },
  {
    name: "Subharti Medical College",
    location: "Uttar Pradesh",
    category: "MBBS",
    fees: "₹11,00,000",
    deadline: "10 Apr - 30 Apr 2024",
    rating: "4.2/5",
    ranking: "#3 Private Medical College in Uttar Pradesh 2024",
    cutoff: "NEET 2024 Cut off 490",
    image: "/images/collegedata/subharti-medical-college.jpg",
    link: "/subharti-medical-college",
  },
  {
    name: "Muzaffarnagar Medical College",
    location: "Uttar Pradesh",
    category: "MBBS",
    fees: "₹11,80,000",
    deadline: "05 Apr - 30 Apr 2024",
    rating: "4.1/5",
    ranking: "Top Medical Colleges in Muzaffarnagar",
    cutoff: "NEET 2024 Cut off 485",
    image: "/images/collegedata/muzaffarnagar-medical-college.jpg",
    link: "/muzaffarnagar-medical-college",
  },
  {
    name: "Rohilkhand Medical College & Hospital",
    location: "Uttar Pradesh",
    category: "MBBS",
    fees: "₹12,30,000",
    deadline: "10 Apr - 30 Apr 2024",
    rating: "4.2/5",
    ranking: "Top Private College in Bareilly",
    cutoff: "NEET 2024 Cut off 490",
    image: "/images/collegedata/rohilkhand-medical-college.jpg",
    link: "/rohilkhand-medical-college",
  },
  {
    name: "Rama Medical College Hospital and Research Centre",
    location: "Uttar Pradesh",
    category: "MBBS",
    fees: "₹12,00,000",
    deadline: "05 Apr - 25 Apr 2024",
    rating: "4.1/5",
    ranking: "Top Medical College in Kanpur",
    cutoff: "NEET 2024 Cut off 480",
    image: "/images/collegedata/rama-medical-college.jpg",
    link: "/rama-medical-college",
  },
  {
    name: "Hind Institute of Medical Sciences",
    location: "Uttar Pradesh",
    category: "MBBS",
    fees: "₹11,70,000",
    deadline: "10 Apr - 30 Apr 2024",
    rating: "4.0/5",
    ranking: "Popular Institute in Sitapur",
    cutoff: "NEET 2024 Cut off 475",
    image: "/images/collegedata/hind-medical-college.jpg",
    link: "/hind-medical-college",
  },
  {
    name: "Mayo Institute of Medical Sciences",
    location: "Uttar Pradesh",
    category: "MBBS",
    fees: "₹11,90,000",
    deadline: "08 Apr - 28 Apr 2024",
    rating: "4.1/5",
    ranking: "Well-known in Barabanki",
    cutoff: "NEET 2024 Cut off 470",
    image: "/images/collegedata/mayo-medical-college.jpg",
    link: "/mayo-medical-college",
  },
  {
    name: "Heritage Institute of Medical Sciences",
    location: "Uttar Pradesh",
    category: "MBBS",
    fees: "₹12,10,000",
    deadline: "12 Apr - 30 Apr 2024",
    rating: "4.2/5",
    ranking: "Reputed College in Eastern UP",
    cutoff: "NEET 2024 Cut off 482",
    image: "/images/collegedata/heritage-medical-college.jpg",
    link: "/heritage-medical-college",
  },
  {
    name: "Era's Lucknow Medical College and Hospital",
    location: "Uttar Pradesh",
    category: "MBBS",
    fees: "₹13,00,000",
    deadline: "10 Apr - 30 Apr 2024",
    rating: "4.3/5",
    ranking: "Top Medical College in Lucknow",
    cutoff: "NEET 2024 Cut off 495",
    image: "/images/collegedata/eras-medical-college.jpg",
    link: "/eras-medical-college",
  },
  {
    name: "Integral Institute of Medical Sciences & Research",
    location: "Uttar Pradesh",
    category: "MBBS",
    fees: "₹11,90,000",
    deadline: "05 Apr - 30 Apr 2024",
    rating: "4.0/5",
    ranking: "Well-known in Lucknow",
    cutoff: "NEET 2024 Cut off 480",
    image: "/images/collegedata/integral-medical-college.jpg",
    link: "/integral-medical-college",
  },
  {
    name: "Career Institute of Medical Sciences & Hospital",
    location: "Uttar Pradesh",
    category: "MBBS",
    fees: "₹11,75,000",
    deadline: "10 Apr - 30 Apr 2024",
    rating: "4.1/5",
    ranking: "Private Medical College in Lucknow",
    cutoff: "NEET 2024 Cut off 470",
    image: "/images/collegedata/career-medical-college.jpg",
    link: "/career-medical-college",
  },
  {
    name: "Adesh Institute of Medical Sciences & Research",
    location: "Punjab",
    category: "MBBS",
    fees: "₹13,00,000",
    deadline: "01 Apr - 30 Apr 2024",
    rating: "4.2/5",
    ranking: "Top Private Medical College in Punjab 2024",
    cutoff: "NEET 2024 Cut off AIR 86772",
    image: "/images/collegedata/adesh-institute-bathinda.jpg",
    link: "/adesh-institute-bathinda",
  },
  {
    name: "Christian Medical College",
    location: "Punjab",
    category: "MBBS",
    fees: "₹6,60,000",
    deadline: "01 Apr - 30 Apr 2024",
    rating: "4.6/5",
    ranking: "Top Medical College in Punjab 2024",
    cutoff: "NEET 2024 Cut off AIR 17570",
    image: "/images/collegedata/cmc-ludhiana.jpg",
    link: "/cmc-ludhiana",
  },
  {
    name: "Dayanand Medical College & Hospital",
    location: "Punjab",
    category: "MBBS",
    fees: "₹6,60,000",
    deadline: "01 Apr - 30 Apr 2024",
    rating: "4.5/5",
    ranking: "Top Medical College in Punjab 2024",
    cutoff: "NEET 2024 Cut off AIR 49965",
    image: "/images/collegedata/dayanand-medical-college.jpg",
    link: "/dayanand-medical-college",
  },
  {
    name: "Punjab Institute of Medical Sciences",
    location: "Punjab",
    category: "MBBS",
    fees: "₹10,94,000",
    deadline: "01 Apr - 30 Apr 2024",
    rating: "4.3/5",
    ranking: "Top Medical College in Punjab 2024",
    cutoff: "NEET 2024 Cut off AIR 64830",
    image: "/images/collegedata/pims-jalandhar.jpg",
    link: "/pims-jalandhar",
  },
  {
    name: "Sri Guru Ram Das Institute of Medical Sciences and Research",
    location: "Punjab",
    category: "MBBS",
    fees: "₹10,94,000",
    deadline: "01 Apr - 30 Apr 2024",
    rating: "4.4/5",
    ranking: "Top Medical College in Punjab 2024",
    cutoff: "NEET 2024 Cut off AIR 64830",
    image: "/images/collegedata/sgrd-amritsar.jpg",
    link: "/sgrd-amritsar",
  },
  {
    name: "Gian Sagar Hospital & Medical College",
    location: "Punjab",
    category: "MBBS",
    fees: "₹10,94,000",
    deadline: "01 Apr - 30 Apr 2024",
    rating: "4.2/5",
    ranking: "Top Medical College in Punjab 2024",
    cutoff: "NEET 2024 Cut off AIR 64830",
    image: "/images/collegedata/gian-sagar-patiala.jpg",
    link: "/gian-sagar-patiala",
  },
  {
    name: "Government Medical College",
    location: "Punjab",
    category: "MBBS",
    fees: "₹1,83,000",
    deadline: "01 Apr - 30 Apr 2024",
    rating: "4.7/5",
    ranking: "Top Government Medical College in Punjab 2024",
    cutoff: "NEET 2024 Cut off AIR 17534",
    image: "/images/collegedata/gmc-patiala.jpg",
    link: "/gmc-patiala",
  },
  {
    name: "Government Medical College",
    location: "Punjab",
    category: "MBBS",
    fees: "₹1,83,000",
    deadline: "01 Apr - 30 Apr 2024",
    rating: "4.7/5",
    ranking: "Top Government Medical College in Punjab 2024",
    cutoff: "NEET 2024 Cut off AIR 11935",
    image: "/images/collegedata/gmc-amritsar.jpg",
    link: "/gmc-amritsar",
  },
  {
    name: "Guru Gobind Singh Medical College",
    location: "Punjab",
    category: "MBBS",
    fees: "₹1,83,000",
    deadline: "01 Apr - 30 Apr 2024",
    rating: "4.6/5",
    ranking: "Top Government Medical College in Punjab 2024",
    cutoff: "NEET 2024 Cut off AIR 16056",
    image: "/images/collegedata/guru-gobind-singh-faridkot.jpg",
    link: "/guru-gobind-singh-faridkot",
  },
  {
    name: "Dr BR Ambedkar State Institute of Medical Sciences",
    location: "Punjab",
    category: "MBBS",
    fees: "₹1,83,000",
    deadline: "01 Apr - 30 Apr 2024",
    rating: "4.5/5",
    ranking: "Top Government Medical College in Punjab 2024",
    cutoff: "NEET 2024 Cut off AIR 14883",
    image: "/images/collegedata/ambedkar-institute-mohali.jpg",
    link: "/ambedkar-institute-mohali",
  },
  // West Bengal Medical Colleges
  {
    name: "Santiniketan Medical College",
    location: "West Bengal",
    category: "MBBS",
    fees: "₹13,50,000",
    deadline: "01 Apr - 30 Apr 2024",
    rating: "4.1/5",
    ranking: "Top Private Medical College in West Bengal 2024",
    cutoff: "NEET 2024 Cut off AIR 85231",
    image: "/images/collegedata/santiniketan-medical-college.jpg",
    link: "/santiniketan-medical-college",
  },
  {
    name: "JIS School of Medical Science and Research",
    location: "West Bengal",
    category: "MBBS",
    fees: "₹12,90,000",
    deadline: "01 Apr - 30 Apr 2024",
    rating: "4.3/5",
    ranking: "Top Private Medical College in West Bengal 2024",
    cutoff: "NEET 2024 Cut off AIR 77920",
    image: "/images/collegedata/jis-school-medical-howrah.jpg",
    link: "/jis-school-medical-howrah",
  },
  {
    name: "I Care Institute of Medical Sciences and Research",
    location: "West Bengal",
    category: "MBBS",
    fees: "₹11,80,000",
    deadline: "01 Apr - 30 Apr 2024",
    rating: "4.0/5",
    ranking: "Top Private Medical College in West Bengal 2024",
    cutoff: "NEET 2024 Cut off AIR 88550",
    image: "/images/collegedata/icare-haldia.jpg",
    link: "/icare-haldia",
  },
  {
    name: "Jagannath Gupta Institute of Medical Sciences and Hospital",
    location: "West Bengal",
    category: "MBBS",
    fees: "₹12,30,000",
    deadline: "01 Apr - 30 Apr 2024",
    rating: "4.2/5",
    ranking: "Top Private Medical College in West Bengal 2024",
    cutoff: "NEET 2024 Cut off AIR 81000",
    image: "/images/collegedata/jagannath-gupta-budge.jpg",
    link: "/jagannath-gupta-budge",
  },
  {
    name: "KPC Medical College & Hospital",
    location: "West Bengal",
    category: "MBBS",
    fees: "₹13,20,000",
    deadline: "01 Apr - 30 Apr 2024",
    rating: "4.4/5",
    ranking: "Top Private Medical College in West Bengal 2024",
    cutoff: "NEET 2024 Cut off AIR 76500",
    image: "/images/collegedata/kpc-jadavpur.jpg",
    link: "/kpc-jadavpur",
  },
  {
    name: "Terna Medical College",
    location: "Maharashtra",
    category: "MBBS",
    deadline: "01 Apr - 30 Apr 2024",
    rating: "4.3/5",
    ranking: "#12 in Maharashtra",
    cutoff: "NEET 2024 Cut off 525",
    image: "/images/collegedata/terna-medical-college.jpg",
    link: "/terna-medical-college",
  },
  {
    name: "Dr. Vitthalrao Vikhe Patil Foundation’s Medical College & Hospital",
    location: "Maharashtra",
    category: "MBBS",
    deadline: "01 Apr - 30 Apr 2024",
    rating: "4.2/5",
    ranking: "#15 in Maharashtra",
    cutoff: "NEET 2024 Cut off 510",
    image: "/images/collegedata/vikhe-patil.jpg",
    link: "/vikhe-patil-college",
  },
  {
    name: "MAEER's Maharashtra Institute of Medical Sciences & Research",
    location: "Maharashtra",
    category: "MBBS",
    deadline: "01 Apr - 30 Apr 2024",
    rating: "4.1/5",
    ranking: "#16 in Maharashtra",
    cutoff: "NEET 2024 Cut off 505",
    image: "/images/collegedata/maeers-latur.jpg",
    link: "/maeers-mimsr",
  },
  {
    name: "MIT’s Maharashtra Institute of Medical Education & Research",
    location: "Maharashtra",
    category: "MBBS",
    deadline: "01 Apr - 30 Apr 2024",
    rating: "4.4/5",
    ranking: "#10 in Maharashtra",
    cutoff: "NEET 2024 Cut off 530",
    image: "/images/collegedata/mit-mimer.jpg",
    link: "/mimer-pune",
  },
  {
    name: "Smt. Kashibai Navale Medical College and General Hospital",
    location: "Maharashtra",
    category: "MBBS",
    deadline: "01 Apr - 30 Apr 2024",
    rating: "4.5/5",
    ranking: "#8 in Maharashtra",
    cutoff: "NEET 2024 Cut off 545",
    image: "/images/collegedata/kashibai-navale.jpg",
    link: "/kashibai-navale-college",
  },
  {
    name: "SSPM Medical College",
    location: "Maharashtra",
    category: "MBBS",
    fees: "₹1,00,000", // You can update this with the actual fee
    deadline: "01 Apr - 30 Apr 2024", // Update as needed
    rating: "4/5", // You can update this with the actual rating
    ranking: "#10 Medical College in Maharashtra 2024", // Update with the actual ranking
    cutoff: "NEET 2024 Cut off 500", // Update with actual cutoff
    image: "/images/collegedata/sspm-medical-college.jpeg", // Update the image link as needed
    link: "/sspm-medical-college",
  },
  {
    name: "B.K.L. Walawalkar Rural Medical College",
    location: "Maharashtra",
    category: "MBBS",
    fees: "₹1,20,000", // Update with actual fee
    deadline: "01 Apr - 30 Apr 2024", // Update as needed
    rating: "4.5/5", // Update with actual rating
    ranking: "#15 Medical College in Maharashtra 2024", // Update with actual ranking
    cutoff: "NEET 2024 Cut off 510", // Update with actual cutoff
    image: "/images/collegedata/bkl-walawalkar-college.jpeg", // Update the image link as needed
    link: "/bkl-walawalkar-college",
  },
  {
    name: "Ashwini Rural Medical College",
    location: "Maharashtra",
    category: "MBBS",
    fees: "₹1,00,000", // Update with actual fee
    deadline: "01 Apr - 30 Apr 2024", // Update as needed
    rating: "4/5", // Update with actual rating
    ranking: "#20 Medical College in Maharashtra 2024", // Update with actual ranking
    cutoff: "NEET 2024 Cut off 490", // Update with actual cutoff
    image: "/images/collegedata/ashwini-rural-medical-college.jpeg", // Update the image link as needed
    link: "/ashwini-rural-medical-college",
  },
  {
    name: "Dr. Ulhas Patil Medical College & General Hospital",
    location: "Maharashtra",
    category: "MBBS",
    fees: "₹1,30,000", // Update with actual fee
    deadline: "01 Apr - 30 Apr 2024", // Update as needed
    rating: "4.5/5", // Update with actual rating
    ranking: "#18 Medical College in Maharashtra 2024", // Update with actual ranking
    cutoff: "NEET 2024 Cut off 520", // Update with actual cutoff
    image: "/images/collegedata/dr-ulhas-patil-medical-college.jpeg", // Update the image link as needed
    link: "/dr-ulhas-patil-medical-college",
  },
  {
    name: "Dr. Panjabrao Deshmukh Memorial Medical College",
    location: "Maharashtra",
    category: "MBBS",
    fees: "₹1,10,000", // Update with actual fee
    deadline: "01 Apr - 30 Apr 2024", // Update as needed
    rating: "4/5", // Update with actual rating
    ranking: "#22 Medical College in Maharashtra 2024", // Update with actual ranking
    cutoff: "NEET 2024 Cut off 495", // Update with actual cutoff
    image: "/images/collegedata/dr-panjabrao-deshmukh-college.jpeg", // Update the image link as needed
    link: "/dr-panjabrao-deshmukh-college",
  },
  {
    name: "N. K. P. Salve Institute of Medical Sciences",
    location: "Maharashtra",
    category: "MBBS",
    fees: "₹1,25,000", // Update with actual fee
    deadline: "01 Apr - 30 Apr 2024", // Update as needed
    rating: "4.5/5", // Update with actual rating
    ranking: "#12 Medical College in Maharashtra 2024", // Update with actual ranking
    cutoff: "NEET 2024 Cut off 515", // Update with actual cutoff
    image: "/images/collegedata/nkp-salve-institute.jpeg", // Update the image link as needed
    link: "/nkp-salve-institute",
  },
  {
    name: "Dr N Y Tasgaonkar Institute of Medical Science",
    location: "Maharashtra",
    category: "MBBS",
    fees: "₹1,15,000", // Update with actual fee
    deadline: "01 Apr - 30 Apr 2024", // Update as needed
    rating: "4.5/5", // Update with actual rating
    ranking: "#14 Medical College in Maharashtra 2024", // Update with actual ranking
    cutoff: "NEET 2024 Cut off 505", // Update with actual cutoff
    image: "/images/collegedata/dr-ny-tasgaonkar-college.jpeg", // Update the image link as needed
    link: "/dr-ny-tasgaonkar-college",
  },
  {
    name: "Dr. Vasantrao Pawar Medical College, Hospital & Research Center",
    location: "Maharashtra",
    category: "MBBS",
    fees: "₹1,20,000", // Update with actual fee
    deadline: "01 Apr - 30 Apr 2024", // Update as needed
    rating: "4/5", // Update with actual rating
    ranking: "#16 Medical College in Maharashtra 2024", // Update with actual ranking
    cutoff: "NEET 2024 Cut off 490", // Update with actual cutoff
    image: "/images/collegedata/dr-vasantrao-pawar-college.jpeg", // Update the image link as needed
    link: "/dr-vasantrao-pawar-college",
  },
  {
    name: "SMBT Institute of Medical Sciences and Research Centre",
    location: "Maharashtra",
    category: "MBBS",
    fees: "₹1,40,000", // Update with actual fee
    deadline: "01 Apr - 30 Apr 2024", // Update as needed
    rating: "4.5/5", // Update with actual rating
    ranking: "#13 Medical College in Maharashtra 2024", // Update with actual ranking
    cutoff: "NEET 2024 Cut off 530", // Update with actual cutoff
    image: "/images/collegedata/smbt-institute-college.jpeg", // Update the image link as needed
    link: "/smbt-institute-college",
  },
  {
    name: "Prakash Institute of Medical Sciences and Research Centre",
    location: "Maharashtra",
    category: "MBBS",
    fees: "₹1,10,000", // Update with actual fee
    deadline: "01 Apr - 30 Apr 2024", // Update as needed
    rating: "4/5", // Update with actual rating
    ranking: "#17 Medical College in Maharashtra 2024", // Update with actual ranking
    cutoff: "NEET 2024 Cut off 500", // Update with actual cutoff
    image: "/images/collegedata/prakash-institute-college.jpeg", // Update the image link as needed
    link: "/prakash-institute-college",
  },
  {
    name: "Vedantaa Institute of Medical Sciences and Research Centre",
    location: "Maharashtra",
    category: "MBBS",
    fees: "₹1,30,000", // Update with actual fee
    deadline: "01 Apr - 30 Apr 2024", // Update as needed
    rating: "4.5/5", // Update with actual rating
    ranking: "#19 Medical College in Maharashtra 2024", // Update with actual ranking
    cutoff: "NEET 2024 Cut off 525", // Update with actual cutoff
    image: "/images/collegedata/vedantaa-institute-college.jpeg", // Update the image link as needed
    link: "/vedantaa-institute-college",
  },
  {
    name: "Bharatratna Atalbihari Vajpayee Medical College & Kamla Nehru Hospital, Pune",
    location: "Maharashtra",
    category: "MBBS",
    fees: "₹1,50,000", // Update with actual fee
    deadline: "01 Apr - 30 Apr 2024", // Update as needed
    rating: "5/5", // Update with actual rating
    ranking: "#5 Medical College in Maharashtra 2024", // Update with actual ranking
    cutoff: "NEET 2024 Cut off 600", // Update with actual cutoff
    image: "/images/collegedata/atal-bihari-vajpayee-college.jpeg", // Update the image link as needed
    link: "/atal-bihari-vajpayee-college",
  },
  {
    name: "Parbhani Medical College, RP Hospital & Research Institute",
    location: "Maharashtra",
    category: "MBBS",
    fees: "₹1,00,000", // Update with actual fee
    deadline: "01 Apr - 30 Apr 2024", // Update as needed
    rating: "4/5", // Update with actual rating
    ranking: "#23 Medical College in Maharashtra 2024", // Update with actual ranking
    cutoff: "NEET 2024 Cut off 470", // Update with actual cutoff
    image: "/images/collegedata/parbhani-medical-college.jpeg", // Update the image link as needed
    link: "/parbhani-medical-college",
  },
  {
    name: "Dr Rajendra Gode Medical College",
    location: "Maharashtra",
    category: "MBBS",
    fees: "₹1,05,000", // Update with actual fee
    deadline: "01 Apr - 30 Apr 2024", // Update as needed
    rating: "4/5", // Update with actual rating
    ranking: "#21 Medical College in Maharashtra 2024", // Update with actual ranking
    cutoff: "NEET 2024 Cut off 480", // Update with actual cutoff
    image: "/images/collegedata/dr-rajendra-gode-college.jpeg", // Update the image link as needed
    link: "/dr-rajendra-gode-college",
  },
  {
    name: "ACPM Medical College",
    location: "Maharashtra",
    category: "MBBS",
    fees: "₹1,10,000", // Update with actual fee
    deadline: "01 Apr - 30 Apr 2024", // Update as needed
    rating: "4/5", // Update with actual rating
    ranking: "#25 Medical College in Maharashtra 2024", // Update with actual ranking
    cutoff: "NEET 2024 Cut off 460", // Update with actual cutoff
    image: "/images/collegedata/acpm-medical-college.jpeg", // Update the image link as needed
    link: "/acpm-medical-college",
  },
  {
    name: "IIMSR Medical College (Muslim Minority)",
    location: "Maharashtra",
    category: "MBBS",
    fees: "₹1,00,000", // Update with actual fee
    deadline: "01 Apr - 30 Apr 2024", // Update as needed
    rating: "4/5", // Update with actual rating
    ranking: "#24 Medical College in Maharashtra 2024", // Update with actual ranking
    cutoff: "NEET 2024 Cut off 475", // Update with actual cutoff
    image: "/images/collegedata/iimsr-medical-college.jpeg", // Update the image link as needed
    link: "/iimsr-medical-college",
  },
  {
    name: "K J Somaiya Medical College",
    location: "Maharashtra",
    category: "MBBS",
    fees: "₹1,25,000", // Update with actual fee
    deadline: "01 Apr - 30 Apr 2024", // Update as needed
    rating: "4.5/5", // Update with actual rating
    ranking: "#11 Medical College in Maharashtra 2024", // Update with actual ranking
    cutoff: "NEET 2024 Cut off 535", // Update with actual cutoff
    image: "/images/collegedata/kj-somaiya-medical-college.jpeg", // Update the image link as needed
    link: "/kj-somaiya-medical-college",
  },
  {
    name: "AMALA Institute of Medical Sciences",
    location: "Kerala",
    category: "MBBS",
    fees: "₹1,00,000", // Update with actual fee
    deadline: "01 Apr - 30 Apr 2024", // Update as needed
    rating: "4/5", // Update with actual rating
    ranking: "#10 Medical College in Kerala 2024", // Update with actual ranking
    cutoff: "NEET 2024 Cut off 500", // Update with actual cutoff
    image: "/images/collegedata/amala-institute-medical-sciences.jpeg", // Update the image link as needed
    link: "/amala-institute-medical-sciences",
  },
  {
    name: "Jubilee Mission Medical College",
    location: "Kerala",
    category: "MBBS",
    fees: "₹1,10,000", // Update with actual fee
    deadline: "01 Apr - 30 Apr 2024", // Update as needed
    rating: "4.5/5", // Update with actual rating
    ranking: "#8 Medical College in Kerala 2024", // Update with actual ranking
    cutoff: "NEET 2024 Cut off 510", // Update with actual cutoff
    image: "/images/collegedata/jubilee-mission-medical-college.jpeg", // Update the image link as needed
    link: "/jubilee-mission-medical-college",
  },
  {
    name: "Malankara Orthodox Syrian Church Medical College",
    location: "Kerala",
    category: "MBBS",
    fees: "₹1,20,000", // Update with actual fee
    deadline: "01 Apr - 30 Apr 2024", // Update as needed
    rating: "4/5", // Update with actual rating
    ranking: "#12 Medical College in Kerala 2024", // Update with actual ranking
    cutoff: "NEET 2024 Cut off 520", // Update with actual cutoff
    image:
      "/images/collegedata/malankara-orthodox-syrian-church-medical-college.jpeg", // Update the image link as needed
    link: "/malankara-orthodox-syrian-church-medical-college",
  },
  {
    name: "Pushpagiri Institute of Medical Sciences",
    location: "Kerala",
    category: "MBBS",
    fees: "₹1,30,000", // Update with actual fee
    deadline: "01 Apr - 30 Apr 2024", // Update as needed
    rating: "4/5", // Update with actual rating
    ranking: "#14 Medical College in Kerala 2024", // Update with actual ranking
    cutoff: "NEET 2024 Cut off 530", // Update with actual cutoff
    image: "/images/collegedata/pushpagiri-institute-medical-sciences.jpeg", // Update the image link as needed
    link: "/pushpagiri-institute-medical-sciences",
  },
  {
    name: "MES Medical College",
    location: "Kerala",
    category: "MBBS",
    fees: "₹1,15,000", // Update with actual fee
    deadline: "01 Apr - 30 Apr 2024", // Update as needed
    rating: "4.5/5", // Update with actual rating
    ranking: "#11 Medical College in Kerala 2024", // Update with actual ranking
    cutoff: "NEET 2024 Cut off 505", // Update with actual cutoff
    image: "/images/collegedata/mes-medical-college.jpeg", // Update the image link as needed
    link: "/mes-medical-college",
  },
  {
    name: "Malabar Medical College Hospital and Research Centre",
    location: "Kerala",
    category: "MBBS",
    fees: "₹1,20,000", // Update with actual fee
    deadline: "01 Apr - 30 Apr 2024", // Update as needed
    rating: "4/5", // Update with actual rating
    ranking: "#16 Medical College in Kerala 2024", // Update with actual ranking
    cutoff: "NEET 2024 Cut off 495", // Update with actual cutoff
    image: "/images/collegedata/malabar-medical-college.jpeg", // Update the image link as needed
    link: "/malabar-medical-college",
  },
  {
    name: "Sree Uthradom Thirunal Academy of Medical Sciences",
    location: "Kerala",
    category: "MBBS",
    fees: "₹1,30,000", // Update with actual fee
    deadline: "01 Apr - 30 Apr 2024", // Update as needed
    rating: "4/5", // Update with actual rating
    ranking: "#13 Medical College in Kerala 2024", // Update with actual ranking
    cutoff: "NEET 2024 Cut off 515", // Update with actual cutoff
    image:
      "/images/collegedata/sree-uthradom-thirunal-academy-medical-sciences.jpeg", // Update the image link as needed
    link: "/sree-uthradom-thirunal-academy-medical-sciences",
  },
  {
    name: "Sree Narayana Institute of Medical Sciences",
    location: "Kerala",
    category: "MBBS",
    fees: "₹1,10,000", // Update with actual fee
    deadline: "01 Apr - 30 Apr 2024", // Update as needed
    rating: "4.5/5", // Update with actual rating
    ranking: "#9 Medical College in Kerala 2024", // Update with actual ranking
    cutoff: "NEET 2024 Cut off 525", // Update with actual cutoff
    image: "/images/collegedata/sree-narayana-institute-medical-sciences.jpeg", // Update the image link as needed
    link: "/sree-narayana-institute-medical-sciences",
  },
  {
    name: "Sree Gokulam Medical College and Research Foundation",
    location: "Kerala",
    category: "MBBS",
    fees: "₹1,25,000", // Update with actual fee
    deadline: "01 Apr - 30 Apr 2024", // Update as needed
    rating: "4/5", // Update with actual rating
    ranking: "#15 Medical College in Kerala 2024", // Update with actual ranking
    cutoff: "NEET 2024 Cut off 510", // Update with actual cutoff
    image: "/images/collegedata/sree-gokulam-medical-college.jpeg", // Update the image link as needed
    link: "/sree-gokulam-medical-college",
  },
  {
    name: "Mount Zion Medical College",
    location: "Kerala",
    category: "MBBS",
    fees: "₹1,00,000", // Update with actual fee
    deadline: "01 Apr - 30 Apr 2024", // Update as needed
    rating: "4/5", // Update with actual rating
    ranking: "#17 Medical College in Kerala 2024", // Update with actual ranking
    cutoff: "NEET 2024 Cut off 480", // Update with actual cutoff
    image: "/images/collegedata/mount-zion-medical-college.jpeg", // Update the image link as needed
    link: "/mount-zion-medical-college",
  },
  {
    name: "PK Das Institute of Medical Sciences",
    location: "Kerala",
    category: "MBBS",
    fees: "₹1,15,000", // Update with actual fee
    deadline: "01 Apr - 30 Apr 2024", // Update as needed
    rating: "4/5", // Update with actual rating
    ranking: "#18 Medical College in Kerala 2024", // Update with actual ranking
    cutoff: "NEET 2024 Cut off 490", // Update with actual cutoff
    image: "/images/collegedata/pk-das-institute-medical-sciences.jpeg", // Update the image link as needed
    link: "/pk-das-institute-medical-sciences",
  },
  {
    name: "KMCT Medical College",
    location: "Kerala",
    category: "MBBS",
    fees: "₹1,25,000", // Update with actual fee
    deadline: "01 Apr - 30 Apr 2024", // Update as needed
    rating: "4/5", // Update with actual rating
    ranking: "#20 Medical College in Kerala 2024", // Update with actual ranking
    cutoff: "NEET 2024 Cut off 475", // Update with actual cutoff
    image: "/images/collegedata/kmct-medical-college.jpeg", // Update the image link as needed
    link: "/kmct-medical-college",
  },
  {
    name: "Travancore Medical College",
    location: "Kerala",
    category: "MBBS",
    fees: "₹1,30,000", // Update with actual fee
    deadline: "01 Apr - 30 Apr 2024", // Update as needed
    rating: "4.5/5", // Update with actual rating
    ranking: "#19 Medical College in Kerala 2024", // Update with actual ranking
    cutoff: "NEET 2024 Cut off 525", // Update with actual cutoff
    image: "/images/collegedata/travancore-medical-college.jpeg", // Update the image link as needed
    link: "/travancore-medical-college",
  },
  {
    name: "Wayanad Dr. Moopen's Medical College",
    location: "Kerala",
    category: "MBBS",
    fees: "₹1,00,000", // Update with actual fee
    deadline: "01 Apr - 30 Apr 2024", // Update as needed
    rating: "4/5", // Update with actual rating
    ranking: "#22 Medical College in Kerala 2024", // Update with actual ranking
    cutoff: "NEET 2024 Cut off 460", // Update with actual cutoff
    image: "/images/collegedata/wayanad-dr-moopens-medical-college.jpeg", // Update the image link as needed
    link: "/wayanad-dr-moopens-medical-college",
  },
  {
    name: "Azeezia Institute of Medical Sciences and Research",
    location: "Kerala",
    category: "MBBS",
    fees: "₹1,10,000", // Update with actual fee
    deadline: "01 Apr - 30 Apr 2024", // Update as needed
    rating: "4/5", // Update with actual rating
    ranking: "#21 Medical College in Kerala 2024", // Update with actual ranking
    cutoff: "NEET 2024 Cut off 475", // Update with actual cutoff
    image: "/images/collegedata/azeezia-institute-medical-colleges.jpeg", // Update the image link as needed
    link: "/azeezia-institute-medical-colleges",
  },
  {
    name: "Dr. Somervell Memorial CSI Medical College",
    location: "Thiruvananthapuram, Kerala",
    category: "MBBS",
    fees: "₹1,05,000", // Update with actual fee
    deadline: "01 Apr - 30 Apr 2024", // Update as needed
    rating: "4.5/5", // Update with actual rating
    ranking: "#23 Medical College in Kerala 2024", // Update with actual ranking
    cutoff: "NEET 2024 Cut off 450", // Update with actual cutoff
    image: "/images/collegedata/somervell-memorial-csi-medical-college.jpeg", // Update the image link as needed
    link: "/somervell-memorial-csi-medical-college",
  },
  {
    name: "Karuna Medical College",
    location: "Palakkad, Kerala",
    category: "MBBS",
    fees: "₹1,20,000", // Update with actual fee
    deadline: "01 Apr - 30 Apr 2024", // Update as needed
    rating: "4/5", // Update with actual rating
    ranking: "#24 Medical College in Kerala 2024", // Update with actual ranking
    cutoff: "NEET 2024 Cut off 460", // Update with actual cutoff
    image: "/images/collegedata/karuna-medical-college.jpeg", // Update the image link as needed
    link: "/karuna-medical-college",
  },
  {
    name: "Al Azhar Medical College and Super Speciality Hospital",
    location: "Kerala",
    category: "MBBS",
    fees: "₹1,25,000", // Update with actual fee
    deadline: "01 Apr - 30 Apr 2024", // Update as needed
    rating: "4/5", // Update with actual rating
    ranking: "#25 Medical College in Kerala 2024", // Update with actual ranking
    cutoff: "NEET 2024 Cut off 475", // Update with actual cutoff
    image: "/images/collegedata/al-azhar-medical-college.jpeg", // Update the image link as needed
    link: "/al-azhar-medical-college",
  },
  {
    name: "Maulana Azad Institute of Dental Sciences",
    location: "New Delhi",
    categories: [
      "BDS",
      "MDS",
      "Dental Hygiene",
      "Oral Surgery",
      "Public Health Dentistry",
    ],
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
    image: "/images/collegedata/aiims-delhi.png",
    link: "/aiims-delhi",
  },
  // Karnataka Colleges Start
  {
    name: "A.J. Institute of Medical Sciences",
    location: "Karnataka",
    category: "MBBS",
    fees: "₹10,00,000",
    deadline: "01 Apr - 30 Apr 2024",
    rating: "4.3/5",
    ranking: "#15 in Karnataka",
    cutoff: "NEET 2024 Cut off 470",
    image: "/images/collegedata/ajims.jpeg",
    link: "/aj-institute-mangalore",
  },
  {
    name: "Adichunchanagiri Institute of Medical Sciences",
    location: "Karnataka",
    category: "MBBS",
    fees: "₹9,50,000",
    deadline: "01 Apr - 30 Apr 2024",
    rating: "4.1/5",
    ranking: "#17 in Karnataka",
    cutoff: "NEET 2024 Cut off 455",
    image: "/images/collegedata/adichunchanagiri.jpeg",
    link: "/adichunchanagiri-institute",
  },
  {
    name: "Akash Institute of Medical Sciences and Research Centre",
    location: "Karnataka",
    category: "MBBS",
    fees: "₹9,80,000",
    deadline: "01 Apr - 30 Apr 2024",
    rating: "4.2/5",
    ranking: "#18 in Karnataka",
    cutoff: "NEET 2024 Cut off 460",
    image: "/images/collegedata/akash-medical.jpeg",
    link: "/akash-institute-bangalore",
  },
  {
    name: "Al-Ameen Medical College",
    location: "Karnataka",
    category: "MBBS",
    fees: "₹9,20,000",
    deadline: "01 Apr - 30 Apr 2024",
    rating: "4.0/5",
    ranking: "#20 in Karnataka",
    cutoff: "NEET 2024 Cut off 440",
    image: "/images/collegedata/al-ameen.jpeg",
    link: "/al-ameen-vijayapur",
  },
  {
    name: "BGS Global Institute of Medical Sciences",
    location: "Karnataka",
    category: "MBBS",
    fees: "₹10,20,000",
    deadline: "01 Apr - 30 Apr 2024",
    rating: "4.4/5",
    ranking: "#14 in Karnataka",
    cutoff: "NEET 2024 Cut off 480",
    image: "/images/collegedata/bgs-global.jpeg",
    link: "/bgs-global-bangalore",
  },
  {
    name: "Dr. B.R. Ambedkar Medical College",
    location: "Karnataka",
    category: "MBBS",
    fees: "₹10,00,000",
    deadline: "01 Apr - 30 Apr 2024",
    rating: "4.3/5",
    ranking: "#13 in Karnataka",
    cutoff: "NEET 2024 Cut off 475",
    image: "/images/collegedata/ambedkar.jpeg",
    link: "/br-ambedkar-bangalore",
  },
  {
    name: "East Point College of Medical Sciences and Research Center",
    location: "Karnataka",
    category: "MBBS",
    fees: "₹9,70,000",
    deadline: "01 Apr - 30 Apr 2024",
    rating: "4.1/5",
    ranking: "#16 in Karnataka",
    cutoff: "NEET 2024 Cut off 465",
    image: "/images/collegedata/east-point.jpeg",
    link: "/east-point-bangalore",
  },
  {
    name: "Father Muller Institute of Medical Education & Research",
    location: "Karnataka",
    category: "MBBS",
    fees: "₹10,50,000",
    deadline: "01 Apr - 30 Apr 2024",
    rating: "4.5/5",
    ranking: "#12 in Karnataka",
    cutoff: "NEET 2024 Cut off 490",
    image: "/images/collegedata/father-muller.jpeg",
    link: "/father-muller-mangalore",
  },
  {
    name: "Jaya Jagadguru Murugharajendra Medical College",
    location: "Karnataka",
    category: "MBBS",
    fees: "₹9,60,000",
    deadline: "01 Apr - 30 Apr 2024",
    rating: "4.2/5",
    ranking: "#21 in Karnataka",
    cutoff: "NEET 2024 Cut off 455",
    image: "/images/collegedata/jjm-davangere.jpeg",
    link: "/jjm-davangere",
  },
  {
    name: "K.Venkataramana Gowda Medical College and Hospital",
    location: "Karnataka",
    category: "MBBS",
    fees: "₹9,30,000",
    deadline: "01 Apr - 30 Apr 2024",
    rating: "4.0/5",
    ranking: "#23 in Karnataka",
    cutoff: "NEET 2024 Cut off 440",
    image: "/images/collegedata/kvg-sullia.jpeg",
    link: "/kvg-sullia",
  },
  {
    name: "Kanachur Institute of Medical Sciences and Research Centre",
    location: "Karnataka",
    category: "MBBS",
    fees: "₹9,80,000",
    deadline: "01 Apr - 30 Apr 2024",
    rating: "4.1/5",
    ranking: "#22 in Karnataka",
    cutoff: "NEET 2024 Cut off 445",
    image: "/images/collegedata/kanachur.jpeg",
    link: "/kanachur-mangalore",
  },
  {
    name: "Kempegowda Institute of Medical Sciences",
    location: "Karnataka",
    category: "MBBS",
    fees: "₹10,20,000",
    deadline: "01 Apr - 30 Apr 2024",
    rating: "4.4/5",
    ranking: "#10 in Karnataka",
    cutoff: "NEET 2024 Cut off 500",
    image: "/images/collegedata/kempegowda.jpeg",
    link: "/kempegowda-bangalore",
  },
  {
    name: "Khaja Bande Navaz Institute Of Medical Sciences",
    location: "Karnataka",
    category: "MBBS",
    fees: "₹9,20,000",
    deadline: "01 Apr - 30 Apr 2024",
    rating: "3.9/5",
    ranking: "#25 in Karnataka",
    cutoff: "NEET 2024 Cut off 430",
    image: "/images/collegedata/khaja-navaz.jpeg",
    link: "/khaja-bande-navaz-gulbarga",
  },
  {
    name: "M.S. Ramaiah Medical College",
    location: "Karnataka",
    category: "MBBS",
    fees: "₹10,50,000",
    deadline: "01 Apr - 30 Apr 2024",
    rating: "4.6/5",
    ranking: "#6 in Karnataka",
    cutoff: "NEET 2024 Cut off 510",
    image: "/images/collegedata/msramaiah.jpeg",
    link: "/ms-ramaiah-bangalore",
  },
  {
    name: "M.V.J. Medical College and Research Hospital",
    location: "Karnataka",
    category: "MBBS",
    fees: "₹9,70,000",
    deadline: "01 Apr - 30 Apr 2024",
    rating: "4.1/5",
    ranking: "#19 in Karnataka",
    cutoff: "NEET 2024 Cut off 465",
    image: "/images/collegedata/mvj-bangalore.jpeg",
    link: "/mvj-bangalore",
  },
  {
    name: "Mahadevappa Rampure Medical College",
    location: "Karnataka",
    category: "MBBS",
    fees: "₹9,60,000",
    deadline: "01 Apr - 30 Apr 2024",
    rating: "4.0/5",
    ranking: "#24 in Karnataka",
    cutoff: "NEET 2024 Cut off 440",
    image: "/images/collegedata/mahadevappa-rampure.jpeg",
    link: "/mahadevappa-kalaburgi",
  },
  {
    name: "Navodaya Medical College",
    location: "Karnataka",
    category: "MBBS",
    fees: "₹9,50,000",
    deadline: "01 Apr - 30 Apr 2024",
    rating: "4.1/5",
    ranking: "#20 in Karnataka",
    cutoff: "NEET 2024 Cut off 455",
    image: "/images/collegedata/navodaya-raichur.jpeg",
    link: "/navodaya-raichur",
  },
  {
    name: "S. Nijalingappa Medical College and Research Centre",
    location: "Karnataka",
    category: "MBBS",
    fees: "₹9,80,000",
    deadline: "01 Apr - 30 Apr 2024",
    rating: "4.2/5",
    ranking: "#18 in Karnataka",
    cutoff: "NEET 2024 Cut off 460",
    image: "/images/collegedata/nijalingappa-bagalkot.jpeg",
    link: "/nijalingappa-bagalkot",
  },
  {
    name: "Sapthagiri Institute of Medical Sciences",
    location: "Karnataka",
    category: "MBBS",
    fees: "₹10,00,000",
    deadline: "01 Apr - 30 Apr 2024",
    rating: "4.3/5",
    ranking: "#11 in Karnataka",
    cutoff: "NEET 2024 Cut off 470",
    image: "/images/collegedata/sapthagiri.jpeg",
    link: "/sapthagiri-bangalore",
  },
  {
    name: "SDM College of Medical Sciences and Hospital",
    location: "Karnataka",
    category: "MBBS",
    fees: "₹10,50,000",
    deadline: "01 Apr - 30 Apr 2024",
    rating: "4.5/5",
    ranking: "#9 in Karnataka",
    cutoff: "NEET 2024 Cut off 490",
    image: "/images/collegedata/sdm-dharwad.jpeg",
    link: "/sdm-dharwad",
  },
  {
    name: "Shridevi Institute of Medical Sciences and Research Hospital",
    location: "Karnataka",
    category: "MBBS",
    fees: "₹9,40,000",
    deadline: "01 Apr - 30 Apr 2024",
    rating: "4.0/5",
    ranking: "#22 in Karnataka",
    cutoff: "NEET 2024 Cut off 445",
    image: "/images/collegedata/shridevi-tumkur.jpeg",
    link: "/shridevi-tumkur",
  },
  {
    name: "Shymanuru Shivashankarappa Institute Of Medical Sciences",
    location: "Karnataka",
    category: "MBBS",
    fees: "₹9,60,000",
    deadline: "01 Apr - 30 Apr 2024",
    rating: "4.2/5",
    ranking: "#20 in Karnataka",
    cutoff: "NEET 2024 Cut off 455",
    image: "/images/collegedata/shymanuru-davangere.jpeg",
    link: "/shymanuru-davangere",
  },
  {
    name: "Sri Basaveshwara Medical College and Hospital",
    location: "Karnataka",
    category: "MBBS",
    fees: "₹9,40,000",
    deadline: "01 Apr - 30 Apr 2024",
    rating: "4.0/5",
    ranking: "#21 in Karnataka",
    cutoff: "NEET 2024 Cut off 450",
    image: "/images/collegedata/basaveshwara-chitradurga.jpeg",
    link: "/basaveshwara-chitradurga",
  },
  {
    name: "Srinivasa Institute of Medical Research Center",
    location: "Karnataka",
    category: "MBBS",
    fees: "₹9,80,000",
    deadline: "01 Apr - 30 Apr 2024",
    rating: "4.1/5",
    ranking: "#19 in Karnataka",
    cutoff: "NEET 2024 Cut off 460",
    image: "/images/collegedata/srinivasa-surathkal.jpeg",
    link: "/srinivasa-surathkal",
  },
  {
    name: "St John Medical College",
    location: "Karnataka",
    category: "MBBS",
    fees: "₹6,28,000",
    deadline: "01 Apr - 30 Apr 2024",
    rating: "4.9/5",
    ranking: "#3 in Karnataka",
    cutoff: "NEET 2024 Cut off 610",
    image: "/images/collegedata/st-johns.jpeg",
    link: "/st-johns-bangalore",
  },
  {
    name: "Subbaiah Institute of Medical Science",
    location: "Karnataka",
    category: "MBBS",
    fees: "₹9,50,000",
    deadline: "01 Apr - 30 Apr 2024",
    rating: "4.0/5",
    ranking: "#23 in Karnataka",
    cutoff: "NEET 2024 Cut off 445",
    image: "/images/collegedata/subbaiah-shimoga.jpeg",
    link: "/subbaiah-shimoga",
  },
  {
    name: "The Oxford Medical College Hospital and Research Center",
    location: "Karnataka",
    category: "MBBS",
    fees: "₹9,80,000",
    deadline: "01 Apr - 30 Apr 2024",
    rating: "4.1/5",
    ranking: "#17 in Karnataka",
    cutoff: "NEET 2024 Cut off 460",
    image: "/images/collegedata/oxford-bangalore.jpeg",
    link: "/oxford-bangalore",
  },
  {
    name: "Vydehi Institute of Medical Science and Research Centre",
    location: "Karnataka",
    category: "MBBS",
    fees: "₹10,40,000",
    deadline: "01 Apr - 30 Apr 2024",
    rating: "4.5/5",
    ranking: "#8 in Karnataka",
    cutoff: "NEET 2024 Cut off 495",
    image: "/images/collegedata/vydehi.jpeg",
    link: "/vydehi-bangalore",
  },
  {
    name: "Dr. Chandramma Dayananda Sagar Institute of Medical Education",
    location: "Karnataka",
    category: "MBBS",
    fees: "₹9,90,000",
    deadline: "01 Apr - 30 Apr 2024",
    rating: "4.2/5",
    ranking: "#15 in Karnataka",
    cutoff: "NEET 2024 Cut off 470",
    image: "/images/collegedata/chandramma-dayananda.jpeg",
    link: "/chandramma-dsi-bangalore",
  },
  {
    name: "GR Medical College and Research Center",
    location: "Karnataka",
    category: "MBBS",
    fees: "₹9,50,000",
    deadline: "01 Apr - 30 Apr 2024",
    rating: "4.0/5",
    ranking: "#22 in Karnataka",
    cutoff: "NEET 2024 Cut off 450",
    image: "/images/collegedata/gr-medical.jpeg",
    link: "/gr-medical-mangalore",
  },
  {
    name: "Siddaganga Medical College and Research Institute",
    location: "Karnataka",
    category: "MBBS",
    fees: "₹9,70,000",
    deadline: "01 Apr - 30 Apr 2024",
    rating: "4.1/5",
    ranking: "#20 in Karnataka",
    cutoff: "NEET 2024 Cut off 455",
    image: "/images/collegedata/siddaganga-tumakuru.jpeg",
    link: "/siddaganga-tumakuru",
  },
  {
    name: "SRI CHAMUNDESHWARI MEDICAL COLLEGE, HOSPITAL & RESEARCH INSTITUTE",
    location: "Karnataka",
    category: "MBBS",
    fees: "₹9,80,000",
    deadline: "01 Apr - 30 Apr 2024",
    rating: "4.0/5",
    ranking: "#23 in Karnataka",
    cutoff: "NEET 2024 Cut off 450",
    image: "/images/collegedata/sri-chamundeshwari.jpeg",
    link: "/sri-chamundeshwari-karnataka",
  },
];

const CollegeTable = () => {
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");
  const [category, setCategory] = useState("");

  // Get unique locations for the location filter
  const allLocations = [...new Set(colleges.map((c) => c.location))];

  // Get unique categories.
  // For each college, if it has 'categories' (an array) use it; else use the 'category' string.
  const categoriesInLocation = [
    ...new Set(
      location
        ? colleges
            .filter((c) => c.location === location)
            .flatMap((c) => (c.categories ? c.categories : [c.category]))
        : colleges.flatMap((c) => (c.categories ? c.categories : [c.category]))
    ),
  ];

  // Filtering logic: Check for search match,
  // and if a college has an array of categories, verify the chosen category is included.
  const filtered = colleges.filter((c) => {
    const nameMatch = c.name.toLowerCase().includes(search.toLowerCase());
    const locationMatch = location === "" || c.location === location;
    // Check category:
    const categoryMatch =
      category === "" ||
      (c.categories
        ? c.categories.includes(category)
        : c.category === category);
    return nameMatch && locationMatch && categoryMatch;
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
              {/* <th className="py-3 px-4 font-semibold">Ranking</th> */}
              <th className="py-3 px-4 font-semibold">Cutoff</th>
              <th className="py-3 px-4 font-semibold">Application Deadline</th>
            </tr>
          </thead>
          <tbody className="text-gray-800 text-sm">
            {filtered.map((college, i) => (
              <tr key={i} className="border-t hover:bg-gray-50">
                <td className="py-4 px-4 flex items-center gap-3">
                  {/* <img
                    src={college.image}
                    alt={college.name}
                    className="w-10 h-10 object-contain"
                    onError={(e) =>
                      (e.currentTarget.src = "https://via.placeholder.com/40")
                    }
                  /> */}
                  <div>
                    <div className="font-medium hover:underline">
                      {college.name}
                    </div>

                    <div className="text-yellow-500 text-sm">
                      ⭐ {college.rating}
                    </div>
                  </div>
                </td>
                <td className="py-4 px-4">{college.location}</td>
                {/* <td className="py-4 px-4">{college.ranking}</td> */}
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
