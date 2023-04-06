import Login, { handleSignupSubmit } from "./Login";
import React from 'react';
import '@testing-library/jest-dom'
import { render, fireEvent, screen, cleanup } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
// import user from '@testing-library/user-event';
import axios from 'axios';

jest.mock('axios');


describe('Sign Up', ()=>{
  test('It renders the SignUp form properly', ()=>{
    const loginSignup = render(< Login />)

    const { getByTestId, getByLabelText } = render(< Login />)
    const nameLabel = getByLabelText(/First Name/i)
    const ageLabel = getByLabelText(/Age/i)
    const emailLabel = getByLabelText(/Email Address/i)
    const passwordLabel = getByLabelText(/Password/i)

    expect(nameLabel).toBeInTheDocument();
    expect(ageLabel).toBeInTheDocument();
    expect(ageLabel).toHaveAttribute('type', 'number');
    expect(emailLabel).toBeInTheDocument();
    expect(passwordLabel).toBeInTheDocument();
    expect(passwordLabel).toHaveAttribute('type', 'password');

  })
  test("Has header", ()=>{
    render( <Login />)
    const header = screen.queryByRole("heading", { name: "Sign up" })
    expect(header).toBeInTheDocument();
  })
  test('should allow a user to sign up', async () => {
    render(<Login />)

    await userEvent.type(screen.getByLabelText(/First Name/i), 'johnUser')

    userEvent.click(screen.getByRole('button', { name: "Signup Submit" }))

    // expect(await screen.getByAltText('f79e82e8-c34a-4dc7-a49e-9fadc0979fda')).toBeInTheDocument()
    // expect(await screen.findByText('John')).toBeInTheDocument()
    // expect(await screen.findByText('Maverick')).toBeInTheDocument()
  })

})