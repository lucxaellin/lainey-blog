import React, { useState, useEffect } from "react";

function FloatingHearts() {
  const items = ["🌸", "💗", "✨", "🎀", "💕", "⭐", "🌷", "💖", "🩷", "🌺"];

  return (
    <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none", zIndex: 0 }}>
      {Array.from({ length: 16 }).map((_, i) => (
        <span
          key={i}
          style={{
            position: "absolute",
            bottom: -40,
            left: `${(i * 19 + 3) % 100}%`,
            fontSize: `${0.8 + (i % 3) * 0.35}rem`,
            opacity: 0.2,
            animation: `floatUp ${7 + (i % 5)}s linear ${(i * 0.6) % 5}s infinite`,
            userSelect: "none",
          }}
        >
          {items[i % items.length]}
        </span>
      ))}
    </div>
  );
}

const weekBlogs = {"Week 1": { title:"Orientation to Bicol University Cluster II Administrative Office and Task Assignment", content:"During this week, we started with simple office tasks to help us become familiar with the working environment of Cluster II Administrative Office. Ma'am Mitch assigned me to prepare the attendance sheet for the whole month of February and print the Officer of the Day schedule for the same month. I was also assigned to help fix and organize the table where all staff members record their attendance every day. These tasks may seem simple, but they helped me understand the importance of organization and accuracy in office work. I made sure that all files and printed documents were complete and properly arranged before submitting them. On Friday, we had a meeting with all the administrative officers where Ma'am Mitch formally introduced us to the office workflow and assigned each of us our respective mentors who would guide us throughout our internship. After explaining how the office processes documents and handles daily transactions, she assigned me another task, which was to generate QR codes for office forms to make them easily accessible for faculty members whenever they need forms related to cash advances, liquidation, and other office transactions. I completed the QR codes, organized them properly, and submitted them through Google Drive before the end of the day." },"Week 2": { title:"Organization and Sorting of Office Documents", content:"This week, we officially started working with our assigned mentors. I was assigned to Ma'am Mau, who handles incoming and outgoing documents in the office. Before introducing me to the actual document handling process, Ma'am Mau first assigned me to organize and sort files stored in the storage room. I spent most of the week reviewing, filing, and arranging documents according to their proper classifications. Some documents had been stored for a long time, so proper sorting and organization were needed to make them easier to access whenever needed. I handled different documents from various colleges under Cluster II, including files from BUCAL, BUGS, BUCL, BULC, BUJMRIGD, and BUCDM. Although the work involved handling a large number of papers, it helped me develop patience, attention to detail, and a better understanding of how records are managed in an administrative office. I made sure that all assigned documents were properly organized and completed within the week so that we could proceed to handling actual incoming and outgoing documents the following week." },"Week 3": { title:"Handling of Incoming and Outgoing Documents and Disbursement Vouchers", content:"During this week, Ma'am Mau taught me how to properly record incoming and outgoing documents and how to handle disbursement vouchers. She explained the step-by-step process of logging document details, recording transactions, and routing documents to the appropriate offices for approval and processing. At first, I carefully observed how she performed the tasks, and after understanding the process, I was gradually entrusted to do the work on my own under her guidance. As the week progressed, I became more involved in the daily operations of the office. There were times when I needed to visit different colleges and offices to secure signatures from deans and other authorized personnel in order to complete document processing. I was responsible for recording and monitoring documents that entered and left the Cluster II Administrative Office every day. Whenever there was free time, Ma'am Mau would also assign me additional tasks such as sorting and organizing files. This week helped me become more confident in handling office documents and managing administrative responsibilities independently." },"Week 4": { title:"Record Digitalization and Continued Handling of Incoming and Outgoing Documents and Disbursement Vouchers", content:"During this week, I continued handling incoming and outgoing documents, as well as recording and monitoring disbursement vouchers in the Cluster II Administrative Office. Since the number of documents coming in was manageable, I was able to balance my regular responsibilities while assisting with other office tasks. By this time, I had already become more familiar with the workflow, which allowed me to handle document tracking with more confidence and accuracy. I made sure that every document was properly recorded before being forwarded to the appropriate office or personnel. Whenever there were fewer documents to process, Ma'am Mitch assigned me to digitize all the records from the logbooks for incoming and outgoing documents, including disbursement vouchers. I carefully transferred the records into Google Sheets to create digital copies for easier tracking and backup purposes. Aside from digitization, Ma'am Mau also assigned me additional tasks such as shredding unnecessary documents and preparing attendance sheets for the months of March, April, and May. This week allowed me to experience both physical and digital record management." },"Week 5": { title:"Concept Development and Data Gathering for the Cluster II Document Record Management System", content:"For this week, I continued handling incoming and outgoing documents, recording disbursement vouchers, and updating digital records. While working on these tasks every day, I noticed how time-consuming it was to search for old records manually, especially when there were already large volumes of documents being handled in the office. This observation gave me the idea of creating a system that could store records digitally and make document tracking easier and faster for the Cluster II Administrative Office. I presented this concept to Ma'am Mitch, and she appreciated and approved the idea. After discussing the concept, Sir Davie assigned a capstone group to work on developing the full system since system development would require a team and more time. It was then decided that I would guide the capstone group while also creating a small temporary system that Cluster II could use while the full system was still under development. Throughout the week, I started gathering data, identifying system requirements, and observing the office workflow more closely while continuing my regular document management responsibilities." },"Week 6": { title:"Continued Data Gathering and Initial Prototype Development of the Cluster II Document Record Management System", content:"This week, I continued managing document tracking while also focusing on gathering the necessary information needed for the development of the system. I observed the workflow more carefully and listed the features, forms, and records that needed to be included in the system. I also presented my initial concept and ideas to Ma'am Mitch to gather her suggestions and make sure that the system would match the actual needs of the office. At the same time, I started using Figma to visualize the system design and create the initial interface. I designed several webpages and adjusted the layout based on Ma'am Mitch's feedback and recommendations. Aside from system development, I continued assisting Ma'am Mau with document sorting and other urgent office tasks. I also helped guide the capstone group by creating a workflow and explaining the office process so they could better understand the system requirements." },"Week 7": { title:"Prototype Enhancement and Feature Development of the C2DRMS", content:"During this week, I continued improving the system prototype by enhancing the Figma design and making adjustments based on the required features and office needs. I focused on refining the user interface and organizing the layout to make it more suitable for document record management. I also reviewed the workflow to make sure that the design aligned with the actual processes in the office. This week became more challenging because there were changes in task assignments within our internship group. Kristelle was reassigned to a different office and turned over some of her tasks to me. At the same time, my mentorship assignment also changed, and I was now assigned under Ma'am Rubs and Ma'am Jing. Because of these changes, I received additional responsibilities while continuing to work on the system prototype and managing my regular office tasks." },"Week 8": { title:"Frontend Integration of the C2DRMS and System Presentation with Capstone Group", content:"This week, I officially completed the Figma design of the system and started working on the frontend development. I began transforming the design into an actual working interface while making sure that the pages followed the approved layout and requirements. I also continued assisting the capstone group by providing them with the information and workflow they needed for their system development. Aside from development work, I also handled several office tasks assigned by Ma'am Jing and Ma'am Rubs. These included sorting urgent documents, organizing files with deadlines, and compiling important records such as faculty Form 7 documents. Due to the heavy workload this week, my progress in frontend development was gradual, but I still managed to complete important parts of the interface while balancing my office responsibilities." },"Week 9": { title:"Frontend Refinement of the C2DRMS and Document Digitization", content:"During this week, I continued working on the frontend design of the system with the goal of completing it before the end of the week. I focused on improving the layout, navigation, and overall user interface to make sure that it would be functional and easy to use. I reviewed each page carefully and fixed any design issues that I encountered during development. At the same time, I continued helping Ma'am Rubs with document-related tasks that had deadlines. I digitized some records assigned to me and reviewed several entries in Google Sheets to make sure that the information was accurate and complete. By the end of the week, I presented the frontend design to Ma'am Mitch to gather her feedback and identify any adjustments needed before proceeding to backend development." },"Week 10": { title:"Backend Integration and Functional Development of the C2DRMS", content:"For this week, I finalized the frontend design and implemented the adjustments suggested by Ma'am Mitch. After completing the user interface, I officially started working on the backend development of the Cluster II Document Record Management System. I began building the core functionalities needed for record storage, document tracking, and data management. Aside from system development, I continued helping Ma'am Rubs with document preparation. I sorted important records and photocopied faculty documents to prepare multiple copies for the administration, Human Resources, and backup purposes. Although I encountered some technical challenges while working on certain webpages, I continued troubleshooting and balancing my development tasks with my office responsibilities." },"Week 11": { title:"Backend Enhancement and System Function Testing of the C2DRMS", content:"This week, I continued working on the backend development of the system and focused on implementing the necessary functionalities and data processing features. I carefully tested different parts of the system to make sure that each page and function was working properly before moving to the next phase of development. At the same time, Ma'am Rubs assigned me to double-check faculty documents and bind the photocopied records that I prepared the previous week. I carefully reviewed each document to make sure that all files were complete, properly arranged, and ready for submission. After completing these tasks, I continued system development and started preparing for database integration." },"Week 12": { title:"Database Integration and Faculty Thesis Fee Record Sorting", content:"During this week, I successfully connected the database to the system and started integrating the records into the platform. I focused on making sure that the system could properly store, retrieve, and organize document records according to the office workflow. This was an important stage in development because it allowed the system to become more functional and closer to completion. Aside from system development, Ma'am Jing assigned me to sort each faculty member's thesis fee records so that pending payments could be monitored properly. Throughout the week, I balanced office responsibilities with system debugging and testing. I spent most of my time doing trial-and-error testing, identifying errors, and fixing issues found in the system." },"Week 13": { title:"System Finalization and Faculty Thesis Fee Record Verification", content:"This week, I focused on finalizing the Cluster II Document Record Management System by fixing remaining errors, improving system performance, and adjusting features based on testing results. I reviewed each function carefully to make sure that the system was stable and ready for presentation. At the same time, I continued organizing faculty thesis fee records in Google Sheets and updating missing information whenever necessary. By the end of the week, I successfully completed the final adjustments to the system and prepared all necessary materials for the final presentation scheduled for the following week." },"Week 14": { title:"Presentation of the C2DRMS and Finalizing Documents", content:"For my final week in the office, I focused on preparing for the presentation of the Cluster II Document Record Management System. I reviewed the features, tested the functionalities, and made final adjustments to ensure that everything would work properly during the demonstration. I also prepared myself to explain the purpose, workflow, and features of the system to the administrative officers. During the presentation, I presented the system to all the administrative officers of the Cluster II Administrative Office, including Ma'am Mitch. I explained how the system works, demonstrated its features, and answered their questions regarding its functions and possible improvements. Since it was my last week of internship, Ma'am Mitch informed me that they would coordinate with the Information and Communications Technology Office for the deployment of the system. Although my OJT had officially ended, I was asked to continue assisting during the deployment process if needed." },};

