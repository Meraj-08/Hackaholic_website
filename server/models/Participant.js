const mongoose = require('mongoose');

const participantSchema = new mongoose.Schema({
  teamName: {
    type: String,
    required: [true, 'Team name is required'],
    trim: true,
    unique: true
  },
  teamSize: {
    type: Number,
    required: [true, 'Team size is required'],
    min: 2,
    max: 4
  },
  teamLeader: {
    name: {
      type: String,
      required: [true, 'Name is required'],
      trim: true
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      trim: true,
      lowercase: true,
      unique: true
    },
    phone: {
      type: String,
      required: [true, 'Phone number is required'],
      trim: true
    },
    institution: {
      type: String,
      required: [true, 'Institution/Organization is required'],
      trim: true
    }
  },
  teamMembers: [
    {
      name: {
        type: String,
        trim: true
      },
      email: {
        type: String,
        trim: true,
        lowercase: true
      },
      phone: {
        type: String,
        trim: true
      },
      institution: {
        type: String,
        trim: true
      }
    }
  ],
  experience: {
    type: String,
    enum: ['beginner', 'intermediate', 'experienced'],
    default: 'beginner'
  },
  projectIdea: {
    type: String,
    required: [true, 'Project idea is required'],
    trim: true
  },
  heardFrom: {
    type: String,
    trim: true
  },
  registrationDate: {
    type: Date,
    default: Date.now
  },
  status: {
    type: String,
    enum: ['pending', 'approved', 'rejected'],
    default: 'pending'
  }
});

const Participant = mongoose.model('Participant', participantSchema);

module.exports = Participant;
