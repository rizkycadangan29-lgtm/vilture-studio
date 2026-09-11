import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import {
  siAutocad,
  siSketchup,
  siAutodeskrevit,
  siGithub,
  siClaude,
  siBlender,
  siFigma,
  siFramer,
  siPython,
  siReplit,
} from "simple-icons";
import "./App.css";

function ToolkitIcon({ icon, name }) {
  return (
    <svg
      viewBox="0 0 24 24"
      role="img"
      aria-label={name}
      xmlns="http://www.w3.org/2000/svg"
      width="42"
      height="42"
      fill="currentColor"
    >
      <path d={icon.path} />
    </svg>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [heroScroll, setHeroScroll] = useState(0);
  const [toolkitVisible, setToolkitVisible] = useState(false);

  const [mouse, setMouse] = useState({
    x: 50,
    y: 50,
  });

  const [experienceProgress, setExperienceProgress] =
    useState(0);

  /* =====================================================
     MOUSE TRACKING
  ===================================================== */

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMouse({
        x: (event.clientX / window.innerWidth) * 100,
        y: (event.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener(
        "mousemove",
        handleMouseMove
      );
    };
  }, []);

  /* =====================================================
   HERO SCROLL
===================================================== */

useEffect(() => {
  let ticking = false;

  const updateHero = () => {
    const progress = Math.min(
      1,
      Math.max(
        0,
        window.scrollY / (window.innerHeight * 0.7)
      )
    );

    setHeroScroll(progress);
    ticking = false;
  };

  const handleScroll = () => {
    if (!ticking) {
      window.requestAnimationFrame(updateHero);
      ticking = true;
    }
  };

  window.addEventListener("scroll", handleScroll, {
    passive: true,
  });

  updateHero();

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, []);

/* =====================================================
   TOOLKIT REVEAL
===================================================== */

useEffect(() => {
  const section = document.querySelector(".toolkit-section");

  if (!section) return;

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        setToolkitVisible(true);
        observer.disconnect();
      }
    },
    {
      threshold: 0.2,
    }
  );

  observer.observe(section);

  return () => {
    observer.disconnect();
  };
}, []);

    /* =====================================================
     EXPERIENCE SCROLL
  ===================================================== */

  useEffect(() => {
    let ticking = false;

    const updateExperience = () => {
      const section = document.getElementById("experience");

      if (!section) {
        ticking = false;
        return;
      }

      const rect = section.getBoundingClientRect();

      const scrollDistance =
        section.offsetHeight - window.innerHeight;

      if (scrollDistance <= 0) {
        setExperienceProgress(0);
        ticking = false;
        return;
      }

      const rawProgress = -rect.top / scrollDistance;

      const progress = Math.min(
        1,
        Math.max(0, rawProgress)
      );

      setExperienceProgress(progress);

      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateExperience);
        ticking = true;
      }
    };

    const handleResize = () => {
      updateExperience();
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    window.addEventListener("resize", handleResize);

    updateExperience();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  /* =====================================================
     EXPERIENCE DATA
  ===================================================== */

  const experiences = [
    {
      number: "01",
      year: "2026 — PRESENT",
      status: "CURRENT",
      position: "Design Administrator",
      company: "PT. Pakuwon Jati Tbk.",
      description:
        "A short description of your role, responsibilities and experience goes here. Replace this text with the information from your LinkedIn profile.",
    },
    {
      number: "02",
      year: "2025 — PRESENT",
      status: "EXPERIENCE",
      position: "Founder",
      company: "VILTURE STUDIO",
      description:
        "A short description of your role, responsibilities and experience goes here. Replace this text with the information from your LinkedIn profile.",
    },
    {
      number: "03",
      year: "2024 — PRESENT",
      status: "EXPERIENCE",
      position: "Drafter",
      company: "Freelancer",
      description:
        "A short description of your role, responsibilities and experience goes here. Replace this text with the information from your LinkedIn profile.",
    },
    {
      number: "04",
      year: "2023 — 2023",
      status: "EXPERIENCE",
      position: "Drafter and Assistant Estimator",
      company: "PT. Visimas Utama Konsulindo",
      description:
        "A short description of your role, responsibilities and experience goes here. Replace this text with the information from your LinkedIn profile.",
    },
  ];

  /*
   * EXPERIENCE STACK POSITION
   *
   * 0.00 = EXPERIENCE 01
   * 0.33 = EXPERIENCE 02
   * 0.66 = EXPERIENCE 03
   * 1.00 = EXPERIENCE 04
   */

  const experiencePosition =
    experienceProgress * (experiences.length - 1);

  const activeExperience = Math.min(
    experiences.length - 1,
    Math.floor(experiencePosition + 0.5)
  );

  const currentExperience =
    experiences[activeExperience];

  /* =====================================================
     DIGITAL TOOLKIT
  ===================================================== */

  const toolkit = [
    {
      name: "AutoCAD",
      icon: siAutocad,
    },
    {
      name: "SketchUp",
      icon: siSketchup,
    },
    {
      name: "Revit",
      icon: siAutodeskrevit,
    },
    {
      name: "GitHub",
      icon: siGithub,
    },
    {
      name: "Claude",
      icon: siClaude,
    },
    {
      name: "Blender",
      icon: siBlender,
    },
    {
      name: "Figma",
      icon: siFigma,
    },
    {
      name: "Framer",
      icon: siFramer,
    },
    {
      name: "Python",
      icon: siPython,
    },
    {
      name: "Replit",
      icon: siReplit,
    },
  ];

  return (
    <main
      className="studio-page"
      style={{
        "--mouse-x": `${mouse.x}%`,
        "--mouse-y": `${mouse.y}%`,
      }}
    >
      <div className="noise" />

      {/* =====================================================
          NAVBAR
      ===================================================== */}

      <nav className="navbar">
        <a
          href="#"
          className="studio-logo"
        >
          <img
            src="/studio-logo.png"
            alt="Studio logo"
          />

          <span>
            VILTURE STUDIO
          </span>
        </a>

        <div
          className={`nav-links ${
            menuOpen ? "open" : ""
          }`}
        >
          <a
            href="#work"
            onClick={() =>
              setMenuOpen(false)
            }
          >
            Work
          </a>

          <a
            href="#services"
            onClick={() =>
              setMenuOpen(false)
            }
          >
            Services
          </a>

          <a
            href="#about"
            onClick={() =>
              setMenuOpen(false)
            }
          >
            About
          </a>

          <a
            href="#contact"
            onClick={() =>
              setMenuOpen(false)
            }
          >
            Contact
          </a>
        </div>

        <a
          href="#contact"
          className="nav-contact"
        >
          Let's talk
          <ArrowUpRight size={16} />
        </a>

        <button
          className="mobile-menu"
          onClick={() =>
            setMenuOpen(
              (prev) => !prev
            )
          }
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <X size={22} />
          ) : (
            <Menu size={22} />
          )}
        </button>
      </nav>

      <section
  className="hero"
  style={{
    "--hero-scroll": heroScroll,
  }}
