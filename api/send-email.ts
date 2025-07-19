import nodemailer from 'nodemailer';

export default async (req, res) => {
  if (req.method !== 'POST') {
    res.status(405).json({ success: false, message: 'Method Not Allowed' });
    return;
  }

  const { fullName, companyName, designation, email, contact, interestedIn } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'technical@lwindia.com',
      pass: 'eohq wlwi dgbd svxk' // App password
    }
  });

  const emailContent = `
New HIREX Interest Submission

Full Name: ${fullName}
Company Name: ${companyName}
Designation: ${designation}
Email: ${email}
Contact Number: ${contact}
Interested In: ${interestedIn === 'fulltime' ? 'Hiring Full Time' : 'Hiring Interns'}

This person has submitted their interest to hire validated, skilled tech talent at HIREX 2025.
  `.trim();

  const mailOptions = {
    from: 'technical@lwindia.com',
    to: 'technical@lwindia.com',
    subject: 'New HIREX Interest Submission',
    text: emailContent,
    html: `
      <h2>New HIREX Interest Submission</h2>
      <p><strong>Full Name:</strong> ${fullName}</p>
      <p><strong>Company Name:</strong> ${companyName}</p>
      <p><strong>Designation:</strong> ${designation}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Contact Number:</strong> ${contact}</p>
      <p><strong>Interested In:</strong> ${interestedIn === 'fulltime' ? 'Hiring Full Time' : 'Hiring Interns'}</p>
      <p>This person has submitted their interest to hire validated, skilled tech talent at HIREX 2025.</p>
    `
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    console.error('Email sending failed:', error);
    res.status(500).json({ success: false, message: 'Failed to send email' });
  }
};