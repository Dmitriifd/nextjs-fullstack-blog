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
  const { page = '1', cat } = searchParams;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{cat} Blog</h1>
      <div className={styles.content}>
        <CardList page={page} cat={cat} />
        <Menu />
      </div>
    </div>
  );
};

export default BlogPage;