>
  <div className="hero-glow" />

  <div className="hero-transform" aria-hidden="true">
    <div className="hero-frame hero-frame-left" />
    <div className="hero-frame hero-frame-right" />

    <div className="hero-line hero-line-top" />
    <div className="hero-line hero-line-bottom" />

    <span className="hero-coordinate hero-coordinate-left">
      01 / 04
    </span>

    <span className="hero-coordinate hero-coordinate-right">
      VLT—001
    </span>
  </div>

  <div className="hero-content">
    <div className="eyebrow">
      <span className="eyebrow-dot" />
      MADE BY RIZKY ADIANSYAH
    </div>

    <h1 className="hero-brand">
      <span>VILTURE</span>
      <strong>STUDIO</strong>
    </h1>

    <div className="hero-word-lines" aria-hidden="true">
      <span />
      <span />
      <span />
    </div>
  </div>

  <div className="hero-transition" aria-hidden="true" />
</section>

      <section
  className={`toolkit-section ${
    toolkitVisible ? "is-visible" : ""
  }`}
>
        <div className="toolkit-header">
          <span className="section-number">
            / DIGITAL TOOLKIT
          </span>

          <p>
            The tools and software
            behind our digital work.
          </p>
        </div>

        <div className="toolkit-marquee">
          <div className="toolkit-track">
            {toolkit.map(
              (tool, index) => (
                <div
                  className="toolkit-card"
                  key={`${tool.name}-${index}`}
                >
                  <div className="toolkit-icon">
                    <ToolkitIcon
                      icon={tool.icon}
                      name={tool.name}
                    />
                  </div>

                  <span>
                    {tool.name}
                  </span>
                </div>
              )
            )}

            {toolkit.map(
              (tool, index) => (
                <div
                  className="toolkit-card"
                  key={`duplicate-${tool.name}-${index}`}
                >
                  <div className="toolkit-icon">
                    <ToolkitIcon
                      icon={tool.icon}
                      name={tool.name}
                    />
                  </div>

                  <span>
                    {tool.name}
                  </span>
                </div>
              )
            )}
          </div>
        </div>
      </section>

            {/* =====================================================
          EXPERIENCE — FULL SCREEN STACK
      ===================================================== */}

      <section
        id="experience"
        className="experience-section"
      >
        <div className="experience-sticky">

          {/* HEADER */}

          <div className="experience-header">
            <span className="section-number">
              / EXPERIENCE
            </span>

            <p>
              A timeline of experience
              across building design
            </p>
          </div>

          {/* EXPERIENCE STACK */}

          <div className="experience-stack">

            {experiences.map((experience, index) => {

              const distance =
                index - experiencePosition;

              /*
               * FUTURE CARD
               * Comes from below.
               */

              if (distance > 0) {
                const enterProgress =
                  Math.min(1, distance);

                const translateY =
                  enterProgress * 105;

                const opacity =
                  Math.max(
                    0,
                    1 - enterProgress
                  );

                const scale =
                  1 -
                  enterProgress * 0.025;

                return (
                  <article
                    key={experience.number}
                    className="experience-panel"
                    style={{
                      transform: `
                        translate3d(
                          0,
                          ${translateY}%,
                          0
                        )
                        scale(${scale})
                      `,
                      opacity,
                      zIndex: index + 10,
                    }}
                  >

                    <div className="experience-panel-inner">

                      <div className="experience-panel-top">

                        <span className="experience-number">
                          {experience.number}
                        </span>

                        <span className="experience-year">
                          {experience.year}
                        </span>

                        <span className="experience-status">
                          {experience.status}
                        </span>

                      </div>

                      <div className="experience-panel-main">

                        <span className="experience-kicker">
                          EXPERIENCE
                        </span>

                        <h3>
                          {experience.position}
                        </h3>

                        <h4>
                          {experience.company}
                        </h4>

                        <p>
                          {experience.description}
                        </p>

                      </div>

                      <ArrowUpRight
                        className="experience-panel-arrow"
                        size={24}
                      />

                    </div>

                  </article>
                );
              }

              /*
 * ACTIVE / PREVIOUS CARD
 * Previous cards stay behind the current card
 * and disappear completely once passed.
 */

const pastProgress = Math.min(
  1,
  Math.abs(distance)
);

const translateY =
  -pastProgress * 5;

const scale =
  1 -
  pastProgress * 0.025;

const opacity =
  pastProgress >= 0.5
    ? 0
    : 1 - pastProgress * 2;

              return (
                <article
                  key={experience.number}
                  className="experience-panel"
                  style={{
                    transform: `
                      translate3d(
                        0,
                        ${translateY}%,
                        0
                      )
                      scale(${scale})
                    `,
                    opacity,
                    zIndex: index + 10,
                  }}
                >

                  <div className="experience-panel-inner">

                    <div className="experience-panel-top">

                      <span className="experience-number">
                        {experience.number}
                      </span>

                      <span className="experience-year">
                        {experience.year}
                      </span>

                      <span className="experience-status">
                        {experience.status}
                      </span>

                    </div>

                    <div className="experience-panel-main">

                      <span className="experience-kicker">
                        EXPERIENCE
                      </span>

                      <h3>
                        {experience.position}
                      </h3>

                      <h4>
                        {experience.company}
                      </h4>

                      <p>
                        {experience.description}
                      </p>

                    </div>

                    <ArrowUpRight
                      className="experience-panel-arrow"
                      size={24}
                    />

                  </div>

                </article>
              );
            })}

          </div>

          {/* SMALL SCROLL INDICATOR */}

          <div className="experience-footer">

            <span>
              {currentExperience.number}
            </span>

            <span>
              SCROLL TO EXPLORE
            </span>

            <span>
              04
            </span>

          </div>

        </div>
      </section>

      <section
  id="work"
  className="intro-section work-section"
