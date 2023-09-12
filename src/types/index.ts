export type Post = {
  id: string;
  createdAt: string;
  slug: string;
  title: string;
  desc: string;
  img: string;
  views: number;
  catSlug: string;
  userEmail: string;
};

export interface Comments {
  id: string
  createdAt: string
  desc: string
  userEmail: string
  postSlug: string
  user: User
}

export interface User {
  id: string
  name: string
  email: string
  image: string
}

export type Category = {
  id: string;
  slug: string;
  title: string;
  img: string;
};