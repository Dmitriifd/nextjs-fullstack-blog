import CardList from '@/components/cardList/CardList';
import styles from './blogPage.module.css';
import Menu from '@/components/menu/Menu';

type BlogPageProps = {
  searchParams: {
    page: string;
    cat: string;
  };
};

const BlogPage = ({ searchParams }: BlogPageProps) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Style Blog</h1>
      <div className={styles.content}>
        <CardList />
        <Menu />
      </div>
    </div>
  );
};

export default BlogPage;
