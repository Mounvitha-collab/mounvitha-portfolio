
import { useState } from "react";
import "./App.css";

function App() {
  const [scanned, setScanned] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const skills = [
    { name: "Python", category: "Programming", icon: "🐍" },
    { name: "Java", category: "Programming", icon: "☕" },
    { name: "JavaScript", category: "Programming", icon: "⚡" },
    { name: "React.js", category: "Web Development", icon: "⚛️" },
    { name: "HTML & CSS", category: "Web Development", icon: "🌐" },
    { name: "MySQL", category: "Database", icon: "🗄️" },
    { name: "MongoDB", category: "Database", icon: "🍃" },
    { name: "AWS", category: "Cloud", icon: "☁️" },
    { name: "Git & GitHub", category: "Tools", icon: "🔧" },
  ];

  const superpowers = [
    {
      icon: "💻",
      title: "Programming Mindset",
      description:
        "I enjoy solving problems and exploring programming concepts using Python, Java and JavaScript.",
    },
    {
      icon: "🎨",
      title: "Creative Developer",
      description:
        "I enjoy creating responsive and user-friendly web interfaces using modern web technologies.",
    },
    {
      icon: "🔐",
      title: "Cybersecurity Explorer",
      description:
        "My cybersecurity studies encourage me to explore information security and secure technology.",
    },
    {
      icon: "🧠",
      title: "Analytical Thinker",
      description:
        "I enjoy learning, analysing problems and finding practical solutions.",
    },
    {
      icon: "🚀",
      title: "Continuous Learner",
      description:
        "I am always excited to explore new technologies and improve my technical skills.",
    },
  ];

  const projects = [
    {
      number: "01",
      title: "MC-RBO",
      category: "Machine Learning Project",
      description:
        "An academic machine learning project that reflects my interest in data-driven problem solving and exploring intelligent computational techniques.",
      technologies: ["Python", "Machine Learning"],
      icon: "🤖",
    },
    {
      number: "02",
      title: "Personal Portfolio",
      category: "Web Development",
      description:
        "A responsive personal portfolio built with React.js, featuring an interactive Superpower Scanner and AWS Amplify hosting.",
      technologies: ["React.js", "CSS", "AWS"],
      icon: "🌌",
    },
  ];

  const revealSuperpowers = () => {
    setScanned(true);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className="portfolio">

      {/* NAVIGATION */}

      <header className="navbar">
        <a href="#home" className="logo">
          M<span>.</span>
        </a>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        <nav className={menuOpen ? "nav-links active" : "nav-links"}>
          {["Home", "About", "Skills", "Projects", "Scanner", "Contact"].map(
            (item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={closeMenu}
              >
                {item}
              </a>
            )
          )}
        </nav>

        <a href="#contact" className="nav-button">
          Let's Connect ↗
        </a>
      </header>

      <main>

        {/* HERO SECTION */}

        <section id="home" className="hero section-container">
          <div className="hero-content">
            <div className="availability">
              <span className="status-dot"></span>
              OPEN TO OPPORTUNITIES
            </div>

            <p className="hero-intro">HELLO, WORLD! I'M</p>

            <h1>
              Movva
              <br />
              <span>Mounvitha.</span>
            </h1>

            <h2>
              Aspiring Developer <span>|</span> Cybersecurity Enthusiast
            </h2>

            <p className="hero-description">
              Passionate about technology, creative problem-solving and
              building meaningful digital experiences. I turn ideas into
              interactive solutions through code and continuous learning.
            </p>

            <div className="hero-buttons">
              <a href="#projects" className="primary-button">
                Explore My Work ↗
              </a>

              <a href="#contact" className="secondary-button">
                Get In Touch
              </a>
            </div>

            <div className="social-links">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
              >
                GitHub ↗
              </a>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn ↗
              </a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="orbit orbit-one"></div>
            <div className="orbit orbit-two"></div>

            <div className="profile-card">
              <div className="profile-icon">👩🏻‍💻</div>
              <div className="profile-initial">M.</div>
              <h3>BUILD. LEARN. CREATE.</h3>
              <p>Turning curiosity into code.</p>
              <div className="profile-tags">
                <span>Developer</span>
                <span>Innovator</span>
                <span>Learner</span>
              </div>
            </div>

            <div className="floating-icon float-one">⚡</div>
            <div className="floating-icon float-two">💻</div>
            <div className="floating-icon float-three">🔐</div>
          </div>

          <a href="#about" className="scroll-indicator">
            SCROLL TO EXPLORE ↓
          </a>
        </section>

        {/* ABOUT SECTION */}

        <section id="about" className="section-container about-section">
          <div className="section-heading">
            <p className="section-label">01 / ABOUT ME</p>
            <h2>
              A little about <span>my journey.</span>
            </h2>
          </div>

          <div className="about-grid">
            <div className="about-text">
              <h3>Curiosity drives my code.</h3>

              <p>
                I'm Movva Mounvitha, an aspiring technology professional
                with an interest in software development, cybersecurity
                and innovative digital solutions.
              </p>

              <p>
                With an academic background in Information Technology
                and Cybersecurity, I enjoy combining technical knowledge
                with creativity to solve real-world problems.
              </p>

              <p>
                My journey includes exploring frontend development,
                programming, databases and machine learning. I believe
                every project is an opportunity to learn something new.
              </p>

              <a href="#projects" className="text-link">
                Discover my projects ↗
              </a>
            </div>

            <div className="education-card">
              <div className="card-symbol">🎓</div>
              <p className="section-label">EDUCATION & EXPERIENCE</p>

              <div className="timeline-item">
                <span className="timeline-dot"></span>
                <h4>Cybersecurity & Information Assurance</h4>
                <p>Master's level academic background</p>
              </div>

              <div className="timeline-item">
                <span className="timeline-dot"></span>
                <h4>Information Technology</h4>
                <p>Bachelor's degree</p>
              </div>

              <div className="timeline-item">
                <span className="timeline-dot"></span>
                <h4>Front-End Assistant</h4>
                <p>DevelopTrees · Professional experience</p>
              </div>
            </div>
          </div>
        </section>

        {/* SKILLS SECTION */}

        <section id="skills" className="section-container skills-section">
          <div className="section-heading">
            <p className="section-label">02 / TECH STACK</p>
            <h2>
              My technical <span>superpowers.</span>
            </h2>
            <p>
              Technologies and tools I use while learning and building.
            </p>
          </div>

          <div className="skills-grid">
            {skills.map((skill) => (
              <div className="skill-card" key={skill.name}>
                <span className="skill-icon">{skill.icon}</span>
                <h3>{skill.name}</h3>
                <p>{skill.category}</p>
              </div>
            ))}
          </div>
        </section>

        {/* PROJECTS SECTION */}

        <section id="projects" className="section-container projects-section">
          <div className="section-heading">
            <p className="section-label">03 / MY WORK</p>
            <h2>
              Projects that reflect <span>my learning.</span>
            </h2>
            <p>
              A collection of academic work and creative development.
            </p>
          </div>

          <div className="projects-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.number}>
                <div className="project-top">
                  <span className="project-number">
                    {project.number}
                  </span>
                  <span className="project-icon">{project.icon}</span>
                </div>

                <p className="project-category">{project.category}</p>

                <h3>{project.title}</h3>

                <p className="project-description">
                  {project.description}
                </p>

                <div className="tech-tags">
                  {project.technologies.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* CREATIVE FEATURE: SUPERPOWER SCANNER */}

        <section id="scanner" className="section-container scanner-section">
          <div className="scanner-box">
            <p className="section-label">04 / SECRET FEATURE UNLOCKED</p>

            <div className="scanner-symbol">⌬</div>

            <h2>
              Discover my <span>Superpowers.</span>
            </h2>

            <p className="scanner-description">
              Every developer has something unique. Curious to discover
              what makes me different? Activate my Superpower Scanner
              and uncover my technical strengths!
            </p>

            {!scanned ? (
              <button
                className="scan-button"
                onClick={revealSuperpowers}
              >
                ⚡ SCAN MY SUPERPOWERS
              </button>
            ) : (
              <div className="scanner-results">
                <div className="scan-success">
                  ✨ SCAN COMPLETE — SUPERPOWERS DETECTED!
                </div>

                <div className="superpowers-grid">
                  {superpowers.map((power, index) => (
                    <div className="superpower-card" key={power.title}>
                      <span>{power.icon}</span>
                      <h3>{power.title}</h3>
                      <p>{power.description}</p>
                    </div>
                  ))}
                </div>

                <button
                  className="scan-again"
                  onClick={() => setScanned(false)}
                >
                  ↻ SCAN AGAIN
                </button>
              </div>
            )}

            {!scanned && (
              <p className="scanner-hint">
                ✦ Psst... There's a secret waiting here. Click the scanner!
              </p>
            )}
          </div>
        </section>

        {/* CONTACT SECTION */}

        <section id="contact" className="section-container contact-section">
          <div className="section-heading">
            <p className="section-label">05 / CONTACT</p>
            <h2>
              Let's build something <span>amazing.</span>
            </h2>
            <p>
              Have an opportunity, project or idea? I'd love to connect!
            </p>
          </div>

          <div className="contact-card">
            <div className="contact-icon">✉</div>
            <h3>Let's start a conversation.</h3>
            <p>
              I'm excited to connect with people who share a passion
              for technology, innovation and learning.
            </p>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="primary-button"
            >
              Connect on LinkedIn ↗
            </a>
          </div>
        </section>

      </main>

      {/* FOOTER */}

      <footer className="footer">
        <a href="#home" className="logo">
          M<span>.</span>
        </a>

        <p>
          Designed & Built by <span>Movva Mounvitha</span>
        </p>

        <p>© {new Date().getFullYear()} All Rights Reserved.</p>
      </footer>

    </div>
  );
}

export default App;
