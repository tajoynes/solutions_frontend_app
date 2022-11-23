import { AppContent, AppFooter, AppHeader } from "./components";

function App() {
  return (
    <div>
      <header>
        <AppHeader />
      </header>
      <main>
        <AppContent />
      </main>
      <footer>
        <AppFooter />
      </footer>
    </div>
  );
}

export default App;
