import "../styles/globals.css";
import "@fontsource/roboto/400.css";
import "react-toastify/dist/ReactToastify.css";
import { QueryClientProvider, QueryClient, React } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
const queryClient = new QueryClient();
function MyApp({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default MyApp;
