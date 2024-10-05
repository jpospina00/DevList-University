import supertest from "supertest";
import app from "../../index.js";

const api = supertest(app);
let userCredentials = {
    email: 'juan@dev.co',
    password: '61f8a3909bb5b7bb'
};

let tokenAdmin;

beforeAll(async () => {
    const response = await api
        .post("/api/v1/auth/login")
        .expect(200)
        .expect("Content-Type", /application\/json/)
        .send({
            email: userCredentials.email,
            password: userCredentials.password
        });

    tokenAdmin = response.body.token;
});


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

describe('PUT /change-password', () => {
    it('The password change should fail because the password is missing.', async () => {
        const response = await api
            .put('/api/v1/auth/change-password')
            .set('Authorization', `Bearer ${tokenAdmin}`)
            .send({
                newPassword: 'hola12345'
            });
        expect(response.statusCode).toBe(400);
        expect(response.body).toHaveProperty('error');
    });

    it('The password change should fail because the newPassword is missing.', async () => {
        const response = await api
            .put('/api/v1/auth/change-password')
            .set('Authorization', `Bearer ${tokenAdmin}`)
            .send({
                password: userCredentials.password
            });
        expect(response.statusCode).toBe(400);
        expect(response.body).toHaveProperty('error');
    });

    it('The password change should fail because the token is missing', async () => {
        const response = await api
            .put('/api/v1/auth/change-password')
            .send({
                password: userCredentials.password,
                newPassword: 'hola1234'
            });
        expect(response.statusCode).toBe(403);
        expect(response.body).toHaveProperty('error');
    });

    it('The password change should fail because the token is invalid.', async () => {
        let token = 'hola1234';
        const response = await api
            .put('/api/v1/auth/change-password')
            .set('Authorization', `Bearer ${token}`)
            .send({
                password: userCredentials.password,
                newPassword: 'hola1234'
            });
        expect(response.statusCode).toBe(401);
        expect(response.body).toHaveProperty('error');
    });

    test('The password change should fail because the password is not correct.', async () => {
        const response = await api
            .put('/api/v1/auth/change-password')
            .set('Authorization', `Bearer ${tokenAdmin}`)
            .send({
                password: "hola123456789",
                newPassword: 'hola1234'
            });
        expect(response.statusCode).toBe(401);
        expect(response.body).toHaveProperty('error');
    });

    it('The password change should fail because the password is correct', async () => {
        const response = await api
            .put('/api/v1/auth/change-password')
            .set('Authorization', `Bearer ${tokenAdmin}`)
            .send({
                password: userCredentials.password,
                newPassword: 'hola1234'
            });
        expect(response.statusCode).toBe(200);
        expect(response.body).toHaveProperty('success');
    });
});

afterAll(async () => {
    await api
        .put('/api/v1/auth/change-password')
        .set('Authorization', `Bearer ${tokenAdmin}`)
        .send({
            password: "hola1234",
            newPassword: userCredentials.password
        });
});