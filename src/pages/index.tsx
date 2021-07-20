import styles from './index.less';

export default function IndexPage(props: any) {
  console.log(props.params);
  return (
    <div>
      <h1 className={styles.title}>Page index2</h1>
      <a href="/products/">Products</a>
    </div>
  );
}
