import Checkbox from '@/shared/components/checkbox/checkbox';
import Typography from '@/shared/components/typography/typography';
import { formatDate } from '@/utils/helper';

interface CardPropertyProps {
  data: {
    id: number;
    category: string;
    task: string;
    createdAt: string;
    completed: boolean;
  };
  onToggle: (checked: boolean) => void;
}

export default function Card({ data, onToggle }: CardPropertyProps) {
  const { category, task, createdAt, completed } = data;

  return (
    <div className="bg-white grid grid-cols-[70px,1fr,2fr] p-2">
      <div className="justify-self-center self-center">
        <Checkbox check={completed} onChange = {onToggle} />
      </div>
      <div className="justify-self-start">
        <Typography type="H4" title={task} />
        <Typography
          type="p"
          className={['text-sm', 'font-normal']}
          title={category}
        />
      </div>
      <div className="justify-self-end">
        <Typography
          type="p"
          className={['text-sm', 'font-normal', 'pt-1', 'pr-2']}
          title={formatDate(createdAt)}
        />
      </div>
    </div>
  );
}
