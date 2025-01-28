import HtmlIcon from "../../logo/tech-logo/html5-icon.png";
import CssIcon from "../../logo/tech-logo/css3-icon.png";
import JsIcon from "../../logo/tech-logo/js-icon.png";
import ReactIcon from "../../logo/tech-logo/react-icon.png";
import NextIcon from "../../logo/tech-logo/nextjs-icon.png";
import GithubIcon from "../../logo/tech-logo/github-icon.png";
import GitIcon from "../../logo/tech-logo/git_VCS-icon.png";
import NetifyIcon from "../../logo/tech-logo/netify-icon.png";
import ClipbordSS from "../../img/Projects Screenshots/Clipboard-ss.png";
import YTcloneSS from "../../img/Projects Screenshots/YT-Clone-ss.png";
import LoginSS from "../../img/Projects Screenshots/Login-Form-ss.png";
import PortSS from "../../img/Projects Screenshots/Resume-ss.png";
import MySQL from "../../logo/tech-logo/my_sql-icon.png";
import AmazonCloneSS from "../../img/Projects Screenshots/Amazon-Clone-ss.png";
import GestureSS from "../../img/Projects Screenshots/Gesture-ss.png";

/*-------------------------------------- */
/*-------------------------------------- */

// MY-DATA
const myData = [
  {
    myName: "Mrigyank Roy",
    occupation: "Competitive Programmer || Frontend Developer",
    description:
      "Aspiring Web Developer with a focus on front-end development, combined with a strong interest in competitive programming. Proficient in HTML, CSS, JavaScript, and ReactJS at a beginner level, with a passion for building responsive and user-friendly web interfaces. A Specialist on Codeforces and 3-star rated on CodeChef, I am dedicated to continuous learning, problem-solving, and refining my skills in both web development and programming.",
    email: "mrigyankroy@gmail.com",
    eHref: "mailto:mrigyankroy@gmail.com",
    phone: "+91-9153571010",
    pHref: "tel:9153571010",
    location: "Delhi, India",
    lHref:
      "https://www.google.com/maps/place/New+Delhi,+Delhi/@28.5272527,77.0441728,11z/data=!3m1!4b1!4m6!3m5!1s0x390cfd5b347eb62d:0x52c2b7494e204dce!8m2!3d28.6139298!4d77.2088282!16zL20vMGRsdjA?entry=ttu&g_ep=EgoyMDI1MDEyMi4wIKXMDSoASAFQAw%3D%3D",
  },
];

// MY-EDUCATION-DATA
const myEducationData = [
  {
    instituteName: "Delhi Technological University (Formely DCE)",
    location: "New Delhi, Delhi",
    stream: "B.Tech in Information Technology",
    year: "2022-2026",
    status: "Ongoing",
    description:
      "Currently pursuing a B.Tech in Information Technology at Delhi Technological University (Formely DCE), expected to graduate in 2026. I have a strong interest in competitive programming, problem-solving, and web development, continually striving to build efficient and impactful solutions.",
  },
  {
    instituteName: "Bal Bhavan Public School | CBSE",
    location: "New Delhi, Delhi",
    stream: "XII (Grade : 84%)",
    year: "2022",
    status: "Completed",
    description:
      "Completed 12th grade from Bal Bhavan Public School, specializing in PCM with Computer Science. I gained a strong foundation in core subjects and developed analytical and problem-solving skills. This phase played a key role in nurturing my interest in technology and programming.",
  },
  {
    instituteName: "Bal Bhavan Public School | CBSE",
    location: "New Delhi, Delhi",
    stream: "X (Grade : 92.2%)",
    year: "2020",
    status: "Completed",
    description:
      "Completed 10th grade from Bal Bhavan Public School with a strong academic record. This phase laid a solid foundation for advanced studies, fueling my curiosity in mathematics and science and inspiring me to pursue a career in engineering.",
  },
];

// MY PROJECTS DATA
const myProjectsData = [
  {
    proImg: PortSS,
    proAlt: "My portfolio website screenshot",
    proTag: "Portfolio",
    proDesc: "Created this portfolio using React js.",
    proVisit: "",
    proCode: "https://github.com/Mrigyank-Roy/My-Portfolio/tree/master",
  },
  {
    proImg: ClipbordSS,
    proTag: "Clipboard Extension",
    proAlt: "Clipboard Extension Screenshot",
    proDesc: "Live Clipboard Extension built using HTML, CSS and Javascript",
    proVisit: "https://microsoftedge.microsoft.com/addons/detail/clipboard/iepgngkiknjnhgfncpbobhlimhkonphl",
    proCode: "https://github.com/Mrigyank-Roy/Clipboard",
  },
  {
    proImg: AmazonCloneSS,
    proAlt: "Amazon Clone website screenshot",
    proTag: "Amazone Clone",
    proDesc: "Amazone Clone project with variuos features build using Javascript.",
    proVisit: "https://amazon-clone-mrigyank.netlify.app/",
    proCode: "https://github.com/Mrigyank-Roy/E-Commerce",
  },
  {
    proImg: GestureSS,
    proAlt: "Gesture Based Volume Control screenshot",
    proTag: "Gesture Based Volume Control",
    proDesc: "The Project uses Python and OpenCV to control volume through hand gestures. By tracking hand movements via a webcam.",
    proVisit: "https://github.com/Mrigyank-Roy/Gesture-Based-Volume-Control",
    proCode: "https://github.com/Mrigyank-Roy/Gesture-Based-Volume-Control",
  },
];

// ICONS-DATA
const skillsData = [
  {
    $name: "HTML",
    imgSrc: HtmlIcon,
    altText: "Html icon",
  },
  {
    $name: "CSS",
    imgSrc: CssIcon,
    altText: "Css icon",
  },
  {
    $name: "Javascript",
    imgSrc: JsIcon,
    altText: "Javascript icon",
  },
  {
    $name: "React",
    imgSrc: ReactIcon,
    altText: "React icon",
  },
  {
    $name: "Next JS",
    imgSrc: NextIcon,
    altText: "Next JS icon",
    filter: true,
  },
  {
    $name: "Github",
    imgSrc: GithubIcon,
    altText: "Github icon",
    filter: true,
  },
  // {
  //   $name: "Git VCS",
  //   imgSrc: GitIcon,
  //   altText: "Git VCS icon",
  // },
  {
    $name: "My-SQL",
    imgSrc: MySQL,
    altText: "My SQL icon",
  },
  {
    $name: "Netify",
    imgSrc: NetifyIcon,
    altText: "Netify icon",
  },
];

// TYPING DATA
const typingConfig = [
  {
    texts: ["Competitive Programming", "Frontend Development", "Web Development"],
    typingDuration: 1100,
    deletingDuration: 350,
    blinkSpeed: 250,
    pauseDuration: 1500,
  },
];

export default skillsData;
export { myData, myEducationData, typingConfig, myProjectsData };
