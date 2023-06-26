import Container from "./components/Container/Container";
import Header from "./components/Header/Header";
import SearchBar from "./components/SearchBar/SearchBar";

function App() {
  return (
    <div>
      <Container>
        <Header />
        <SearchBar
          onSubmit={(keyword: string) => {
            //
          }}
        />
      </Container>
    </div>
  );
}

export default App;
