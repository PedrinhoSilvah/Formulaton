import React from 'react';
import { useDispatch } from 'react-redux';
import { removerContato } from '../redux/contatosSlice.ts';
import { ButtonRed } from './style.ts';

interface Props {
  contato: {
    id: number;
    nome: string;
    email: string;
    telefone: string;
  };
}

const ContatoItem: React.FC<Props> = ({ contato }) => {
  const dispatch = useDispatch();

  const handleRemover = () => {
    dispatch(removerContato(contato.id));
  };

  return (
    <li>
      <p>{contato.nome}</p>
      <p>{contato.email}</p>
      <p>{contato.telefone}</p>
      <ButtonRed onClick={handleRemover}>Remover</ButtonRed>
    </li>
  );
};

export default ContatoItem;