>
  <div className="work-system" aria-hidden="true">
    <span className="work-system-line work-line-1" />
    <span className="work-system-line work-line-2" />
    <span className="work-system-line work-line-3" />

    <span className="work-system-node work-node-1" />
    <span className="work-system-node work-node-2" />
    <span className="work-system-node work-node-3" />
  </div>

  <span className="section-number">
    01 / WORK
  </span>

  <div className="work-content">
    <span className="work-kicker">
      SELECTED WORK / 2026
    </span>

    <h2>
      Ideas deserve
      <br />
      <em>to be seen.</em>
    </h2>

    <p>
      We turn concepts into visual experiences
      that are impossible to ignore.
    </p>
  </div>

  <div className="work-index">
    <span>VLT—WORK</span>
    <span>03 PROJECTS</span>
  </div>
</section>

      <section
  id="services"
  className="simple-section services-section"
>
  <span className="section-number">
    02 / SERVICES
  </span>

  <div className="services-intro">
    <span>WHAT WE BUILD</span>
    <p>
      Digital systems, visual identities and
      experiences built with intention.
    </p>
  </div>

  <div className="service-list">
    <div>
      <span>01</span>
      <h3>Digital Design</h3>
      <ArrowUpRight size={20} />
    </div>

    <div>
      <span>02</span>
      <h3>Web Experiences</h3>
      <ArrowUpRight size={20} />
    </div>

    <div>
      <span>03</span>
      <h3>Brand Identity</h3>
      <ArrowUpRight size={20} />
    </div>
  </div>
