import React, { useState, useEffect } from "react";

function FloatingHearts() {
  const items = ["🌸","💗","✨","🎀","💕","⭐","🌷","💖","🩷","🌺"];
  return (
    <div style={{ position:"absolute", inset:0, overflow:"hidden", pointerEvents:"none", zIndex:0 }}>
      {Array.from({ length: 16 }).map((_, i) => (
        <span key={i} style={{
          position:"absolute", bottom:-40,
          left: `${(i * 19 + 3) % 100}%`,
          fontSize: `${0.8 + (i % 3) * 0.35}rem`,
          opacity: 0.2,
          animation: `floatUp ${7 + (i % 5)}s linear ${(i * 0.6) % 5}s infinite`,
          userSelect:"none",
        }}>{items[i % items.length]}</span>
      ))}
    </div>
  );
}

const weekBlogs = {
  "Week 1": { title:"Orientation to Bicol University Cluster II Administrative Office and Task Assignment", content:"During this week, we started with simple office tasks to help us become familiar with the working environment of Cluster II Administrative Office. Ma'am Mitch assigned me to prepare the attendance sheet for the whole month of February and print the Officer of the Day schedule for the same month. I was also assigned to help fix and organize the table where all staff members record their attendance every day. These tasks may seem simple, but they helped me understand the importance of organization and accuracy in office work. I made sure that all files and printed documents were complete and properly arranged before submitting them. On Friday, we had a meeting with all the administrative officers where Ma'am Mitch formally introduced us to the office workflow and assigned each of us our respective mentors who would guide us throughout our internship. After explaining how the office processes documents and handles daily transactions, she assigned me another task, which was to generate QR codes for office forms to make them easily accessible for faculty members whenever they need forms related to cash advances, liquidation, and other office transactions. I completed the QR codes, organized them properly, and submitted them through Google Drive before the end of the day." },
  "Week 2": { title:"Organization and Sorting of Office Documents", content:"This week, we officially started working with our assigned mentors. I was assigned to Ma'am Mau, who handles incoming and outgoing documents in the office. Before introducing me to the actual document handling process, Ma'am Mau first assigned me to organize and sort files stored in the storage room. I spent most of the week reviewing, filing, and arranging documents according to their proper classifications. Some documents had been stored for a long time, so proper sorting and organization were needed to make them easier to access whenever needed. I handled different documents from various colleges under Cluster II, including files from BUCAL, BUGS, BUCL, BULC, BUJMRIGD, and BUCDM. Although the work involved handling a large number of papers, it helped me develop patience, attention to detail, and a better understanding of how records are managed in an administrative office. I made sure that all assigned documents were properly organized and completed within the week so that we could proceed to handling actual incoming and outgoing documents the following week." },
  "Week 3": { title:"Handling of Incoming and Outgoing Documents and Disbursement Vouchers", content:"During this week, Ma'am Mau taught me how to properly record incoming and outgoing documents and how to handle disbursement vouchers. She explained the step-by-step process of logging document details, recording transactions, and routing documents to the appropriate offices for approval and processing. At first, I carefully observed how she performed the tasks, and after understanding the process, I was gradually entrusted to do the work on my own under her guidance. As the week progressed, I became more involved in the daily operations of the office. There were times when I needed to visit different colleges and offices to secure signatures from deans and other authorized personnel in order to complete document processing. I was responsible for recording and monitoring documents that entered and left the Cluster II Administrative Office every day. Whenever there was free time, Ma'am Mau would also assign me additional tasks such as sorting and organizing files. This week helped me become more confident in handling office documents and managing administrative responsibilities independently." },
  "Week 4": { title:"Record Digitalization and Continued Handling of Incoming and Outgoing Documents and Disbursement Vouchers", content:"During this week, I continued handling incoming and outgoing documents, as well as recording and monitoring disbursement vouchers in the Cluster II Administrative Office. Since the number of documents coming in was manageable, I was able to balance my regular responsibilities while assisting with other office tasks. By this time, I had already become more familiar with the workflow, which allowed me to handle document tracking with more confidence and accuracy. I made sure that every document was properly recorded before being forwarded to the appropriate office or personnel. Whenever there were fewer documents to process, Ma'am Mitch assigned me to digitize all the records from the logbooks for incoming and outgoing documents, including disbursement vouchers. I carefully transferred the records into Google Sheets to create digital copies for easier tracking and backup purposes. Aside from digitization, Ma'am Mau also assigned me additional tasks such as shredding unnecessary documents and preparing attendance sheets for the months of March, April, and May. This week allowed me to experience both physical and digital record management." },
  "Week 5": { title:"Concept Development and Data Gathering for the Cluster II Document Record Management System", content:"For this week, I continued handling incoming and outgoing documents, recording disbursement vouchers, and updating digital records. While working on these tasks every day, I noticed how time-consuming it was to search for old records manually, especially when there were already large volumes of documents being handled in the office. This observation gave me the idea of creating a system that could store records digitally and make document tracking easier and faster for the Cluster II Administrative Office. I presented this concept to Ma'am Mitch, and she appreciated and approved the idea. After discussing the concept, Sir Davie assigned a capstone group to work on developing the full system since system development would require a team and more time. It was then decided that I would guide the capstone group while also creating a small temporary system that Cluster II could use while the full system was still under development. Throughout the week, I started gathering data, identifying system requirements, and observing the office workflow more closely while continuing my regular document management responsibilities." },
  "Week 6": { title:"Continued Data Gathering and Initial Prototype Development of the Cluster II Document Record Management System", content:"This week, I continued managing document tracking while also focusing on gathering the necessary information needed for the development of the system. I observed the workflow more carefully and listed the features, forms, and records that needed to be included in the system. I also presented my initial concept and ideas to Ma'am Mitch to gather her suggestions and make sure that the system would match the actual needs of the office. At the same time, I started using Figma to visualize the system design and create the initial interface. I designed several webpages and adjusted the layout based on Ma'am Mitch's feedback and recommendations. Aside from system development, I continued assisting Ma'am Mau with document sorting and other urgent office tasks. I also helped guide the capstone group by creating a workflow and explaining the office process so they could better understand the system requirements." },
  "Week 7": { title:"Prototype Enhancement and Feature Development of the C2DRMS", content:"During this week, I continued improving the system prototype by enhancing the Figma design and making adjustments based on the required features and office needs. I focused on refining the user interface and organizing the layout to make it more suitable for document record management. I also reviewed the workflow to make sure that the design aligned with the actual processes in the office. This week became more challenging because there were changes in task assignments within our internship group. Kristelle was reassigned to a different office and turned over some of her tasks to me. At the same time, my mentorship assignment also changed, and I was now assigned under Ma'am Rubs and Ma'am Jing. Because of these changes, I received additional responsibilities while continuing to work on the system prototype and managing my regular office tasks." },
  "Week 8": { title:"Frontend Integration of the C2DRMS and System Presentation with Capstone Group", content:"This week, I officially completed the Figma design of the system and started working on the frontend development. I began transforming the design into an actual working interface while making sure that the pages followed the approved layout and requirements. I also continued assisting the capstone group by providing them with the information and workflow they needed for their system development. Aside from development work, I also handled several office tasks assigned by Ma'am Jing and Ma'am Rubs. These included sorting urgent documents, organizing files with deadlines, and compiling important records such as faculty Form 7 documents. Due to the heavy workload this week, my progress in frontend development was gradual, but I still managed to complete important parts of the interface while balancing my office responsibilities." },
  "Week 9": { title:"Frontend Refinement of the C2DRMS and Document Digitization", content:"During this week, I continued working on the frontend design of the system with the goal of completing it before the end of the week. I focused on improving the layout, navigation, and overall user interface to make sure that it would be functional and easy to use. I reviewed each page carefully and fixed any design issues that I encountered during development. At the same time, I continued helping Ma'am Rubs with document-related tasks that had deadlines. I digitized some records assigned to me and reviewed several entries in Google Sheets to make sure that the information was accurate and complete. By the end of the week, I presented the frontend design to Ma'am Mitch to gather her feedback and identify any adjustments needed before proceeding to backend development." },
  "Week 10": { title:"Backend Integration and Functional Development of the C2DRMS", content:"For this week, I finalized the frontend design and implemented the adjustments suggested by Ma'am Mitch. After completing the user interface, I officially started working on the backend development of the Cluster II Document Record Management System. I began building the core functionalities needed for record storage, document tracking, and data management. Aside from system development, I continued helping Ma'am Rubs with document preparation. I sorted important records and photocopied faculty documents to prepare multiple copies for the administration, Human Resources, and backup purposes. Although I encountered some technical challenges while working on certain webpages, I continued troubleshooting and balancing my development tasks with my office responsibilities." },
  "Week 11": { title:"Backend Enhancement and System Function Testing of the C2DRMS", content:"This week, I continued working on the backend development of the system and focused on implementing the necessary functionalities and data processing features. I carefully tested different parts of the system to make sure that each page and function was working properly before moving to the next phase of development. At the same time, Ma'am Rubs assigned me to double-check faculty documents and bind the photocopied records that I prepared the previous week. I carefully reviewed each document to make sure that all files were complete, properly arranged, and ready for submission. After completing these tasks, I continued system development and started preparing for database integration." },
  "Week 12": { title:"Database Integration and Faculty Thesis Fee Record Sorting", content:"During this week, I successfully connected the database to the system and started integrating the records into the platform. I focused on making sure that the system could properly store, retrieve, and organize document records according to the office workflow. This was an important stage in development because it allowed the system to become more functional and closer to completion. Aside from system development, Ma'am Jing assigned me to sort each faculty member's thesis fee records so that pending payments could be monitored properly. Throughout the week, I balanced office responsibilities with system debugging and testing. I spent most of my time doing trial-and-error testing, identifying errors, and fixing issues found in the system." },
  "Week 13": { title:"System Finalization and Faculty Thesis Fee Record Verification", content:"This week, I focused on finalizing the Cluster II Document Record Management System by fixing remaining errors, improving system performance, and adjusting features based on testing results. I reviewed each function carefully to make sure that the system was stable and ready for presentation. At the same time, I continued organizing faculty thesis fee records in Google Sheets and updating missing information whenever necessary. By the end of the week, I successfully completed the final adjustments to the system and prepared all necessary materials for the final presentation scheduled for the following week." },
  "Week 14": { title:"Presentation of the C2DRMS and Finalizing Documents", content:"For my final week in the office, I focused on preparing for the presentation of the Cluster II Document Record Management System. I reviewed the features, tested the functionalities, and made final adjustments to ensure that everything would work properly during the demonstration. I also prepared myself to explain the purpose, workflow, and features of the system to the administrative officers. During the presentation, I presented the system to all the administrative officers of the Cluster II Administrative Office, including Ma'am Mitch. I explained how the system works, demonstrated its features, and answered their questions regarding its functions and possible improvements. Since it was my last week of internship, Ma'am Mitch informed me that they would coordinate with the Information and Communications Technology Office for the deployment of the system. Although my OJT had officially ended, I was asked to continue assisting during the deployment process if needed." },
};

