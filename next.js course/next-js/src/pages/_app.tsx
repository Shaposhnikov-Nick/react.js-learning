import {AppProps} from "next/app"
import "../styles/globals.scss";
import Image from "next/image";
import Layout from "../components/Layout";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Layout>
       <main>
      <Component {...pageProps} />
       </main>
      <Image src='/logo.png' width={500} height={350} alt='preview' />
    </Layout>
  );
};

export default App;
