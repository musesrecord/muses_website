// Imports
import "@styles/global.scss";

// Types
import type { AppProps } from "next/app";

// Export application
export default function MusesRNG({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
