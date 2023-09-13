import Link from 'next/link';
import React from 'react';
import styles from './menuCategories.module.css';
import { Category } from '@/types';
import { BASE_URL } from '@/utils/const';

const getData = async () => {
  const res = await fetch(`${BASE_URL}/api/categories`, {
    cache: 'no-store',
  });

  if (!res.ok) {
    throw new Error('Failed');
  }

  return res.json();
};


const MenuCategories = async () => {
  const data = await getData();

  return (
    <div className={styles.categoryList}>
        {data.map(({ title }: Category) => (
          <Link
            href={`/blog?cat=${title}`}
            className={`${styles.categoryItem} ${styles[title]}`}
            key={title}
          >
            {title}
          </Link>
        ))}
    </div>
  );
};

export default MenuCategories;
