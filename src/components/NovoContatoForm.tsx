import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { adicionarContato } from '../redux/contatosSlice.ts';
import { Form, Input, Button } from './style.ts';

const NovoContatoForm: React.FC = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const novoContato = {
      id: Math.random(), 
      nome,
      email,
      telefone,
    };

    dispatch(adicionarContato(novoContato));

    setNome('');
    setEmail('');
    setTelefone('');
  };

  return (
    <Form>
    <form onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="Nome Completo"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        required
      />
      <Input
        type="email"
        placeholder="E-mail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <Input
        type="tel"
        placeholder="Telefone"
        value={telefone}
        onChange={(e) => setTelefone(e.target.value)}
        required
      />
      <Button type="submit">Adicionar Contato</Button>
    </form>
    </Form>
  );
};

export default NovoContatoForm;
