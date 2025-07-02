import React, { useEffect, useState } from 'react';
import './ScrollToTop.css';

function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 200);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      className="scroll-to-top"
      style={{ display: visible ? 'flex' : 'none' }}
      onClick={handleClick}
      title="Scroll to top"
    >
      &#8679;
    </button>
  );
}

export default ScrollToTop; 