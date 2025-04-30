import React, { useState, useCallback } from "react";
import API from "../../services/api";
import * as I from "react-icons/fa";
import * as S from "./styled";

const Home = () => {
  const [newRepo, setNewRepo] = useState("");
  const [repositorios, setRepositorios] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [alert, setAlert] = useState(null);

  function handleInputChange(e) {
    setNewRepo(e.target.value);
    setAlert(null)
  }

  const handleDelete = useCallback(
    (repo) => {
      const find = repositorios.filter((r) => r.name !== repo);
      setRepositorios(find);
    },
    [repositorios]
  );

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      async function submit() {
        setIsLoading(true);
        setAlert(null)
        try {
          if (newRepo === "") {
            throw new Error("Você precisa indicar um repositório.");
          }

          const response = await API.get(`repos/${newRepo}`);

          const hasRepo = repositorios.find((repo) => repo.name === newRepo);

          if (hasRepo) {
            throw new Error("Repositório duplicado.");
          }

          const data = {
            name: response.data.full_name,
          };

          setRepositorios([...repositorios, data]);
          setNewRepo("");
        } catch (error) {
          setAlert(true)
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
        <S.Form onSubmit={handleSubmit} error={alert}>
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
        <S.ReposList>
          {repositorios.map((repo) => (
            <li key={repo.name}>
              <span>
                <S.DeleteButton
                  onClick={() => {
                    handleDelete(repo.name);
                  }}
                >
                  <I.FaTrash size={14} />
                </S.DeleteButton>
                {repo.name}
              </span>
              <a href="">
                <I.FaBars size={20} />
              </a>
            </li>
          ))}
        </S.ReposList>
      </S.BoxInput>
    </S.Container>
  );
};

export default Home;
