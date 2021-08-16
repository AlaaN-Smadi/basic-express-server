'use strict'

const { describe, beforeEach, afterEach } = require('@jest/globals')
const validateMiddleware = require('../src/middleware/validator');

describe('Validator MiddleWare', () => {


    let req = {
        query: {
            name: 'alaa'
        }
    };
    let res = {};
    let next = jest.fn();




    it('Should test Validator Middleware', () => {

        validateMiddleware(req, res, next);

        expect(next).toHaveBeenCalledWith();
    });



})