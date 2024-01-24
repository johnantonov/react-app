export const formatPrice = (num: string | number | undefined) => {
return typeof num === 'number' ? num+'р' : num
}