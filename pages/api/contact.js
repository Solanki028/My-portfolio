import clientPromise from '../../lib/mongodb';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { name, email, message } = req.body;

    // Validate required fields
    if (!name || !email || !message) {
      return res.status(400).json({ 
        message: 'All fields are required',
        success: false 
      });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ 
        message: 'Please enter a valid email address',
        success: false 
      });
    }

    // Connect to MongoDB
    const client = await clientPromise;
    const db = client.db('portfolio');
    const collection = db.collection('contacts');

    // Create contact document
    const contactData = {
      name: name.trim(),
      email: email.trim().toLowerCase(),
      message: message.trim(),
      createdAt: new Date(),
      status: 'new',
      ipAddress: req.headers['x-forwarded-for'] || req.connection.remoteAddress,
      userAgent: req.headers['user-agent']
    };

    // Insert into database
    const result = await collection.insertOne(contactData);

    if (result.insertedId) {
      return res.status(200).json({
        message: 'Message sent successfully!',
        success: true,
        id: result.insertedId
      });
    } else {
      throw new Error('Failed to insert document');
    }

  } catch (error) {
    console.error('Contact form error:', error);
    
    return res.status(500).json({
      message: 'Something went wrong. Please try again later.',
      success: false,
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
}