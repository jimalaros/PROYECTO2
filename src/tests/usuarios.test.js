import request from "supertest";
import { app } from "../index.js";

/**
 * testing usuarios
 */

it('respond with json contaning a list of all users', done =>{
    request(app)
        .get('/usuarios')
        .set('application/json')
        .expect('Content-Type', /json/)
        .expect(200, done);
});
