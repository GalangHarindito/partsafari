export interface TodosModel {
  data: {
    id: number;
    category: string;
    task: string;
    createdAt: string;
    completed: boolean;
  }[];
}
