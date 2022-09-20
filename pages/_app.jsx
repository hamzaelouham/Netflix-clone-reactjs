import { AuthProvider } from "../src/context/auth";
import "../styles/App.css";
import "../styles/index.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  );
}
