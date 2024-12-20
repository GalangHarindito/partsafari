import { Suspense } from 'react';
import { fetchTodos } from './action/todos';
import Filter from './shared/fragments/filter/filter';
import LayoutPage from './shared/fragments/layoutPage/layoutPage';
import List from './shared/fragments/list/list';

export default async function Home() {
  const fetchData = await fetchTodos();

  const categories = fetchData
    .map(({ category }: { category: string }) => category) // Extract categories
    .filter(
      (value: any, index: any, self: any) => self.indexOf(value) === index
    ) // Remove duplicates
    .map((category: any, index: any) => ({ id: index + 1, category }));

  return (
    <div className="flex">
      <LayoutPage>
        <div className="w-full flex flex-col gap-y-3 sm:w-1/2 lg:w-800">
          <Suspense fallback={<div>Loading...</div>}>
            <Filter data={categories}></Filter>
            <List datas={fetchData}></List>
          </Suspense>
        </div>
      </LayoutPage>
    </div>
  );
}
