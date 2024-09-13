import supertest from "supertest";
import app from "../../index.js";
import UserService from "../services/user.service.js";

const api = supertest(app);



describe('users', () => {
    test("Create a new user", async () => {
        await api
            .post("/api/v1/user/create-user")
            .expect(201)
            .expect("Content-Type", /application\/json/)
            .send({
                identificationNumber: "123456789",
                name: "Test User",
                email: "test@user.co"})
    });
    test("incorrect email", async () => {
        await api
            .post("/api/v1/user/create-user")
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
            .expect(401)
            .expect("Content-Type", /application\/json/)
            .send({
                identificationNumber: "12345679",
                name: "Test User",
                email: "test@user.co"})
    });

    afterAll(async () => {
        const userService = new UserService();
        await userService.deleteUser('123456789'); // Limpia las tablas antes de cada prueba
    });
})