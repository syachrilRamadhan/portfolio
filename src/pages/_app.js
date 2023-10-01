import "@/styles/globals.css";
import { Montserrat } from "next/font/google";
import Head from "next/head";
import { useRouter } from "next/router";

const monserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-mont",
});
export default function App({ Component, pageProps }) {
  const router = useRouter();
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${monserrat.variable} font-mont w-full min-h-screen flex flex-col items-center justify center`}></main>
      <Component key={router.asPath} {...pageProps} />
    </>
  );
}