const photoWeeks = ["Week 1","Week 2","Week 3","Week 4","Week 5","Week 6","Week 7","Week 8","Week 9","Week 10","Week 11","Week 12","Week 13","Week 14"];const placeholderColors = ["#fce7f3","#fef3c7","#d1fae5","#dbeafe","#ede9fe","#fce7f3","#fef3c7","#d1fae5","#dbeafe","#ede9fe","#fce7f3","#fef3c7"];

// Different photos for each week
const weekPhotos = {
  "Week 1": [
    {
      id: 1,
      src: "/images/week1.JPG",
      color: "#fce7f3",
      label: "Week 1 Photo 1 📸"
    },
    {
      id: 2,
      src: "/images/week1-1.JPG",
      color: "#fef3c7",
      label: "Week 1 Photo 2 📸"
    },
    {
      id: 3,
      src: "/images/week1-2.JPG",
      color: "#d1fae5",
      label: "Week 1 Photo 3 📸"
    }
  ],

  "Week 2": [
    {
      id: 4,
      src: "/images/week2.JPG",
      color: "#dbeafe",
      label: "Week 2 Photo 1 📸"
    },
    {
      id: 5,
      src: "/images/week2-1.JPG",
      color: "#ede9fe",
      label: "Week 2 Photo 2 📸"
    },
    {
      id: 6,
      src: "/images/week2-2.JPG",
      color: "#fce7f3",
      label: "Week 2 Photo 3 📸"
    }
  ],

  "Week 3": [
    {
      id: 7,
      src: "/images/week3.JPG",
      color: "#dbeafe",
      label: "Week 3 Photo 1 📸"
    },
    {
      id: 8,
      src: "/images/week3-1.JPG",
      color: "#ede9fe",
      label: "Week 3 Photo 2 📸"
    },
    {
      id: 9,
      src: "/images/week3-2.JPG",
      color: "#fce7f3",
      label: "Week 3 Photo 3 📸"
    }
  ],
  "Week 4": [
    {
      id: 8,
      src: "/images/week4.JPG",
      color: "#dbeafe",
      label: "Week 4 Photo 1 📸"
    },
    {
      id: 9,
      src: "/images/week4-1.JPG",
      color: "#ede9fe",
      label: "Week 4 Photo 2 📸"
    },
    {
      id: 10,
      src: "/images/week4-2.JPG",
      color: "#fce7f3",
      label: "Week 4 Photo 3 📸"
    }
  ],
  "Week 5": [
    {
      id: 11,
      src: "/images/week5.JPG",
      color: "#dbeafe",
      label: "Week 5 Photo 1 📸"
    },
    {
      id: 12,
      src: "/images/week5-1.JPG",
      color: "#ede9fe",
      label: "Week 5 Photo 2 📸"
    },
    {
      id: 13,
      src: "/images/week5-2.JPG",
      color: "#fce7f3",
      label: "Week 5 Photo 3 📸"
    }
  ],
  "Week 6": [
    {
      id: 14,
      src: "/images/week6.JPG",
      color: "#dbeafe",
      label: "Week 6 Photo 1 📸"
    },
    {
      id: 15,
      src: "/images/week6-1.JPG",
      color: "#ede9fe",
      label: "Week 6 Photo 2 📸"
    },
    {
      id: 16,
      src: "/images/week6-2.JPG",
      color: "#fce7f3",
      label: "Week 6 Photo 3 📸"
    }
  ],
  "Week 7": [
    {
      id: 17,
      src: "/images/week7.JPG",
      color: "#dbeafe",
      label: "Week 7 Photo 1 📸"
    },
    {
      id: 18,
      src: "/images/week7-1.JPG",
      color: "#ede9fe",
      label: "Week 7 Photo 2 📸"
    },
    {
      id: 19,
      src: "/images/week7-2.JPG",
      color: "#fce7f3",
      label: "Week 7 Photo 3 📸"
    }
  ],
  "Week 8": [
    {
      id: 20,
      src: "/images/week8.JPG",
      color: "#dbeafe",
      label: "Week 8 Photo 1 📸"
    },
    {
      id: 21,
      src: "/images/week8-1.JPG",
      color: "#ede9fe",
      label: "Week 8 Photo 2 📸"
    },
    {
      id: 22,
      src: "/images/week8-2.JPG",
      color: "#fce7f3",
      label: "Week 8 Photo 3 📸"
    }
  ],
  "Week 9": [
    {
      id: 23,
      src: "/images/week9.JPG",
      color: "#dbeafe",
      label: "Week 9 Photo 1 📸"
    },
    {
      id: 24,
      src: "/images/week9-1.JPG",
      color: "#ede9fe",
      label: "Week 9 Photo 2 📸"
    },
    {
      id: 25,
      src: "/images/week9-2.JPG",
      color: "#fce7f3",
      label: "Week 9 Photo 3 📸"
    }
  ],
  "Week 10": [
    {
      id: 26,
      src: "/images/week10.JPG",
      color: "#dbeafe",
      label: "Week 10 Photo 1 📸"
    },
    {
      id: 27,
      src: "/images/week10-1.JPG",
      color: "#ede9fe",
      label: "Week 10 Photo 2 📸"
    },
    {
      id: 28,
      src: "/images/week10-2.JPG",
      color: "#fce7f3",
      label: "Week 10 Photo 3 📸"
    }
  ],
  "Week 11": [
    {
      id: 29,
      src: "/images/week11.JPG",
      color: "#dbeafe",
      label: "Week 11 Photo 1 📸"
    },
    {
      id: 30,
      src: "/images/week11-1.JPG",
      color: "#ede9fe",
      label: "Week 11 Photo 2 📸"
    },
    {
      id: 31,
      src: "/images/week11-2.JPG",
      color: "#fce7f3",
      label: "Week 11 Photo 3 📸"
    }
  ],
  "Week 12": [
        {
      id: 32,
      src: "/images/week12.JPG",
      color: "#dbeafe",
      label: "Week 12 Photo 1 📸"
    },
    {
      id: 33,
      src: "/images/week12-1.JPG",
      color: "#ede9fe",
      label: "Week 12 Photo 2 📸"
    },
    {
      id: 34,
      src: "/images/week12-2.JPG",
      color: "#fce7f3",
      label: "Week 12 Photo 3 📸"
    }
  ],
  "Week 13": [
            {
      id: 35,
      src: "/images/week13.JPG",
      color: "#dbeafe",
      label: "Week 13 Photo 1 📸"
    },
    {
      id: 36,
      src: "/images/week13-1.JPG",
      color: "#ede9fe",
      label: "Week 13 Photo 2 📸"
    },
    {
      id: 37,
      src: "/images/week13-2.JPG",
      color: "#fce7f3",
      label: "Week 13 Photo 3 📸"
    }
  ],
  "Week 14": [
            {
      id: 38,
      src: "/images/week14.JPG",
      color: "#dbeafe",
      label: "Week 14 Photo 1 📸"
    },
    {
      id: 39,
      src: "/images/week14-1.JPG",
      color: "#ede9fe",
      label: "Week 14 Photo 2 📸"
    },
    {
      id: 40,
      src: "/images/week14-2.JPG",
      color: "#fce7f3",
      label: "Week 14 Photo 3 📸"
    }
  ]
};

