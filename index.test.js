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

  test("Testing accuracy of data", async () => {
    const response = await request(app).get("/musicians");
    const responseData = JSON.parse(response.text);
    expect(responseData[0].name).toBe("Mick Jagger");
    expect(responseData[1].name).toBe("Drake");
    expect(responseData[2].name).toBe("Jimi Hendrix");
    expect(responseData[0].instrument).toBe("Voice");
    expect(responseData[1].instrument).toBe("Voice");
    expect(responseData[2].instrument).toBe("Guitar");
  });
});
