import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import {
  Button,
  Label,
  Radio,
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

const Page3 = () => {
  return (
    <div>
      <Form>
        <DivPage>
          <H1>Onboarding</H1>
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
          <divRadio>
            <Radio>
              <input type="radio"></input>
              <Label>Discordo totalmente</Label>
            </Radio>
            <Radio>
              <input type="radio"></input>
              <Label>Discordo</Label>
            </Radio>
            <Radio>
              <input type="radio"></input>
              <Label>Nem concordo nem discordo</Label>
            </Radio>
            <Radio>
              <input type="radio"></input>
              <Label>Concordo</Label>
            </Radio>
            <Radio>
              <input type="radio"></input>
              <Label>Concordo totalmente</Label>
            </Radio>
          </divRadio>
        </DivPage>
        <DivPage>
          <H3>Questão 2</H3>

          <Question>Eu me sinto bem recebido(a) na empresa.</Question>
          <Info>Comentário sobre a questão.</Info>
          <divRadio>
            <Radio>
              <input type="radio"></input>
              <Label>Discordo totalmente</Label>
            </Radio>
            <Radio>
              <input type="radio"></input>
              <Label>Discordo</Label>
            </Radio>
            <Radio>
              <input type="radio"></input>
              <Label>Nem concordo nem discordo</Label>
            </Radio>
            <Radio>
              <input type="radio"></input>
              <Label>Concordo</Label>
            </Radio>
            <Radio>
              <input type="radio"></input>
              <Label>Concordo totalmente</Label>
            </Radio>
          </divRadio>
        </DivPage>
        <DivPage>
          <H3>Questão 3</H3>

          <Question>
            Eu me sinto orgulhoso(a) de começar a trabalhar na empresa.
          </Question>
          <Info>Comentário sobre a questão.</Info>
          <divRadio>
            <Radio>
              <input type="radio"></input>
              <Label>Discordo totalmente</Label>
            </Radio>
            <Radio>
              <input type="radio"></input>
              <Label>Discordo</Label>
            </Radio>
            <Radio>
              <input type="radio"></input>
              <Label>Nem concordo nem discordo</Label>
            </Radio>
            <Radio>
              <input type="radio"></input>
              <Label>Concordo</Label>
            </Radio>
            <Radio>
              <input type="radio"></input>
              <Label>Concordo totalmente</Label>
            </Radio>
          </divRadio>
        </DivPage>
        <DivPage>
          <H3>Questão 4</H3>

          <Question>
            Eu me sinto orgulhoso(a) de começar a trabalhar na empresa.
          </Question>
          <Info>Comentário sobre a questão.</Info>
          <divRadio>
            <Radio>
              <input type="radio"></input>
              <Label>Discordo totalmente</Label>
            </Radio>
            <Radio>
              <input type="radio"></input>
              <Label>Discordo</Label>
            </Radio>
            <Radio>
              <input type="radio"></input>
              <Label>Nem concordo nem discordo</Label>
            </Radio>
            <Radio>
              <input type="radio"></input>
              <Label>Concordo</Label>
            </Radio>
            <Radio>
              <input type="radio"></input>
              <Label>Concordo totalmente</Label>
            </Radio>
          </divRadio>
        </DivPage>

        <DivFooter>
          <Footer />
          <div>
            <Link to="/pesquisa1">
              <ButtonWhite>Anterior</ButtonWhite>
            </Link>
            <Link to="/pesquisa3">
              <Button>Próximo</Button>
            </Link>
          </div>
        </DivFooter>
      </Form>
    </div>
  )
}

export default Page3
