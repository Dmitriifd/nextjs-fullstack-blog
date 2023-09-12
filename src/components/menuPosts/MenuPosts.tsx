import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styles from './menuPosts.module.css';
import prisma from '@/utils/connect';

const MenuPosts = async ({ withImage }: { withImage?: boolean}) => {
  const popularPosts = await prisma.post.findMany({
    orderBy: {
      views: 'desc',
    },
    take: 5, // Получить только 5 популярных постов
    include: {
      user: true,
    },
  });

  return (
    <div className={styles.items}>
      {popularPosts.map((item) => (
         <Link href={`/posts/${item.slug}`} className={styles.item} key={item.id}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image src='/p1.jpeg' alt='' fill className={styles.image} />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.travel}`}>{item.slug}</span>
          <h3 className={styles.postTitle}>
            {item.title}
          </h3>
          <div className={styles.detail}>
            <span className={styles.username}>{item.user.name}</span>
            <span className={styles.date}> - {item.createdAt.toISOString().substring(0,10)}</span>
          </div>
        </div>
      </Link>
      ))}
    </div>
  );
};

export default MenuPosts;
