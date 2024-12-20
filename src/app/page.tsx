'use server';

import { fetchTodos } from './action/todos';
import Filter from './shared/fragments/filter/filter';
import LayoutPage from './shared/fragments/layoutPage/layoutPage';
import List from './shared/fragments/list/list';
import { Suspense } from 'react';

export default async function Home() {
  let fetchData = [];
  let categories = [];

  try {
    fetchData = await fetchTodos();

    categories = fetchData
      .map(({ category }: { category: string }) => category)
      .filter(
        (value: any, index: any, self: any) => self.indexOf(value) === index
      )
      .map((category: any, index: any) => ({ id: index + 1, category }));
  } catch (error) {
    console.error('Error fetching data:', error);
    fetchData = [];
    categories = [];
  }

  return (
    <div className="flex">
      <LayoutPage>
        <Suspense fallback={<div>Loading...</div>}>
          <div className="w-full flex flex-col gap-y-3 sm:w-1/2 lg:w-800">
            <Filter data={categories}></Filter>
            <List datas={fetchData}></List>
          </div>
        </Suspense>
      </LayoutPage>
    </div>
  );
}
