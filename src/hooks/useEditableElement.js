/*
Goal:
Extract parts of EditableBoardTitle component into a reusable hook.

When done:
1. replace parts of EditableBoardTitle with this hook
2. reuse this hook in a new EditableListTitle component
3. reuse this hook in a new EditableListCardTitle element

Next steps:
How can I handle custom validation?

KNOWN BUG:
There's something glitchy about this, and if initialValue comes in as a prop, and the parent changes it, the `newValue`
state does not change!  I tried the `usePrevious` hook to conditionally call setNewValue(initialValue) but this caused an infinite loop in react for some reason...
Need to investigate this further.
  - TO FIX THIS, I followed this one stack overflow, and set a 'key' on any element using this hook. This forced a re-render.
    https://stackoverflow.com/questions/38892672/react-why-child-component-doesnt-update-when-prop-changes
  - Note: that url ALSO States that I can use `useEffect` with hooks, and achieve the same thing. This is the cleanest!!
 */
import { useState, useEffect, useContext } from 'react';
import { useKey } from 'react-use';

import { BoardContext } from '@/context/BoardContext';

export const useEditableElement = (initialValue, save, ref) => {
  const { loadBoard } = useContext(BoardContext);

  const [editing, setEditing] = useState(false);
  const handleEditing = () => setEditing(true);

  const [newValue, setNewValue] = useState(initialValue);
  const handleNewValue = event => setNewValue(event.target.value);

  const handleEnterKey = () => {
    save(newValue).then(loadBoard);
    setEditing(false);
  };

  useKey('Enter', handleEnterKey, { target: ref.current }, [newValue, ref]);
  useKey('Escape', () => setEditing(false), { target: ref.current });

  // Force a re-render if the initalValue changes
  useEffect(() => {
    setNewValue(initialValue);
  }, [initialValue]);

  /*
  Private:
  - setEditing,
  - setTitle
  - save
   */
  return [
    newValue,
    handleNewValue,
    editing,
    handleEditing
  ];
};
