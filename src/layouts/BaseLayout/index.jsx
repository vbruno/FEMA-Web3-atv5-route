import { Outlet } from 'react-router-dom';

import { Container } from './styled';

import { Navbar } from '../../components/Navbar';
import { Footer } from '../../components/Footer';

export function BaseLayout() {
  return (
    <Container>
      <Navbar />
      <Outlet />
      <Footer />
    </Container>
  );
}
