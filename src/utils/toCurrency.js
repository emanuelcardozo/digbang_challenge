const DEFAULT_CURRENCY_OPTIONS = {
    currency: 'ARS', 
    style: 'currency', 
    maximumFractionDigits: 0
}

export default function toCurrency({value, options}){ 
    return new Intl.NumberFormat('es-AR', { ...DEFAULT_CURRENCY_OPTIONS, ...options}).format(value)
}
