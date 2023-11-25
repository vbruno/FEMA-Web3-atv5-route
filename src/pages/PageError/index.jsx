import { useNavigate } from 'react-router-dom';

import { Container } from './styled';

export function PageError() {
  const navigate = useNavigate();

  function handleGoHome() {
    navigate('/');
  }

  return (
    <Container>
      <h1>Ops...</h1>
      <h2>Pagina não encontrada</h2>

      <button onClick={handleGoHome} >
        Voltar para Home
      </button>
    </Container>
  );
}
