import React from 'react'
import styled from 'styled-components'


const StyledH3 = styled.h3`
    font-size:2rem;
    color: blue;

`

const StyledDiv = styled.div`
    display:flex;
    
`

function Form() {
    return (
        <StyledDiv>
            <form className='form-container'>
                <StyledH3>Sign Up</StyledH3>
                <label>Username:
                    <input type='text' name='username' placeholder='Create Your Username'/>
                </label>
                <label>Email:
                    <input type='text' name='email' placeholder='Your Email'/>
                </label>
                <label>Password:
                    <input type='text' name='password' placeholder='Enter a Password'/>
                </label>
                
                

            </form>
            </StyledDiv>
        
    )
}

export default Form




