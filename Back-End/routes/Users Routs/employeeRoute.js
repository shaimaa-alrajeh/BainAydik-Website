const express = require('express');
const router = express.Router();
const Employee = require('../models/User');


router.post('/add-employee', async (req, res) => {
    try {
        const { userId, userName, userImage, rate, category } = req.body;

        const newEmployee = new Employee({
            userId,
            userName,
            userImage,
            rate,
            category
        });

        await newEmployee.save();
        res.status(201).send("Employee added successfully!");
    } catch (err) {
        res.status(500).json({ message: "Error adding employee", error: err });
    }
});
router.get('/employees/Painting', async (req, res) => {
    try {
        const employees = await Employee.find({ category: 'Painting' });
        res.json(employees);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching Painting employees', error: err });
    }
});
router.get('/employees/Plumbing', async (req, res) => {
    try {
        const employees = await Employee.find({ category: 'Plumbing' });
        res.json(employees);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching Plumbing employees', error: err });
    }
});


router.get('/employees/Carpentry', async (req, res) => {
    try {
        const employees = await Employee.find({ category: 'Carpentry' });
        res.json(employees);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching Carpentry employees', error: err });
    }
});


router.get('/employees/Blacksmiths', async (req, res) => {
    try {
        const employees = await Employee.find({ category: 'Blacksmiths' });
        res.json(employees);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching Blacksmiths employees', error: err });
    }
});


router.get('/employees/Home Appliance Repair', async (req, res) => {
    try {
        const employees = await Employee.find({ category: 'Home Appliance Repair' });
        res.json(employees);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching Home Appliance Repair employees', error: err });
    }
});

router.get('/employees/Motion Design', async (req, res) => {
    try {
        const employees = await Employee.find({ category: 'Motion Design' });
        res.json(employees);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching Motion Design employees', error: err });
    }
});


router.get('/employees/Video Editing', async (req, res) => {
    try {
        const employees = await Employee.find({ category: 'Video Editing' });
        res.json(employees);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching Video Editing employees', error: err });
    }
});

router.get('/employees/Graphic Design', async (req, res) => {
    try {
        const employees = await Employee.find({ category: 'Graphic Design' });
        res.json(employees);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching Graphic Design employees', error: err });
    }
});


router.get('/employees/AI', async (req, res) => {
    try {
        const employees = await Employee.find({ category: 'AI' });
        res.json(employees);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching AI employees', error: err });
    }
});

router.get('/employees/Programming', async (req, res) => {
    try {
        const employees = await Employee.find({ category: 'Programming' });
        res.json(employees);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching Programming employees', error: err });
    }
});

module.exports = router;