const photoWeeks = ["Week 1","Week 2","Week 3","Week 4","Week 5","Week 6","Week 7","Week 8","Week 9","Week 10","Week 11","Week 12","Week 13","Week 14"];
const placeholderColors = ["#fce7f3","#fef3c7","#d1fae5","#dbeafe","#ede9fe","#fce7f3","#fef3c7","#d1fae5","#dbeafe","#ede9fe","#fce7f3","#fef3c7"];
const limitPhotos = (items = []) => items.slice(0, 4);

// Different photos for each week
const weekPhotos = {
  "Week 1": [
    { id:1, src:"https://picsum.photos/seed/week1-1/300/300.jpg", color:"#fce7f3", label:"Setup Day 🖥️" },
    { id:2, src:"https://picsum.photos/seed/week1-2/300/300.jpg", color:"#fef3c7", label:"First Code 💻" },
    { id:3, src:"https://picsum.photos/seed/week1-3/300/300.jpg", color:"#d1fae5", label:"Learning 📚" },
    { id:4, src:"https://picsum.photos/seed/week1-4/300/300.jpg", color:"#dbeafe", label:"Environment 🌱" },
    { id:5, src:"https://picsum.photos/seed/week1-5/300/300.jpg", color:"#ede9fe", label:"Tools 🔧" },
    { id:6, src:"https://picsum.photos/seed/week1-6/300/300.jpg", color:"#fce7f3", label:"Progress 📈" },
  ],
  "Week 13": [
    { id:13, src:"https://picsum.photos/seed/week13-1/300/300.jpg", color:"#e0f2fe", label:"Advanced Patterns 🎯" },
    { id:14, src:"https://picsum.photos/seed/week13-2/300/300.jpg", color:"#fbbf24", label:"Architecture 🏗️" },
    { id:15, src:"https://picsum.photos/seed/week13-3/300/300.jpg", color:"#fef3c7", label:"Performance ⚡" },
    { id:16, src:"https://picsum.photos/seed/week13-4/300/300.jpg", color:"#dbeafe", label:"Optimization 🔧" },
    { id:17, src:"https://picsum.photos/seed/week13-5/300/300.jpg", color:"#ede9fe", label:"Best Practices 📋" },
    { id:18, src:"https://picsum.photos/seed/week13-6/300/300.jpg", color:"#fce7f3", label:"Code Quality 🏆" },
  ],
  "Week 14": [
    { id:19, src:"https://picsum.photos/seed/week14-1/300/300.jpg", color:"#f0abfc", label:"Full Stack 🚀" },
    { id:20, src:"https://picsum.photos/seed/week14-2/300/300.jpg", color:"#dbeafe", label:"DevOps 🛠️" },
    { id:21, src:"https://picsum.photos/seed/week14-3/300/300.jpg", color:"#fef3c7", label:"Deployment 🌐" },
    { id:22, src:"https://picsum.photos/seed/week14-4/300/300.jpg", color:"#fbbf24", label:"Production 🏭️" },
    { id:23, src:"https://picsum.photos/seed/week14-5/300/300.jpg", color:"#e0f2fe", label:"Monitoring 📊" },
    { id:24, src:"https://picsum.photos/seed/week14-6/300/300.jpg", color:"#fce7f3", label:"Success 🎉" },
  ],
  "Week 2": [
    { id:7, src:"https://picsum.photos/seed/week2-1/300/300.jpg", color:"#fef3c7", label:"CSS Magic 🎨" },
    { id:8, src:"https://picsum.photos/seed/week2-2/300/300.jpg", color:"#d1fae5", label:"Flexbox 📦" },
    { id:9, src:"https://picsum.photos/seed/week2-3/300/300.jpg", color:"#dbeafe", label:"Grid Layout 📐" },
    { id:10, src:"https://picsum.photos/seed/week2-4/300/300.jpg", color:"#ede9fe", label:"Styling ✨" },
    { id:11, src:"https://picsum.photos/seed/week2-5/300/300.jpg", color:"#fce7f3", label:"Design 🎭" },
    { id:12, src:"https://picsum.photos/seed/week2-6/300/300.jpg", color:"#fef3c7", label:"Colors 🌈" },
  ],
  "Week 3": [
    { id:13, src:"https://picsum.photos/seed/week3-1/300/300.jpg", color:"#d1fae5", label:"JavaScript 🟨" },
    { id:14, src:"https://picsum.photos/seed/week3-2/300/300.jpg", color:"#dbeafe", label:"Functions ⚡" },
    { id:15, src:"https://picsum.photos/seed/week3-3/300/300.jpg", color:"#ede9fe", label:"Arrays 📋" },
    { id:16, src:"https://picsum.photos/seed/week3-4/300/300.jpg", color:"#fce7f3", label:"Logic 🧠" },
    { id:17, src:"https://picsum.photos/seed/week3-5/300/300.jpg", color:"#fef3c7", label:"Loops 🔄" },
    { id:18, src:"https://picsum.photos/seed/week3-6/300/300.jpg", color:"#d1fae5", label:"Debugging 🐛" },
  ],
  "Week 4": [
    { id:19, src:"https://picsum.photos/seed/week4-1/300/300.jpg", color:"#dbeafe", label:"React ⚛️" },
    { id:20, src:"https://picsum.photos/seed/week4-2/300/300.jpg", color:"#ede9fe", label:"Hooks 🪝" },
    { id:21, src:"https://picsum.photos/seed/week4-3/300/300.jpg", color:"#fce7f3", label:"Components 🧩" },
    { id:22, src:"https://picsum.photos/seed/week4-4/300/300.jpg", color:"#fef3c7", label:"State 📊" },
    { id:23, src:"https://picsum.photos/seed/week4-5/300/300.jpg", color:"#d1fae5", label:"Props 📦" },
    { id:24, src:"https://picsum.photos/seed/week4-6/300/300.jpg", color:"#dbeafe", label:"Interactive 🎯" },
  ],
  "Week 5": [
    { id:25, src:"https://picsum.photos/seed/week5-1/300/300.jpg", color:"#ede9fe", label:"Mobile 📱" },
    { id:26, src:"https://picsum.photos/seed/week5-2/300/300.jpg", color:"#fce7f3", label:"Responsive 📐" },
    { id:27, src:"https://picsum.photos/seed/week5-3/300/300.jpg", color:"#fef3c7", label:"Tablet 📲" },
    { id:28, src:"https://picsum.photos/seed/week5-4/300/300.jpg", color:"#d1fae5", label:"Desktop 💻" },
    { id:29, src:"https://picsum.photos/seed/week5-5/300/300.jpg", color:"#dbeafe", label:"Media Query 📱" },
    { id:30, src:"https://picsum.photos/seed/week5-6/300/300.jpg", color:"#ede9fe", label:"Layout 🎨" },
  ],
  "Week 6": [
    { id:31, src:"https://picsum.photos/seed/week6-1/300/300.jpg", color:"#fce7f3", label:"Debugging 🔧" },
    { id:32, src:"https://picsum.photos/seed/week6-2/300/300.jpg", color:"#fef3c7", label:"Performance ⚡" },
    { id:33, src:"https://picsum.photos/seed/week6-3/300/300.jpg", color:"#d1fae5", label:"Optimization 🚀" },
    { id:34, src:"https://picsum.photos/seed/week6-4/300/300.jpg", color:"#dbeafe", label:"Clean Code 🧹" },
    { id:35, src:"https://picsum.photos/seed/week6-5/300/300.jpg", color:"#ede9fe", label:"Tools 🛠️" },
    { id:36, src:"https://picsum.photos/seed/week6-6/300/300.jpg", color:"#fce7f3", label:"Success 🎉" },
  ],
  "Week 7": [
    { id:37, src:"https://picsum.photos/seed/week7-1/300/300.jpg", color:"#fef3c7", label:"Animations ✨" },
    { id:38, src:"https://picsum.photos/seed/week7-2/300/300.jpg", color:"#d1fae5", label:"Transitions 🎭" },
    { id:39, src:"https://picsum.photos/seed/week7-3/300/300.jpg", color:"#dbeafe", label:"Micro-interactions 🎯" },
    { id:40, src:"https://picsum.photos/seed/week7-4/300/300.jpg", color:"#ede9fe", label:"UI Effects 🌟" },
    { id:41, src:"https://picsum.photos/seed/week7-5/300/300.jpg", color:"#fce7f3", label:"Motion 🎪" },
    { id:42, src:"https://picsum.photos/seed/week7-6/300/300.jpg", color:"#fef3c7", label:"Responsive Animations 📱" },
  ],
  "Week 8": [
    { id:43, src:"https://picsum.photos/seed/week8-1/300/300.jpg", color:"#d1fae5", label:"Database 🗄️" },
    { id:44, src:"https://picsum.photos/seed/week8-2/300/300.jpg", color:"#dbeafe", label:"SQL 💾" },
    { id:45, src:"https://picsum.photos/seed/week8-3/300/300.jpg", color:"#ede9fe", label:"Data Modeling 📊" },
    { id:46, src:"https://picsum.photos/seed/week8-4/300/300.jpg", color:"#fce7f3", label:"Backend 🔌" },
    { id:47, src:"https://picsum.photos/seed/week8-5/300/300.jpg", color:"#fef3c7", label:"API Connection 🌐" },
    { id:48, src:"https://picsum.photos/seed/week8-6/300/300.jpg", color:"#d1fae5", label:"Data Flow 🔄" },
  ],
  "Week 9": [
    { id:49, src:"https://picsum.photos/seed/week9-1/300/300.jpg", color:"#dbeafe", label:"Security 🔐" },
    { id:50, src:"https://picsum.photos/seed/week9-2/300/300.jpg", color:"#ede9fe", label:"Authentication 👤" },
    { id:51, src:"https://picsum.photos/seed/week9-3/300/300.jpg", color:"#fce7f3", label:"JWT Tokens 🎫" },
    { id:52, src:"https://picsum.photos/seed/week9-4/300/300.jpg", color:"#fef3c7", label:"User Safety 🛡️" },
    { id:53, src:"https://picsum.photos/seed/week9-5/300/300.jpg", color:"#d1fae5", label:"Encryption 🔒" },
    { id:54, src:"https://picsum.photos/seed/week9-6/300/300.jpg", color:"#dbeafe", label:"Security Best Practices 📋" },
  ],
  "Week 10": [
    { id:55, src:"https://picsum.photos/seed/week10-1/300/300.jpg", color:"#ede9fe", label:"Testing 🧪" },
    { id:56, src:"https://picsum.photos/seed/week10-2/300/300.jpg", color:"#fce7f3", label:"Unit Tests 🔬" },
    { id:57, src:"https://picsum.photos/seed/week10-3/300/300.jpg", color:"#fef3c7", label:"Integration Tests 🔗" },
    { id:58, src:"https://picsum.photos/seed/week10-4/300/300.jpg", color:"#d1fae5", label:"Testable Code 📝" },
    { id:59, src:"https://picsum.photos/seed/week10-5/300/300.jpg", color:"#dbeafe", label:"Bug Prevention 🐛" },
    { id:60, src:"https://picsum.photos/seed/week10-6/300/300.jpg", color:"#ede9fe", label:"Quality Assurance ✅" },
  ],
  "Week 11": [
    { id:61, src:"https://picsum.photos/seed/week11-1/300/300.jpg", color:"#fce7f3", label:"API Integration 📊" },
    { id:62, src:"https://picsum.photos/seed/week11-2/300/300.jpg", color:"#fef3c7", label:"External APIs 🌐" },
    { id:63, src:"https://picsum.photos/seed/week11-3/300/300.jpg", color:"#d1fae5", label:"Async Data ⚡" },
    { id:64, src:"https://picsum.photos/seed/week11-4/300/300.jpg", color:"#dbeafe", label:"Error Handling ⚠️" },
    { id:65, src:"https://picsum.photos/seed/week11-5/300/300.jpg", color:"#ede9fe", label:"Real-world Apps 🏢" },
    { id:66, src:"https://picsum.photos/seed/week11-6/300/300.jpg", color:"#fce7f3", label:"Service Communication 📡" },
  ],
  "Week 12": [
    { id:67, src:"https://picsum.photos/seed/week12-1/300/300.jpg", color:"#fef3c7", label:"Final Project 🎓" },
    { id:68, src:"https://picsum.photos/seed/week12-2/300/300.jpg", color:"#d1fae5", label:"Frontend 🎨" },
    { id:69, src:"https://picsum.photos/seed/week12-3/300/300.jpg", color:"#dbeafe", label:"Backend 🔧" },
    { id:70, src:"https://picsum.photos/seed/week12-4/300/300.jpg", color:"#ede9fe", label:"Database 🗄️" },
    { id:71, src:"https://picsum.photos/seed/week12-5/300/300.jpg", color:"#fce7f3", label:"Deployment 🚀" },
    { id:72, src:"https://picsum.photos/seed/week12-6/300/300.jpg", color:"#fef3c7", label:"Success & Future 🌟"},
  ],
  "Week 13": [
    { id:61, src:"https://picsum.photos/seed/week11-1/300/300.jpg", color:"#fce7f3", label:"API Integration 📊" },
    { id:62, src:"https://picsum.photos/seed/week11-2/300/300.jpg", color:"#fef3c7", label:"External APIs 🌐" },
    { id:63, src:"https://picsum.photos/seed/week11-3/300/300.jpg", color:"#d1fae5", label:"Async Data ⚡" },
    { id:64, src:"https://picsum.photos/seed/week11-4/300/300.jpg", color:"#dbeafe", label:"Error Handling ⚠️" },
    { id:65, src:"https://picsum.photos/seed/week11-5/300/300.jpg", color:"#ede9fe", label:"Real-world Apps 🏢" },
    { id:66, src:"https://picsum.photos/seed/week11-6/300/300.jpg", color:"#fce7f3", label:"Service Communication 📡" },
  ],
  "Week 14": [
    { id:67, src:"https://picsum.photos/seed/week12-1/300/300.jpg", color:"#fef3c7", label:"Final Project 🎓" },
    { id:68, src:"https://picsum.photos/seed/week12-2/300/300.jpg", color:"#d1fae5", label:"Frontend 🎨" },
    { id:69, src:"https://picsum.photos/seed/week12-3/300/300.jpg", color:"#dbeafe", label:"Backend 🔧" },
    { id:70, src:"https://picsum.photos/seed/week12-4/300/300.jpg", color:"#ede9fe", label:"Database 🗄️" },
    { id:71, src:"https://picsum.photos/seed/week12-5/300/300.jpg", color:"#fce7f3", label:"Deployment 🚀" },
    { id:72, src:"https://picsum.photos/seed/week12-6/300/300.jpg", color:"#fef3c7", label:"Success & Future 🌟"},
  ],
};

