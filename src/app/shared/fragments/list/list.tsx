'use client';

import Card from '@/shared/components/card/card';
import Typography from '@/shared/components/typography/typography';
import { useSearchParams } from 'next/navigation';
import { useMemo } from 'react';

interface ListProps {
  children?: React.ReactNode;
  datas: {
    id: number;
    category: string;
    task: string;
    createdAt: string;
    completed: boolean;
  }[];
}
export default function List(props: ListProps) {
  const searchParams = useSearchParams();
  const { datas: initialData } = props;
  const initialCategory = searchParams.get('tab') || 'all';

  const processData = (category: string) => {
    if (category === 'all') {
      return initialData;
    } else {
      const filtered = initialData.filter((data) => data.category === category);
      return filtered;
    }
  };

  const visibleTodos = useMemo(
    () => processData(initialCategory),
    [initialCategory]
  );

  return (
    <div className="flex flex-col gap-y-4">
      {visibleTodos.length > 0 ? (
        visibleTodos.map((data) => {
          return (
            <div key={data.id}>
              <Card data={data}></Card>
            </div>
          );
        })
      ) : (
        <Typography type="H3" title="Sorry, No Data Available" />
      )}
    </div>
  );
}
