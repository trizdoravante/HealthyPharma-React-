import { BrowserRouter as Router, Route } from 'react-router-dom';
import CategoriaList from './components/category/CategoriaList';
import CategoriaForm from './components/category/CategoriaForm';
import CategoriaDetail from './components/category/CategoriaDetail';


function App() {
  return (
    <Router>
      <Route path="/categorias" element={<CategoriaList />} />
      <Route path="/nova-categoria" element={<CategoriaForm />} />
      <Route path="/editar-categoria/:id" element={<CategoriaForm />} />
      <Route path="/detalhes-categoria/:id" element={<CategoriaDetail />} />
    </Router>
  );
}

export default App;

