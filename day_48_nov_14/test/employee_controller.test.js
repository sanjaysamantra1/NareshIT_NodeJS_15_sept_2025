import * as chai from "chai";
const { expect } = chai;
import { default as chaiHttp, request } from "chai-http";
import sinon from "sinon";
import { EmployeeModel } from "../src/models/employee_model.js";
import { app } from '../index.js'

chai.use(chaiHttp)


describe('Test Suite for Employee CRUD', () => {
    let findStub;
    let findByIdStub;
    let createStub;
    let findByIdAndUpdateStub;
    let findByIdAndDeleteStub;

    beforeEach(() => {
        findStub = sinon.stub(EmployeeModel, 'find');
        findByIdStub = sinon.stub(EmployeeModel, 'findById');
        createStub = sinon.stub(EmployeeModel, 'create');
        findByIdAndUpdateStub = sinon.stub(EmployeeModel, 'findByIdAndUpdate');
        findByIdAndDeleteStub = sinon.stub(EmployeeModel, 'findByIdAndDelete');
    })
    afterEach(() => {
        findStub.restore();
        findByIdStub.restore();
        createStub.restore();
        findByIdAndUpdateStub.restore();
        findByIdAndDeleteStub.restore();
    })

    it('Should Verify getAllEmployees', async () => {
        const mockEmployees = [
            { _id: 111, eId: 'e111', name: 'ravi', sal: 5000, gender: 'male' },
            { _id: 222, eId: 'e222', name: 'rahman', sal: 6000, gender: 'male' },
        ]
        findStub.resolves(mockEmployees);

        const res = await request.execute(app).get('/employees');
        expect(res).to.have.status(200);
        expect(res.body).to.deep.equal(mockEmployees);
    })
    it('Should Verify getEmployeeById', async () => {
        const mockEmployee = 
            { _id: 222, eId: 'e222', name: 'rahman', sal: 6000, gender: 'male' }
        findByIdStub.resolves(mockEmployee);

        const res = await request.execute(app).get('/employees/123');
        expect(res).to.have.status(200);
        expect(res.body).to.deep.equal(mockEmployee);
    })
})

