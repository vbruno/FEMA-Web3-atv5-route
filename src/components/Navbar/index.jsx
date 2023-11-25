import { Container } from './styles';
import { Link } from 'react-router-dom';

export function Navbar() {
  return (
    <Container>
      <Link to="/">
        <h1>Home</h1>
      </Link>
      <Link to="/page1">
        <h1>Link 1</h1>
      </Link>
      <Link to="/page2">
        <h1>Link 2</h1>
      </Link>
      <Link to="/page3">
        <h1>Link 3</h1>
      </Link>
    </Container>
  );
}
