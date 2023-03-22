import RouterApp from './routes'
import GlobalStyle from "./styles/global";
import { AuthProvider } from './context/auth';
function App() {
  return (
    <div className="App">
      <AuthProvider>
        <RouterApp/>
        <GlobalStyle/>
      </AuthProvider>     
    </div>
  );
}

export default App;
