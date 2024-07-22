import { useEffect, useRef, useState } from 'react';
import styles from './style.module.css';

const years = [
  { year: 2019, description: '' },
  { year: 2020, description: '' },
  { year: 2021, description: '' },
  { year: 2022, description: '' },
  { year: 2023, description: '' },
  { year: 2024, description: '' },
];

export default function Timeline() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const [showButtons, setShowButtons] = useState(false);
  const [isOverflowing, setIsOverflowing] = useState(false);

  useEffect(() => {
    const checkOverflow = () => {
      if (timelineRef.current) {
        const hasOverflow =
          timelineRef.current.scrollWidth > timelineRef.current.clientWidth;
        setShowButtons(hasOverflow);
        setIsOverflowing(hasOverflow);
      }
    };

    checkOverflow();
    window.addEventListener('resize', checkOverflow);
    return () => window.removeEventListener('resize', checkOverflow);
  }, []);

  const scrollLeft = () => {
    if (timelineRef.current) {
      timelineRef.current.scrollBy({ left: -100, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (timelineRef.current) {
      timelineRef.current.scrollBy({ left: 100, behavior: 'smooth' });
    }
  };

  return (
    <div
      className={`${styles.timelineContainer} ${isOverflowing ? styles.overflow : styles.noOverflow}`}
    >
      {showButtons && (
        <button className={styles.scrollButton} onClick={scrollLeft}>
          <img src="/public/arrow.svg" alt="back arrow" />
        </button>
      )}
      <div className={styles.timeline} ref={timelineRef}>
        {years.map((year) => (
          <p key={year.year}>{year.year}</p>
        ))}
      </div>
      {showButtons && (
        <button className={styles.scrollButton} onClick={scrollRight}>
          <img src="/public/arrow.svg" alt="back arrow" />
        </button>
      )}
    </div>
  );
}
