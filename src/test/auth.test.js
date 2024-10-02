import supertest from "supertest";
import app from "../../index.js";


const api = supertest(app);
let userCredentials = {
    email: 'juan@dev.co',
    password: '61f8a3909bb5b7bb'
};


describe('POST /login', () => {
    it('should login successfully with valid credentials', async () => {
        const response = await api
            .post('/api/v1/auth/login')
            .send({
                email: userCredentials.email,
                password: userCredentials.password
            });
        expect(response.statusCode).toBe(200);
        expect(response.body).toHaveProperty('token');
    });

    it('should fail login with invalid credentials', async () => {
        const response = await api
            .post('/api/v1/auth/login')
            .send({
                email: 'juan@dete.co',
                password: '1234569'
            });
        expect(response.statusCode).toBe(401);
        expect(response.body).toHaveProperty('error');
    });

    it('should fail login with missing email', async () => {
        const response = await api
            .post('/api/v1/auth/login')
            .send({
                password: 'somePassword'
            });
        expect(response.statusCode).toBe(400);
        expect(response.body).toHaveProperty('error');
    });

    it('should fail login with missing password', async () => {
        const response = await api
            .post('/api/v1/auth/login')
            .send({
                email: 'someUser'
            });
        expect(response.statusCode).toBe(400);
        expect(response.body).toHaveProperty('error');
    });
});