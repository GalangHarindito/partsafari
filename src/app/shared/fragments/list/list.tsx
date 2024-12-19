import Card from "@/shared/components/card/card";
import Typography from "@/shared/components/typography/typography";

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
    const { datas } = props;

  return (
    <div className="flex flex-col gap-y-4">
      {datas.length > 0 ? datas.map((data) => {
        return (
          <div key={data.id}>
            <Card data={data}></Card>
          </div>
        );
      }): <Typography type="H3">Sorry, No Data Available</Typography>}
    </div>
  );
}
