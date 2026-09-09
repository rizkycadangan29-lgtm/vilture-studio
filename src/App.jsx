import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import "./App.css";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mouse, setMouse] = useState({ x: 50, y: 50 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMouse({
        x: (event.clientX / window.innerWidth) * 100,
        y: (event.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <main
      className="studio-page"
      style={{
        "--mouse-x": `${mouse.x}%`,
        "--mouse-y": `${mouse.y}%`,
      }}
    >
      <div className="noise" />

      {/* NAVBAR */}
      <nav className="navbar">
        <a href="#" className="studio-logo">
          <img src="/studio-logo.png" alt="Studio logo" />
          <span>VILTURE STUDIO</span>
        </a>

        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          <a href="#work" onClick={() => setMenuOpen(false)}>
            Work
          </a>

          <a href="#services" onClick={() => setMenuOpen(false)}>
            Services
          </a>

          <a href="#about" onClick={() => setMenuOpen(false)}>
            About
          </a>

          <a href="#contact" onClick={() => setMenuOpen(false)}>
            Contact
          </a>
        </div>

        <a href="#contact" className="nav-contact">
          Let's talk
          <ArrowUpRight size={16} />
        </a>

        <button
          className="mobile-menu"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="hero-glow" />

        <div className="hero-content">
          <div className="eyebrow">
            <span className="eyebrow-dot" />
            Independent creative studio
          </div>

          <h1>
            WE CREATE
            <span>DIGITAL WORLDS.</span>
          </h1>

          <div className="hero-bottom">
            <p>
              We design and build distinctive digital experiences,
              identities and environments for ambitious ideas.
            </p>

            <a href="#work" className="hero-button">
              Explore our work

              <span>
                <ArrowUpRight size={19} />
              </span>
            </a>
          </div>
        </div>

        <div className="hero-index">
          <span>01</span>
          <div />
          <span>04</span>
        </div>

        <div className="scroll-indicator">
          <span>Scroll to explore</span>
          <div className="scroll-line" />
        </div>
      </section>

      {/* DIGITAL TOOLKIT */}
<section className="toolkit-section">
  <div className="toolkit-header">
    <span className="section-number">/ DIGITAL TOOLKIT</span>

    <p>
      The tools and software behind our digital work.
    </p>
  </div>

  <div className="toolkit-marquee">
    <div className="toolkit-track">
      {[
        {
          name: "Blender",
          icon: "https://cdn.simpleicons.org/blender/ffffff",
        },
        {
          name: "AutoCAD",
          icon: "https://cdn.simpleicons.org/autocad/ffffff",
        },
        {
          name: "Revit",
          icon: "https://cdn.simpleicons.org/autodesk/ffffff",
        },
        {
          name: "Rhino",
          icon: "https://cdn.simpleicons.org/rhinoceros/ffffff",
        },
        {
          name: "SketchUp",
          icon: "https://cdn.simpleicons.org/sketchup/ffffff",
        },
        {
          name: "Photoshop",
          icon: "https://cdn.simpleicons.org/adobephotoshop/ffffff",
        },
        {
          name: "Illustrator",
          icon: "https://cdn.simpleicons.org/adobeillustrator/ffffff",
        },
        {
          name: "Figma",
          icon: "https://cdn.simpleicons.org/figma/ffffff",
        },
        {
          name: "After Effects",
          icon: "https://cdn.simpleicons.org/adobeaftereffects/ffffff",
        },
        {
          name: "Premiere Pro",
          icon: "https://cdn.simpleicons.org/adobepremierepro/ffffff",
        },
      ].map((tool, index) => (
        <div className="toolkit-card" key={`${tool.name}-${index}`}>
          <img
            src={tool.icon}
            alt={tool.name}
          />

          <span>{tool.name}</span>
        </div>
      ))}

      {[
        {
          name: "Blender",
          icon: "https://cdn.simpleicons.org/blender/ffffff",
        },
        {
          name: "AutoCAD",
          icon: "https://cdn.simpleicons.org/autocad/ffffff",
        },
        {
          name: "Revit",
          icon: "https://cdn.simpleicons.org/autodesk/ffffff",
        },
        {
          name: "Rhino",
          icon: "https://cdn.simpleicons.org/rhinoceros/ffffff",
        },
        {
          name: "SketchUp",
          icon: "https://cdn.simpleicons.org/sketchup/ffffff",
        },
        {
          name: "Photoshop",
          icon: "https://cdn.simpleicons.org/adobephotoshop/ffffff",
        },
        {
          name: "Illustrator",
          icon: "https://cdn.simpleicons.org/adobeillustrator/ffffff",
        },
        {
          name: "Figma",
          icon: "https://cdn.simpleicons.org/figma/ffffff",
        },
        {
          name: "After Effects",
          icon: "https://cdn.simpleicons.org/adobeaftereffects/ffffff",
        },
        {
          name: "Premiere Pro",
          icon: "https://cdn.simpleicons.org/adobepremierepro/ffffff",
        },
      ].map((tool, index) => (
        <div className="toolkit-card" key={`duplicate-${tool.name}-${index}`}>
          <img
            src={tool.icon}
            alt={tool.name}
          />

          <span>{tool.name}</span>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* WORK */}
      <section id="work" className="intro-section">
        <span className="section-number">01 / WORK</span>

        <h2>
          Ideas deserve
          <br />
          <em>to be seen.</em>
        </h2>

        <p>
          We turn concepts into visual experiences that are
          impossible to ignore.
        </p>
      </section>

      {/* SERVICES */}
      <section id="services" className="simple-section">
        <span className="section-number">02 / SERVICES</span>

        <div className="service-list">
          <div>
            <span>01</span>
            <h3>Digital Design</h3>
          </div>

          <div>
            <span>02</span>
            <h3>Web Experiences</h3>
          </div>

          <div>
            <span>03</span>
            <h3>Brand Identity</h3>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="simple-section">
        <span className="section-number">03 / ABOUT</span>

        <h2 className="about-title">
          Small studio.
          <br />
          <em>Big ideas.</em>
        </h2>
      </section>

      {/* CONTACT */}
      <section id="contact" className="contact-section">
        <span className="section-number">04 / CONTACT</span>

        <h2>
          Have a project
          <br />
          <em>in mind?</em>
        </h2>

        <a href="mailto:hello@studio.com" className="contact-button">
          Start a conversation
          <ArrowUpRight size={20} />
        </a>
      </section>

      <footer>
        <span>© 2026 VILTURE STUDIO</span>
        <span>Digital experiences / Worldwide</span>
      </footer>
    </main>
  );
}

export default App;