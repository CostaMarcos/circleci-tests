const supertest = require("supertest");
const api = require("./server");

// Teste de Sucesso
describe("SUITE - Testes de Requisições da API", () => {
	test("TESTE - Teste da rota principal", async () => {
		const response = await supertest(api).get("/");
		expect(response.status).toBe(200);
		expect(response.body).toHaveProperty("message");
	});
});

// Teste de Falha
// describe("SUITE - Testes de Requisições da API", () => {
// 	test("TESTE - Teste da rota principal", async () => {
// 		const response = await supertest(api).get("/");
// 		expect(response.status).toBe(200);
// 		expect(response.body).toHaveProperty("error");
// 	});
// });
