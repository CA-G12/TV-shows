const supertest = require('supertest');
const router = require('./src/router');

// eslint-disable-next-line no-undef
test('Home page routing test', (done) => {
  supertest(router).get('/')
    .expect(200)
    .expect('Content-Type', /html/)
    .end((err) => (err ? done(err) : done()));
});

// eslint-disable-next-line no-undef
test('JS script file routing test', (done) => {
  supertest(router).get('/public/script.js')
    .expect(200)
    .expect('Content-Type', /html/)
    .end((err) => (err ? done(err) : done()));
});

// eslint-disable-next-line no-undef
test('JS DOM file routing test', (done) => {
  supertest(router).get('/public/dom.js')
    .expect(200)
    .expect('Content-Type', /html/)
    .end((err) => (err ? done(err) : done()));
});

// eslint-disable-next-line no-undef
test('CSS file routing test', (done) => {
  supertest(router).get('/public/main.css')
    .expect(200)
    .expect('Content-Type', /html/)
    .end((err) => (err ? done(err) : done()));
});

// eslint-disable-next-line no-undef
test('NOT-FOUND page routing test', (done) => {
  supertest(router).get('/blablabla')
    .expect(404)
    .expect('Content-Type', /html/)
    .end((err) => (err ? done(err) : done()));
});
