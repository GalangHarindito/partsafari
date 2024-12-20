import { NextResponse } from 'next/server';
import { TodosModel } from '@/model/todos';

export async function GET() {
  try {
    // Define headers
    const headers = {
      'x-api-key': '_9S-5-OVaZAg5CAgfVdPOaXfp9pggK57wlHz',
    };

    const res = await fetch(`${process.env.API_URL}/todos2`, { headers });

    if (!res.ok) {
      throw new Error(`Failed to fetch data: ${res.statusText}`);
    }

    const data: TodosModel = await res.json();

    return NextResponse.json(data);
  } catch (error: any) {
    // Handle and log the error
    console.error('Error fetching todos:', error.message);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
