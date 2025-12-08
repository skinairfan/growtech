import React, { useState, useEffect, useRef } from "react";
import Image from "./Images";
import NavBar from "./NavBar";
import Button from "./Button";
import { SettingIcon } from "./svgIcon";
import brandLight from "../images/logo.png";
import brandDark from "../images/darklogo.png";

function Header({ theme, toggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [themeOpen, setThemeOpen] = useState(false);
  const wrapperRef = useRef();

  // close theme dropdown on outside click
  useEffect(() => {
    function handleClick(e) {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setThemeOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <div className="mainheader relative" style={{ background: "var(--bg-color)", padding: "10px 0" }}>
      <div className="container">
        <header className="row align-items-center justify-content-between">

          {/* BRAND */}
          <div className="col-auto">
            <a href="/home">
              <Image src={theme === "dark" ? brandDark : brandLight} width={150} />
            </a>
          </div>

          {/* DESKTOP NAV + BUTTONS */}
          <div className="col-auto d-none d-lg-flex align-items-center gap-4">
            <NavBar variant="nav" />
            <Button variant="primaryg" title="Get In Touch" />

            {/* THEME TOGGLE */}
            <div style={{ position: "relative" }} ref={wrapperRef}>
              <button
                className="theme-toggle-btn d-flex align-items-center"
                onClick={() => setThemeOpen((s) => !s)}
              >
                <SettingIcon size={18} color="var(--primary-color)" />
                <span className="ms-2">{theme === "light" ? "Light" : "Dark"}</span>
              </button>

              {themeOpen && (
                <div className="theme-dropdown">
                  <div className="item" onClick={() => { toggleTheme("light"); setThemeOpen(false); }}>🌞 Light Mode</div>
                  <div className="item" onClick={() => { toggleTheme("dark"); setThemeOpen(false); }}>🌙 Dark Mode</div>
                  <div
                    className="item"
                    onClick={() => {
                      const prefersDark =
                        window.matchMedia("(prefers-color-scheme: dark)").matches;
                      toggleTheme(prefersDark ? "dark" : "light");
                      setThemeOpen(false);
                    }}
                  >
                    🖥️ System Default
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* MOBILE SECTION */}
          <div className="col-auto d-lg-none d-flex align-items-center gap-3">

            {/* CTA Button visible only in Mobile */}
            <Button variant="primaryg" title="Get In Touch" />

            {/* HAMBURGER BUTTON */}
            <button
              className="hamburger-btn"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {/* animated ICON */}
              <div className={menuOpen ? "line line1 active" : "line line1"}></div>
              <div className={menuOpen ? "line line2 active" : "line line2"}></div>
              <div className={menuOpen ? "line line3 active" : "line line3"}></div>
            </button>
          </div>

        </header>

        {/* MOBILE MENU */}
        <div className={menuOpen ? "mobile-menu open" : "mobile-menu"}>
          <NavBar variant="nav" className="flex-column" />
        </div>
      </div>
    </div>
  );
}

export default Header;
