import supertest from "supertest";
import app from "../../index.js";


const api = supertest(app);
let userCredentials;

beforeAll(async () => {
    // Crear un usuario antes de los tests
    console.log("Creando usuario de prueba...");
    const userResponse = await api
        .post("/api/v1/user/create-user")
        .send({
            identificationNumber: "987654321",
            name: "Test User",
            email: "juan@dev.co",
        });

    expect(userResponse.statusCode).toBe(201); // Asegúrate de que el usuario se creó correctamente
     
   
    // Guardar las credenciales para usarlas en los tests
    userCredentials = {
        email: "juan@dev.co",
        password: 'testpassword123' // La contraseña del usuario recién creado
    };
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
                email: 'juan@dev.co',
                password: '123'
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
        expect(response.statusCode).toBe(401);
        expect(response.body).toHaveProperty('error');
    });

    it('should fail login with missing password', async () => {
        const response = await api
            .post('/api/v1/auth/login')
            .send({
                email: 'someUser'
            });
        expect(response.statusCode).toBe(401);
        expect(response.body).toHaveProperty('error');
    });
});