import { useState, useCallback, useEffect } from 'react';
import Navbar from '../Components/Navbar';

type OperationType = '+' | '-' | '×' | '÷' | null;

interface CalculatorState {
  display: string;
  previousValue: number | null;
  operation: OperationType;
  waitingForOperand: boolean;
}

const Regular_Calculator = () => {
  const [state, setState] = useState<CalculatorState>({
    display: '0',
    previousValue: null,
    operation: null,
    waitingForOperand: false,
  });

  const inputNumber = useCallback((num: string) => {
    setState(prevState => {
      if (prevState.waitingForOperand) {
        return {
          ...prevState,
          display: num,
          waitingForOperand: false,
        };
      }

      if (prevState.display === '0' && num !== '.') {
        return { ...prevState, display: num };
      }

      return {
        ...prevState,
        display: prevState.display + num,
      };
    });
  }, []);

  const inputDot = useCallback(() => {
    setState(prevState => {
      if (prevState.waitingForOperand) {
        return {
          ...prevState,
          display: '0.',
          waitingForOperand: false,
        };
      }

      if (prevState.display.indexOf('.') === -1) {
        return {
          ...prevState,
          display: prevState.display + '.',
        };
      }

      return prevState;
    });
  }, []);

  const clear = useCallback(() => {
    setState({
      display: '0',
      previousValue: null,
      operation: null,
      waitingForOperand: false,
    });
  }, []);

  const clearEntry = useCallback(() => {
    setState(prevState => ({
      ...prevState,
      display: '0',
    }));
  }, []);

  const performOperation = useCallback((nextOperation: OperationType) => {
    setState(prevState => {
      const inputValue = parseFloat(prevState.display);

      if (prevState.previousValue === null) {
        return {
          ...prevState,
          previousValue: inputValue,
          operation: nextOperation,
          waitingForOperand: true,
        };
      }

      if (prevState.operation && prevState.waitingForOperand) {
        return {
          ...prevState,
          operation: nextOperation,
        };
      }

      const currentValue = prevState.previousValue || 0;
      let result: number;

      switch (prevState.operation) {
        case '+':
          result = currentValue + inputValue;
          break;
        case '-':
          result = currentValue - inputValue;
          break;
        case '×':
          result = currentValue * inputValue;
          break;
        case '÷':
          if (inputValue === 0) {
            return {
              display: 'Error',
              previousValue: null,
              operation: null,
              waitingForOperand: true,
            };
          }
          result = currentValue / inputValue;
          break;
        default:
          return prevState;
      }

      return {
        display: String(result),
        previousValue: result,
        operation: nextOperation,
        waitingForOperand: true,
      };
    });
  }, []);

  const calculate = useCallback(() => {
    performOperation(null);
  }, [performOperation]);

  // Keyboard support
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const { key } = event;

      if ('0123456789'.includes(key)) {
        inputNumber(key);
      } else if (key === '.') {
        inputDot();
      } else if (key === '+') {
        performOperation('+');
      } else if (key === '-') {
        performOperation('-');
      } else if (key === '*') {
        performOperation('×');
      } else if (key === '/') {
        event.preventDefault();
        performOperation('÷');
      } else if (key === 'Enter' || key === '=') {
        event.preventDefault();
        calculate();
      } else if (key === 'Escape') {
        clear();
      } else if (key === 'Backspace') {
        clearEntry();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [inputNumber, inputDot, performOperation, calculate, clear, clearEntry]);

  const formatDisplay = (value: string) => {
    if (value === 'Error') return value;
    
    const num = parseFloat(value);
    if (isNaN(num)) return value;

    // Handle very long numbers
    if (value.length > 12) {
      if (Math.abs(num) >= 1e12 || (Math.abs(num) < 1e-6 && num !== 0)) {
        return num.toExponential(6);
      }
      return num.toFixed(8).replace(/\.?0+$/, '');
    }

    return value;
  };

  const buttons = [
    { text: 'AC', type: 'function', action: clear, span: 1 },
    { text: 'C', type: 'function', action: clearEntry, span: 1 },
    { text: '÷', type: 'operator', action: () => performOperation('÷'), span: 1 },
    { text: '×', type: 'operator', action: () => performOperation('×'), span: 1 },
    
    { text: '7', type: 'number', action: () => inputNumber('7'), span: 1 },
    { text: '8', type: 'number', action: () => inputNumber('8'), span: 1 },
    { text: '9', type: 'number', action: () => inputNumber('9'), span: 1 },
    { text: '-', type: 'operator', action: () => performOperation('-'), span: 1 },
    
    { text: '4', type: 'number', action: () => inputNumber('4'), span: 1 },
    { text: '5', type: 'number', action: () => inputNumber('5'), span: 1 },
    { text: '6', type: 'number', action: () => inputNumber('6'), span: 1 },
    { text: '+', type: 'operator', action: () => performOperation('+'), span: 1 },
    
    { text: '1', type: 'number', action: () => inputNumber('1'), span: 1 },
    { text: '2', type: 'number', action: () => inputNumber('2'), span: 1 },
    { text: '3', type: 'number', action: () => inputNumber('3'), span: 1 },
    { text: '.', type: 'number', action: inputDot, span: 1 },
    
    { text: '0', type: 'number', action: () => inputNumber('0'), span: 2 },
    { text: '=', type: 'equals', action: calculate, span: 1 },
    
  ];

  const getButtonClass = (type: string) => {
    switch (type) {
      case 'number':
        return 'calc-btn-number';
      case 'operator':
        return 'calc-btn-operator';
      case 'function':
        return 'calc-btn-function';
      case 'equals':
        return 'calc-btn-equals';
      default:
        return 'calc-btn-number';
    }
  };

  return (<div className='flex flex-col min-h-screen'>
    <Navbar />
    <div className='flex-1 bg-gradient-to-r from-slate-50/60 via-blue-50/60 to-teal-50/60 dark:from-gray-900/60 dark:via-gray-500/60 dark:to-gray-900/40 transition-all duration-300 ease-in-out'>
    <div className="flex flex-col-1  items-center justify-center p-5 mt-10 backdrop-blur-md ">
      <div className="w-full max-w-sm mx-auto">
        <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 shadow-2xl">
          <div className="calc-display mb-6">
            <div className="text-3xl sm:text-4xl font-mono font-bold min-h-[3rem] flex items-center justify-end overflow-hidden">
              {formatDisplay(state.display)}
            </div>
            <div className="text-sm text-muted-foreground mt-2 flex justify-between items-center">
              <span>Calculator</span>
              <span className="text-xs opacity-60">Use keyboard or touch</span>
            </div>
          </div>

          <div className="grid grid-cols-4 gap-3 x">
            {buttons.map((button, index) => {
              const isLastRow = index >= buttons.length - 3;
              const colSpan = button.span === 2 ? 'col-span-3' : '';
              const rowSpan = button.text === '=' && !isLastRow ? 'row-span-3' : '';
              
              return (
                <button
                  key={`${button.text}-${index}`}
                  onClick={button.action}
                  className={`
                    ${getButtonClass(button.type)}
                    ${colSpan}
                    ${rowSpan}
                    h-16 sm:h-18 flex items-center justify-center
                    text-lg sm:text-xl font-medium
                    focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2
                    disabled:opacity-50 disabled:cursor-not-allowed
                    border border-black
                  `}
                  disabled={state.display === 'Error' && button.type !== 'function'}
                >
                  {button.text}
                </button>
              );
            })}
          </div>

          {/* Footer */}
          <div className="mt-6 text-center text-xs text-muted-foreground">
            <p>Press ESC to clear • Supports keyboard input</p>
          </div>
        </div>
      </div>
    </div>
    </div>
    </div>
  );
};

export default Regular_Calculator;