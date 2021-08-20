import CustomSlider from './components/CustomSlider';
import { 
  Main,
  Container,
  Title,
  PerMonth,
  ButtonsContainer,
  CreditButton,
  DetailButton,
  Label,
  PerMonthValue
} from './components/common'

function App() {
  return (
    <Main>
      <Container>
        <Title>Simulá tu crédito</Title>
        <CustomSlider title="Monto total" max={50000} step={500} currency />
        <CustomSlider title="Plazo" min={3} max={24} />
        <PerMonth>
          <Label>cuota fija por mes</Label>
          <PerMonthValue>$ 2,412.91</PerMonthValue>
        </PerMonth>
        <ButtonsContainer>
          <CreditButton>obtené crédito</CreditButton>
          <DetailButton>ver detalle de cuotas</DetailButton>
        </ButtonsContainer>
      </Container>
    </Main>
  );
}

export default App;
