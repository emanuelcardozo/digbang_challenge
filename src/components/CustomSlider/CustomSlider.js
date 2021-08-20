import { useState } from 'react'
import Slider from 'rc-slider'
import CustomInput from '../CustomInput';
import toCurrency from '../../utils/toCurrency';
import { SliderSection, Header, Label, Mark } from './CustomSliderSubcomponents';
import 'rc-slider/assets/index.css';
import '../../styles/Slider.css'

function CustomSlider({ title, min=0, max, step=1, currency=false }) {
    const [value, setValue] = useState(min)

    const marks = {
        [min]: <Mark>{currency ? toCurrency(min) : min}</Mark>,
        [max]: <Mark>{currency ? toCurrency(max) : max}</Mark>
    }

    return (
        <SliderSection>
            <Header>
                <Label>{title}</Label>
                <CustomInput 
                    value={value}
                    min={min}
                    max={max}
                    step={step}
                    currency={currency} 
                    onChange={ ({target: {value}}) => setValue(value > max ? max : value)} 
                />
            </Header>
            <Slider 
                className="custom_slider"
                min={min}
                max={max}
                step={step}
                onChange={setValue}
                marks={marks}
                value={value}
            />
        </SliderSection>
    )
}

export default CustomSlider
