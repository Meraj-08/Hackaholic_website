const express = require('express');
const router = express.Router();
const participantController = require('../controllers/participantController');

// Register a new participant
router.post('/register', participantController.registerParticipant);

// Get all participants (admin only)
router.get('/', participantController.getAllParticipants);

// Get participant by ID
router.get('/:id', participantController.getParticipantById);

// Add team member
router.post('/:id/members', participantController.addTeamMember);

// Update participant status (admin only)
router.patch('/:id/status', participantController.updateParticipantStatus);

module.exports = router;
