import React from 'react';
import styles from '@/styles/_error.scss';

const Error = () => {
  return (
    <section className={styles['_error-wrapper']}>
      <p className={styles.title}>404</p>
      <p className={styles.content}>Not Found!</p>
    </section>
  );
}

export default Error;
