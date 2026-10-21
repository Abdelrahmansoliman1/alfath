export const aboutUsPage = {
  title: "About Us",
};

// Management team shown on the About Us page.
// `image`: optional (put photos in /public/team/); initials are shown when it's empty.
// `linkedin`: optional; the icon is hidden when it's empty.
// `bio`: shown in the popup when the card is clicked. Use one string per paragraph.
export const managementTeam: {
  title: string;
  subtitle: string;
  members: {
    name: string;
    position: string;
    image?: string;
    linkedin?: string;
    bio?: string[];
  }[];
} = {
  title: "Our Management Team",
  subtitle:
    "Experienced leaders steering Al-Fath with expertise, integrity, and a client-first vision.",
  members: [
    {
      name: "Mohamed Ahmed Salama",
      position: "Group Chairman",
      image: "/team/photo-1.jpg",
      linkedin: "",
      bio: [
        "22+ Years of Professional Experience",
        "A distinguished business and institutional leader with deep expertise in Egypt's maritime, logistics and stevedoring sector. He founded Al Fath Group of Companies in 2004 and has served as its Chairman since. He also chairs Al Fath Stevedoring & Maritime Services Co., leading strategic direction across port operations, cargo and container handling, warehousing and grain storage. In 2025, he was elected President of Al-Ittihad Alexandria Club for the 2025–2029 term after serving as Acting President. He also serves as Assistant Secretary of Mostaqbal Watan Party in Alexandria and sits on the Board of Directors of the Faculty of Economic Studies and Political Science at Alexandria University."
      ],
    },
    {
      name: "Ahmed Hassan",
      position: "Group General Manager",
      image: "/team/photo-2.jpg",
      linkedin: "",
      bio: [
        "25 years of leadership experience in the shipping and logistics industry",
        "he served as General Manager of Ocean Express from 2000 to 2016, followed by General Manager of Al Fath Group from 2016 to 2026. Since 2024, he has served as CEO of Edisco, leading strategic development, business growth, and operational excellence."
      ],
    },
    {
      name: "Mansour El Dawy",
      position: "Chief Executive Officer and Founder",
      image: "/team/photo-3.jpg",
      linkedin: "",
      bio: [
        "16+ Years of Professional Experience",
        "An experienced maritime and logistics professional with a strong background in shipping operations and executive leadership. Served at Ocean Express from 2010 to 2022, followed by the role of Executive Director at Al-Fath Stevedoring from 2022 to 2024. Since 2024, he has served as CEO of AL Fath for Shipping Agencies, leading strategic development, operational excellence, and business growth"
      ],
    },
    {
      name: "Moataz El Dawy",
      position: "Managing Director and Founder",
      image: "/team/photo-4.jpg",
      linkedin: "",
      bio: [
        "15 years of experience in the shipping and maritime industry",
        "he has held key positions in management, sales, marketing, and stevedoring operations. After serving at Petroment, Ocean Express, and Al Fath Stevedoring, he founded Al Fath Shipping Agency in 2024, where he currently serves as Managing Director, leading the company’s strategic direction and business development."
      ],
    },
    {
      name: "Mahmoud El Dawy",
      position: "Managing Director and Founder",
      image: "/team/photo-5.jpg",
      linkedin: "",
      bio: [
        "10 Years of Experience in Shipping and Logistics",
        "Bringing a decade of industry experience, with a career at Ocean Express Shipping, the Egyptian agent for Messina Line, from 2016 to 2024. Since 2024, serving as Founder and Managing Director of Al-Fath for Shipping Agencies, leading business development, commercial strategy, and maritime operations."
      ],
    },
    {
      name: "Hossam Wagdy",
      position: "Executive Director",
      image: "/team/photo-6.jpg",
      linkedin: "",
      bio: [
        "16 years of experience in maritime transport and logistics, gained at Ocean Express, the official agent for Messina Line. His expertise spans import and export customer service, maritime claims management, and IT and logistics systems"
      ],
    },
    {
      name: "Mohamed Ali",
      position: "Commercial & Trade Manager",
      image: "/team/photo-7.jpg",
      linkedin: "",
      bio: [
        "28 Years of Experience in the Shipping Industry",
        "Over 28 years of experience in the shipping and maritime industry, holding key commercial and agency roles with leading shipping companies and lines, including Messina Line, NYK Line, Hapag-Lloyd, and Tarros Line. Served as Commercial Manager at Ocean Express Cargo Services (2009–2018) and Med Egypt, and led commercial operations at GMAC from its establishment until 2024, specializing in NVOCC agency services, shipping operations, and commercial management."
      ],
    },
    {
      name: "Walid Galal",
      position: "HR Manager",
      image: "/team/photo-8.jpg",
      linkedin: "",
      bio: [
        "17 years of professional experience in business administration, public relations, compliance and control, quality management, and human resources management, gained through working in Egypt and the Kingdom of Saudi Arabia within major corporate groups operating across diverse industries and business sectors."
      ],
    },
   
  ],
};

export const letsFind = {
  image: "/services/about_us.jpg",
  listText: [
    "Established in 2024, Al-Fath for Shipping Agencies has swiftly emerged as a leading force in the maritime and logistics industry.",

    "With a commitment to excellence and efficiency, the company provides top-tier shipping, stevedoring, warehousing, and storage solutions, ensuring seamless operations for businesses worldwide.",

    "Backed by a highly experienced team, state-of-the-art facilities, and a strategic vision for growth, Al-Fath aims to redefine industry standards, offering innovative and reliable logistics solutions tailored to meet the evolving needs of global trade.",
  ],
};

export const ourMission = {
  title: "Our Mission",
  desc: `At Al-Fath for Shipping Agencies, our mission is to deliver efficient,
        reliable, and cost-effective shipping solutions—driven by a deep
        commitment to our clients’ best interests. We pride ourselves on
        providing a level of service that goes beyond logistics, fostering
        trusted partnerships through personalized support and expert execution.`,
  subtitle: "We are dedicated to:",
  ourMissionCommitments: [
    "Optimizing cargo handling with speed, accuracy, and care.",
    "Providing flexible, tailored solutions for global trade.",
    "Building lasting relationships based on trust, transparency, and communication.",
    "Leveraging innovation to enhance operational efficiency and visibility.",
    "Upholding the highest standards of safety, compliance, and sustainability.",
  ],
  desc2: `With a skilled team, modern infrastructure, and a strong global network,
        Al-Fath stands apart as a shipping agency that puts clients
        first—delivering not only results, but peace of mind.`,
};

export const ourVision = {
  title: "Our Vision",
  desc: `To be the leading global shipping agency, recognized for our
        unwavering commitment to client satisfaction, operational excellence,
        and the highest standards of integrity and safety.`,
  points: [
    "To become the most trusted and forward-thinking shipping agency, recognized globally for our superior service, unwavering integrity, and steadfast commitment to our clients’ success.",
    "We strive to lead the future of logistics by integrating innovation, personalized support, and operational excellence—simplifying global trade and delivering lasting value.",
  ],
};
