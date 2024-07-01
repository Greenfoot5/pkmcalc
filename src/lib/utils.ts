export function display(x : Number) {
    return x.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2,});
}
