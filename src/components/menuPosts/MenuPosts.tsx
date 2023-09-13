import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styles from './menuPosts.module.css';
import { PopularPost } from '@/types';

const getData = async () => {
  const res = await fetch(`http://127.0.0.1:3000/api/popular`, {
    cache: 'no-store',
  });

  if (!res.ok) {
    throw new Error('Failed');
  }

  return res.json();
};

const MenuPosts = async ({ withImage }: { withImage?: boolean }) => {
  const popularPosts = await getData();

  return (
    <div className={styles.items}>
      {popularPosts.map((item: PopularPost) => (
        <Link
          href={`/posts/${item.slug}`}
          className={styles.item}
          key={item.id}
        >
          {withImage && (
            <div className={styles.imageContainer}>
              <Image src='/p1.jpeg' alt='' fill className={styles.image} />
            </div>
          )}
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.travel}`}>
              {item.slug}
            </span>
            <h3 className={styles.postTitle}>{item.title}</h3>
            <div className={styles.detail}>
              <span className={styles.username}>{item.user.name}</span>
              <span className={styles.date}>
                {' '}
                - {item.createdAt.substring(0, 10)}
              </span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default MenuPosts;
