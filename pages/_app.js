import '../app/globals.css';
// import GlobalMouseEffect from '../components/GlobalMouseEffect';

export default function App({ Component, pageProps }) {
  return (
    <>
      {/* <GlobalMouseEffect /> */}
      <Component {...pageProps} />
    </>
  );
}