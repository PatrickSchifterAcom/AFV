import Rotas from './Routes/Routes';
import { AuthProvider } from './auth'

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <Rotas />
      </div>
    </AuthProvider>
  );
}

export default App;
