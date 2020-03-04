import React from 'react';

export const CardEditorContext = React.createContext({
  id: null, // stores a card id, when a card is being edited
  setId: id => {} // board/[id].js defines a set id fn
});
