import Featured from '@/components/featured/Featured';
import styles from './homepage.module.css';
import CategoryList from '@/components/categoryList/CategoryList';
import CardList from '@/components/cardList/CardList';
import Menu from '@/components/menu/Menu';
import Pagination from '@/components/pagination/Pagination';

export default function Home({ searchParams }: { searchParams: { page: string } }) {
  const page = parseInt(searchParams.page) || 1;

  return (
    <div className={styles.container}>
      <Featured />
      <CategoryList />
      <div className={styles.content}>
        <CardList page={page} />
        <Menu />
      </div>
      <Pagination />
    </div>
  );
}
