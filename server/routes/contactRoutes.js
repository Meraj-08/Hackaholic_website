const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contactController');

// Submit a new contact message
router.post('/', contactController.submitContactMessage);

// Get all contact messages (admin only)
router.get('/', contactController.getAllContactMessages);

// Get contact message by ID (admin only)
router.get('/:id', contactController.getContactMessageById);

// Update contact message status (admin only)
router.patch('/:id/status', contactController.updateContactStatus);

module.exports = router;
