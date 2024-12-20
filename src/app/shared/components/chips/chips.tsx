'use client';

import Typography from '../typography/typography';

interface TabProps {
  title: string;
  active: string;
  onClick: () => void;
}

export default function Chips({ title, active, onClick }: TabProps) {
  const isActive = title === active;

  return (
    <div
      className={`p-4 py-2 rounded-full cursor-pointer ${
        isActive ? 'bg-tab-active' : 'bg-tab-inactive'
      }`}
      onClick={onClick}
    >
      <Typography
        type="p"
        className={['font-bold', 'sm:text-sm', 'text-xs']}
        title={title.toUpperCase()}
      />
    </div>
  );
}
