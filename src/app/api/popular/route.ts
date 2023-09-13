import prisma from '@/utils/connect';
import { NextResponse } from 'next/server';

export const GET = async (req: Request): Promise<Response> => {
  try {
    const popularPosts = await prisma.post.findMany({
      orderBy: {
        views: 'desc',
      },
      take: 5, // get 5 popular posts by views
      include: {
        user: true,
      },
    });

    return new NextResponse(JSON.stringify(popularPosts, null, 2), {
      status: 200,
    });
  } catch (error) {
    console.error(error);
    return new NextResponse(
      JSON.stringify({ message: 'Something went wrong!' }),
      { status: 500 }
    );
  }
};
