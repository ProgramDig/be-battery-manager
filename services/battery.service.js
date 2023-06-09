const Battery = require("../models/battery.model.js")

class BatteryService {
    async getAll() {
        try {
            const batteries = await Battery.find();
            return batteries
        } catch (e) {
            const message = e.message;
            console.log(message)
            throw new Error(message)
        }
    }

    async getFilter(filterParams) {
        try {
            return await Battery.find(filterParams);
        } catch (e) {
            const message = e.message;
            console.log(message)
            throw new Error(message)
        }
    }

    async getOne(id) {
        try {
            const battery = await Battery.findOne({_id: id});
            return battery
        } catch (e) {
            const message = e.message;
            console.log(message)
            throw new Error(message)
        }
    }

    async create(dto) {
        try {
            const battery = await Battery.create(dto);
            return battery
        } catch (e) {
            const message = e.message;
            console.log(message)
            throw new Error(message)
        }
    }

    async update(dto) {
        try {
            const battery = await Battery.update(dto);
            return battery
        } catch (e) {
            const message = e.message;
            console.log(message)
            throw new Error(message)
        }
    }

    async delete(id) {
        try {
            const response = await Battery.deleteOne({_id: id});
            return response
        } catch (e) {
            const message = e.message;
            console.log(message)
            throw new Error(message)
        }
    }
}

module.exports = new BatteryService()