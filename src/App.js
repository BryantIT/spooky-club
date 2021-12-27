import React from 'react'
import Landing from './pages/Landing'
import { Wrapper, Pages } from './Styles'
import './App.css';

function App() {
  return (
    <Wrapper>
      <Pages>
        <Landing />
      </Pages>
    </Wrapper>
  );
}

export default App;
