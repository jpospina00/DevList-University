import supertest from "supertest";
import app from "../../index.js";
import UserService from "../services/user.service.js";

const api = supertest(app);

let token;

beforeAll(async () => {
    const response = await api
        .post("/api/v1/auth/login")
        .expect(200)
        .expect("Content-Type", /application\/json/)
        .send({
            email: "juan@dev.co",
            password: "61f8a3909bb5b7bb"
        });

    token = response.body.token;
});
describe('users create', () => {
    test("Create a new user", async () => {
        await api
            .post("/api/v1/user/create-user")
            .set("Authorization", `Bearer ${token}`)
            .expect(201)
            .expect("Content-Type", /application\/json/)
            .send({
                identificationNumber: "123456789",
                name: "Test User",
                email: "test@user.co",
                role_id: 2
            })
    });
    test("incorrect email", async () => {
        await api
            .post("/api/v1/user/create-user")
            .set("Authorization", `Bearer ${token}`)
            .expect(400)
            .expect("Content-Type", /application\/json/)
            .send({
                identificationNumber: "12345679",
                name: "Test User",
                email: "test.co"})
    });
    test("repetid email", async () => {
        await api
            .post("/api/v1/user/create-user")
            .set("Authorization", `Bearer ${token}`)
            .expect(401)
            .expect("Content-Type", /application\/json/)
            .send({
                identificationNumber: "12345679",
                name: "Test User",
                email: "test@user.co",
                role_id: 2
            })
    });

    
})

describe('users deactivate monitor', () => {
    test("Deactivate an existing monitor", async () => {
        await api
            .patch("/api/v1/user/disable-monitor/123456789")
            .set("Authorization", `Bearer ${token}`)
            .expect(200)
            .expect("Content-Type", /application\/json/)
    });

    test("Deactivate a non-existing monitor", async () => {
        await api
            .patch("/api/v1/user/disable-monitor/12345678901")
            .set("Authorization", `Bearer ${token}`)
            .expect(400)
            .expect("Content-Type", /application\/json/)
        
    });

    test("Deactivate monitor without authorization", async () => {
        await api
            .patch("/api/v1/user/disable-monitor/1234567890")
            .expect(403)
            .expect("Content-Type", /application\/json/)
            .send({
                monitorId: "monitor123"
            });
    });

    test("Deactivate monitor with invalid data", async () => {
        await api
            .patch("/api/v1/user/disable-monitor/monitor")
            .set("Authorization", `Bearer ${token}`)
            .expect(400)
            .expect("Content-Type", /application\/json/)
    });
});

afterAll(async () => {
    const userService = new UserService();
    await userService.deleteUser('123456789'); // Limpia las tablas antes de cada prueba
});
