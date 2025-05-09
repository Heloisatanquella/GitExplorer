import { useEffect, useState } from "react";
import React from "react";
import * as S from "./styled";
import * as I from "react-icons";
import API from "../../services/api";
import { useParams } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

export default function Repos() {
  const { repositorio } = useParams();
  const [repos, setRepos] = useState({});
  const [issues, setIssues] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        const [repositorioData, issuesData] = await Promise.all([
          API.get(`/repos/${repositorio}`),
          API.get(`/repos/${repositorio}/issues`, {
            params: {
              state: "open",
              per_page: 5,
            },
          }),
        ]);
        setRepos(repositorioData.data);
        setIssues(issuesData.data);
        setLoading(false);
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      }
    }
    load();
  }, [repositorio]);

  if (loading) {
    return (
      <S.Loading>
        <h1>Carregando...</h1>
      </S.Loading>
    );
  } else {
    return (
      <S.Container>
        <S.BackButton to="/">
          <FaArrowLeft color="#000" size={30} />
        </S.BackButton>
        <S.Owner>
          <img src={repos.owner?.avatar_url} alt={repos.owner?.login} />
          <h1>{repos.name}</h1>
          <p>{repos.description}</p>
        </S.Owner>
        <S.IssuesList>
          {issues.map((issue) => (
            <li key={String(issue.id)}>
              <img src={issue.user.avatar_url} alt={issue.user.login} />

              <div>
                <strong>
                  <a href={issue.html_url}>{issue.title}</a>
                  {issue.labels.map(label => (
                    <span key={String(label.id)}>
                      {label.name}
                    </span>
                  ))}
                </strong>
                <p>{issue.user.login}</p>
              </div>
            </li>
          ))}
        </S.IssuesList>
      </S.Container>
    );
  }
}
