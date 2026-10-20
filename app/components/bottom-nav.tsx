import { useEffect, useState } from 'react';
import { Info } from 'lucide-react';
import { days } from '../data/itinerary';

export function BottomNav({ day, onDaySelect }: { day: number; onDaySelect: (day: number) => void }) {
  const [section, setSection] = useState<string | null>(null);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      const marker = window.innerHeight * 0.4;
      const current = ['itinerary', 'information'].find(id => {
        const rect = document.getElementById(id)?.getBoundingClientRect();
        return rect && rect.top <= marker && rect.bottom > marker;
      });
      setSection(current ?? null);
    };
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return <nav className="bottom-nav" aria-label="날짜별 일정과 여행 안내 바로가기">
    {days.map((item, index) => <a
      key={item.date}
      href="#itinerary"
      aria-label={`${index + 1}일차 일정 보기`}
      aria-current={section === 'itinerary' && day === index ? 'location' : undefined}
      onClick={() => onDaySelect(index)}
    >
      <span className="bottom-nav-date" aria-hidden="true">{item.date}</span>
      <span>{index + 1}일차</span>
    </a>)}
    <a href="#information" aria-label="여행 안내 info 보기" aria-current={section === 'information' ? 'location' : undefined}>
      <Info size={19} aria-hidden="true"/>
      <span>info</span>
    </a>
  </nav>;
}
