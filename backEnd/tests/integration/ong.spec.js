const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('ONG', () => {
    beforeEach( async () => {
        await connection.migrate.rollback();
        await connection.migrate.latest();
    });
    afterAll(async () => {
        await connection.migrate.destroy();
    });

    it('should be able a new ong', async () => {
        const response = await request(app)
        .post('/ongs')
        .send({
            name: "dfa",
            email: "contato@villa.com.br",
            whatsapp: "78787878787",
            city: "Atibaia",
            uf: "SP"

        });
        expect(response.body).toHaveProperty('id');
        expect(response.body.id).toHaveLength(4);
    });
});