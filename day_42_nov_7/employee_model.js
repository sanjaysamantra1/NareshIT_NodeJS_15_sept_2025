import mongoose from 'mongoose';

let employeeSchema = new mongoose.Schema({
    eId: { type: Number, required: true },
    name: { type: String, required: true },
    sal: { type: Number, required: true },
    gender: { type: String, required: true }
})
export let employeeModel = mongoose.model("employees", employeeSchema);

