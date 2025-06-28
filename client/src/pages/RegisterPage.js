import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';

const RegisterPage = () => {
  const initialState = {
    teamName: '',
    leaderName: '',
    leaderEmail: '',
    leaderPhone: '',
    leaderCourse: '',
    leaderYear: '',
    leaderSemester: '',
    leaderUniversity: '',
    erpFile: null,
    member2: { name: '', email: '', phone: '', course: '', year: '', semester: '', university: '' },
    member3: { name: '', email: '', phone: '', course: '', year: '', semester: '', university: '' },
    member4: { name: '', email: '', phone: '', course: '', year: '', semester: '', university: '' },
    projectTitle: '',
    problemStatement: '',
    description: '',
    pptFile: null,
  };

  const [formData, setFormData] = useState(initialState);
  const [submitting, setSubmitting] = useState(false);

  const handleInputChange = (e, member = null) => {
    const { name, value, files } = e.target;
    if (files) {
      setFormData({ ...formData, [name]: files[0] });
    } else if (member) {
      setFormData({
        ...formData,
        [member]: {
          ...formData[member],
          [name]: value,
        },
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    const form = new FormData();

    const encodeFileToBase64 = (file) =>
      new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result.split(',')[1]);
        reader.onerror = (error) => reject(error);
      });

    try {
      Object.keys(formData).forEach((key) => {
        if (['member2', 'member3', 'member4'].includes(key)) {
          const member = formData[key];
          Object.entries(member).forEach(([subKey, val]) => {
            form.append(`${key}_${subKey}`, val);
          });
        } else if (!['erpFile', 'pptFile', 'videoFile'].includes(key)) {
          form.append(key, formData[key]);
        }
      });

      if (formData.erpFile) form.append('erpFile', await encodeFileToBase64(formData.erpFile));
      if (formData.pptFile) form.append('pptFile', await encodeFileToBase64(formData.pptFile));

      const response = await fetch('https://script.google.com/macros/s/AKfycbzRvvxHLBFpCR2szPSKjZEHEJJRLZ7_FhJencCCJJpIujagZRYQ1BXsiXU6T0e95K9e/exec', {
        method: 'POST',
        body: form,
      });

      const text = await response.text();
      const result = JSON.parse(text);

      if (result.result === 'success') {
        alert('✅ Form submitted successfully!');
        setFormData(initialState);
      } else {
        alert('❌ Submission failed: ' + result.error);
      }
    } catch (err) {
      console.error('🔥 Submission Error:', err);
      alert('Something went wrong. Check console.');
    }

    setSubmitting(false);
  };

  const renderUniversityRadios = (name, value, onChange, required = true) => (
    <RadioGroup>
      <Label>University</Label>
      <RadioOption>
        <input type="radio" name={name} value="GEHU" checked={value === 'GEHU'} onChange={onChange} required={required} />
        Graphic Era Hill University
      </RadioOption>
      <RadioOption>
        <input type="radio" name={name} value="GEU" checked={value === 'GEU'} onChange={onChange} required={required} />
        Graphic Era University
      </RadioOption>
    </RadioGroup>
  );

  return (
    <Container>
      <GlassForm onSubmit={handleSubmit}>
        <Title>🚀 Team Registration Portal</Title>

        <SectionTitle>Team Details</SectionTitle>
        <FormGroup>
          <Label>Team Name</Label>
          <Input name="teamName" onChange={handleInputChange} value={formData.teamName} required />
        </FormGroup>

        <SubTitle>Team Leader</SubTitle>
        <Grid>
          {['leaderName', 'leaderEmail', 'leaderPhone', 'leaderCourse', 'leaderYear', 'leaderSemester'].map((field, idx) => (
            <FormGroup key={idx}>
              <Label>{field.replace('leader', '').replace(/([A-Z])/g, ' $1')}</Label>
              <Input name={field} value={formData[field]} onChange={handleInputChange} required />
            </FormGroup>
          ))}
          <FormGroup>{renderUniversityRadios('leaderUniversity', formData.leaderUniversity, handleInputChange)}</FormGroup>
          <FormGroup>
            <Label>ERP ID Card (.pdf format upto 10mb)</Label>
            <Input type="file" name="erpFile" accept=".pdf" onChange={handleInputChange} required />
            <Label style={{ fontStyle: 'italic', fontSize: '12px' }}>Note : Pdf should contain the ID Cards of all team members !</Label>
          </FormGroup>
        </Grid>

        {[2, 3, 4].map((n) => (
          <div key={n}>
            <SubTitle>Member {n}</SubTitle>
            <Grid>
              {['name', 'email', 'phone', 'course', 'year', 'semester'].map((field, idx) => (
                <FormGroup key={idx}>
                  <Label>{field.charAt(0).toUpperCase() + field.slice(1)}</Label>
                  <Input
                    name={field}
                    value={formData[`member${n}`][field]}
                    onChange={(e) => handleInputChange(e, `member${n}`)}
                    required={n !== 4}
                  />
                </FormGroup>
              ))}
              <FormGroup>
                {renderUniversityRadios(
                  `member${n}_university`,
                  formData[`member${n}`].university,
                  (e) => {
                    const { value } = e.target;
                    setFormData((prev) => ({
                        ...prev,
                        [`member${n}`]: {
                        ...prev[`member${n}`],
                        university: value,
                        },
                    }));
                    },
                    n !== 4
                )}
                </FormGroup>

            </Grid>
          </div>
        ))}

        <SectionTitle>Project Submission</SectionTitle>
        <Grid>
          <FormGroup>
            <Label>Project Title</Label>
            <Input name="projectTitle" onChange={handleInputChange} value={formData.projectTitle} required />
          </FormGroup>
          <br></br>
          <FormGroup>
            <Label>Problem Statement</Label>
            <Input name="problemStatement" onChange={handleInputChange} value={formData.problemStatement} required />
          </FormGroup>
          <FormGroup fullWidth>
            <Label>Description</Label>
            <TextArea name="description" onChange={handleInputChange} value={formData.description} required />
          </FormGroup>
          <FormGroup>
            <Label>Presentation (.pptx format upto 10mb)</Label>
            <Input type="file" name="pptFile" accept=".pptx" onChange={handleInputChange} required />
            <Label style={{ fontStyle: 'italic', fontSize: '12px' }}>Note : Presentation should contain 5-6 slides only.</Label>
          </FormGroup>
        </Grid>

        <SubmitButton type="submit" disabled={submitting}>
          {submitting ? (
            <>
              <Spinner /> Submitting...
            </>
          ) : (
            '🚀 Submit Now'
          )}
        </SubmitButton>
        <br></br>
        <p style={{ fontSize: '15px' }}>*Note: If you're experiencing issues with this form, please use this <a style={{ fontWeight: '700', color: 'solid black' }} href="https://forms.gle/FGtnRgQmJJJNGSnWA" target="_blank" rel="noopener noreferrer">[Google Form]</a> instead.</p>
      </GlassForm>
    </Container>
  );
};

