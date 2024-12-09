import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Contato {
  id: number;
  nome: string;
  email: string;
  telefone: string;
}

interface ContatosState {
  lista: Contato[];
}

const initialState: ContatosState = {
  lista: [],
};

const contatosSlice = createSlice({
  name: 'contatos',
  initialState,
  reducers: {
    adicionarContato(state, action: PayloadAction<Contato>) {
      state.lista.push(action.payload);
    },
    removerContato(state, action: PayloadAction<number>) {
      state.lista = state.lista.filter(contato => contato.id !== action.payload);
    },
    editarContato(state, action: PayloadAction<Contato>) {
      const index = state.lista.findIndex(c => c.id === action.payload.id);
      if (index !== -1) {
        state.lista[index] = action.payload;
      }
    },
  },
});

export const { adicionarContato, removerContato, editarContato } = contatosSlice.actions;
export default contatosSlice.reducer;
