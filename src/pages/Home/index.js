import React, { useState } from "react";
import * as I from "react-icons/fa";
import * as S from "./styled";

const Home = () => {
  const [newRepos, setNewRepos] = useState("");

  function handleInputChange(e) {
    setNewRepos(e.target.value);
  }

  return (
    <S.Container>
      <S.BoxInput>
        <h1>
          <I.FaGithub size={25} />
          Meus Repositórios
        </h1>
        <S.Form onSubmit={() => {}}>
          <input
            type="text"
            placeholder="Adicionar Repositórios"
            value={newRepos}
            onChange={handleInputChange}
          />
          <S.SubmitButton>
            <I.FaPlus color="#FFF" size={14} />
          </S.SubmitButton>
        </S.Form>
      </S.BoxInput>
    </S.Container>
  );
};

export default Home;
