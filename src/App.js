import { useState } from 'react';
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
import toCurrency from './utils/toCurrency';
import { MAXIMUM_MONTHS, MINIMAL_MONTHS, MAXIMUM_MOUNT, MINIMAL_MOUNT } from './constants/limits';

function App() {
  const [mount, setMount] = useState(MINIMAL_MOUNT)
  const [months, setMonths] = useState(MINIMAL_MONTHS)

  const fee = (mount / months).toFixed(2)

  const SLIDERS = [
    { title:"Monto total", value: mount, onChange: setMount, max: MAXIMUM_MOUNT, step: 500, currency: true },
    { title:"Plazo", value: months, onChange: setMonths, min: MINIMAL_MOUNT, max: MAXIMUM_MONTHS }
  ]

  return (
    <Main>
      <Container>
        <Title>Simulá tu crédito</Title>
        { SLIDERS.map(sliderProps => <CustomSlider {...sliderProps}/>)}
        <PerMonth>
          <Label>cuota fija por mes</Label>
          <PerMonthValue>
            { toCurrency({ value: fee, options: {maximumFractionDigits: 2} })}
          </PerMonthValue>
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
