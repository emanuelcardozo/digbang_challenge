import { 
  Main,
  Container,
  Title,
  PerMonth,
  ButtonsContainer,
  CreditButton,
  DetailButton
} from './components/common'

function App() {
  return (
    <Main>
      <Container>
        <Title>Simulá tu crédito</Title>
        <PerMonth>cuota fija por mes</PerMonth>
        <ButtonsContainer>
          <CreditButton>obtené crédito</CreditButton>
          <DetailButton>ver detalle de cuotas</DetailButton>
        </ButtonsContainer>
      </Container>
    </Main>
  );
}

export default App;
