import '../styles/globals.css';
import type { AppProps } from 'next/app';

function QuickPortfolio({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default QuickPortfolio;
