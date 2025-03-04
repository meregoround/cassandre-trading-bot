require("isomorphic-fetch");

test("Accessing API with wrong API key", () => {

	// The query of the GraphQL API server.
	return fetch("http://localhost:8080/graphql", {
		method: "POST",
		headers: { "Content-Type": "application/json", "X-API-Key": "WRONG-API-KEY" },
		body: JSON.stringify({ query: 
			`query {
				strategy(id:1){ strategyId name }
			}`
		}),
	})
	.then((res) => res.json())
	.then((res) => {expect(res.error).toStrictEqual("Forbidden");});
});
