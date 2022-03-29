import { useState } from 'react';

export function useChoices(openOrder) {
  const choiceOpenOrder = openOrder.chooseChoice || '';
  const [choice, setChoice] = useState(choiceOpenOrder);

  function changeChoices(e) {
    setChoice(e.target.value);
  }

  return {choice, changeChoices};
}