'use strict';

const Lab = require('lab');
const Code = require('code');
const data = require('../lib/data/books.json');

const lab = exports.lab = Lab.script();
const describe = lab.describe;
const it = lab.it;
const expect = Code.expect;

const server = require('..');

describe('Book Shop', () => {
    it('GET /', (done) => {
        server.inject('/', (res) => {
            expect(res.statusCode).to.equal(200);
            done();
        })
    });

    it('GET /junk', (done) => {
        server.inject('/junk', (res) => {
            expect(res.statusCode).to.equal(404);
            done();
        })
    });

    describe('/books api', () => {
        describe('GET /books', () => {
            it('handle naked request', (done) => {
                server.inject('/api/books', (res) => {
                    expect(res.statusCode).to.equal(200);
                    expect(res.result).to.equal(data);
                    done();
                })
            });

            it('handle request with param title', (done) => {
                server.inject('/api/books?title=A%20veiled%20reflection', (res) => {
                    expect(res.statusCode).to.equal(200);
                    expect(res.result[0]).to.equal(data["OLID:OL30460M"]);
                    done();
                })
            });
        });

        it('GET /books/x', (done) => {
            server.inject('/api/books/OL30460M', (res) => {
                expect(res.statusCode).to.equal(200);
                expect(res.result).to.equal([data["OLID:OL30460M"]]);
                done();
            })
        });

        it('GET /books/junk', (done) => {
            server.inject('/api/books/junk', (res) => {
                expect(res.statusCode).to.equal(200);
                expect(res.result).to.equal([]);
                done();
            })
        });

    });

});