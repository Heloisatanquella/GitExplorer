import React, { useState, useCallback } from "react";
import API from "../../services/api";
import * as I from "react-icons/fa";
import * as S from "./styled";

const Home = () => {
  const [newRepo, setNewRepo] = useState("");
  const [repositorios, setRepositorios] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  function handleInputChange(e) {
    setNewRepo(e.target.value);
  }

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      async function submit() {
        setIsLoading(true);
        try {
          const response = await API.get(`repos/${newRepo}`);

          const data = {
            name: response.data.full_name,
          };

          setRepositorios([...repositorios, data]);
          setNewRepo("");
        } catch (error) {
          console.log(error);
        } finally {
          setIsLoading(false);
        }
      }
      submit();
    },
    [newRepo, repositorios]
  );

  return (
    <S.Container>
      <S.BoxInput>
        <h1>
          <I.FaGithub size={25} />
          Meus Repositórios
        </h1>
        <S.Form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Adicionar Repositórios"
            value={newRepo}
            onChange={handleInputChange}
          />
          <S.SubmitButton isLoading={isLoading ? 1 : 0}>
            {isLoading ? (
              <I.FaSpinner color="#FFF" size={14} />
            ) : (
              <I.FaPlus color="#FFF" size={14} />
            )}
          </S.SubmitButton>
        </S.Form>
      </S.BoxInput>
    </S.Container>
  );
};

export default Home;
