'use server';

export const fetchTodos = async () => {
  try {
    const fetchData = await fetch(`${process.env.API_LOCAL_API}/api/todos`, {
      method: 'GET',
      cache: 'no-store',
    });

    const data = await fetchData.json();
    return data;
  } catch {
    throw new Error('It seems something happened on the server');
  }
};
