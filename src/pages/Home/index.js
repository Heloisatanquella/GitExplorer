import React from "react";
import * as I from 'react-icons/fa'
import * as S from './styled'

const Home = () => {
    return (
        <S.Container>
            <h1>
                <I.FaGithub size={25}/>
                Meus Repositórios
            </h1>
            <S.Form onSubmit={()=>{}}>
                <input type="text" placeholder="Adicionar Repositórios"/>
                <S.SubmitButton>
                    <I.FaPlus color="#FFF" size={14}/>
                </S.SubmitButton>
            </S.Form>
        </S.Container>
    )
}

export default Home;