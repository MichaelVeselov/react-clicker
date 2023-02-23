import classes from './Counter.module.css';

import { useState } from 'react';
import Button from '../UI/button/Button';

function Counter() {
  const [count, setCount] = useState(0);

  const onClickPlus = () => {
    setCount((count) => count + 1);
  };

  const onClickMinus = () => {
    setCount((count) => count - 1);
  };

  const onClickReset = () => {
    setCount((count) => (count = 0));
  };
  return (
    <div>
      <h2 className={classes.title}>Counter:</h2>
      <h2 className={classes.counter}>{count}</h2>
      <Button onClick={onClickMinus} feature={'minus'}>
        - Minus
      </Button>
      <Button onClick={onClickReset} feature={'reset'}>
        Reset
      </Button>
      <Button onClick={onClickPlus} feature={'plus'}>
        Plus +
      </Button>
    </div>
  );
}

export default Counter;
