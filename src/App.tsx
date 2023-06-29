import Container from "./components/Container/Container";
import Header from "./components/Header/Header";
import SearchBar from "./components/SearchBar/SearchBar";
import Definition from "./components/Definition/Definition";
import { useState, useEffect } from "react";
import { getWord } from "./utils/getWord";
import { useQuery } from "react-query";

function App() {
  const inputHook = useState("");
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
        inputHook={inputHook}
        onSubmit={(currentValue: string) => {
          setCurrentWord(currentValue);
        }}
      />
      <main>
        <Definition query={query} setCurrentWord={setCurrentWord} setInputValue={inputHook[1]} />
      </main>
    </Container>
  );
}

export default App;
