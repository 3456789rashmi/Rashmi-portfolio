import React, { useEffect, useState, useRef } from 'react';
import '../styles/Achievements.css';

const Achievements = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalData, setModalData] = useState(null);
  const starsRef = useRef(null);

  const achievementsData = [
    {
      id: 0,
      icon: '💡',
      grad: 'linear-gradient(135deg,#92400e,#f59e0b,#fcd34d)',
      cat: 'Hackathon',
      title: 'Hackathon Participation Certificate',
      org: 'Competitive Coding Event',
      desc: 'Participated in a competitive hackathon and delivered an innovative technical solution within a tight deadline. This experience sharpened problem-solving skills, teamwork, and the ability to build real-world products under intense pressure.',
      tags: ['Problem Solving', 'Teamwork', 'Innovation', 'Coding', 'Time Management'],
      number: '01'
    },
    {
      id: 1,
      icon: '⚡',
      grad: 'linear-gradient(135deg,#3b0764,#7c3aed,#c4b5fd)',
      cat: 'Leadership & Club',
      title: 'Senior Executive — SPARK Club',
      org: 'SPARK Club',
      desc: 'Served as a Senior Executive in SPARK, the college\'s premier student club. Led events, mentored juniors, and played a key role in organizing technical and creative workshops that empowered the student community.',
      tags: ['Leadership', 'Event Management', 'Mentorship', 'SPARK', 'Community'],
      number: '02'
    },
    {
      id: 2,
      icon: '🇮🇳',
      grad: 'linear-gradient(135deg,#7c2d12,#ea580c,#fb923c)',
      cat: 'National Recognition',
      title: 'Appreciation — Smart India Hackathon',
      org: 'Government of India · SIH',
      desc: 'Received an appreciation certificate at Smart India Hackathon (SIH) — India\'s largest national-level hackathon organised by the Government of India. Presented an impactful and innovative solution to a real government problem statement.',
      tags: ['National Level', 'Government of India', 'Innovation', 'SIH', 'Problem Solving'],
      number: '03'
    },
    {
      id: 3,
      icon: '💼',
      grad: 'linear-gradient(135deg,#064e3b,#059669,#6ee7b7)',
      cat: 'Industry Internship',
      title: 'Internship Certificate',
      org: 'ByteXL',
      desc: 'Successfully completed an industry-level internship at ByteXL, gaining hands-on experience in real-world software development. Collaborated with professionals, worked on practical projects, and strengthened core technical skills in a corporate environment.',
      tags: ['ByteXL', 'Industry Experience', 'Software Dev', 'Certified', 'Real World'],
      number: '04'
    },
    {
      id: 4,
      icon: '☁️',
      grad: 'linear-gradient(135deg,#1e3a8a,#2563eb,#93c5fd)',
      cat: 'Online Certification',
      title: 'Cloud Computing — NPTEL',
      org: 'NPTEL · IIT (National Programme)',
      desc: 'Completed the Cloud Computing course offered through NPTEL by IIT professors. Earned a verified certificate covering cloud architecture, deployment models, virtualisation, and cloud services including AWS and GCP fundamentals.',
      tags: ['Cloud Computing', 'NPTEL', 'IIT', 'AWS', 'GCP', 'Certified'],
      number: '05'
    },
    {
      id: 5,
      icon: '🎯',
      grad: 'linear-gradient(135deg,#2d3436,#636e72,#b2bec3)',
      cat: 'Coding Proficiency',
      title: 'Problem Solving Appreciation Certificate',
      org: 'HackerRank',
      desc: 'Earned an appreciation certificate from HackerRank for demonstrating strong problem-solving skills. This recognition reflects consistent performance in competitive programming challenges, algorithmic thinking, and the ability to solve complex coding problems efficiently.',
      tags: ['Problem Solving', 'HackerRank', 'Algorithms', 'Coding', 'Competitive Programming'],
      number: '06'
    }
  ];

  // Spawn stars on mount
  useEffect(() => {
    if (starsRef.current && starsRef.current.children.length === 0) {
      for (let i = 0; i < 40; i++) {
        const s = document.createElement('div');
        s.className = 'star';
        const sz = 1 + Math.random() * 3;
        s.style.cssText = `width:${sz}px;height:${sz}px;top:${Math.random() * 100}%;left:${Math.random() * 100}%;animation-duration:${2 + Math.random() * 4}s;animation-delay:${Math.random() * 5}s;opacity:${0.1 + Math.random() * 0.3}`;
        starsRef.current.appendChild(s);
      }
    }
  }, []);

  // Counter animation
  useEffect(() => {
    const counters = document.querySelectorAll('.stat-num');
    counters.forEach(el => {
      const target = +el.dataset.target;
      let cur = 0;
      const step = () => {
        cur = Math.min(cur + 1, target);
        el.textContent = cur;
        if (cur < target) requestAnimationFrame(step);
      };
      setTimeout(step, 600);
    });
  }, []);

  const openModal = (data) => {
    setModalData(data);
    setModalOpen(true);
    document.body.style.overflow = 'hidden';
    
    // Confetti animation
    setTimeout(() => {
      const banner = document.getElementById('m-banner');
      if (banner) spawnConfetti(banner);
    }, 200);
  };

  const closeModal = () => {
    setModalOpen(false);
    document.body.style.overflow = '';
  };

  const spawnConfetti = (banner) => {
    const colors = ['#60a5fa', '#fbbf24', '#34d399', '#f472b6', '#a78bfa', '#ffffff'];
    for (let i = 0; i < 18; i++) {
      const c = document.createElement('div');
      c.className = 'confetti-piece';
      const dx = (Math.random() - 0.5) * 160 + 'px';
      const dy = (-20 - Math.random() * 80) + 'px';
      const dr = (Math.random() * 720 - 360) + 'deg';
      c.style.cssText = `background:${colors[i % colors.length]};left:${40 + Math.random() * 20}%;top:${30 + Math.random() * 40}%;--dx:${dx};--dy:${dy};--dr:${dr};animation-delay:${Math.random() * 0.2}s`;
      banner.appendChild(c);
      setTimeout(() => c.remove(), 1200);
    }
  };

  return (
    <>
      {/* Background Canvas */}
      <div className="bg-canvas achievements-bg">
        <div className="grid-lines"></div>
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>
        <div className="orb orb-3"></div>
        <div id="stars" ref={starsRef}></div>
      </div>

      {/* Header */}
      <header className="page-header achievements-header">
        <div className="header-badge">
          <span className="badge-dot"></span>
          Milestones &amp; Recognitions
        </div>
        <h1 className="header-title">My <span className="hl">Achievements</span></h1>
        <p className="header-sub">A curated collection of certificates, recognitions &amp; milestones earned through hard work and dedication.</p>

        <div className="stats-strip">
          <div className="stat-item"><div className="stat-num" data-target="6">0</div><div className="stat-label">Achievements</div></div>
          <div className="stat-item"><div className="stat-num" data-target="2">0</div><div className="stat-label">Hackathons</div></div>
          <div className="stat-item"><div className="stat-num" data-target="1">0</div><div className="stat-label">Internship</div></div>
          <div className="stat-item"><div className="stat-num" data-target="1">0</div><div className="stat-label">Certification</div></div>
        </div>
      </header>

      {/* Wave Divider */}
      <div className="wave-divider">
        <svg viewBox="0 0 1440 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,20 C360,40 1080,0 1440,20 L1440,40 L0,40 Z" fill="rgba(59,130,246,0.04)" />
        </svg>
      </div>

      {/* Flip Cards Section */}
      <section className="cards-section">
        <div className="flip-grid">
          {achievementsData.map((achievement) => (
            <div key={achievement.id} className="flip-card" onClick={() => openModal(achievement)}>
              <div className="flip-inner">
                {/* Front */}
                <div className="flip-front">
                  <span className="card-number">{achievement.number}</span>
                  <div className="icon-bubble" style={{ background: 'linear-gradient(135deg,' + achievement.grad.split(',')[1].split(')')[0] + ',' + achievement.grad.split(',')[2].split(')')[0] + ')' }}>
                    <div className="icon-bubble-glow"></div>
                    {achievement.icon}
                  </div>
                  <p className="card-category">{achievement.cat}</p>
                  <h3 className="card-title">{achievement.title}</h3>
                  <p className="card-org">{achievement.org}</p>
                  <div className="hover-cue">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 16l5-5 5 5" /><path d="M7 8h10" /></svg>
                    Hover to reveal
                  </div>
                </div>

                {/* Back */}
                <div className="flip-back" style={{ '--back-grad': achievement.grad }}>
                  <span className="back-icon">{achievement.icon}</span>
                  <h3 className="back-title">{achievement.title}</h3>
                  <p className="back-desc">{achievement.desc.substring(0, 80)}...</p>
                  <button className="back-btn" onClick={() => openModal(achievement)}>View Full Details</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Modal */}
      <div id="modal-overlay" className={`modal-overlay ${modalOpen ? 'open' : ''}`}>
        <div className="modal-bg" onClick={closeModal}></div>
        <div className="modal">
          <button className="modal-close" onClick={closeModal}>✕</button>
          <div className="modal-banner" id="m-banner" style={{ background: modalData?.grad }}>
            <span className="banner-icon">{modalData?.icon}</span>
          </div>
          <div className="modal-body">
            <p className="modal-cat">{modalData?.cat}</p>
            <h2 className="modal-title">{modalData?.title}</h2>
            <p className="modal-org">{modalData?.org}</p>
            <div className="modal-rule"></div>
            <p className="modal-desc">{modalData?.desc}</p>
            <div className="modal-tags">
              {modalData?.tags.map((tag, idx) => (
                <span key={idx} className="mtag">{tag}</span>
              ))}
            </div>
            <button className="modal-action">🎓 Achievement Unlocked!</button>
          </div>
        </div>
      </div>

      {/* Floating Ribbon */}
      <div className="ribbon-bar">
        <span className="ribbon-dot"></span>
        Hover cards to flip &nbsp;·&nbsp; Click for full details
      </div>
    </>
  );
};

export default Achievements;

