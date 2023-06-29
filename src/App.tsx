import Container from "./components/Container/Container";
import Header from "./components/Header/Header";
import SearchBar from "./components/SearchBar/SearchBar";
import Definition from "./components/Definition/Definition";
import { useState, useEffect } from "react";
import { getWord } from "./utils/getWord";
import { useQuery } from "react-query";

function App() {
  const [currentWord, setCurrentWord] = useState("");

  const query = useQuery({
    queryKey: ["word", currentWord],
    queryFn: getWord,
    enabled: false,
    retry: 1,
  });

  useEffect(() => {
    if (currentWord) {
      query.refetch();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentWord]);

  return (
    <Container>
      <Header />
      <SearchBar
        onSubmit={(currentValue: string) => {
          setCurrentWord(currentValue);
        }}
      />
      <main>
        <Definition query={query} setCurrentWord={setCurrentWord} />
      </main>
    </Container>
  );
}

export default App;
