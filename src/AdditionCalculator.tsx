import React from "react";
import { useBoolean } from "@fluentui/react-hooks";
import { ThemeProvider, Button } from "@fluentui/react";
import "./styles.css";

export default function AdditionCalculator() {
  const [answer, setAnswer] = React.useState<number>(0);
  const [firstInput, setFirstInput] = React.useState<number>(0);
  const [secondInput, setSecondInput] = React.useState<number>(0);
  const [currentErrorMessage, setCurrentErrorMessage] = React.useState<
    string
  >();
  const [
    errorMessage,
    { setTrue: showErrorMessage, setFalse: hideErrorMessage }
  ] = useBoolean(false);

  /**
   * Calculates the sum of two given values.
   *
   * @param firstValue
   * @param secondValue
   */
  const addition = (firstValue: number, secondValue: number) => {
    return firstValue + secondValue;
  };

  /**
   * Calculates the solution for the equation.
   */
  const solve = () => {
    // Handles errors related to invalid values being recieved.
    if (firstInput && secondInput) {
      hideErrorMessage();
      setAnswer(addition(firstInput, secondInput));
    } else {
      setCurrentErrorMessage("Please enter a valid value in both input boxes.");
      showErrorMessage();
    }
  };

  /**
   * Clears the current values of the equation.
   */
  const clear = () => {
    setAnswer(0);
  };

  return (
    <ThemeProvider>
      <div className="calculator-content-box">
        <div className="calculator-title">
          <h3>Addition Calculator</h3>
        </div>
        <div className="calculator-input-box">
          <p className="calculator-input">
            <label className="calculator-input-label">Value 1</label>
            <input
              onChange={(ev) => {
                setFirstInput(parseFloat(ev.target.value));
              }}
            />
          </p>
          <p className="calculator-input">
            <label className="calculator-input-label">Value 2</label>
            <input
              onChange={(ev) => {
                setSecondInput(parseFloat(ev.target.value));
              }}
            />
          </p>
          {errorMessage && (
            <p className="calculator-input-error-message">
              {currentErrorMessage}
            </p>
          )}
        </div>
        <div className="calculator-buttons-box">
          <Button className="calculator-buttons" onClick={clear}>
            Clear
          </Button>
          <Button className="calculator-buttons" onClick={solve}>
            Solve
          </Button>
        </div>
        <div className="calculator-answer-box">
          <h4 className="calculator-answer-title">Answer</h4>
          <hr />
          <div className="calculator-answer-text">
            <p className="calculator-answer-text-name"> Sum:</p>
            <p className="calculator-answer-text-answer">{answer}</p>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}
