import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import {
  Button,
  DivPage,
  DivFooter,
  H1,
  ButtonWhite,
  Buttons,
  Info,
  DivButton,
  Input,
  H3,
  Question,
  Form,
} from '../styles'

const Page2 = () => {
  return (
    <div>
      <Form>
        <DivPage>
          <H1>NPS</H1>
          <p>
            Aqui vai uma explicação sobre a Seção 1 lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.
          </p>
        </DivPage>

        <DivPage>
          <H3>Questão 1</H3>

          <Question>
            Em uma escala de 0 a 10, qual a probabilidade de você recomendar a
            PRB como um bom local de trabalho?
          </Question>
          <Info>Comentário sobre a questão.</Info>
          <DivButton>
            <Buttons>0</Buttons>
            <Buttons>1</Buttons>
            <Buttons>2</Buttons>
            <Buttons>3</Buttons>
            <Buttons>4</Buttons>
            <Buttons>5</Buttons>
            <Buttons>6</Buttons>
            <Buttons>7</Buttons>
            <Buttons>8</Buttons>
            <Buttons>9</Buttons>
            <Buttons>10</Buttons>
          </DivButton>

          <Input placeholder="Digite a sua resposta"></Input>
        </DivPage>
        <DivPage>
          <H3>Questão 2</H3>
          <Question>
            Quais a coisa mais importante que você teria de sugestão para tornar
            a PRB um melhor lugar para se trabalhar?
          </Question>
          <Info>Comentário sobre a questão.</Info>
          <Input placeholder="Digite a sua resposta"></Input>
        </DivPage>

        <DivFooter>
          <Footer />
          <div>
            <Link to="/pesquisa">
              <ButtonWhite>Anterior</ButtonWhite>
            </Link>
            <Link to="/pesquisa2">
              <Button>Próximo</Button>
            </Link>
          </div>
        </DivFooter>
      </Form>
    </div>
  )
}

export default Page2