const initialWeekPhotos = Object.fromEntries(
  Object.entries(weekPhotos).map(([week, list]) => [week, list.slice(0, 3)])
);

export default function Blog() {const [blogOpen, setBlogOpen] = useState(null);const [activeBlogWeek, setActiveBlogWeek] = useState(0);const [hoveredWeek, setHoveredWeek] = useState(null);const [activePhotoWeek, setActivePhotoWeek] = useState(0);const [currentPhotoWeek, setCurrentPhotoWeek] = useState(0);const [buttonGroupStart, setButtonGroupStart] = useState(0);const [photos, setPhotos] = useState(initialWeekPhotos["Week 1"]);const [uploadModalOpen, setUploadModalOpen] = useState(false);const [passwordModalOpen, setPasswordModalOpen] = useState(false);const [passwordError, setPasswordError] = useState("");const [selectedUploadWeek, setSelectedUploadWeek] = useState("Week 1");const [editableWeekPhotos, setEditableWeekPhotos] = useState(initialWeekPhotos);
const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior:"smooth" });

const handleUpload = (e) => {const file = e.target.files[0];if (!file) return;const url = URL.createObjectURL(file);const newPhoto = { id: Date.now(), src: url, color:"#fce7f3", label: `Photo ${Date.now()}` };

// Add photo to the selected week
setEditableWeekPhotos(prev => ({
  ...prev,
  [selectedUploadWeek]: [...(prev[selectedUploadWeek] || []).slice(0, 2), newPhoto]
}));

// Update current photos display if we're viewing that week
if (photoWeeks[currentPhotoWeek] === selectedUploadWeek) {
  setPhotos(prev => [...prev.slice(0, 2), newPhoto]);
}

};

const handlePasswordSubmit = (password) => {if (password === "lainey123") {setPasswordError("");setPasswordModalOpen(false);setUploadModalOpen(true);} else {setPasswordError("Password is incorrect");}};

// Update photos when active photo week changes
React.useEffect(() => {const currentWeek = photoWeeks[currentPhotoWeek];setPhotos(editableWeekPhotos[currentWeek] || []);}, [currentPhotoWeek, editableWeekPhotos]);

// Carousel helper functions
const getScrollOffset = (activeIndex) => {
  return Math.floor(activeIndex / 3) * 972; // Each group of 3 cards is 972px (3 * 324px)
};

const isCardActive = (cardIndex, activeIndex) => {return cardIndex === activeIndex;};

const getPreviousPage = (activeIndex) => {return Math.max(0, Math.floor(activeIndex / 3) * 3 - 3);};

const getNextPage = (activeIndex) => {const totalWeeks = Object.keys(weekBlogs).length;const nextGroupStart = Math.floor(activeIndex / 3) * 3 + 3;return Math.min(nextGroupStart, totalWeeks - 1);};

const handleCardHover = (index) => {setHoveredWeek(index);};

const handleCardLeave = () => {setHoveredWeek(null);};

