import Image from 'next/image';
import styles from './card.module.css';
import Link from 'next/link';

const Card = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image src='/p1.jpeg' alt='' fill className={styles.image} />
      </div>

      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>10.09.2023 - </span>
          <span className={styles.category}>CULTURE</span>
        </div>
        <Link href={`/posts/temp`}>
          <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
        </Link>
        <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia officiis, architecto vero eum repellat magnam accusamus. Quaerat soluta dignissimos aspernatur, labore beatae non perferendis, rem officia fugiat minima aut excepturi.</p>
        {/* <div
          className={styles.desc}
          dangerouslySetInnerHTML={{ __html: item?.desc.substring(0, 60) }}
        /> */}
        <Link href={`/posts/temp`} className={styles.link}>
          Read More
        </Link>
      </div>
    </div>
  );
};

export default Card;
