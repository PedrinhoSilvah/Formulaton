import React from 'react';
import ListaContatos from './containers/ListaContatos.tsx';
import GlobalStyle from './styles/globalStyles.ts';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <ListaContatos />
    </>
  );
};

export default App;