</section>

      <section
  id="about"
  className="simple-section about-section"
>
  <div className="about-orbit" aria-hidden="true">
    <span />
    <span />
    <span />
  </div>

  <span className="section-number">
    03 / ABOUT
  </span>

  <div className="about-content">
    <span className="about-kicker">
      VILTURE STUDIO / EST. 2025
    </span>

    <h2 className="about-title">
      Small studio.
      <br />
      <em>Big ideas.</em>
    </h2>

    <p>
      An independent creative studio exploring
      design, technology and visual experiences.
    </p>
  </div>
</section>

      <section
  id="contact"
  className="contact-section"
>
  <div className="contact-system" aria-hidden="true">
    <span />
    <span />
    <span />
  </div>

  <span className="section-number">
    04 / CONTACT
  </span>

  <div className="contact-content">
    <span className="contact-kicker">
      HAVE A PROJECT?
    </span>

    <h2>
      Let's make
      <br />
      <em>something.</em>
    </h2>

    <a
      href="mailto:hello@studio.com"
      className="contact-button"
    >
      Start a conversation
      <ArrowUpRight size={20} />
    </a>
  </div>
</section>

      {/* =====================================================
          FOOTER
      ===================================================== */}

      <footer>
        <span>
          © 2026 VILTURE STUDIO
        </span>

        <span>
          Digital experiences /
          Worldwide
        </span>
      </footer>

    </main>
  );
}

export default App;