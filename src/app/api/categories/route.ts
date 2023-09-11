import prisma from '@/utils/connect';
import { NextResponse } from 'next/server';

export const GET = async () => {
  try {
    const categories = await prisma.category.findMany();

    return new NextResponse(
      JSON.stringify(categories, null, 2),
      { status: 200 }
    );
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: 'Something went wrong!' }, null, 2),
      { status: 500 }
    );
  }
};