// Archivo: __tests__/sum.test.js
function sum(a, b) {
   return a + b;
}

test('La suma de 1 + 2 debe ser 3', () => {
   expect(sum(1, 2)).toBe(3);
});
