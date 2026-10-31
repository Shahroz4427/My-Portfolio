export const EMAIL = "shah.shahrozkhanshah@gmail.com";
export const PHONES = ["+92 342 2987200", "+92 337 2093348"];
export const GITHUB = "https://github.com/Shahroz4427?tab=repositories";
export const LINKEDIN = "https://www.linkedin.com/in/shahroz-khan-66237927a/";

// Screenshots: any image placed in src/assets/projects/ is picked up by filename.
const shots = import.meta.glob("./assets/projects/*.{png,jpg,jpeg,webp}", { eager: true, import: "default" });
const img = (file) => shots[`./assets/projects/${file}`];

/*
 * Fill in desc / stack / demo / source for each project below.
 * Example:  desc: "Car rental platform with booking and admin dashboard.",
 *           stack: ["Laravel", "Vue.js", "MySQL"], demo: "https://...", source: "https://github.com/..."
 */
export const PROJECTS = [
  { id: "4ace_tech", title: "4 Ace Technologies",desc:"Company website for a custom software and app development firm.", file: "4AceTech.png" ,stack: ["Wordpress"],demo:"https://www.4acetech.com"},
  { id: "all4kids",desc:"Shopping site for children's consignment sale events.", title: "All4Kids", file: "All4Kids.png" ,stack: ["Laravel","React Js","Inertia Js"],demo:"https://all4kids.com"},
  { id: "exotic_car_admin",desc:"Cms and Crm platform for Exotic Cars and Exotic Services.", title: "Exotic Car Admin Panel", file: "ExoticCarAdminPanel.png",stack: ["Laravel"],demo:"https://admin.exoticcars.ae",source:"https://github.com/Shahroz4427/Exotic-Cars"},
  { id: "exotic_cars",desc:"Luxury and supercar dealership website with online inventory in Dubai.", title: "Exotic Cars", file: "ExoticCars.png" ,stack: ["Laravel"],demo:"https://exoticcars.ae",source:"https://github.com/Shahroz4427/Exotic-Cars"},
  { id: "exotic_service",desc:"Car servicing website with an appointment booking form.", title: "Exotic Service", file: "ExoticService.png",stack: ["Laravel"],demo:"https://services.exoticcars.ae",source:"https://github.com/Shahroz4427/Exotic-Services" },
  { id: "lmg_motors",desc:"Inventory and sales website for a Dubai luxury car showroom.", title: "LMG Motors", file: "LmgMotors.png" ,stack: ["Laravel"],demo:"https://lmgmotors.ae"},
  { id: "team_work_packages",desc:"Company website for a Karachi packaging and print house.", title: "TeamWork Packages", file: "TeamworkPackages.png",stack: ["Laravel"],demo:"https://www.teamworkpackages.com",source:"https://github.com/Shahroz4427/Teamwork-packages"},
  { id: "my_web_programmer",desc:"Agency website showcasing software development services and case studies.", title: "My Web Programmer", file: "MyWebProgrammer.png",stack: ["Laravel","React Js","Inertia Js"],demo:"https://mywebprogrammer.com",source:"https://github.com/Shahroz4427/My-Web-Programmer"},
  { id: "source", title: "Source",desc:"B2B trading platform for textiles, chemicals and polymers in Pakistan.", file: "Source.png" ,stack: ["Laravel"],demo:"https://source.com.pk",source:"https://github.com/Shahroz4427/Source"},
  { id: "fushion_fertility", title: "Fushion Fertility",desc:"Clinic website for a North West England fertility treatment provider.", file: "FushionFertility.png" ,stack: ["Laravel","Vue Js","Inertia Js"],demo:"",source:"https://github.com/Shahroz4427/Fushion-Fertility"},
  { id: "conflix",desc:"Legal case and client management platform supporting multiple companies.", title: "Conflix", file: "Conflix.png" ,stack: ["Laravel"],demo:"https://conflix.mwptesting.info",source:"https://github.com/Shahroz4427/Conflix"},
  { id: "spotto_car_rental",desc:"Car rental booking website for Spotto Car Rentals in Australia.", title: "Spotto Car Rental", file: "SpottoCarRental.png",stack: ["Core Php"],demo:"https://securebooking.spottocarrentals.com.au",source:"https://github.com/Shahroz4427/Rental-Car-Management"},

].map((p) => ({
  desc: "Short description of what this project does.",
  stack: [], // e.g. ["Laravel", "Vue.js", "MySQL"]
  demo: "",  // live URL
  source: "", // GitHub URL
  ...p,
  image: img(p.file),
}));

export const SKILLS = [
  ["Frontend", ["React.js", "Vue.js", "Inertia.js"]],
  ["Backend", ["Laravel", "PHP", "MySQL"]],
  ["Cross-platform", ["Flutter"]],
  ["Version control", ["GitHub", "Bitbucket"]],
];

export const JOBS = [
  { t: "PHP Developer", c: "4 Ace Technologies", d: "2025", b: [
    "Successfully delivered projects on schedule, consistently prioritizing high-quality output.",
    "Integrated client feedback to iteratively enhance the user experience.",
    "Collaborated closely with QA and deployment teams, as well as senior developers, to ensure smooth releases.",
    "Built and maintained backend features using PHP and MySQL to support evolving business requirements."] },
  { t: "Junior Fullstack Developer", c: "Xyberix Solutions (LLC)", d: "2023 – 2024", b: [
    "Optimized website performance and user experience through meticulous debugging.",
    "Diagnosed code issues, troubleshot technical challenges, and implemented robust solutions.",
    "Gained valuable technical expertise in web development.",
    "Assisted in creating responsive and user-friendly website designs."] },
];

export const EDU = [
  ["Advance Diploma in Software Engineering (ADSE)", "Aptech · 2017 – 2021"],
  ["Intermediate (Pre-Engineering)", "Govt. PECHS Education Foundation Science College, Karachi · 2013 – 2016"],
];
export const CERTS = [
  ["Front-End Web Development", "Aptech · 2023", "Advanced training in front-end development with React.js"],
  ["Application Development", "Aptech · 2023", "Specialized in cross-platform app development with Flutter"],
  ["Backend Development", "Omni Academy · 2022", "Focused on advanced web development with Laravel"],
];
