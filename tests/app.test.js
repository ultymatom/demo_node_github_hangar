const app = require('../app');

test('fibo 0 to equal 0', () => {
  expect(app.fibo(0)).toBe(0);
});

test('fibo 1 to equal 1', () => {
  expect(app.fibo(1)).toBe(1);
});

test('fibo 2 to equal 1', () => {
  expect(app.fibo(2)).toBe(1);
});

test('fibo 7 to equal 13', () => {
  expect(app.fibo(7)).toBe(13);
});

test('fibo 14 to equal 377', () => {
  expect(app.fibo(14)).toBe(377);
});

test('close app', done => {
  app.server.close((err) => {
    done(err)
  });
});