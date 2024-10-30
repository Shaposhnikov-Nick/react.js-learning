import "@/styles/globals.scss";
import Layout from "@/components/Layout";
import Image from "next/image";

const App = ({ Component, pageProps }) => {
  return (
    <Layout>
      {/* <main> */}
      <Component {...pageProps} />
      {/* </main> */}
      <Image src='/logo.png' width={500} height={350} alt='preview' />
    </Layout>
  );
};

export default App;
