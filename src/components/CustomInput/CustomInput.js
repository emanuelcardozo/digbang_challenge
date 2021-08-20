import React from 'react'
import { Container, Prefix, StyledInput } from './CustomInputSubcomponents'

function CustomInput({value, onChange, min, max, step, currency}) {
    return (
        <Container>
            { currency && <Prefix>$</Prefix>}
            <StyledInput type="number" value={value} onChange={onChange} min={min} max={max} step={step}/>
        </Container>
    )
}

export default CustomInput
