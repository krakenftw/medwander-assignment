import "./App.css";
import { Button } from "./components/ui/button";

function App() {
  return (
    <>
      <div className='flex flex-col items-center justify-center h-full w-full'>
        <div className='flex gap-4'>
          <Button>Form A</Button>
          <Button>Form B</Button>
        </div>
      </div>
    </>
  );
}

export default App;
