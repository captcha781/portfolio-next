import React, { MouseEvent, useState } from "react";

interface SpanProps {
  key: number;
  style: React.CSSProperties;
}

const Navigation = () => {
  const [ripples, setRipples] = useState<SpanProps[]>([]);

  const rippleEffect = (event: MouseEvent<HTMLButtonElement>): void => {
    const btn = event.currentTarget;
    const diameter = Math.max(btn.clientWidth, btn.clientHeight);
    const radius = diameter / 2;
    const rect = btn.getBoundingClientRect();

    const newRipple = {
      key: Date.now(),
      style: {
        width: `${diameter}px`,
        height: `${diameter}px`,
        left: `${event.clientX - (rect.left + radius)}px`,
        top: `${event.clientY - (rect.top + radius)}px`,
      },
    };

    setRipples([...ripples, newRipple]);

    setTimeout(() => {
      setRipples((prevRipples) =>
        prevRipples.filter((ripple) => ripple.key !== newRipple.key)
      );
    }, 800);
  };

  return (
    <nav className="nav-container">
      <div className="nav-container-flex tw-z-10">
        <h3 className="header-text">
          Bhuvaneshwaran<span className="tw-text-red-500">.</span>
        </h3>
        <ul className="nav-center nav-mid-list">
          <li>Home</li>
          <li>Works</li>
          <li>About</li>
          <li>Skills</li>
          <li>Services</li>
        </ul>
        <div className="tw-relative">
          <button className="nav-contact-btn" onClick={rippleEffect}>
            Contact Me
            {ripples.map((ripple) => (
              <span
                key={ripple.key}
                className="ripple"
                style={ripple.style}
              ></span>
            ))}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
