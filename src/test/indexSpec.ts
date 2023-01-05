// import supertest
import supertest from "supertest";
// simulate routes on our server
import app from "../index";
// create request from supertest for our simulated route

const request =supertest(app);

describe('Test basic endpoint server',() => {
    it('Get the / endpoint',async () => {
    const response = await request.get('/')
    expect(response.status).toBe(200);
        
    })
}) 