export default RegisterPage;

// Styled Components

const Container = styled.div`
  min-height: 100vh;
  background: linear-gradient(to right, #c33764, #1d2671);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3rem 1rem;
  margin-top: 80px;
`;

const GlassForm = styled.form`
  background: rgba(255, 255, 255, 0.07);
  border-radius: 20px;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.3);
  backdrop-filter: blur(16px);
  padding: 2rem 2.5rem;
  max-width: 1000px;
  width: 100%;
  color: white;
`;

const Title = styled.h1`
  text-align: center;
  font-size: 2.2rem;
  font-weight: 700;
`;

const SectionTitle = styled.h2`
  margin-top: 2rem;
  margin-bottom: 1.2rem;
  font-size: 1.5rem;
  border-bottom: 1px solid #ffffff55;
`;

const SubTitle = styled.h3`
  margin-top: 1.5rem;
  font-size: 1.2rem;
  color: #ffebcd;
`;

const Grid = styled.div`
  display: grid;
  gap: 1.2rem;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  ${({ fullWidth }) => fullWidth && `grid-column: span 2;`}
`;

const Label = styled.label`
  font-weight: 500;
  margin-bottom: 0.3rem;
`;

const Input = styled.input`
  padding: 0.6rem;
  border: none;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.15);
  color: white;
`;

const TextArea = styled.textarea`
  padding: 0.8rem;
  min-height: 100px;
  resize: vertical;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.15);
  color: white;
`;

const SubmitButton = styled.button`
  margin-top: 2rem;
  width: 100%;
  padding: 0.9rem;
  font-size: 1.1rem;
  background: #ff4b2b;
  color: white;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.6rem;

  &:hover {
    background: #ff416c;
    transform: translateY(-2px);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const Spinner = styled.div`
  width: 18px;
  height: 18px;
  border: 3px solid white;
  border-top: 3px solid transparent;
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
`;

const RadioGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const RadioOption = styled.label`
  margin-bottom: 0.3rem;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  input[type='radio'] {
    accent-color: black;
    transform: scale(1.2);
  }
`;