import Checkbox from "@/shared/components/checkbox/checkbox";
import Typography from "@/shared/components/typography/typography";
import { formatDate } from "@/utils/helper";

interface CardPropertyProps {
  data: {
    id: number;
    category: string;
    task: string;
    createdAt: string;
    completed: boolean;
  };
}

export default function Card({ data }: CardPropertyProps) {
  const { category, task, createdAt, completed } = data;

  return (
    <div className="bg-white grid grid-cols-[70px,1fr,2fr] p-2">
      <div className="justify-self-center self-center">
        <Checkbox check={completed} />
      </div>
      <div className="justify-self-start">
        <Typography type="H4">{task}</Typography>
        <Typography type="p" className={["text-sm", "font-normal"]}>
          {category}
        </Typography>
      </div>
      <div className="justify-self-center">
        <Typography type="p" className={["text-sm", "font-normal"]}>
          {formatDate(createdAt)}
        </Typography>
      </div>
    </div>
  );
}
