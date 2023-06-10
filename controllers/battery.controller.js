const BatteryService = require("../services/battery.service.js");

class BatteryController {
    async getAll(request, response) {
        try {
            const batteries = await BatteryService.getAll();
            return response.status(200).json({...batteries});
        } catch (e) {
            const message= e.message;
            console.log(message)
            return response.status(500).json({message: 'Помилка отримання списку акумуляторів.'});
        }
    }

    async getFilter(request, response) {
        try {
            const filterParams = {...request.body}
            const batteries = await BatteryService.getFilter(filterParams);
            return response.status(200).json({...batteries});
        } catch (e) {
            const message= e.message;
            console.log(message)
            return response.status(500).json({message: 'Помилка отримання відфільтрованого списку акумуляторів.'});
        }
    }

    async getOne(request, response) {
        try {
            const id = request.params.id;
            const battery = await BatteryService.getOne(id);
            return response.status(200).json({...battery});
        } catch (e) {
            const message= e.message;
            console.log(message)
            return response.status(500).json({message: 'Помилка отримання одного акумулятора.'});
        }
    }

    async create(request, response) {
        try {
            const dto = {...request.body};
            const battery = await BatteryService.create(dto);
            return response.status(200).json({...battery});
        } catch (e) {
            const message= e.message;
            console.log(message)
            return response.status(500).json({message: 'Помилка створення акумулятора.'});
        }
    }

    async update(request, response) {
        try {
            const dto = {...request.body};
            const battery = await BatteryService.update(dto);
            return response.status(200).json({...battery});
        } catch (e) {
            const message= e.message;
            console.log(message)
            return response.status(500).json({message: 'Помилка оновлення одного акумулятора.'});
        }
    }

    async delete(request, response) {
        try {
            const id = request.body.id;
            const battery = await BatteryService.delete(id);
            return response.status(200).json({...battery});
        } catch (e) {
            const message= e.message;
            console.log(message)
            return response.status(500).json({message: 'Помилка видалення одного акумулятора.'});
        }
    }
}

module.exports = new BatteryController()