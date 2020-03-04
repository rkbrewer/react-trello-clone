import 'bootstrap/scss/bootstrap.scss';
import '../../public/scss/index.scss';
import React from 'react';

// Drag and drop
import { DndProvider } from 'react-dnd';
import Backend from 'react-dnd-html5-backend';

export default ({ Component, pageProps }) => (
  <DndProvider backend={Backend}>
    <Component {...pageProps} />
  </DndProvider>
);
