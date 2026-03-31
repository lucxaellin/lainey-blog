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
  "Week 1": { emoji:"🌸", content:"This week I explored the basics of web design and started learning React! It was overwhelming at first but I'm getting the hang of it. Every bug I fixed felt like unlocking a new achievement! 💪✨" },
  "Week 2": { emoji:"🎨", content:"Deep dive into CSS and styling this week. I discovered the magic of flexbox and grid layouts. My pages are finally starting to look the way I imagined them in my head! 🎨" },
  "Week 3": { emoji:"💻", content:"This week was all about JavaScript fundamentals — functions, loops, arrays. It's like learning a new language but for computers. The logic is starting to click! 🧠💡" },
  "Week 4": { emoji:"🚀", content:"Started learning about React hooks and state management! useState and useEffect are becoming my new best friends. Building interactive components is so exciting! 🎯" },
  "Week 5": { emoji:"📱", content:"Responsive design week! Made sure all my components look great on mobile, tablet, and desktop. Media queries are tricky but so important for user experience! 📐" },
  "Week 6": { emoji:"🔧", content:"Debugging and optimization week! Learned about React DevTools, performance optimization, and how to write cleaner code. My apps are running smoother than ever! ⚡" },
  "Week 7": { emoji:"🎭", content:"Explored animations and transitions this week. Added smooth hover effects, page transitions, and micro-interactions. Making the UI feel alive and responsive! ✨" },
  "Week 8": { emoji:"🗄️", content:"Database week! Learned about SQL basics, data modeling, and how to connect frontend to backend. Understanding how data flows through an application is fascinating! 🔄" },
  "Week 9": { emoji:"🔐", content:"Security and authentication! Implemented user login systems, learned about JWT tokens, and best practices for keeping user data safe. Security is everyone's responsibility! 🛡️" },
  "Week 10": { emoji:"🧪", content:"Testing week! Discovered the importance of unit tests, integration tests, and writing testable code. Catching bugs before they reach production is a game changer! 🐛" },
  "Week 11": { emoji:"📊", content:"API integration week! Connected to external APIs, handled async data, and learned about error handling. Building real-world applications that talk to other services! 🌐" },
  "Week 12": { emoji:"🎓", content:"Final project week! Put everything together - frontend, backend, database, and deployment. Feeling proud of how far I've come and excited for what's next! 🌟" },
};

const photoWeeks = ["Week 1","Week 2","Week 3","Week 4","Week 5","Week 6","Week 7","Week 8","Week 9","Week 10","Week 11","Week 12"];
const placeholderColors = ["#fce7f3","#fef3c7","#d1fae5","#dbeafe","#ede9fe","#fce7f3","#fef3c7","#d1fae5","#dbeafe","#ede9fe","#fce7f3","#fef3c7"];

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
};

