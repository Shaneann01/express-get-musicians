// install dependencies
const { execSync } = require("child_process");
execSync("npm install");
execSync("npm run seed");

const request = require("supertest");
const { db } = require("./db/connection");
const { Musician } = require("./models/index");
const app = require("./src/app");
const seedMusician = require("./seedData");

describe("./musicians endpoint", () => {
  // Write your tests here
  test("Testing musicians endpoint", async () => {
    const response = await request(app).get("/musicians");
    const responseData = JSON.parse(response.text);
    expect(response.statusCode).toBe(200);
    expect(typeof responseData).toBe("object");
  });

  test("Testing musician 1 endpoint and accuracy", async () => {
    const response = await request(app).get("/musicians/1");
    const responseData = JSON.parse(response.text);
    expect(response.statusCode).toBe(200);
    expect(responseData.name).toBe("Mick Jagger");
    expect(responseData.instrument).toBe("Voice");
  });

  test("Testing musician 2 endpoint and accuracy", async () => {
    const response = await request(app).get("/musicians/2");
    const responseData = JSON.parse(response.text);
    expect(response.statusCode).toBe(200);
    expect(responseData.name).toBe("Drake");
    expect(responseData.instrument).toBe("Voice");
  });

  test("Testing musician 3 endpoint and accuracy", async () => {
    const response = await request(app).get("/musicians/3");
    const responseData = JSON.parse(response.text);
    console.log(responseData);
    expect(response.statusCode).toBe(200);
    expect(responseData.name).toBe("Jimi Hendrix");
    expect(responseData.instrument).toBe("Guitar");
  });
});