export default function Blog() {
  const [blogOpen, setBlogOpen] = useState(null);
  const [activeBlogWeek, setActiveBlogWeek] = useState(0);
  const [hoveredWeek, setHoveredWeek] = useState(null);
  const [activePhotoWeek, setActivePhotoWeek] = useState(0);
  const [currentPhotoWeek, setCurrentPhotoWeek] = useState(0);
  const [buttonGroupStart, setButtonGroupStart] = useState(0);
  const [photos, setPhotos] = useState(limitPhotos(weekPhotos["Week 1"]));
  const [uploadModalOpen, setUploadModalOpen] = useState(false);
  const [passwordModalOpen, setPasswordModalOpen] = useState(false);
  const [passwordError, setPasswordError] = useState("");
  const [selectedUploadWeek, setSelectedUploadWeek] = useState("Week 1");
  const [editableWeekPhotos, setEditableWeekPhotos] = useState({
    "Week 1": [
      { id:1, src:"https://picsum.photos/seed/week1-1/300/300.jpg", color:"#fce7f3", label:"Setup Day 🖥️" },
      { id:2, src:"https://picsum.photos/seed/week1-2/300/300.jpg", color:"#fef3c7", label:"First Code 💻" },
      { id:3, src:"https://picsum.photos/seed/week1-3/300/300.jpg", color:"#d1fae5", label:"Learning 📚" },
      { id:4, src:"https://picsum.photos/seed/week1-4/300/300.jpg", color:"#dbeafe", label:"Environment 🌱" },
      { id:5, src:"https://picsum.photos/seed/week1-5/300/300.jpg", color:"#ede9fe", label:"Tools 🔧" },
      { id:6, src:"https://picsum.photos/seed/week1-6/300/300.jpg", color:"#fce7f3", label:"Progress 📈" },
    ],
    "Week 2": [
      { id:7, src:"https://picsum.photos/seed/week2-1/300/300.jpg", color:"#fef3c7", label:"CSS Magic 🎨" },
      { id:8, src:"https://picsum.photos/seed/week2-2/300/300.jpg", color:"#d1fae5", label:"Flexbox 📦" },
      { id:9, src:"https://picsum.photos/seed/week2-3/300/300.jpg", color:"#dbeafe", label:"Grid Layout 📐" },
      { id:10, src:"https://picsum.photos/seed/week2-4/300/300.jpg", color:"#ede9fe", label:"Styling ✨" },
      { id:11, src:"https://picsum.photos/seed/week2-5/300/300.jpg", color:"#fce7f3", label:"Design 🎭" },
      { id:12, src:"https://picsum.photos/seed/week2-6/300/300.jpg", color:"#fef3c7", label:"Colors 🌈" },
    ],
    "Week 3": [
      { id:13, src:"https://picsum.photos/seed/week3-1/300/300.jpg", color:"#d1fae5", label:"JavaScript 🟨" },
      { id:14, src:"https://picsum.photos/seed/week3-2/300/300.jpg", color:"#dbeafe", label:"Functions ⚡" },
      { id:15, src:"https://picsum.photos/seed/week3-3/300/300.jpg", color:"#ede9fe", label:"Arrays 📊" },
      { id:16, src:"https://picsum.photos/seed/week3-4/300/300.jpg", color:"#fce7f3", label:"Objects 🏗️" },
      { id:17, src:"https://picsum.photos/seed/week3-5/300/300.jpg", color:"#fef3c7", label:"DOM 🌐" },
      { id:18, src:"https://picsum.photos/seed/week3-6/300/300.jpg", color:"#d1fae5", label:"Events 🎯" },
    ],
    "Week 4": [
      { id:19, src:"https://picsum.photos/seed/week4-1/300/300.jpg", color:"#dbeafe", label:"React ⚛️" },
      { id:20, src:"https://picsum.photos/seed/week4-2/300/300.jpg", color:"#ede9fe", label:"Components 🧩" },
      { id:21, src:"https://picsum.photos/seed/week4-3/300/300.jpg", color:"#fce7f3", label:"State 🔄" },
      { id:22, src:"https://picsum.photos/seed/week4-4/300/300.jpg", color:"#fef3c7", label:"Props 📦" },
      { id:23, src:"https://picsum.photos/seed/week4-5/300/300.jpg", color:"#d1fae5", label:"Hooks 🎣" },
      { id:24, src:"https://picsum.photos/seed/week4-6/300/300.jpg", color:"#dbeafe", label:"Lifecycle 🔄" },
    ],
    "Week 5": [
      { id:25, src:"https://picsum.photos/seed/week5-1/300/300.jpg", color:"#ede9fe", label:"API 🌐" },
      { id:26, src:"https://picsum.photos/seed/week5-2/300/300.jpg", color:"#fce7f3", label:"Fetch 📡" },
      { id:27, src:"https://picsum.photos/seed/week5-3/300/300.jpg", color:"#fef3c7", label:"JSON 📄" },
      { id:28, src:"https://picsum.photos/seed/week5-4/300/300.jpg", color:"#d1fae5", label:"Async ⏳" },
      { id:29, src:"https://picsum.photos/seed/week5-5/300/300.jpg", color:"#dbeafe", label:"Promise 🤝" },
      { id:30, src:"https://picsum.photos/seed/week5-6/300/300.jpg", color:"#ede9fe", label:"Error Handling ⚠️" },
    ],
    "Week 6": [
      { id:31, src:"https://picsum.photos/seed/week6-1/300/300.jpg", color:"#fce7f3", label:"Database 🗄️" },
      { id:32, src:"https://picsum.photos/seed/week6-2/300/300.jpg", color:"#fef3c7", label:"SQL 📊" },
      { id:33, src:"https://picsum.photos/seed/week6-3/300/300.jpg", color:"#d1fae5", label:"Tables 📋" },
      { id:34, src:"https://picsum.photos/seed/week6-4/300/300.jpg", color:"#dbeafe", label:"Queries 🔍" },
      { id:35, src:"https://picsum.photos/seed/week6-5/300/300.jpg", color:"#ede9fe", label:"Joins 🔗" },
      { id:36, src:"https://picsum.photos/seed/week6-6/300/300.jpg", color:"#fce7f3", label:"Migration 🚚" },
    ],
    "Week 7": [
      { id:37, src:"https://picsum.photos/seed/week7-1/300/300.jpg", color:"#fef3c7", label:"Backend 🖥️" },
      { id:38, src:"https://picsum.photos/seed/week7-2/300/300.jpg", color:"#d1fae5", label:"Node.js 🟢" },
      { id:39, src:"https://picsum.photos/seed/week7-3/300/300.jpg", color:"#dbeafe", label:"Express 🚂" },
      { id:40, src:"https://picsum.photos/seed/week7-4/300/300.jpg", color:"#ede9fe", label:"Routes 🛣️" },
      { id:41, src:"https://picsum.photos/seed/week7-5/300/300.jpg", color:"#fce7f3", label:"Middleware 🔌" },
      { id:42, src:"https://picsum.photos/seed/week7-6/300/300.jpg", color:"#fef3c7", label:"Authentication 🔐" },
    ],
    "Week 8": [
      { id:43, src:"https://picsum.photos/seed/week8-1/300/300.jpg", color:"#d1fae5", label:"Testing 🧪" },
      { id:44, src:"https://picsum.photos/seed/week8-2/300/300.jpg", color:"#dbeafe", label:"Unit Tests 🧪" },
      { id:45, src:"https://picsum.photos/seed/week8-3/300/300.jpg", color:"#ede9fe", label:"Integration 🔗" },
      { id:46, src:"https://picsum.photos/seed/week8-4/300/300.jpg", color:"#fce7f3", label:"Debugging 🐛" },
      { id:47, src:"https://picsum.photos/seed/week8-5/300/300.jpg", color:"#fef3c7", label:"Coverage 📊" },
      { id:48, src:"https://picsum.photos/seed/week8-6/300/300.jpg", color:"#d1fae5", label:"CI/CD 🔄" },
    ],
    "Week 9": [
      { id:49, src:"https://picsum.photos/seed/week9-1/300/300.jpg", color:"#dbeafe", label:"Security 🔐" },
      { id:50, src:"https://picsum.photos/seed/week9-2/300/300.jpg", color:"#ede9fe", label:"JWT 🎫" },
      { id:51, src:"https://picsum.photos/seed/week9-3/300/300.jpg", color:"#fce7f3", label:"Encryption 🔒" },
      { id:52, src:"https://picsum.photos/seed/week9-4/300/300.jpg", color:"#fef3c7", label:"Hashing 🔢" },
      { id:53, src:"https://picsum.photos/seed/week9-5/300/300.jpg", color:"#d1fae5", label:"Sessions 📝" },
      { id:54, src:"https://picsum.photos/seed/week9-6/300/300.jpg", color:"#dbeafe", label:"Best Practices 🛡️" },
    ],
    "Week 10": [
      { id:55, src:"https://picsum.photos/seed/week10-1/300/300.jpg", color:"#ede9fe", label:"Deployment 🚀" },
      { id:56, src:"https://picsum.photos/seed/week10-2/300/300.jpg", color:"#fce7f3", label:"Docker 🐳" },
      { id:57, src:"https://picsum.photos/seed/week10-3/300/300.jpg", color:"#fef3c7", label:"Cloud ☁️" },
      { id:58, src:"https://picsum.photos/seed/week10-4/300/300.jpg", color:"#d1fae5", label:"AWS ☁️" },
      { id:59, src:"https://picsum.photos/seed/week10-5/300/300.jpg", color:"#dbeafe", label:"CI/CD 🔄" },
      { id:60, src:"https://picsum.photos/seed/week10-6/300/300.jpg", color:"#ede9fe", label:"Monitoring 📊" },
    ],
    "Week 11": [
      { id:61, src:"https://picsum.photos/seed/week11-1/300/300.jpg", color:"#fce7f3", label:"Performance ⚡" },
      { id:62, src:"https://picsum.photos/seed/week11-2/300/300.jpg", color:"#fef3c7", label:"Optimization 🎯" },
      { id:63, src:"https://picsum.photos/seed/week11-3/300/300.jpg", color:"#d1fae5", label:"Caching 💾" },
      { id:64, src:"https://picsum.photos/seed/week11-4/300/300.jpg", color:"#dbeafe", label:"Lazy Loading ⏳" },
      { id:65, src:"https://picsum.photos/seed/week11-5/300/300.jpg", color:"#ede9fe", label:"Bundle Size 📦" },
      { id:66, src:"https://picsum.photos/seed/week11-6/300/300.jpg", color:"#fce7f3", label:"SEO 🔍" },
    ],
    "Week 12": [
      { id:67, src:"https://picsum.photos/seed/week12-1/300/300.jpg", color:"#fef3c7", label:"Portfolio 🎨" },
      { id:68, src:"https://picsum.photos/seed/week12-2/300/300.jpg", color:"#d1fae5", label:"Final Project 🎯" },
      { id:69, src:"https://picsum.photos/seed/week12-3/300/300.jpg", color:"#dbeafe", label:"Presentation 📊" },
      { id:70, src:"https://picsum.photos/seed/week12-4/300/300.jpg", color:"#ede9fe", label:"Demo 🎬" },
      { id:71, src:"https://picsum.photos/seed/week12-5/300/300.jpg", color:"#fce7f3", label:"Certificate 🏆" },
      { id:72, src:"https://picsum.photos/seed/week12-6/300/300.jpg", color:"#fef3c7", label:"Celebration 🎉" },
    ],
    "Week 13": [
      { id:67, src:"https://picsum.photos/seed/week12-1/300/300.jpg", color:"#fef3c7", label:"Portfolio 🎨" },
      { id:68, src:"https://picsum.photos/seed/week12-2/300/300.jpg", color:"#d1fae5", label:"Final Project 🎯" },
      { id:69, src:"https://picsum.photos/seed/week12-3/300/300.jpg", color:"#dbeafe", label:"Presentation 📊" },
      { id:70, src:"https://picsum.photos/seed/week12-4/300/300.jpg", color:"#ede9fe", label:"Demo 🎬" },
      { id:71, src:"https://picsum.photos/seed/week12-5/300/300.jpg", color:"#fce7f3", label:"Certificate 🏆" },
      { id:72, src:"https://picsum.photos/seed/week12-6/300/300.jpg", color:"#fef3c7", label:"Celebration 🎉" },
    ],
    "Week 14": [
      { id:67, src:"https://picsum.photos/seed/week12-1/300/300.jpg", color:"#fef3c7", label:"Portfolio 🎨" },
      { id:68, src:"https://picsum.photos/seed/week12-2/300/300.jpg", color:"#d1fae5", label:"Final Project 🎯" },
      { id:69, src:"https://picsum.photos/seed/week12-3/300/300.jpg", color:"#dbeafe", label:"Presentation 📊" },
      { id:70, src:"https://picsum.photos/seed/week12-4/300/300.jpg", color:"#ede9fe", label:"Demo 🎬" },
      { id:71, src:"https://picsum.photos/seed/week12-5/300/300.jpg", color:"#fce7f3", label:"Certificate 🏆" },
      { id:72, src:"https://picsum.photos/seed/week12-6/300/300.jpg", color:"#fef3c7", label:"Celebration 🎉" },
    ]
  });

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior:"smooth" });

  const handleUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
    const newPhoto = { id: Date.now(), src: url, color:"#fce7f3", label:`Photo ${Date.now()}` };
    
    // Keep only 4 photos in the selected week
    setEditableWeekPhotos(prev => ({
      ...prev,
      [selectedUploadWeek]: [...(prev[selectedUploadWeek] || []).slice(0, 3), newPhoto]
    }));
    
    // Update current photos display if we're viewing that week
    if (photoWeeks[currentPhotoWeek] === selectedUploadWeek) {
      setPhotos(prev => [...prev.slice(0, 3), newPhoto]);
    }
  };

  const handlePasswordSubmit = (password) => {
    if (password === "lainey123") {
      setPasswordError("");
      setPasswordModalOpen(false);
      setUploadModalOpen(true);
    } else {
      setPasswordError("Password is incorrect");
    }
  };

  // Update photos when active photo week changes
  React.useEffect(() => {
    const currentWeek = photoWeeks[currentPhotoWeek];
    setPhotos(limitPhotos(editableWeekPhotos[currentWeek] || []));
  }, [currentPhotoWeek, editableWeekPhotos]);

  // Carousel helper functions
  const getScrollOffset = (activeIndex) => {
    return Math.floor(activeIndex / 3) * 972; // Each group of 3 cards is 972px (3 * 324px)
  };

  const isCardActive = (cardIndex, activeIndex) => {
    return cardIndex === activeIndex;
  };

  const getPreviousPage = (activeIndex) => {
    return Math.max(0, Math.floor(activeIndex / 3) * 3 - 3);
  };

  const getNextPage = (activeIndex) => {
    const totalWeeks = Object.keys(weekBlogs).length;
    const nextGroupStart = Math.floor(activeIndex / 3) * 3 + 3;
    return Math.min(nextGroupStart, totalWeeks - 1);
  };

  const handleCardHover = (index) => {
    setHoveredWeek(index);
  };

  const handleCardLeave = () => {
    setHoveredWeek(null);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700&family=DM+Sans:wght@300;400;500&family=Dancing+Script:wght@700&display=swap');
        *,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}
        :root{
          --pink:#f472b6;--pink-l:#fce7f3;--pink-m:#fbcfe8;
          --cream:#fffbeb;--mauve:#ede9fe;--text:#3d1a2e;--muted:#9d6e85;
        }
        html{scroll-behavior:smooth;}
        body{background:var(white);font-family:'DM Sans',sans-serif;color:var(--text);overflow-x:hidden;}

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
          display:grid;grid-template-columns:repeat(4,1fr);
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
        .f-links a{font-size:.68rem;letter-spacing:2px;text-transform:uppercase;color:#var(--pink);text-decoration:none;transition:color .18s;}
        .f-links a:hover{color:var(--pink);}
        .f-copy{font-size:.68rem;color:#var(--pink);letter-spacing:1px;}

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
          <p className="hero-sub">On-the-Job Training Journey</p>
          <p className="hero-desc">
            A glimpse of my OJT journey, growth, and experiences at BU Cluster II. ✨
          </p>
          <div className="hero-btns">
            <button className="btn-main" onClick={()=>scrollTo("weekly-blog")}>Read My Blog</button>
            <button className="btn-ghost" onClick={()=>scrollTo("photos")}>View Photos</button>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="sec">
        <div className="about-grid">
          <div className="about-blob-wrap">
            <div className="about-blob">👩‍💻</div>
            <div className="about-sticker">Lainey ✨</div>
          </div>
          <div className="about-text">
            <div className="sec-label">About Me</div>
            <h2 className="sec-title">Simple Student with <span>Big Dreams</span></h2>
            <p>
              Hi! I am Elaine Mae A. Bertiz, a BS Information Technology student from Bicol University. This blog contains my weekly experiences, learnings, challenges, and memories during my On-the-Job Training at the Bicol University Cluster II Administrative Office.
            </p>
            <p>
              Through this internship, I was able to experience both office work and system development. I learned how important patience, responsibility, communication, and teamwork are in a real working environment.
            </p>
          </div>
        </div>
      </section>

      {/* WEEKLY BLOG */}
      <section id="weekly-blog" className="sec">
        <div style={{maxWidth:"1000px",margin:"0 auto",textAlign:"center"}}>
          <div className="sec-label">Weekly Blog</div>
          <h2 className="sec-title">My OJT <span>Journey</span></h2>
        </div>

        <div className="blog-carousel-container">
          <div 
            className="blog-carousel"
            style={{transform:`translateX(-${getScrollOffset(activeBlogWeek)}px)`}}
          >
            {Object.entries(weekBlogs).map(([week, data], index)=>(
              <div
                key={week}
                className={`blog-card ${isCardActive(index, activeBlogWeek) ? "active" : ""}`}
                data-hovered={hoveredWeek === index}
                onMouseEnter={()=>handleCardHover(index)}
                onMouseLeave={handleCardLeave}
                onClick={()=>{setActiveBlogWeek(index);setBlogOpen(week);}}
              >
                <span className="blog-emoji">🌸</span>
                <div className="blog-week">{week}</div>
                <p className="blog-preview">{data.title}</p>
                <span className="blog-cta">Read More</span>
              </div>
            ))}
          </div>
        </div>

        <div className="blog-nav">
          <button
            className="blog-nav-btn"
            disabled={activeBlogWeek === 0}
            onClick={()=>setActiveBlogWeek(getPreviousPage(activeBlogWeek))}
          >‹</button>
          <div className="blog-week-indicators">
            {Object.keys(weekBlogs).map((_, index)=>(
              <span
                key={index}
                className={`blog-dot ${index === activeBlogWeek ? "active" : ""}`}
                onClick={()=>setActiveBlogWeek(index)}
              />
            ))}
          </div>
          <button
            className="blog-nav-btn"
            disabled={activeBlogWeek === Object.keys(weekBlogs).length - 1}
            onClick={()=>setActiveBlogWeek(getNextPage(activeBlogWeek))}
          >›</button>
        </div>
      </section>

      {blogOpen && (
        <div className="overlay" onClick={()=>setBlogOpen(null)}>
          <div className="modal" onClick={e=>e.stopPropagation()}>
            <button className="modal-x" onClick={()=>setBlogOpen(null)}>×</button>
            <span className="modal-emoji">🌸</span>
            <h3 className="modal-title">{blogOpen}: {weekBlogs[blogOpen].title}</h3>
            <p className="modal-body">{weekBlogs[blogOpen].content}</p>
          </div>
        </div>
      )}

      <div className="wave-divider" />

      {/* PHOTOS */}
      <section id="photos" className="sec">
        <div className="photos-top">
          <div>
            <div className="sec-label">Photos</div>
            <h2 className="sec-title">Photo <span>Memories</span></h2>
          </div>
          <button className="upload-lbl" onClick={()=>setPasswordModalOpen(true)}>Upload Photo</button>
        </div>

        <div className="week-tabs">
          <button className="nav-arrow" onClick={()=>setButtonGroupStart(Math.max(0, buttonGroupStart - 7))}>‹</button>
          {photoWeeks.slice(buttonGroupStart, buttonGroupStart + 7).map((week, i)=>(
            <button
              key={week}
              className={`w-tab ${currentPhotoWeek === buttonGroupStart + i ? "on" : ""}`}
              onClick={()=>setCurrentPhotoWeek(buttonGroupStart + i)}
            >{week}</button>
          ))}
          <button className="nav-arrow" onClick={()=>setButtonGroupStart(Math.min(photoWeeks.length - 7, buttonGroupStart + 7))}>›</button>
        </div>

        <div className="photo-grid">
          {photos.map((photo, index)=>(
            <div className="photo-card" key={photo.id || index}>
              {photo.src ? (
                <img src={photo.src} alt={photo.label || `Photo ${index + 1}`} />
              ) : (
                <div className="photo-ph" style={{background:photo.color || placeholderColors[index % placeholderColors.length]}}>
                  📷
                  <small>{photo.label || "Photo"}</small>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* PASSWORD MODAL */}
      {passwordModalOpen && (
        <div className="overlay" onClick={()=>setPasswordModalOpen(false)}>
          <div className="modal" style={{maxWidth:"420px"}} onClick={e=>e.stopPropagation()}>
            <button className="modal-x" onClick={()=>setPasswordModalOpen(false)}>×</button>
            <span className="modal-emoji">🔐</span>
            <h3 className="modal-title">Enter Password</h3>
            <p className="modal-body" style={{textAlign:"left"}}>Please enter the password before uploading a photo.</p>
            <input
              type="password"
              placeholder="Password"
              onKeyDown={(e)=>{
                if(e.key === "Enter") handlePasswordSubmit(e.target.value);
              }}
              style={{
                width:"100%",padding:"12px 16px",border:"2px solid var(--pink-m)",borderRadius:"14px",
                marginTop:"16px",fontFamily:"DM Sans",outline:"none"
              }}
            />
            {passwordError && <p style={{color:"#ef4444",fontSize:".85rem",marginTop:"10px"}}>{passwordError}</p>}
            <button
              className="btn-main"
              style={{marginTop:"18px",width:"100%"}}
              onClick={()=>{
                const input = document.querySelector('input[type="password"]');
                handlePasswordSubmit(input.value);
              }}
            >Submit</button>
          </div>
        </div>
      )}

      {/* UPLOAD MODAL */}
      {uploadModalOpen && (
        <div className="overlay" onClick={()=>setUploadModalOpen(false)}>
          <div className="modal" style={{maxWidth:"500px"}} onClick={e=>e.stopPropagation()}>
            <button className="modal-x" onClick={()=>setUploadModalOpen(false)}>×</button>
            <span className="modal-emoji">📷</span>
            <h3 className="modal-title">Upload Photo</h3>
            <p className="modal-body" style={{textAlign:"left"}}>Choose which week you want to add the photo to.</p>
            <select
              value={selectedUploadWeek}
              onChange={(e)=>setSelectedUploadWeek(e.target.value)}
              style={{
                width:"100%",padding:"12px 16px",border:"2px solid var(--pink-m)",borderRadius:"14px",
                marginTop:"16px",fontFamily:"DM Sans",outline:"none",background:"#fff"
              }}
            >
              {photoWeeks.map(week=><option key={week} value={week}>{week}</option>)}
            </select>
            <label className="upload-lbl" style={{marginTop:"18px",justifyContent:"center"}}>
              Select Photo
              <input type="file" accept="image/*" onChange={handleUpload} style={{display:"none"}} />
            </label>
          </div>
        </div>
      )}

      {/* VIDEOS */}
      <section id="videos" className="sec">
        <div style={{maxWidth:"1000px",margin:"0 auto",textAlign:"center"}}>
          <div className="sec-label">My Experience</div>
          <h2 className="sec-title">OJT <span>Highlights</span></h2>
        </div>
        <div className="vid-grid">
          {[1,2,3].map((v)=>(
            <div className="vid-card" key={v}>
              <video controls>
                <source src="" type="video/mp4" />
              </video>
              <div className="vid-label">Video {v}</div>
            </div>
          ))}
        </div>
      </section>

      <div className="wave-divider-videos" />

      {/* EXPERIENCE / CONCLUSION */}
      <section className="sec" style={{background:"#fff"}}>
        <div style={{maxWidth:"900px",margin:"0 auto"}}>
          <div className="sec-label">Conclusion</div>
          <h2 className="sec-title">My Internship <span>Reflection</span></h2>
          <div className="about-text">
            <p>
              My internship at the Bicol University Cluster II Administrative Office became a meaningful part of my academic journey as an Information Technology student. Throughout my 486 hours of training, I was able to experience both clerical and technical responsibilities, from managing documents and organizing records to developing the Cluster II Document Record Management System.
            </p>
            <p>
              This experience helped me become more confident, responsible, flexible, and prepared for future professional opportunities. I am thankful for all the people who guided me, trusted me, and made my OJT journey memorable.
            </p>
            <div className="hero-btns">
              <button
  className="btn-main"
  onClick={() =>
    window.location.href = "mailto:elainebertiz258@gmail.com?subject=Inquiry%20from%20Lainey's%20Blog&body=Hi%20Elaine,%0A%0A"
  }
>
  Contact Me 💌
</button>
              <button className="btn-ghost" onClick={()=>window.open('https://linkedin.com', '_blank')}>LinkedIn Profile →</button>
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
  );
}