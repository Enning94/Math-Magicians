import React from 'react';
import Calculator from './Calculator';
import '../Styles/calculatorPage.css';

function CalculatorPage() {
  return (
    <div className="calculator-page">
      <div>
        <h2 className="title"> Let&apos;s do some math!</h2>
        <iframe
          src="https://i.giphy.com/media/3o7btObApReFdPILwk/giphy.webp"
          width="480"
          height="450"
          frameBorder="0"
          title="myFrame"
        />
      </div>
      <div>
        <Calculator />
      </div>
    </div>
  );
}

export default CalculatorPage;
