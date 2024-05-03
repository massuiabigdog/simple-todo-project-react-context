import { TodosProvider } from './context/TodoContext';

import Home from './page/Home';

function App() {
  return (
    <TodosProvider>
      <Home />
    </TodosProvider>
  );
}

export default App;
