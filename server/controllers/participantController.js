const Participant = require('../models/Participant');

// Register a new participant
exports.registerParticipant = async (req, res) => {
  try {
    const {
      teamName,
      teamSize,
      name,
      email,
      phone,
      institution,
      experience,
      projectIdea,
      heardFrom
    } = req.body;

    // Check if team name already exists
    const existingTeam = await Participant.findOne({ teamName });
    if (existingTeam) {
      return res.status(400).json({
        success: false,
        message: 'Team name already exists. Please choose a different name.'
      });
    }

    // Check if email already exists
    const existingEmail = await Participant.findOne({ 'teamLeader.email': email });
    if (existingEmail) {
      return res.status(400).json({
        success: false,
        message: 'Email already registered. Please use a different email.'
      });
    }

    // Create new participant
    const participant = new Participant({
      teamName,
      teamSize,
      teamLeader: {
        name,
        email,
        phone,
        institution
      },
      experience,
      projectIdea,
      heardFrom
    });

    await participant.save();

    res.status(201).json({
      success: true,
      message: 'Registration successful!',
      data: participant
    });
  } catch (error) {
    console.error('Error registering participant:', error);
    res.status(500).json({
      success: false,
      message: 'An error occurred during registration. Please try again.',
      error: error.message
    });
  }
};

// Get all participants (admin only)
exports.getAllParticipants = async (req, res) => {
  try {
    const participants = await Participant.find().sort({ registrationDate: -1 });
    
    res.status(200).json({
      success: true,
      count: participants.length,
      data: participants
    });
  } catch (error) {
    console.error('Error fetching participants:', error);
    res.status(500).json({
      success: false,
      message: 'An error occurred while fetching participants.',
      error: error.message
    });
  }
};

// Get participant by ID
exports.getParticipantById = async (req, res) => {
  try {
    const participant = await Participant.findById(req.params.id);
    
    if (!participant) {
      return res.status(404).json({
        success: false,
        message: 'Participant not found.'
      });
    }
    
    res.status(200).json({
      success: true,
      data: participant
    });
  } catch (error) {
    console.error('Error fetching participant:', error);
    res.status(500).json({
      success: false,
      message: 'An error occurred while fetching participant details.',
      error: error.message
    });
  }
};

// Add team member
exports.addTeamMember = async (req, res) => {
  try {
    const { name, email, phone, institution } = req.body;
    
    const participant = await Participant.findById(req.params.id);
    
    if (!participant) {
      return res.status(404).json({
        success: false,
        message: 'Team not found.'
      });
    }
    
    // Check if team is already full
    if (participant.teamMembers.length >= participant.teamSize - 1) {
      return res.status(400).json({
        success: false,
        message: `Team is already full. Maximum team size is ${participant.teamSize}.`
      });
    }
    
    // Check if email already exists in team
    const emailExists = participant.teamMembers.some(member => member.email === email);
    if (emailExists || participant.teamLeader.email === email) {
      return res.status(400).json({
        success: false,
        message: 'This email is already registered in the team.'
      });
    }
    
    participant.teamMembers.push({
      name,
      email,
      phone,
      institution
    });
    
    await participant.save();
    
    res.status(200).json({
      success: true,
      message: 'Team member added successfully.',
      data: participant
    });
  } catch (error) {
    console.error('Error adding team member:', error);
    res.status(500).json({
      success: false,
      message: 'An error occurred while adding team member.',
      error: error.message
    });
  }
};

// Update participant status (admin only)
exports.updateParticipantStatus = async (req, res) => {
  try {
    const { status } = req.body;
    
    if (!['pending', 'approved', 'rejected'].includes(status)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid status. Status must be pending, approved, or rejected.'
      });
    }
    
    const participant = await Participant.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true, runValidators: true }
    );
    
    if (!participant) {
      return res.status(404).json({
        success: false,
        message: 'Participant not found.'
      });
    }
    
    res.status(200).json({
      success: true,
      message: `Participant status updated to ${status}.`,
      data: participant
    });
  } catch (error) {
    console.error('Error updating participant status:', error);
    res.status(500).json({
      success: false,
      message: 'An error occurred while updating participant status.',
      error: error.message
    });
  }
};
