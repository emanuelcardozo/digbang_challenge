import styled from 'styled-components'

export const Container = styled.div`
    min-width: 5em;
    display: flex;
    color: white;
    font-size: 1.5em;
    font-weight: 700;
    border: 1px solid white;
    background-color: transparent;
    padding: 0 1em;
`

export const Prefix = styled.span`
    margin: auto 0;
`

export const StyledInput = styled.input`
    text-align: center;
    flex: 1;
    max-width: 4em;
    font-size: 1.25em;
    font-weight: 700;
    border: none;
    color: white;
    background-color: transparent;

    :focus {
        outline: none;
    }

    ::-webkit-outer-spin-button,
    ::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    [type=number] {
        -moz-appearance: textfield;
    }
`