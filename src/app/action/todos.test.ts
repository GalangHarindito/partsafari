import { fetchTodos } from './todos';

describe('fetchTodos', () => {
  beforeEach(() => {
    jest.clearAllMocks(); // Reset mocks before each test
  });

  test('should fetch todos from the API', async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        status: 200,
        json: jest.fn(() => Promise.resolve([{ id: 1, title: 'Test Todo' }])),
        headers: new Headers(),
        redirected: false,
      } as unknown as Response)
    );

    const todos = await fetchTodos();
    expect(todos).toEqual([{ id: 1, title: 'Test Todo' }]);
    expect(fetch).toHaveBeenCalledWith(
      `${process.env.API_LOCAL_API}/api/todos`,
      {
        method: 'GET',
        cache: 'no-store',
      }
    );
  });

  test('should throw an error if the fetch fails', async () => {
    global.fetch = jest.fn(() => Promise.reject(new Error('Fetch failed')));

    await expect(fetchTodos()).rejects.toThrow(
      'It seems something happened on the server'
    );
  });
});