export default function Blog() {
  const [blogOpen, setBlogOpen] = useState(null);
  const [activeBlogWeek, setActiveBlogWeek] = useState(0);
  const [hoveredWeek, setHoveredWeek] = useState(null);
  const [activePhotoWeek, setActivePhotoWeek] = useState(0);
  const [currentPhotoWeek, setCurrentPhotoWeek] = useState(0);
  const [buttonGroupStart, setButtonGroupStart] = useState(0);
  const [photos, setPhotos] = useState(weekPhotos["Week 1"]);

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior:"smooth" });

  const handleUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
    setPhotos(prev => [...prev, { id: Date.now(), src: url, color:"#fce7f3", label:`Photo ${prev.length+1}` }]);
  };

  // Update photos when active photo week changes
  React.useEffect(() => {
    const currentWeek = photoWeeks[currentPhotoWeek];
    setPhotos(weekPhotos[currentWeek] || []);
  }, [currentPhotoWeek]);

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
        .hero-content{position:relative;z-index:2;max-width:580px;animation:fadeUp .9s .2s both;}
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
        .about-text p{font-size:.96rem;color:var(--muted);line-height:1.8;margin-top:16px;}

        /* BLOG */
        #weekly-blog{background:linear-gradient(160deg,var(--pink-l),var(--cream));}
        .blog-carousel-container{
          position:relative;width:1000px;<height:300>px;margin:40px auto 0;
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
          background:#fff;border-radius:32px;padding:48px;max-width:520px;width:100%;
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
        .modal-body{font-size:1rem;color:var(--muted);line-height:1.8;margin-top:16px;}

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
          padding:8px 20px;font-size:.72rem;font-weight:500;letter-spacing:2px;
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
        <div className="nav-logo">Lainey's Portfolio 🌸</div>
        <ul className="nav-links">
          {[["home","Home"],["about","About Me"],["weekly-blog","Weekly Blog"],["photos","Photos"],["videos","Videos"]].map(([id,label])=>(
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
          <p className="hero-sub">Lainey's Portfolio ✨</p>
          <p className="hero-desc">A creative space where I document my journey through technology, design, and everything in between. 💗</p>
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
            <p className="about-text" style={{marginTop:0}}>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer laoreet arcu sit amet leo porta, id placerat ex interdum. Fusce fermentum ornare lectus, ut dictum turpis convallis vitae.</p>
              <p style={{marginTop:14}}>Nunc semper vitae nibh sit amet dignissim. Nunc lorem nunc, placerat et augue ac, elementum mollis turpis. Ut sit amet tempus ante. Suspendisse tempus augue eget iaculis posuere. In hac habitasse platea dictumst. Duis sollicitudin erat ac urna maximus fermentum.</p>
            </p>
            <button className="btn-main" style={{marginTop:28}} onClick={()=>scrollTo("weekly-blog")}>Read my blog 📖</button>
          </div>
        </div>
      </section>

      {/* WEEKLY BLOG */}
      <section id="weekly-blog" className="sec">
        <div style={{textAlign:"center"}}>
          <div className="sec-label" style={{margin:"0 auto 14px"}}>✦ Updates</div>
          <h2 className="sec-title">Weekly <span>Blog</span></h2>
          <p style={{color:"var(--muted)",marginTop:10,fontSize:".9rem"}}>Click a card to read more 💌</p>
        </div>
        
        <div className="blog-carousel-container">
          <div className="blog-carousel" style={{
            transform: `translateX(-${getScrollOffset(activeBlogWeek)}px)`
          }}>
            {Object.entries(weekBlogs).map(([week,data],i)=>(
              <div key={week} 
                   className={`blog-card ${isCardActive(i, activeBlogWeek) ? 'active' : ''}`} 
                   data-hovered={hoveredWeek === i ? 'true' : 'false'}
                   style={{}} 
                   onClick={()=>setBlogOpen(week)}
                   onMouseEnter={()=>handleCardHover(i)}
                   onMouseLeave={handleCardLeave}>
                <span className="blog-emoji">{data.emoji}</span>
                <div className="blog-week">{week}</div>
                <p className="blog-preview">{data.content}</p>
                <span className="blog-cta">Read more →</span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="blog-nav">
          <button className="blog-nav-btn" 
                  onClick={()=>setActiveBlogWeek(getPreviousPage(activeBlogWeek))}
                  disabled={activeBlogWeek === 0}>
            ‹
          </button>
          <div className="blog-week-indicators">
            {Array.from({length: Math.ceil(Object.keys(weekBlogs).length / 3)}, (_, groupIndex) => (
              <div key={groupIndex} 
                   className={`blog-dot ${Math.floor(activeBlogWeek / 3) === groupIndex ? 'active' : ''}`}
                   onClick={()=>setActiveBlogWeek(groupIndex * 3)}/>
            ))}
          </div>
          <button className="blog-nav-btn" 
                  onClick={()=>setActiveBlogWeek(getNextPage(activeBlogWeek))}
                  disabled={activeBlogWeek >= Object.keys(weekBlogs).length - 3}>
            ›
          </button>
        </div>
      </section>

      {/* BLOG MODAL */}
      {blogOpen && (
        <div className="overlay" onClick={()=>setBlogOpen(null)}>
          <div className="modal" onClick={e=>e.stopPropagation()}>
            <button className="modal-x" onClick={()=>setBlogOpen(null)}>✕</button>
            <span className="modal-emoji">{weekBlogs[blogOpen].emoji}</span>
            <div className="modal-title">{blogOpen}</div>
            <p className="modal-body">{weekBlogs[blogOpen].content}</p>
          </div>
        </div>
      )}

      {/* PHOTOS */}
      <section id="photos" className="sec">
        <div className="photos-top">
          <div>
            <div className="sec-label">✦ Gallery</div>
            <h2 className="sec-title">Photos <span>✨</span></h2>
          </div>
          <label className="upload-lbl" htmlFor="photo-upload">
            📷 Upload Image
            <input id="photo-upload" type="file" accept="image/*" style={{display:"none"}} onChange={handleUpload}/>
          </label>
        </div>
        <div className="week-tabs">
          <button className="nav-arrow" onClick={()=>setButtonGroupStart(s=>Math.max(0,s-6))} disabled={buttonGroupStart === 0}>‹</button>
          {photoWeeks.slice(buttonGroupStart, buttonGroupStart + 6).map((w,i)=>(
            <button key={w} className={`w-tab${buttonGroupStart + i === currentPhotoWeek ? " on" : ""}`} onClick={()=>setCurrentPhotoWeek(buttonGroupStart + i)}>{w}</button>
          ))}
          <button className="nav-arrow" onClick={()=>setButtonGroupStart(s=>Math.min(photoWeeks.length-6,s+6))} disabled={buttonGroupStart >= photoWeeks.length-6}>›</button>
        </div>
        <div className="photo-grid">
          {photos.slice(0,6).map((p,i)=>(
            <div key={p.id} className="photo-card" style={{animationDelay:`${i*.08}s`}}>
              {p.src
                ? <img src={p.src} alt={p.label}/>
                : <div className="photo-ph" style={{background:p.color}}>
                    <span>🌸</span><small>{p.label}</small>
                  </div>
              }
            </div>
          ))}
        </div>
      </section>

      {/* VIDEOS */}
      <section id="videos" className="sec">
        <div style={{textAlign:"center"}}>
          <div className="sec-label" style={{margin:"0 auto 14px"}}>✦ Watch</div>
          <h2 className="sec-title">Random <span>Videos</span></h2>
        </div>
        <div className="vid-grid">
          {[
            {id:1,src:"https://www.w3schools.com/html/mov_bbb.mp4",label:"Video 1 🎬"},
            {id:2,src:"https://www.w3schools.com/html/movie.mp4",label:"Video 2 🎥"},
            {id:3,src:"https://www.w3schools.com/html/mov_bbb.mp4",label:"Video 3 🌟"},
          ].map(v=>(
            <div key={v.id} className="vid-card">
              <video controls><source src={v.src} type="video/mp4"/></video>
              <div className="vid-label">{v.label}</div>
            </div>
          ))}
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
              {/* Cute top banner with sparkles */}
              
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
              }}>�</div>
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
              
              {/* Cute bottom tag */}
            </div>
          </div>
          <div>
            <div className="sec-label">✦ Experience</div>
            <h2 className="sec-title">Lainey's <span>Internship Chronicles</span></h2>
            <p className="about-text" style={{marginTop:0}}>
              <p>Documenting my professional journey through the tech industry! From first-day jitters to project victories, every experience shapes my growth as a developer. Join me as I navigate the world of internships and discover what it takes to succeed in the tech workplace.</p>
              <p style={{marginTop:14}}>Building skills, making connections, and creating impact! 🚀</p>
            </p>
            <div className="hero-btns" style={{marginTop:28}}>
              <button className="btn-main" onClick={()=>window.location.href='mailto:elaine@example.com'}>Contact Me 💌</button>
              <button className="btn-ghost" onClick={()=>window.open('https://linkedin.com', '_blank')}>LinkedIn Profile →</button>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <span className="f-logo">Lainey's Portfolio 🌸</span>
        <ul className="f-links">
          {[["home","Home"],["about","About Me"],["weekly-blog","Weekly Blog"],["photos","Photos"],["videos","Videos"],["contact","Contact"]].map(([id,label])=>(
            <li key={id}><a href={`#${id}`} onClick={e=>{e.preventDefault();scrollTo(id);}}>{label}</a></li>
          ))}
        </ul>
        <span className="f-copy">© 2025 Elaine Mae A. Bertiz · BSIT 4C 💗</span>
      </footer>
    </>
  );
}