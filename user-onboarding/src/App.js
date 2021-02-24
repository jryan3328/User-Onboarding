import Form from './components/Form'
import styled from 'styled-components'

const StyledDiv = styled.div`
  display: flex;
  flex-flow: row-wrap;
  justify-content: center;
  align-items: start;

`
const Styledh1 = styled.h1`
  font-size: 3rem;
  font-family:arial;
  color: red;
  text-shadow: 2px 2px black;
  text-align:right;
  -webkit-text-stroke-width: 2px;
  -webkit-text-stroke-color: silver;

`


function App() {
  return (
    <div className='container'>
    <Styledh1>The Homies</Styledh1>
  
    <Form/>
    </div>
  )
}

export default App;
