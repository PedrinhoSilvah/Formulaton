import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store.ts";
import ContatoItem from "../components/ContatoItem.tsx";
import NovoContatoForm from "../components/NovoContatoForm.tsx";
import { Container, List } from "./styles.ts";

const ListaContatos: React.FC = () => {
  const contatos = useSelector((state: RootState) => state.contatos.lista);

  return (
    <Container>
      <NovoContatoForm />
      <List>
        {contatos.map((contato) => (
          <ContatoItem key={contato.id} contato={contato} />
        ))}
      </List>
    </Container>
  );
};

export default ListaContatos;
