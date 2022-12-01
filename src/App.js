import React, { memo } from 'react';
import './App.css';
import Calculator from './components/Calculator';

const App = memo(() => (
  <div>
    <Calculator />
  </div>
));
App.displayName = 'MyApp';
export default App;
