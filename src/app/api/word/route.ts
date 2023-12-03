import { NextResponse, NextRequest } from 'next/server'
import { kv } from '@vercel/kv';
import { IWord } from '@/types';
import { Word } from '@/store';

const KEY = 'words';
interface JSONResponse<T> {
  code: number;
  data: T
}

function success<T>(data: T) {
  NextResponse.json<JSONResponse<T>>({ code: 0, data }, { status: 200 });
}

export async function GET(request: NextRequest) {
  const words = await kv.get<IWord[]>(KEY) ?? [];
  success(words);
}

export async function POST(request: NextRequest) {
  const words = await kv.get<IWord[]>(KEY) ?? [];
  const body = await request.json();
  console.log('body', body);
  // words.push(new Word(body));
  // kv.set<IWord[]>(KEY, words);
  success('');
}

export async function PATCH(request: NextRequest) {

}

export async function DELETE(request: NextRequest) {

}