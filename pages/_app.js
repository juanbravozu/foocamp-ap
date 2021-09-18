import '../styles/ayp.scss';
import Layout from '../components/Layout';

function MyApp(props) {
  const { Component, pageProps, pageProps: { masterPageProps } } = props;
  return (
    <Layout masterPageProps={masterPageProps}>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
