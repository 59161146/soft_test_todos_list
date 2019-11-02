const expect = require("chai").expect;
const supertest = require("supertest");
const request = supertest("http://localhost:3000");

describe("Todos API", () => {
  describe("GET /todo", () => {
    it("should return 200 OK and todo list", done => {
      request
        .get("/todo")
        .expect(200)
        .end((err, res) => {
          let todos = res.body;
          expect(todos).to.be.an("array");
          let todo = todos[0];
          expect(todo).to.have.property("title");
          expect(todo).to.have.property("completed");
          done();
        });
    });
  });

  describe("GET /todo/completed", () => {
    it("should return 200 OK and todo list completed", done => {
      request
        .get("/todo/completed")
        .expect(200)
        .end((err, res) => {
          let todos = res.body;
          expect(todos).to.be.an("array");
          let todo = todos[0];
          expect(todo).to.have.property("title");
          expect(todo).to.have.property("completed");
          let status = todos[0].completed;
          expect(status).to.equal(true);
          done();
        });
    });
  });

  describe("POST /todo", () => {
    let totalList = 0;
    beforeAll(done => {
      request.get("/todo").end((err, res) => {
        let todos = res.body
        
      });
    });
    it("should a");
  });
});
