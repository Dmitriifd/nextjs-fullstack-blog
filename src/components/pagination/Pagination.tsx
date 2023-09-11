'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import styles from './pagination.module.css';

const Pagination = ({
  page,
  hasPrev,
  hasNext,
}: {
  page: string;
  hasPrev: boolean;
  hasNext: boolean;
}) => {
   const router = useRouter();

   return (
     <div className={styles.container}>
       <button
         className={styles.button}
         disabled={!hasPrev}
         onClick={() => router.push(`?page=${+(page) - 1}`)}
       >
         Previous
       </button>
       <button
         disabled={!hasNext}
         className={styles.button}
         onClick={() => router.push(`?page=${+(page) + 1}`)}
       >
         Next
       </button>
     </div>
   );
};

export default Pagination;
