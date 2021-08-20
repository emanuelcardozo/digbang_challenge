const CURRENCY_OPTIONS = {
    currency: 'ARS', 
    style: 'currency', 
    maximumFractionDigits: 0
}

export default function toCurrency(val){ 
    return new Intl.NumberFormat('es-AR', CURRENCY_OPTIONS).format(val)
}
