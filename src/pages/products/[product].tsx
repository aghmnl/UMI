import { history } from 'umi';

export default function Product(props: any) {
  console.log(props.match.params.product);
  return (
    <div>
      <h1>Page specific product</h1>
      <button type="button" onClick={() => history.goBack()}>
        Go back
      </button>
    </div>
  );
}