return (
<>
<style>{`
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700&family=DM+Sans:wght@300;400;500&family=Dancing+Script:wght@700&display=swap');
* , *::before, *::after{box-sizing:border-box;margin:0;padding:0;}
:root{--pink:#f472b6;--pink-l:#fce7f3;--pink-m:#fbcfe8;--cream:#fffbeb;--mauve:#ede9fe;--text:#3d1a2e;--muted:#9d6e85;}html{scroll-behavior:smooth;}body{background:white;font-family:'DM Sans',sans-serif;color:var(--text);overflow-x:hidden;}

    /* NAV */
    nav{
      position:sticky;top:0;z-index:200;
      background:rgba(255,255,255,0.88);backdrop-filter:blur(18px);
      border-bottom:2px solid var(--pink-m);
      padding:0 48px;height:62px;
      display:flex;align-items:center;justify-content:space-between;
      box-shadow:0 4px 24px #f472b615;
      animation:slideDown .6s both;
    }
    .nav-logo{font-family:'Dancing Script',cursive;font-size:1.55rem;color:var(--pink);}
    .nav-links{display:flex;gap:4px;list-style:none;}
    .nav-links a{
      font-size:.72rem;font-weight:500;letter-spacing:2px;text-transform:uppercase;
      color:var(--muted);text-decoration:none;padding:8px 14px;border-radius:50px;
      transition:all .2s;
    }
    .nav-links a:hover{background:var(--pink-m);color:var(--pink);}

    /* HERO */
    .hero{
      position:relative;min-height:92vh;overflow:hidden;
      display:flex;align-items:center;
      background:linear-gradient(135deg,#fce7f3 0%,#fffbeb 50%,#ede9fe 100%);
      padding:80px 64px;
    }
    .hero-content{position:relative;z-index:2;max-width:580px;margin-left:40px;animation:fadeUp .9s .2s both;}
    .hero-pill{
      display:inline-flex;align-items:center;gap:6px;
      background:#fff;border:2px solid var(--pink-m);border-radius:50px;
      padding:6px 18px;font-size:.7rem;font-weight:500;letter-spacing:2px;
      text-transform:uppercase;color:var(--pink);margin-bottom:26px;
      box-shadow:0 4px 16px #f472b620;
    }
    .hero-name{
      font-family:'Playfair Display',serif;
      font-size:clamp(3rem,7vw,5.2rem);font-weight:900;line-height:1.0;
      letter-spacing:-2px;color:var(--text);
    }
    .hero-name em{font-style:italic;color:var(--pink);}
    .hero-sub{font-size:.82rem;font-weight:500;letter-spacing:3px;text-transform:uppercase;color:var(--muted);margin-top:10px;}
    .hero-desc{font-size:.97rem;color:var(--muted);line-height:1.75;margin-top:18px;max-width:420px;}
    .hero-btns{display:flex;gap:12px;margin-top:32px;flex-wrap:wrap;}

    .btn-main{
      background:var(--pink);color:#fff;border:none;border-radius:50px;
      padding:13px 32px;font-family:'DM Sans',sans-serif;
      font-size:.78rem;font-weight:500;letter-spacing:2px;text-transform:uppercase;
      cursor:pointer;box-shadow:0 8px 24px #f472b640;transition:transform .18s,box-shadow .18s;
    }
    .btn-main:hover{transform:translateY(-3px);box-shadow:0 14px 36px #f472b655;}
    .btn-ghost{
      background:#fff;color:var(--pink);border:2px solid var(--pink);border-radius:50px;
      padding:12px 28px;font-family:'DM Sans',sans-serif;
      font-size:.78rem;font-weight:500;letter-spacing:2px;text-transform:uppercase;
      cursor:pointer;transition:all .18s;
    }
    .btn-ghost:hover{background:var(--pink-m);}

    /* hero blobs */
    .blob1{
      position:absolute;right:40px;top:50%;transform:translateY(-50%);
      width:360px;height:360px;border-radius:60% 40% 70% 30%/50% 60% 40% 50%;
      background:linear-gradient(135deg,#f9a8d4,#c084fc);opacity:.18;
      animation:morph 8s ease-in-out infinite;z-index:1;
    }
    .blob2{
      position:absolute;right:130px;top:20%;
      width:200px;height:200px;border-radius:40% 60% 50% 50%/60% 40% 60% 40%;
      background:linear-gradient(135deg,#fde68a,#f9a8d4);opacity:.22;
      animation:morph 6s ease-in-out 2s infinite;z-index:1;
    }

    /* SECTIONS */
    .sec{padding:80px 64px;}
    .sec-label{
      display:inline-flex;align-items:center;gap:6px;
      font-size:.68rem;font-weight:500;letter-spacing:3px;text-transform:uppercase;
      color:var(--pink);background:var(--pink-l);border:1.5px solid var(--pink-m);
      border-radius:50px;padding:5px 16px;margin-bottom:14px;
    }
    .sec-title{
      font-family:'Playfair Display',serif;
      font-size:clamp(2rem,5vw,3rem);font-weight:900;
      color:var(--text);letter-spacing:-1px;line-height:1.1;
    }
    .sec-title span{color:var(--pink);font-style:italic;}

    /* ABOUT */
    #about{background:#fff;}
    .about-grid{display:grid;grid-template-columns:1fr 1fr;gap:70px;align-items:center;max-width:1080px;margin:0 auto;}
    .about-blob-wrap{position:relative;display:flex;justify-content:center;}
    .about-blob{
      width:270px;height:270px;
      border-radius:60% 40% 55% 45%/50% 55% 45% 55%;
      background:linear-gradient(135deg,var(--pink-m),var(--mauve));
      display:flex;align-items:center;justify-content:center;
      animation:morph 10s ease-in-out infinite;
      box-shadow:0 20px 60px #f472b630;
      font-size:5rem;
    }
    .about-sticker{
      position:absolute;bottom:18px;left:50%;transform:translateX(-50%) rotate(-6deg);
      background:#fff;border:2.5px solid var(--text);border-radius:50px;
      padding:8px 22px;font-family:'Dancing Script',cursive;font-size:1.2rem;
      box-shadow:4px 4px 0 var(--pink-m);white-space:nowrap;
    }
    .about-text p{font-size:.96rem;color:var(--muted);line-height:1.8;margin-top:16px;text-align:justify;}

    /* BLOG */
    #weekly-blog{background:linear-gradient(160deg,var(--pink-l),var(--cream));}
    .blog-carousel-container{
      position:relative;width:1000px;margin:40px auto 0;
      overflow:hidden;border-radius:24px;
      padding-top:20px;
      padding-bottom:20px;
    }
    .blog-carousel{
      display:flex;transition:transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
      gap:24px;padding:0 12px;
    }
    .blog-card{
      border-radius:24px;background:#fff;border:2px solid var(--pink-m);
      padding:32px 28px;cursor:pointer;
      transition:all .3s ease;flex-shrink:0;width:300px;
      position:relative;overflow:hidden;
      filter:blur(0);opacity:1;transform:scale(1);
    }
    .blog-card.active{
      filter:blur(0);opacity:1;transform:scale(1);
      box-shadow:0 20px 48px #f472b630;
    }
    .blog-card[data-hovered="true"]{
      filter:blur(0);opacity:1;transform:scale(1.05) translateY(-4px);
      box-shadow:0 16px 40px #f472b640;
      border-color:var(--pink);
    }
    .blog-carousel:hover .blog-card:not([data-hovered="true"]){
      filter:blur(1.5px);opacity:0.7;transform:scale(0.95);
    }
    .blog-card::before{
      content:'';position:absolute;top:0;left:0;right:0;height:5px;
      background:linear-gradient(90deg,var(--pink),#c084fc);
      border-radius:24px 24px 0 0;
    }
    .blog-emoji{font-size:2.2rem;margin-bottom:14px;display:block;}
    .blog-week{font-family:'Playfair Display',serif;font-size:1.3rem;font-weight:700;color:var(--text);}
    .blog-preview{font-size:.84rem;color:var(--muted);margin-top:10px;line-height:1.6;
      display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;overflow:hidden;}
    .blog-cta{
      display:inline-block;margin-top:18px;font-size:.7rem;font-weight:500;
      letter-spacing:2px;text-transform:uppercase;color:var(--pink);
      background:var(--pink-l);border-radius:50px;padding:6px 16px;
      border:1.5px solid var(--pink-m);transition:all .18s;
    }
    .blog-card:hover .blog-cta{background:var(--pink);color:#fff;border-color:var(--pink);}
    .blog-nav{
      display:flex;justify-content:center;align-items:center;gap:16px;
      margin-top:32px;
    }
    .blog-nav-btn{
      background:#fff;border:2px solid var(--pink-m);border-radius:50%;
      width:48px;height:48px;font-size:1.2rem;cursor:pointer;color:var(--pink);
      display:flex;align-items:center;justify-content:center;transition:all .18s;
    }
    .blog-nav-btn:hover{background:var(--pink);color:#fff;border-color:var(--pink);}
    .blog-nav-btn:disabled{opacity:0.3;cursor:not-allowed;}
    .blog-nav-btn:hover:disabled{background:transparent;color:var(--pink);}
    .blog-week-indicators{
      display:flex;gap:8px;align-items:center;
    }
    .blog-dot{
      width:8px;height:8px;border-radius:50%;background:var(--pink-m);
      transition:all .2s;cursor:pointer;
    }
    .blog-dot.active{background:var(--pink);transform:scale(1.3);}

    /* MODAL */
    .overlay{
      position:fixed;inset:0;z-index:500;
      background:rgba(61,26,46,.5);backdrop-filter:blur(10px);
      display:flex;align-items:center;justify-content:center;
      animation:fadeIn .25s both;padding:20px;
    }
    .modal{
      background:#fff;border-radius:32px;padding:56px;max-width:1100px;width:92vw;max-height:85vh;overflow-y:auto;
      border:2px solid var(--pink-m);box-shadow:0 32px 80px #f472b640;
      animation:popIn .3s both;position:relative;
    }
    .modal-x{
      position:absolute;top:18px;right:18px;
      background:var(--pink-l);border:none;border-radius:50%;
      width:36px;height:36px;font-size:1rem;
      cursor:pointer;color:var(--pink);transition:background .18s;
    }
    .modal-x:hover{background:var(--pink-m);}
    .modal-emoji{font-size:3rem;margin-bottom:12px;display:block;}
    .modal-title{font-family:'Playfair Display',serif;font-size:1.8rem;font-weight:900;}
    .modal-body{font-size:1rem;color:var(--muted);line-height:1.9;margin-top:16px;text-align:justify;}

    /* PHOTOS */
    #photos{background:var(--cream);}
    .photos-top{display:flex;align-items:flex-end;justify-content:space-between;flex-wrap:wrap;gap:12px;max-width:1000px;margin:0 auto;}
    .upload-lbl{
      background:#fff;border:2px solid var(--pink);border-radius:50px;
      padding:10px 24px;font-size:.72rem;font-weight:500;letter-spacing:2px;
      text-transform:uppercase;color:var(--pink);cursor:pointer;
      transition:all .18s;display:flex;align-items:center;gap:6px;
    }
    .upload-lbl:hover{background:var(--pink);color:#fff;}
    .week-tabs{display:flex;gap:8px;max-width:1000px;margin:26px auto 22px;flex-wrap:wrap;align-items:center;}
    .w-tab{
      background:#fff;border:2px solid var(--pink-m);border-radius:50px;
      padding:7px 20px;font-size:.68rem;font-weight:500;letter-spacing:1.5px;
      text-transform:uppercase;color:var(--muted);cursor:pointer;transition:all .18s;
    }
    .w-tab.on{background:var(--pink);color:#fff;border-color:var(--pink);}
    .w-tab:hover:not(.on){border-color:var(--pink);color:var(--pink);}
    .nav-arrow{
      background:#fff;border:2px solid var(--pink-m);border-radius:50%;
      width:36px;height:36px;font-size:1.1rem;cursor:pointer;color:var(--pink);
      display:flex;align-items:center;justify-content:center;transition:all .18s;
    }
    .nav-arrow:hover{background:var(--pink);color:#fff;border-color:var(--pink);}
    .photo-grid{
      display:grid;grid-template-columns:repeat(3,1fr);
      gap:18px;max-width:1000px;margin:0 auto;
    }
    .photo-card{
      border-radius:20px;overflow:hidden;border:2px solid var(--pink-m);
      aspect-ratio:1;cursor:pointer;transition:transform .22s,box-shadow .22s;
    }
    .photo-card:hover{transform:scale(1.05) rotate(1.5deg);box-shadow:0 16px 40px #f472b630;}
    .photo-card img{width:100%;height:100%;object-fit:cover;display:block;}
    .photo-ph{
      width:100%;height:100%;display:flex;flex-direction:column;
      align-items:center;justify-content:center;gap:8px;font-size:2rem;
    }
    .photo-ph small{font-size:.68rem;letter-spacing:2px;text-transform:uppercase;color:#bbb;}

    /* VIDEOS */
    #videos{background:linear-gradient(160deg,var(--mauve) 0%,var(--pink-l) 100%);}
    .vid-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:22px;max-width:1000px;margin:40px auto 0;}
    .vid-card{
      border-radius:20px;overflow:hidden;border:2px solid rgba(244,114,182,.3);
      background:#fff;box-shadow:0 8px 32px #f472b618;transition:transform .22s,box-shadow .22s;
    }
    .vid-card:hover{transform:translateY(-6px);box-shadow:0 20px 48px #f472b635;}
    .vid-card video{width:100%;display:block;}
    .vid-label{font-size:.72rem;font-weight:500;letter-spacing:2px;text-transform:uppercase;
      color:var(--muted);text-align:center;padding:12px 0;}

    /* FOOTER */
    footer{
      background:var(--text);color:var(--pink-m);
      padding:40px 64px;
      display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:16px;
    }
    .f-logo{font-family:'Dancing Script',cursive;font-size:1.55rem;color:var(--pink);}
    .f-links{display:flex;gap:24px;list-style:none;flex-wrap:wrap;}
    .f-links a{font-size:.68rem;letter-spacing:2px;text-transform:uppercase;color:var(--pink);text-decoration:none;transition:color .18s;}
    .f-links a:hover{color:var(--pink);}
    .f-copy{font-size:.68rem;color:var(--pink);letter-spacing:1px;}

    /* SPARKLES */
    .spk{position:absolute;color:var(--pink);pointer-events:none;animation:twinkle 2s ease-in-out infinite;}

    /* WAVE DIVIDER */
    .wave-divider{
      --size: 60px;
      --m: 0.4;
      --p: calc(var(--m)*var(--size));
      --R: calc(var(--size)*sqrt(var(--m)*var(--m) + 1));
      height: 100px;
      background: linear-gradient(
        to right, 
        #fbf4f2 0%,   /* Soft Cream Left */
        #fff9e6 25%,  /* Pale Yellow Inner-Left */
        #fcf3f6 50%,  /* Blush Pink Center */
        #f2effa 75%,  /* Soft Lavender Inner-Right */
        #eceeff 100%  /* Pale Blue-Purple Far Right */
      );
      position: relative;
      z-index: 5;
      mask:
        radial-gradient(var(--R) at left 50% bottom calc(var(--size) + var(--p)), #000 99%, #0000 101%) 
          calc(50% - 2 * var(--size)) 0/calc(4 * var(--size)) 100%,
        radial-gradient(var(--R) at left 50% bottom calc(-1 * var(--p)), #0000 99%, #000 101%) 
          left 50% bottom var(--size) / calc(4 * var(--size)) 100% repeat-x;
      -webkit-mask:
        radial-gradient(var(--R) at left 50% bottom calc(var(--size) + var(--p)), #000 99%, #0000 101%) 
          calc(50% - 2 * var(--size)) 0/calc(4 * var(--size)) 100%,
        radial-gradient(var(--R) at left 50% bottom calc(-1 * var(--p)), #0000 99%, #000 101%) 
          left 50% bottom var(--size) / calc(4 * var(--size)) 100% repeat-x;
    }
    .wave-divider::before{
      content:'';position:absolute;inset:0;background:transparent;z-index:-1;
      mask:
        radial-gradient(var(--R) at left 50% top calc(var(--size) + var(--p)), #0000 99%, #000 101%) 
          calc(50% - 2 * var(--size)) 0/calc(4 * var(--size)) 100%,
        radial-gradient(var(--R) at left 50% top calc(-1 * var(--p)), #000 99%, #000 101%) 
          left 50% top var(--size) / calc(4 * var(--size)) 100% repeat-x;
      -webkit-mask:
        radial-gradient(var(--R) at left 50% top calc(var(--size) + var(--p)), #0000 99%, #000 101%) 
          calc(50% - 2 * var(--size)) 0/calc(4 * var(--size)) 100%,
        radial-gradient(var(--R) at left 50% top calc(-1 * var(--p)), #000 99%, #000 101%) 
          left 50% top var(--size) / calc(4 * var(--size)) 100% repeat-x;
    }

    /*change this*/
    /* VIDEOS TO CONCLUSION WAVE DIVIDER */
    .wave-divider-videos{
      --size: 60px;
      --m: 0.4;
      --p: calc(var(--m)*var(--size));
      --R: calc(var(--size)*sqrt(var(--m)*var(--m) + 1));
      height: 100px;
      background: linear-gradient(
          to right, 
          #f4effa 0%,   /* Pale Lavender Left */
          #f7f0f9 30%,  /* Light Thistle Middle-Left */
          #fdf3f8 65%,  /* Soft Petal Pink Middle-Right */
          #fdf1f7 100%  /* Orchid Mist Far Right */
      );
      position: relative;
      z-index: 5;
      mask:
        radial-gradient(var(--R) at left 50% bottom calc(var(--size) + var(--p)), #000 99%, #0000 101%) 
          calc(50% - 2 * var(--size)) 0/calc(4 * var(--size)) 100%,
        radial-gradient(var(--R) at left 50% bottom calc(-1 * var(--p)), #0000 99%, #000 101%) 
          left 50% bottom var(--size) / calc(4 * var(--size)) 100% repeat-x;
      -webkit-mask:
        radial-gradient(var(--R) at left 50% bottom calc(var(--size) + var(--p)), #000 99%, #0000 101%) 
          calc(50% - 2 * var(--size)) 0/calc(4 * var(--size)) 100%,
        radial-gradient(var(--R) at left 50% bottom calc(-1 * var(--p)), #0000 99%, #000 101%) 
          left 50% bottom var(--size) / calc(4 * var(--size)) 100% repeat-x;
    }
    .wave-divider-videos::before{
      content:'';position:absolute;inset:0;background:transparent;z-index:-1;
      mask:
        radial-gradient(var(--R) at left 50% top calc(var(--size) + var(--p)), #0000 99%, #000 101%) 
          calc(50% - 2 * var(--size)) 0/calc(4 * var(--size)) 100%,
        radial-gradient(var(--R) at left 50% top calc(-1 * var(--p)), #000 99%, #000 101%) 
          left 50% top var(--size) / calc(4 * var(--size)) 100% repeat-x;
      -webkit-mask:
        radial-gradient(var(--R) at left 50% top calc(var(--size) + var(--p)), #0000 99%, #000 101%) 
          calc(50% - 2 * var(--size)) 0/calc(4 * var(--size)) 100%,
        radial-gradient(var(--R) at left 50% top calc(-1 * var(--p)), #000 99%, #000 101%) 
          left 50% top var(--size) / calc(4 * var(--size)) 100% repeat-x;
    }

    /* ANIMATIONS */
    @keyframes slideDown{from{opacity:0;transform:translateY(-24px);}to{opacity:1;transform:none;}}
    @keyframes fadeUp{from{opacity:0;transform:translateY(28px);}to{opacity:1;transform:none;}}
    @keyframes fadeIn{from{opacity:0;}to{opacity:1;}}
    @keyframes popIn{from{opacity:0;transform:scale(.88);}to{opacity:1;transform:scale(1);}}
    @keyframes morph{
      0%,100%{border-radius:60% 40% 55% 45%/50% 55% 45% 55%;}
      33%{border-radius:40% 60% 45% 55%/60% 40% 55% 45%;}
      66%{border-radius:55% 45% 60% 40%/45% 60% 40% 55%;}
    }
    @keyframes floatUp{
      0%{transform:translateY(0) rotate(0deg);opacity:.2;}
      80%{opacity:.2;}
      100%{transform:translateY(-110vh) rotate(360deg);opacity:0;}
    }
    @keyframes twinkle{
      0%,100%{opacity:1;transform:scale(1) rotate(0);}
      50%{opacity:.4;transform:scale(1.5) rotate(20deg);}
    }

    @media(max-width:768px){
      .about-grid{grid-template-columns:1fr;}
      .blog-grid,.vid-grid,.photo-grid{grid-template-columns:1fr 1fr;}
      .hero,.sec{padding:60px 24px;}
      footer{padding:32px 24px;}
      .nav-links{display:none;}
    }
    @media(max-width:500px){
      .blog-grid,.photo-grid,.vid-grid{grid-template-columns:1fr;}
    }
  `}</style>

  {/* NAV */}
  <nav>
    <div className="nav-logo">Lainey's Blog 🌸</div>
    <ul className="nav-links">
      {[["home","Home"],["about","About Me"],["weekly-blog","Weekly Blog"],["photos","Photos"],["videos","my experience"]].map(([id,label])=>(
        <li key={id}><a href={`#${id}`} onClick={e=>{e.preventDefault();scrollTo(id);}}>{label}</a></li>
      ))}
    </ul>
  </nav>

  {/* HERO */}
  <section id="home" className="hero">
    <FloatingHearts />
    <span className="spk" style={{top:"14%",right:"38%",fontSize:"1.8rem"}}>✦</span>
    <span className="spk" style={{top:"72%",right:"54%",fontSize:"1rem",animationDelay:"1s"}}>✦</span>
    <span className="spk" style={{top:"28%",right:"22%",animationDelay:"0.5s",fontSize:"1.3rem"}}>✦</span>
    <div className="blob1"/>
    <div className="blob2"/>
    <div className="hero-content">
      <div className="hero-pill">✦ BSIT 4C Student</div>
      <h1 className="hero-name">Elaine Mae<br /><em>A. Bertiz</em></h1>
      <p className="hero-sub">Lainey's Blog ✨</p>
      <p className="hero-desc">A glimpse into my OJT journey, growth, and experiences at BU Cluster II. ✨</p>
      <div className="hero-btns">
        <button className="btn-main" onClick={()=>scrollTo("about")}>Meet Lainey 🌷</button>
        <button className="btn-ghost" onClick={()=>scrollTo("weekly-blog")}>Read Blog →</button>
      </div>
    </div>
  </section>

  {/* WAVE DIVIDER */}
  <div className="wave-divider"></div>

  {/* ABOUT */}
  <section id="about" className="sec">
    <div className="about-grid">
      <div className="about-blob-wrap">
        <div className="about-blob">🌸</div>
        <div className="about-sticker">Hey there! 💕</div>
      </div>
      <div>
        <div className="sec-label">✦ About Me</div>
        <h2 className="sec-title">I'm <span>Lainey!</span></h2>
        <div className="about-text" style={{marginTop:0}}>
          <p>As part of the Bachelor of Science in Information Technology program, I completed my On-the-Job Training at the Bicol University Cluster II Administrative Office located in A.P. Bonto Building, Legazpi City. During my internship, I was exposed to the actual working environment of an administrative office where I handled clerical and technical responsibilities.</p>
          <p style={{marginTop:14}}>My tasks included handling incoming and outgoing documents, organizing office records, digitizing files, recording disbursement vouchers, and assisting in daily operations. I also conceptualized and developed the Cluster II Document Record Management System, a web-based system created to support document recording, tracking, and digital record management.</p>
        </div>
        <button className="btn-main" style={{marginTop:28}} onClick={()=>scrollTo("conclusion")}>How was Lainey's OJT?</button>
      </div>
    </div>
  </section>

  {/* WEEKLY BLOG */}
  <section id="weekly-blog" className="sec">
    <div style={{textAlign:"center"}}>
      <div className="sec-label" style={{margin:"0 auto 14px"}}>✦ Updates</div>
      <h2 className="sec-title">Weekly <span>Blog</span></h2>
      <p style={{color:"var(--muted)",marginTop:20,fontSize:".9rem"}}>Click a card to read more 💌</p>
    </div>
    
    <div className="blog-carousel-container">
      <div className="blog-carousel" style={{
        transform: `translateX(-${getScrollOffset(activeBlogWeek)}px)` 
      }}>
        {Object.entries(weekBlogs).map(([week, data], idx) => (
          <div 
            className={`blog-card ${isCardActive(idx, activeBlogWeek) ? "active" : ""}`}
            key={week} 
            onClick={()=>setBlogOpen(week)}
            onMouseEnter={() => handleCardHover(idx)}
            onMouseLeave={handleCardLeave}
            data-hovered={hoveredWeek === idx}
          >
            <span className="blog-emoji">{data.emoji}</span>
            <div className="blog-week">{week}</div>
            <p className="blog-preview">{data.content}</p>
            <span className="blog-cta">Read More</span>
          </div>
        ))}
      </div>
    </div>
    
    <div className="blog-nav">
      <button 
        className="blog-nav-btn" 
        onClick={() => setActiveBlogWeek(getPreviousPage(activeBlogWeek))}
        disabled={activeBlogWeek === 0}
      >
        ‹
      </button>
      <div className="blog-week-indicators">
        {Array.from({ length: Math.ceil(Object.keys(weekBlogs).length / 3) }, (_, i) => (
          <div 
            key={i}
            className={`blog-dot ${Math.floor(activeBlogWeek / 3) === i ? "active" : ""}`}
            onClick={() => setActiveBlogWeek(i * 3)}
          />
        ))}
      </div>
      <button 
        className="blog-nav-btn" 
        onClick={() => setActiveBlogWeek(getNextPage(activeBlogWeek))}
        disabled={activeBlogWeek >= Object.keys(weekBlogs).length - 3}
      >
        ›
      </button>
    </div>
  </section>

  {/* BLOG MODAL */}
  {blogOpen && (
    <div className="overlay" onClick={()=>setBlogOpen(null)}>
      <div className="modal" onClick={e=>e.stopPropagation()}>
        <button className="modal-x" onClick={()=>setBlogOpen(null)}>✕</button>
        <span className="modal-emoji">🌸</span>
        <div className="modal-title">{blogOpen}: {weekBlogs[blogOpen].title}</div>
        <p className="modal-body">{weekBlogs[blogOpen].content}</p>
      </div>
    </div>
  )}

  {/* PHOTOS */}
  <section id="photos" className="sec">
    <div className="photos-top">
      <div>
        <div className="sec-label">✦ Gallery</div>
        <h2 className="sec-title">Photo <span>Diary</span></h2>
      </div>
      <button className="upload-lbl" onClick={() => setPasswordModalOpen(true)}>
        + Add Photo
      </button>
    </div>

    <div className="week-tabs">
      <button 
        className="nav-arrow" 
        onClick={() => setButtonGroupStart(Math.max(0, buttonGroupStart - 5))}
        style={{opacity: buttonGroupStart === 0 ? 0.3 : 1}}
        disabled={buttonGroupStart === 0}
      >‹</button>
      {photoWeeks.slice(buttonGroupStart, buttonGroupStart + 5).map((w,i)=>(
        <button key={w} className={`w-tab ${currentPhotoWeek === buttonGroupStart + i ? "on" : ""}`} onClick={()=>setCurrentPhotoWeek(buttonGroupStart+i)}>
          {w}
        </button>
      ))}
      <button 
        className="nav-arrow" 
        onClick={() => setButtonGroupStart(Math.min(photoWeeks.length - 5, buttonGroupStart + 5))}
        style={{opacity: buttonGroupStart >= photoWeeks.length - 5 ? 0.3 : 1}}
        disabled={buttonGroupStart >= photoWeeks.length - 5}
      >›</button>
    </div>

    <div className="photo-grid">
      {photos.map((p,i)=>(
        <div className="photo-card" key={p.id || i}>
          {p.src ? <img src={p.src} alt={p.label || `Photo ${i + 1}`} /> : (
            <div className="photo-ph" style={{background:p.color || placeholderColors[i%placeholderColors.length]}}>
              🌸<small>Upload Photo</small>
            </div>
          )}
        </div>
      ))}
    </div>
  </section>

  {/* PASSWORD MODAL */}
  {passwordModalOpen && (
    <div className="overlay" onClick={() => setPasswordModalOpen(false)}>
      <div className="modal" onClick={e => e.stopPropagation()}>
        <button className="modal-x" onClick={() => setPasswordModalOpen(false)}>✕</button>
        <span className="modal-emoji">🔐</span>
        <div className="modal-title">Enter Password</div>
        <p style={{color: "var(--muted)", textAlign: "center", margin: "16px 0"}}>
          Please enter password to access photo upload
        </p>
        <div style={{margin: "20px 0"}}>
          <input 
            type="password" 
            placeholder="Enter password..."
            style={{
              width: "100%",
              padding: "14px 18px",
              border: "2px solid var(--pink-m)",
              borderRadius: "12px",
              fontSize: "16px",
              outline: "none",
              fontFamily: "'DM Sans', sans-serif"
            }}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handlePasswordSubmit(e.target.value);
              }
            }}
            autoFocus
          />
          {passwordError && (
            <p style={{color: "#ef4444", fontSize: "14px", marginTop: "8px", textAlign: "center"}}>
              {passwordError}
            </p>
          )}
        </div>
        <div style={{display: "flex", gap: "12px", justifyContent: "center"}}>
          <button 
            className="btn-main" 
            onClick={() => {
              const input = document.querySelector('input[type="password"]');
              handlePasswordSubmit(input.value);
            }}
          >
            Submit
          </button>
          <button 
            className="btn-ghost" 
            onClick={() => setPasswordModalOpen(false)}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  )}

  {/* UPLOAD MODAL */}
  {uploadModalOpen && (
    <div className="overlay" onClick={() => setUploadModalOpen(false)}>
      <div className="modal" onClick={e => e.stopPropagation()}>
        <button className="modal-x" onClick={() => setUploadModalOpen(false)}>✕</button>
        <span className="modal-emoji">📷</span>
        <div className="modal-title">Upload Photo</div>
        
        {/* Week Selection */}
        <div style={{margin: "20px 0"}}>
          <p style={{color: "var(--muted)", textAlign: "center", margin: "0 0 12px 0", fontSize: "14px"}}>
            Select week to upload photo:
          </p>
          <div style={{display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "8px"}}>
            {photoWeeks.map((week) => (
              <button
                key={week}
                onClick={() => setSelectedUploadWeek(week)}
                style={{
                  padding: "8px 12px",
                  border: selectedUploadWeek === week ? "2px solid var(--pink)" : "2px solid var(--pink-m)",
                  borderRadius: "12px",
                  background: selectedUploadWeek === week ? "var(--pink)" : "#fff",
                  color: selectedUploadWeek === week ? "#fff" : "var(--muted)",
                  fontSize: "12px",
                  cursor: "pointer",
                  transition: "all 0.2s"
                }}
              >
                {week}
              </button>
            ))}
          </div>
        </div>

        <div className="upload-area" style={{
          border: "2px dashed var(--pink-m)",
          borderRadius: "16px",
          padding: "40px 20px",
          textAlign: "center",
          background: "var(--pink-l)",
          margin: "20px 0",
          cursor: "pointer",
          transition: "all 0.3s ease"
        }}>
          <input 
            id="modal-photo-upload" 
            type="file" 
            accept="image/*" 
            style={{display:"none"}} 
            onChange={(e) => {
              handleUpload(e);
              setUploadModalOpen(false);
            }}
          />
          <label htmlFor="modal-photo-upload" style={{cursor: "pointer", display: "block"}}>
            <div style={{fontSize: "48px", marginBottom: "16px"}}>📸</div>
            <p style={{margin: "0 0 8px 0", color: "var(--muted)", fontSize: "16px"}}>
              Click to browse or drag and drop
            </p>
            <p style={{margin: 0, color: "var(--pink)", fontSize: "14px", fontWeight: "500"}}>
              Supports: JPG, PNG, GIF, WebP
            </p>
          </label>
        </div>
        <div style={{display: "flex", gap: "12px", justifyContent: "center", marginTop: "24px"}}>
          <button 
            className="btn-main" 
            onClick={() => document.getElementById('modal-photo-upload').click()}
          >
            Choose File
          </button>
          <button 
            className="btn-ghost" 
            onClick={() => setUploadModalOpen(false)}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  )}

  {/* VIDEOS */}
  <section id="videos" className="sec">
    <div style={{textAlign:"center"}}>
      <div className="sec-label" style={{margin:"0 auto 14px"}}>✦ Learning</div>
      <h2 className="sec-title">What I've learned in <span>BU Cluster II</span></h2>
    </div>
    <div style={{maxWidth:"800px", margin:"40px auto"}}>
      <p style={{fontSize:"1rem", lineHeight:"1.8", color:"var(--muted)", textAlign:"justify"}}>
        My internship at BU Cluster II helped me grow in both technical and professional aspects. I learned how to handle office documents properly, organize records, digitize files, and understand the flow of administrative transactions. I also improved my skills in designing interfaces, developing system features, connecting databases, testing functions, and solving technical problems. More than the technical skills, this experience taught me responsibility, patience, communication, time management, and confidence in working with others.
      </p>
    </div>
  </section>

  {/* WAVE DIVIDER */}
  <div className="wave-divider-videos"></div>

  {/* CONCLUSION */}
  <section id="conclusion" className="sec" style={{background:"#fff"}}>
    <div className="about-grid">
      <div className="about-blob-wrap">
        <div className="about-sticker">Internship Journey!</div>
        <div style={{marginTop:20, position:"relative", display:"inline-block"}}>
          {/* Cute side decorations */}
          <div style={{
            position:"absolute",
            top:"-15px",
            left:"-25px",
            fontSize:"18px",
            zIndex:3,
            animation:"floatUp 4s ease-in-out infinite"
          }}>🌷</div>
          <div style={{
            position:"absolute",
            top:"-10px",
            right:"-20px",
            fontSize:"16px",
            zIndex:3,
            animation:"floatUp 4s ease-in-out 1s infinite"
          }}>🦋</div>
          <div style={{
            position:"absolute",
            bottom:"-15px",
            left:"-20px",
            fontSize:"17px",
            zIndex:3,
            animation:"floatUp 4s ease-in-out 2s infinite"
          }}>🌺</div>
          <div style={{
            position:"absolute",
            bottom:"-10px",
            right:"-25px",
            fontSize:"15px",
            zIndex:3,
            animation:"floatUp 4s ease-in-out 3s infinite"
          }}>🌼</div>
          
          {/* Floating sparkles */}
          <div style={{
            position:"absolute",
            top:"20px",
            left:"-30px",
            fontSize:"12px",
            zIndex:3,
            animation:"twinkle 2s ease-in-out infinite"
          }}>✨</div>
          <div style={{
            position:"absolute",
            top:"40px",
            right:"-35px",
            fontSize:"10px",
            zIndex:3,
            animation:"twinkle 2s ease-in-out 0.5s infinite"
          }}>✨</div>
          <div style={{
            position:"absolute",
            bottom:"30px",
            left:"-35px",
            fontSize:"11px",
            zIndex:3,
            animation:"twinkle 2s ease-in-out 1s infinite"
          }}>⭐</div>
          <div style={{
            position:"absolute",
            bottom:"20px",
            right:"-30px",
            fontSize:"13px",
            zIndex:3,
            animation:"twinkle 2s ease-in-out 1.5s infinite"
          }}>🌟</div>
          
          {/* Cute ribbon bows */}
          <div style={{
            position:"absolute",
            top:"50%",
            left:"-45px",
            transform:"translateY(-50%)",
            width:"40px",
            height:"40px",
            zIndex:2,
            fontSize:"24px",
            animation:"morph 6s ease-in-out infinite"
          }}>🎀</div>
          <div style={{
            position:"absolute",
            top:"50%",
            right:"-45px",
            transform:"translateY(-50%)",
            width:"40px",
            height:"40px",
            zIndex:2,
            fontSize:"24px",
            animation:"morph 6s ease-in-out 2s infinite"
          }}>🎀</div>
          
          {/* Soft pastel blobs */}
          <div style={{
            position:"absolute",
            top:"-20px",
            left:"-20px",
            right:"-20px",
            bottom:"-20px",
            borderRadius:"70% 30% 60% 40%/40% 60% 30% 70%",
            background:"linear-gradient(135deg, #ffe0f0 0%, #ffc0e0 25%, #ffb6c1 50%, #ffa0c0 75%, #ff80a0 100%)",
            opacity:0.4,
            zIndex:0,
            animation:"morph 10s ease-in-out infinite"
          }}></div>
          
          {/* Additional soft blob */}
          <div style={{
            position:"absolute",
            top:"10px",
            right:"-15px",
            width:"80px",
            height:"80px",
            borderRadius:"60% 40% 50% 50%/50% 60% 40% 60%",
            background:"linear-gradient(135deg, #ffe0f0, #ffb6c1)",
            opacity:0.3,
            zIndex:0,
            animation:"morph 8s ease-in-out 1.5s infinite"
          }}></div>
          
          {/* Bottom accent blob */}
          <div style={{
            position:"absolute",
            bottom:"10px",
            left:"-15px",
            width:"70px",
            height:"70px",
            borderRadius:"50% 50% 60% 40%/40% 60% 40% 60%",
            background:"linear-gradient(135deg, #ffc0e0, #ffa0c0)",
            opacity:0.35,
            zIndex:0,
            animation:"morph 7s ease-in-out 2.5s infinite"
          }}></div>
          
          {/* Main image with cute frame */}
          <div style={{
            position:"relative",
            zIndex:1,
            padding:"8px",
            background:"linear-gradient(135deg, #fff0f5, #ffe0f0)",
            borderRadius:"25px",
            display:"inline-block",
            border: "3px solid #ffb6c1",
            boxShadow: "0 8px 32px rgba(255,182,193,0.2)"
          }}>
            <img 
              src="/images/Lainey_Student_Unif.jpg" 
              alt="Lainey in Student Uniform" 
              style={{
                width: "100%",
                maxWidth: "240px",
                height: "auto",
                borderRadius:"40% 60% 60% 40% / 40% 40% 60% 60%",
                display: "block",
                objectFit: "cover",
                aspectRatio: "3/4",
                border: "2px solid #fff"
              }}
            />
          </div>
        </div>
      </div>
      <div>
        <div className="sec-label">✦ Experience</div>
        <h2 className="sec-title">Lainey's <span>Internship Chronicles</span></h2>
        <div className="about-text" style={{marginTop:0}}>
          <p>My internship at the Bicol University Cluster II Administrative Office became a meaningful part of my academic journey as an Information Technology student. Throughout my 486 hours of training, I was able to experience both clerical and technical responsibilities, from managing documents and organizing records to developing the Cluster II Document Record Management System.</p>
          <p style={{marginTop:14}}>This experience helped me become more confident, responsible, flexible, and resourceful. It showed me that I can handle multiple responsibilities, solve problems independently, and continue learning even when faced with challenges.</p>
        </div>
        <div className="hero-btns" style={{ marginTop: 28 }}>
          <button
            className="btn-ghost"
            onClick={() =>
              (window.location.href =
                "mailto:elainebertiz258@gmail.com?subject=Hello%20Elaine&body=Hi%20Elaine,%0A%0A")
            }
          >
            Contact Me 💌
          </button>
          <button
            className="btn-ghost"
            onClick={() => window.open("https://linkedin.com", "_blank")}
          >
            LinkedIn Profile →
          </button>
        </div>
      </div>
    </div>
  </section>

  {/* FOOTER */}
  <footer>
    <span className="f-logo">Lainey's Blog 🌸</span>
    <ul className="f-links">
      
    </ul>
    <span className="f-copy">©2026 Elaine Mae A. Bertiz · BSIT 4C 💗</span>
  </footer>
</>

);}