const Contact = require('../models/Contact');

// Submit a new contact message
exports.submitContactMessage = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    // Create new contact message
    const contact = new Contact({
      name,
      email,
      subject,
      message
    });

    await contact.save();

    res.status(201).json({
      success: true,
      message: 'Your message has been sent successfully!',
      data: contact
    });
  } catch (error) {
    console.error('Error submitting contact message:', error);
    res.status(500).json({
      success: false,
      message: 'An error occurred while sending your message. Please try again.',
      error: error.message
    });
  }
};

// Get all contact messages (admin only)
exports.getAllContactMessages = async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ date: -1 });
    
    res.status(200).json({
      success: true,
      count: contacts.length,
      data: contacts
    });
  } catch (error) {
    console.error('Error fetching contact messages:', error);
    res.status(500).json({
      success: false,
      message: 'An error occurred while fetching contact messages.',
      error: error.message
    });
  }
};

// Get contact message by ID (admin only)
exports.getContactMessageById = async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id);
    
    if (!contact) {
      return res.status(404).json({
        success: false,
        message: 'Contact message not found.'
      });
    }
    
    res.status(200).json({
      success: true,
      data: contact
    });
  } catch (error) {
    console.error('Error fetching contact message:', error);
    res.status(500).json({
      success: false,
      message: 'An error occurred while fetching contact message details.',
      error: error.message
    });
  }
};

// Update contact message status (admin only)
exports.updateContactStatus = async (req, res) => {
  try {
    const { status } = req.body;
    
    if (!['unread', 'read', 'replied'].includes(status)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid status. Status must be unread, read, or replied.'
      });
    }
    
    const contact = await Contact.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true, runValidators: true }
    );
    
    if (!contact) {
      return res.status(404).json({
        success: false,
        message: 'Contact message not found.'
      });
    }
    
    res.status(200).json({
      success: true,
      message: `Contact message status updated to ${status}.`,
      data: contact
    });
  } catch (error) {
    console.error('Error updating contact message status:', error);
    res.status(500).json({
      success: false,
      message: 'An error occurred while updating contact message status.',
      error: error.message
    });
  }
};
