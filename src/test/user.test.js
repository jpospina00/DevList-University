import supertest from "supertest";
import app from "../../index.js";
import UserService from "../services/user.service.js";

const api = supertest(app);

let tokenAdmin;
let tokenMonitor;

beforeAll(async () => {
    const response = await api
        .post("/api/v1/auth/login")
        .expect(200)
        .expect("Content-Type", /application\/json/)
        .send({
            email: "juan@dev.co",
            password: '61f8a3909bb5b7bb'
        });

    tokenAdmin = response.body.token;

    const response2 = await api
        .post("/api/v1/auth/login")
        .expect(200)
        .expect("Content-Type", /application\/json/)
        .send({
            email: "juanh@dev.co",
            password: "b51c7060594867ef"
        });

    tokenMonitor = response2.body.token;
});


describe('users create', () => {
    console.log(tokenAdmin);
    test("Create a new user", async () => {
        await api
            .post("/api/v1/user/create-user")
            .set("Authorization", `Bearer ${tokenAdmin}`)
            .expect(201)
            .expect("Content-Type", /application\/json/)
            .send({
                identificationNumber: "123456789",
                name: "Test User",
                email: "test@user.co",
                roleId: 2
            })
    });
    test("incorrect email", async () => {
        await api
            .post("/api/v1/user/create-user")
            .set("Authorization", `Bearer ${tokenAdmin}`)
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
            .set("Authorization", `Bearer ${tokenAdmin}`)
            .expect(401)
            .expect("Content-Type", /application\/json/)
            .send({
                identificationNumber: "12345679",
                name: "Test User",
                email: "test@user.co",
                roleId: 2
            })
    });

    
})

describe('users deactivate monitor', () => {
    test("Deactivate an existing monitor", async () => {
        await api
            .patch("/api/v1/user/disable-monitor/123456789")
            .set("Authorization", `Bearer ${tokenAdmin}`)
            .expect(200)
            .expect("Content-Type", /application\/json/)
    });

    test("Deactivate a non-existing monitor", async () => {
        await api
            .patch("/api/v1/user/disable-monitor/12345678901")
            .set("Authorization", `Bearer ${tokenAdmin}`)
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
            .set("Authorization", `Bearer ${tokenAdmin}`)
            .expect(400)
            .expect("Content-Type", /application\/json/)
    });
});

describe('users update monitor', () => {
    test("Update an existing monitor", async () => {
        await api
            .put("/api/v1/user/update-monitor")
            .set("Authorization", `Bearer ${tokenMonitor}`)
            .expect(200)
            .expect("Content-Type", /application\/json/)
            .send({
                phone: "123456789",
                address: "Test Address"
            });
    });

    test("Update monitor without authorization", async () => {
        await api
            .put("/api/v1/user/update-monitor")
            .expect(403)
            .expect("Content-Type", /application\/json/)
            .send({
                name: "Unauthorized Monitor",
                email: "unauthorized@monitor.co",
                roleId: 3
            });
    });

    test("Update monitor with invalid data", async () => {
        await api
            .put("/api/v1/user/update-monitor")
            .set("Authorization", `Bearer ${tokenMonitor}`)
            .expect(400)
            .expect("Content-Type", /application\/json/)
            .send({
                name: "hola",
                email: "invalid@monitor.co",
                roleId: "invalid_role"
            });
    });
});

afterAll(async () => {
    const userService = new UserService();
    await userService.deleteUser('123456789'); // Limpia las tablas antes de cada prueba
});
