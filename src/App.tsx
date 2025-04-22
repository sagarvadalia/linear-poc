import "./App.css";
import { Button } from "@/components/ui/button";

function App() {
  return (
    <>
      <div>
        <h1 class="text-3xl font-bold underline">Tailwind Test</h1>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <div className="flex flex-col items-center justify-center min-h-svh">
          <Button>Click me</Button>
        </div>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
    </>
  );
}

export default App;
