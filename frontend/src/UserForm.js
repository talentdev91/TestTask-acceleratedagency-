import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
function UserForm({ addUser }) {
  const [step, setStep] = useState(1);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents form submission from refreshing the page
    // Perform the desired action with the captured user data
    const newUser = { name, email, password };
    console.log('New User:', { name, email, password });
    addUser(newUser);
    // Reset form fields
    setName('');
    setEmail('');
    setPassword('');
    // Reset to the first step
    setStep(1);
  };
  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className='mb-3'>
            <label htmlFor="Step" className="form-label">
            Step 1
            </label>
            <form onSubmit={nextStep}>
              <label htmlFor="name" className="form-label">
                Input New Name:
                <input
                  className='form-control'
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  style={{ margin: '10px'}}
                />
              </label>
              <br />
              <button className='btn btn-primary' type="button" onClick={nextStep}>Next</button>
            </form>
          </div>
        );
      case 2:
        return (
          <div className='mb-3'>
            <label htmlFor="Step" className="form-label">
              Step 2
            </label>
            <form onSubmit={handleSubmit}>
              <label htmlFor="name" className="form-label">
                Email:
                <input
                  className='form-control'
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </label>
              <br />
              <label>
                Password:
                <input
                  className='form-control'
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </label>
              <br />
              <button className='btn btn-primary' type="button" onClick={prevStep} style={{ margin: '10px'}}>
                Back
              </button>
              <button className='btn btn-success' type="submit" style={{ margin: '10px'}}>Submit</button>
            </form>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div>
      <h1>Add New User Form Demo</h1>
      {renderStep()}
    </div>
  );
}

export default UserForm;