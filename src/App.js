import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.css";
import { Posts } from "./components/Posts";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import InfinitePeople from "./components/people/InfinitePeople";
import InfiniteSpecie from "./components/specie/InfiniteSpecie";

const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        {/* <h1>Blog&apos;em Ipsum</h1>
        <Posts /> */}
        {/* <InfinitePeople /> */}
        <InfiniteSpecie />
      </div>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;
