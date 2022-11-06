import request from 'supertest'
import express from 'express'

const app = express();

//supertest
describe('Htt operaciones', () => {
    test('Get /register', () => {
        request(app).get('/register').set('Accept', 'application/json').expect(200);
    })
})