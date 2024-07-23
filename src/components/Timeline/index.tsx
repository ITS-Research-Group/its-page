import { useEffect, useRef, useState } from 'react';
import styles from './style.module.css';
import { Years } from '../../types/attributesTypes';
import { DataItem } from '../../types/responseTypes';

interface TimelineProps {
  years: DataItem<Years>[];
  selectedYear: DataItem<Years> | null;
  setSelectedYear: React.Dispatch<React.SetStateAction<DataItem<Years> | null>>;
}

export default function Timeline({
  years,
  selectedYear,
  setSelectedYear,
}: TimelineProps) {
  const timelineRef = useRef<HTMLDivElement>(null);
  const [showButtons, setShowButtons] = useState(false);
  const [isOverflowing, setIsOverflowing] = useState(false);

  const checkOverflow = () => {
    if (timelineRef.current) {
      const hasOverflow =
        timelineRef.current.scrollWidth > timelineRef.current.clientWidth;
      setShowButtons(hasOverflow);
      setIsOverflowing(hasOverflow);
    }
  };

  useEffect(() => {
    checkOverflow();
    window.addEventListener('resize', checkOverflow);
    return () => window.removeEventListener('resize', checkOverflow);
  }, []);

  useEffect(() => {
    checkOverflow();
  }, [years]);

  useEffect(() => {
    console.log(selectedYear);
  }, [selectedYear]);

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

  const handleChangeSelectedYear = (id: number) => {
    if (selectedYear?.id === id) setSelectedYear(null);
    else {
      const year = years.find((year) => year.id === id);
      setSelectedYear(year ? year : null);
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
          <p
            key={year.id}
            className={`${styles.timelineYear} ${selectedYear?.id === year.id ? styles.timelineYearSelectedColor : ''}`}
            onClick={() => {
              handleChangeSelectedYear(year.id);
            }}
          >
            {year.attributes.year}
          </p>
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
