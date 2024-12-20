'use client';

import Chips from '@/shared/components/chips/chips';
import Typography from '@/shared/components/typography/typography';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

interface categoryProps {
  data: {
    id: number;
    category: string;
  }[];
}

export default function Filter({ data }: categoryProps) {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const newData = [...data, { id: data.length + 1, category: 'all' }].reverse();
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams.toString());

  const addQueryParam = (value: string) => {
    params.set('tab', value);
    router.push(`${pathname}?${params.toString()}`);
    setActiveCategory(value);
  };

  useEffect(() => {
    const initialCategory = searchParams.get('tab') || 'all';
    setActiveCategory(initialCategory);
  }, [searchParams]);

  useEffect(() => {
    setActiveCategory('all');
    addQueryParam('all');
  }, []);

  return (
    <div className="flex flex-row gap-3 items-center">
      <Typography
        type="p"
        className={['font-bold', 'sm:text-sm', 'text-xs']}
        title="Filter:"
      />
      {newData.map((item) => {
        return (
          <div key={item.id}>
            <Chips
              title={item.category}
              active={activeCategory}
              onClick={() => addQueryParam(item.category)}
            />
          </div>
        );
      })}
    </div>
  );
}
