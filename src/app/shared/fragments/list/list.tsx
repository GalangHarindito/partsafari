'use client';

import Card from '@/shared/components/card/card';
import Typography from '@/shared/components/typography/typography';
import { useSearchParams } from 'next/navigation';
import { useMemo, useState } from 'react';

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

  const [tasks, setTasks] = useState(initialData)

  const processData = (category: string) => {
    let filteredData
    if (category === 'all') {
      filteredData =  tasks;
    } else {
      filteredData = tasks.filter((data) => data.category === category);
    }
    return filteredData.sort((a, b) => (b.completed ? 1 : 0) - (a.completed ? 1 : 0));
    
  };

  const visibleTodos = useMemo(
    () => processData(initialCategory),
    [initialCategory, tasks]
  );

  const toggleCompletion = (id:any) => {
    setTasks((prevTasks) => {
        const updatedTasks = prevTasks.map((task) =>
          task.id === id ? { ...task, completed: !task.completed } : task
        );
        return [...updatedTasks];
      });
  }

  return (
    <div className="flex flex-col gap-y-4">
      {visibleTodos.length > 0 ? (
        visibleTodos.map((data) => {
          return (
            <div key={data.id}>
              <Card data={data} onToggle = {() => toggleCompletion(data.id) }></Card>
            </div>
          );
        })
      ) : (
        <Typography type="H3" title="Sorry, No Data Available" />
      )}
    </div>
  );
}
