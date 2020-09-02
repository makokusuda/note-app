process.env.NODE_ENV = "test";

const app = require("../controllers/index");
const chai = require("chai");
const chaiHttp = require("chai-http");
const { expect, assert } = require("chai");

chai.use(chaiHttp);

describe("/GET notes", () => {
  // Asyncronous Test Code
  it("it shold GET all the notes", (done) => {
    chai
      .request(app)
      .get("/notes")
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an("array");
      });
    done(); // call the done function after test.
  });
});

describe("/POST notes", () => {
  it("post new note", (done) => {
    const note = { body: "This is note for test" };

    chai
      .request(app)
      .post("/notes")
      .send(note)
      .end((err, res) => {
        expect(res).to.have.status(201);
        expect(res.body).to.be.an("object");
        expect(res.body.message).to.be.equals("Note successfully added");
        expect(res.body.addedNote).to.deep.equal(note);
      });
    done();
  });
});
