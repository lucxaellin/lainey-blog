import { useState } from "react";

const photos = [
  { id: 1, src: "https://picsum.photos/seed/lainey1/400/400", label: "Photo 1" },
  { id: 2, src: "https://picsum.photos/seed/lainey2/400/400", label: "Photo 2" },
  { id: 3, src: "https://picsum.photos/seed/lainey3/400/400", label: "Photo 3" },
  { id: 4, src: "https://picsum.photos/seed/lainey4/400/400", label: "Photo 4" },
  { id: 5, src: "https://picsum.photos/seed/lainey5/400/400", label: "Photo 5" },
  { id: 6, src: "https://picsum.photos/seed/lainey6/400/400", label: "Photo 6" },
];

const videos = [
  { id: 1, src: "https://www.w3schools.com/html/mov_bbb.mp4", label: "Video 1" },
  { id: 2, src: "https://www.w3schools.com/html/movie.mp4", label: "Video 2" },
  { id: 3, src: "https://www.w3schools.com/html/mov_bbb.mp4", label: "Video 3" },
];

const weekBlogs = {
  "Week 1": "This week I explored the basics of web design and started learning React! It was overwhelming at first but I'm getting the hang of it. ✨",
  "Week 2": "Deep dive into CSS and styling this week. I discovered the magic of flexbox and grid layouts. My pages are finally starting to look the way I imagined! 🎨",
  "Week 3": "This week was all about JavaScript fundamentals — functions, loops, arrays. It's like learning a new language but for computers. 💻",
};

const photoWeeks = ["Week 1", "Week 2", "Week 3", "Week 4", "Week 5", "Week 6"];

