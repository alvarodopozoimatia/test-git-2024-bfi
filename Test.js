var fib = function(n) {
const map = new Map(); // creamos un mapa para guardar los valores

const dp = (x) => {
if (x <= 1) return x;

if (!map.has(x)) { // si NO hemos calculado el resultado
map.set(x, dp(x-1) + dp(x-2)) // lo calculamos y guardamos el valor
}

return map.get(x);
}

return dp(n);
};