export default function Blog() {
  const [activeSection, setActiveSection] = useState("home");
  const [activeBlogWeek, setActiveBlogWeek] = useState("Week 1");
  const [activePhotoWeek, setActivePhotoWeek] = useState(0);
  const [uploadedPhotos, setUploadedPhotos] = useState(photos);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
    setUploadedPhotos((prev) => [
      ...prev,
      { id: prev.length + 1, src: url, label: `Photo ${prev.length + 1}` },
    ]);
  };

  const scrollTo = (id) => {
    setActiveSection(id);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div style={{ fontFamily: "'Georgia', serif", background: "#fff5f8", minHeight: "100vh" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=Nunito:wght@400;600;700&display=swap');

        * { box-sizing: border-box; margin: 0; padding: 0; }

        body { background: #fff5f8; }

        .nav-bar {
          background: #fff;
          border-bottom: 2px solid #f9c8da;
          padding: 0 40px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          position: sticky;
          top: 0;
          z-index: 100;
          box-shadow: 0 2px 16px #f9c8da55;
        }
        .nav-logo {
          font-family: 'Playfair Display', serif;
          font-size: 1.15rem;
          font-weight: 900;
          color: #222;
          border: 2.5px solid #222;
          border-radius: 50px;
          padding: 6px 18px;
          letter-spacing: 1px;
          background: #fff;
        }
        .nav-links {
          display: flex;
          gap: 0;
          list-style: none;
        }
        .nav-links li a {
          font-family: 'Nunito', sans-serif;
          font-size: 0.78rem;
          font-weight: 700;
          color: #222;
          text-decoration: none;
          letter-spacing: 2px;
          text-transform: uppercase;
          padding: 22px 16px;
          display: block;
          transition: color 0.2s;
        }
        .nav-links li a:hover { color: #e75480; }

        .hero-banner {
          background: #f9d6e2;
          text-align: center;
          padding: 6px;
          font-family: 'Nunito', sans-serif;
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 2px;
          color: #555;
          text-transform: uppercase;
        }

        .hero-section {
          display: grid;
          grid-template-columns: 1fr 1fr;
          min-height: 420px;
          background: #fff;
        }
        .hero-left {
          background: #fff;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 60px 50px 40px 60px;
          position: relative;
        }
        .hero-title {
          font-family: 'Playfair Display', serif;
          font-size: 3.8rem;
          font-weight: 900;
          line-height: 1.05;
          color: #111;
          text-transform: uppercase;
          letter-spacing: -1px;
        }
        .hero-subtitle {
          font-family: 'Nunito', sans-serif;
          font-size: 0.82rem;
          font-weight: 700;
          color: #888;
          letter-spacing: 3px;
          text-transform: uppercase;
          margin-top: 10px;
        }
        .new-badge {
          background: #fff;
          border: 2.5px solid #222;
          border-radius: 50px;
          font-family: 'Nunito', sans-serif;
          font-weight: 900;
          font-size: 0.72rem;
          letter-spacing: 2px;
          padding: 5px 16px;
          display: inline-block;
          margin-bottom: 18px;
          color: #222;
          text-transform: uppercase;
          position: absolute;
          top: 38px;
          right: 40px;
          transform: rotate(-8deg);
        }
        .hero-btn {
          display: inline-block;
          margin-top: 22px;
          background: #fff;
          border: 2.5px solid #222;
          border-radius: 50px;
          font-family: 'Nunito', sans-serif;
          font-weight: 900;
          font-size: 0.72rem;
          letter-spacing: 2px;
          padding: 9px 28px;
          cursor: pointer;
          text-transform: uppercase;
          color: #222;
          transition: background 0.2s, color 0.2s;
          text-decoration: none;
        }
        .hero-btn:hover { background: #222; color: #fff; }
        .hero-right {
          background: #f9a8c4;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }
        .hero-right img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .wave-divider {
          width: 100%;
          overflow: hidden;
          line-height: 0;
          margin-bottom: -2px;
        }
        .wave-divider svg { display: block; }

        .categories-bar {
          background: #fff5f8;
          padding: 28px 60px 10px;
          display: flex;
          gap: 18px;
          flex-wrap: wrap;
          align-items: center;
        }
        .cat-chip {
          background: #fff;
          border: 2.5px solid #222;
          border-radius: 50px;
          font-family: 'Nunito', sans-serif;
          font-weight: 900;
          font-size: 0.68rem;
          letter-spacing: 2px;
          padding: 8px 18px;
          cursor: pointer;
          text-transform: uppercase;
          color: #222;
          transition: all 0.18s;
        }
        .cat-chip:hover, .cat-chip.active { background: #222; color: #fff; }

        /* ABOUT */
        .about-section {
          display: grid;
          grid-template-columns: 1fr 1fr;
          background: #fffbe8;
          min-height: 340px;
          align-items: center;
          padding: 60px;
          gap: 60px;
          position: relative;
        }
        .about-img-wrap {
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .about-img-circle {
          width: 200px;
          height: 200px;
          border-radius: 50%;
          overflow: hidden;
          border: 5px solid #222;
          box-shadow: 8px 8px 0 #f9c8da;
        }
        .about-img-circle img { width: 100%; height: 100%; object-fit: cover; }
        .about-badge {
          background: #fff;
          border: 2.5px solid #222;
          border-radius: 50px;
          font-family: 'Nunito', sans-serif;
          font-weight: 900;
          font-size: 0.68rem;
          letter-spacing: 2px;
          padding: 7px 20px;
          display: inline-block;
          margin-top: 16px;
          text-transform: uppercase;
          color: #222;
        }
        .about-text h2 {
          font-family: 'Playfair Display', serif;
          font-size: 2.6rem;
          font-weight: 900;
          color: #111;
        }
        .about-text p {
          font-family: 'Nunito', sans-serif;
          font-size: 0.92rem;
          color: #555;
          line-height: 1.75;
          margin-top: 14px;
        }
        .star-deco {
          position: absolute;
          font-size: 1.4rem;
          color: #f9c8da;
        }

        /* WEEKLY BLOG */
        .section-title {
          font-family: 'Playfair Display', serif;
          font-size: 2.8rem;
          font-weight: 900;
          text-transform: uppercase;
          text-align: center;
          color: #111;
          padding-top: 60px;
          letter-spacing: -1px;
        }
        .section-title span {
          display: block;
          font-size: 1.9rem;
          color: #e75480;
        }
        .star-accent { color: #e75480; margin-right: 8px; }

        .blog-tabs {
          display: flex;
          justify-content: center;
          gap: 14px;
          margin: 28px 0 18px;
          flex-wrap: wrap;
        }
        .blog-tab {
          background: #fff;
          border: 2.5px solid #222;
          border-radius: 50px;
          font-family: 'Nunito', sans-serif;
          font-weight: 900;
          font-size: 0.75rem;
          letter-spacing: 2px;
          padding: 9px 28px;
          cursor: pointer;
          text-transform: uppercase;
          color: #222;
          transition: all 0.18s;
        }
        .blog-tab:hover, .blog-tab.active { background: #222; color: #fff; }

        .blog-content {
          max-width: 700px;
          margin: 0 auto 60px;
          background: #fff;
          border: 2.5px solid #222;
          border-radius: 28px;
          padding: 36px 44px;
          box-shadow: 6px 6px 0 #f9c8da;
          font-family: 'Nunito', sans-serif;
          font-size: 1rem;
          color: #444;
          line-height: 1.8;
        }

        /* PHOTOS */
        .photos-section {
          background: #fde8f2;
          padding: 0 0 60px;
        }
        .photo-week-nav {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 12px;
          padding: 24px 0 18px;
          flex-wrap: wrap;
        }
        .week-nav-btn {
          background: none;
          border: none;
          font-size: 1.5rem;
          cursor: pointer;
          color: #222;
          font-weight: 900;
          padding: 0 8px;
        }
        .week-label {
          font-family: 'Nunito', sans-serif;
          font-weight: 900;
          font-size: 0.8rem;
          letter-spacing: 2px;
          text-transform: uppercase;
          background: #fff;
          border: 2.5px solid #222;
          border-radius: 50px;
          padding: 7px 20px;
          color: #222;
          cursor: pointer;
          transition: all 0.18s;
        }
        .week-label.active { background: #222; color: #fff; }

        .photo-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
          max-width: 900px;
          margin: 0 auto 28px;
          padding: 0 24px;
        }
        .photo-card {
          border-radius: 20px;
          overflow: hidden;
          border: 2.5px solid #222;
          box-shadow: 4px 4px 0 #fff;
          aspect-ratio: 1;
          background: #fff;
        }
        .photo-card img { width: 100%; height: 100%; object-fit: cover; display: block; }

        .upload-btn-wrap {
          display: flex;
          justify-content: center;
          margin-top: 10px;
        }
        .upload-label {
          background: #fff;
          border: 2.5px solid #222;
          border-radius: 50px;
          font-family: 'Nunito', sans-serif;
          font-weight: 900;
          font-size: 0.75rem;
          letter-spacing: 2px;
          padding: 10px 30px;
          cursor: pointer;
          text-transform: uppercase;
          color: #222;
          transition: all 0.18s;
          display: inline-block;
        }
        .upload-label:hover { background: #222; color: #fff; }

        /* VIDEOS */
        .videos-section {
          background: #fffbe8;
          padding: 0 0 80px;
        }
        .videos-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 22px;
          max-width: 950px;
          margin: 28px auto 0;
          padding: 0 24px;
        }
        .video-card {
          border-radius: 20px;
          overflow: hidden;
          border: 2.5px solid #222;
          box-shadow: 4px 4px 0 #f9c8da;
          background: #fff;
        }
        .video-label {
          font-family: 'Nunito', sans-serif;
          font-weight: 700;
          font-size: 0.8rem;
          color: #888;
          text-align: center;
          padding: 8px 0 12px;
          letter-spacing: 1px;
        }
        video { width: 100%; display: block; }

        /* FOOTER */
        .footer {
          background: #fff;
          border-top: 2.5px solid #f9c8da;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 28px 60px;
          flex-wrap: wrap;
          gap: 16px;
        }
        .footer-logo {
          font-family: 'Playfair Display', serif;
          font-size: 1.05rem;
          font-weight: 900;
          color: #222;
          border: 2.5px solid #222;
          border-radius: 50px;
          padding: 7px 20px;
          letter-spacing: 1px;
        }
        .footer-links {
          display: flex;
          gap: 22px;
          list-style: none;
          flex-wrap: wrap;
        }
        .footer-links li a {
          font-family: 'Nunito', sans-serif;
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: #444;
          text-decoration: none;
          transition: color 0.2s;
        }
        .footer-links li a:hover { color: #e75480; }
        .footer-copy {
          font-family: 'Nunito', sans-serif;
          font-size: 0.68rem;
          color: #aaa;
          letter-spacing: 1px;
        }

        @media (max-width: 768px) {
          .hero-section, .about-section { grid-template-columns: 1fr; }
          .hero-left { padding: 40px 28px; }
          .hero-title { font-size: 2.4rem; }
          .about-section { padding: 36px 24px; gap: 28px; }
          .photo-grid, .videos-grid { grid-template-columns: 1fr 1fr; }
          .footer { padding: 24px 24px; }
          .nav-links { display: none; }
        }
      `}</style>

      {/* NAV */}
      <div className="hero-banner">✦ LAINEY'S PORTFOLIO — BSIT 4C ✦</div>
      <nav className="nav-bar">
        <span className="nav-logo">Lainey's Portfolio</span>
        <ul className="nav-links">
          {["home","about","weekly-blog","photos","videos"].map((s) => (
            <li key={s}>
              <a href={`#${s}`} onClick={(e) => { e.preventDefault(); scrollTo(s); }}>
                {s.replace("-", " ").toUpperCase()}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* HERO */}
      <section id="home" className="hero-section">
        <div className="hero-left">
          <span className="new-badge">✦ NEW!</span>
          <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "0.85rem", fontWeight: 700, letterSpacing: 3, textTransform: "uppercase", color: "#aaa", marginBottom: 6 }}>Elaine Mae A. Bertiz · BSIT 4C</div>
          <h1 className="hero-title">LAINEY'S<br />PORTFOLIO</h1>
          <div className="hero-subtitle">I'm Lainey!</div>
          <a href="#about" className="hero-btn" onClick={(e) => { e.preventDefault(); scrollTo("about"); }}>About Me →</a>
        </div>
        <div className="hero-right">
          <img src="https://picsum.photos/seed/lainey-hero/700/500" alt="Hero" />
        </div>
      </section>

      {/* CATEGORIES */}
      <div className="categories-bar">
        {["New Arrivals ✦", "Weekly Blog →", "Photos →", "Videos →", "About Me →"].map((c) => (
          <span key={c} className="cat-chip">{c}</span>
        ))}
      </div>

      {/* WAVE */}
      <div className="wave-divider">
        <svg viewBox="0 0 1440 50" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 30 Q360 0 720 30 Q1080 60 1440 30 L1440 50 L0 50 Z" fill="#fffbe8"/>
        </svg>
      </div>

      {/* ABOUT */}
      <section id="about" className="about-section">
        <span className="star-deco" style={{ top: 30, left: 40 }}>✦</span>
        <span className="star-deco" style={{ bottom: 30, right: 60 }}>✦</span>
        <div className="about-img-wrap" style={{ flexDirection: "column", alignItems: "center" }}>
          <div className="about-img-circle">
            <img src="https://picsum.photos/seed/lainey-about/400/400" alt="Lainey" />
          </div>
          <span className="about-badge">ABOUT US!</span>
        </div>
        <div className="about-text">
          <h2>Hey there!</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer laoreet arcu sit amet leo porta, id placerat ex interdum. Fusce fermentum ornare lectus, ut dictum turpis convallis vitae. Nunc semper vitae nibh sit amet dignissim. Nunc lorem nunc, placerat et augue ac, elementum mollis turpis. Ut sit amet tempus ante. Suspendisse tempus augue eget iaculis posuere. In hac habitasse platea dictumst. Duis sollicitudin erat ac urna maximus fermentum.
          </p>
          <a href="#weekly-blog" className="hero-btn" style={{ marginTop: 22, display: "inline-block" }} onClick={(e) => { e.preventDefault(); scrollTo("weekly-blog"); }}>More about me →</a>
        </div>
      </section>

      {/* WAVE */}
      <div className="wave-divider">
        <svg viewBox="0 0 1440 50" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 20 Q360 50 720 20 Q1080 -10 1440 20 L1440 50 L0 50 Z" fill="#fde8f2"/>
        </svg>
      </div>

      {/* WEEKLY BLOG */}
      <section id="weekly-blog" style={{ background: "#fde8f2", paddingBottom: 20 }}>
        <h2 className="section-title">
          <span className="star-accent">✦</span>WEEKLY
          <span>BLOG</span>
        </h2>
        <div className="blog-tabs">
          {Object.keys(weekBlogs).map((w) => (
            <button key={w} className={`blog-tab${activeBlogWeek === w ? " active" : ""}`} onClick={() => setActiveBlogWeek(w)}>
              {w}
            </button>
          ))}
        </div>
        <div className="blog-content">
          <div style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: "1.2rem", color: "#222", marginBottom: 12 }}>{activeBlogWeek}</div>
          {weekBlogs[activeBlogWeek]}
        </div>
      </section>

      {/* PHOTOS */}
      <section id="photos" className="photos-section">
        <h2 className="section-title" style={{ paddingTop: 50 }}>
          Photos
        </h2>
        <div className="photo-week-nav">
          <button className="week-nav-btn" onClick={() => setActivePhotoWeek((p) => Math.max(0, p - 1))}>{"<"}</button>
          {photoWeeks.map((w, i) => (
            <span key={w} className={`week-label${activePhotoWeek === i ? " active" : ""}`} onClick={() => setActivePhotoWeek(i)}>{w}</span>
          ))}
          <button className="week-nav-btn" onClick={() => setActivePhotoWeek((p) => Math.min(photoWeeks.length - 1, p + 1))}>{">"}</button>
        </div>
        <div className="photo-grid">
          {uploadedPhotos.slice(0, 6).map((p) => (
            <div key={p.id} className="photo-card">
              <img src={p.src} alt={p.label} />
            </div>
          ))}
        </div>
        <div className="upload-btn-wrap">
          <label className="upload-label" htmlFor="photo-upload">+ Upload Image</label>
          <input id="photo-upload" type="file" accept="image/*" style={{ display: "none" }} onChange={handleImageUpload} />
        </div>
      </section>

      {/* WAVE */}
      <div className="wave-divider" style={{ background: "#fde8f2" }}>
        <svg viewBox="0 0 1440 50" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 30 Q360 0 720 30 Q1080 60 1440 30 L1440 50 L0 50 Z" fill="#fffbe8"/>
        </svg>
      </div>

      {/* VIDEOS */}
      <section id="videos" className="videos-section">
        <h2 className="section-title">
          Random Videos
        </h2>
        <div className="videos-grid">
          {videos.map((v) => (
            <div key={v.id} className="video-card">
              <video controls>
                <source src={v.src} type="video/mp4" />
                Your browser does not support video.
              </video>
              <div className="video-label">{v.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <span className="footer-logo">Lainey's Portfolio</span>
        <ul className="footer-links">
          {["Home","About Me","Weekly Blog","Photos","Videos"].map((l) => (
            <li key={l}><a href={`#${l.toLowerCase().replace(" ", "-")}`}>{l}</a></li>
          ))}
        </ul>
        <span className="footer-copy">© 2025 Elaine Mae A. Bertiz — BSIT 4C</span>
      </footer>
    </div>
  );
}