import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import { Button, DivPage, DivFooter } from '../styles'

const Page1 = () => {
  return (
    <div>
      <DivPage>
        <h1>Pesquisa evento BLEND</h1>
        <p>
          Essa pesquisa tem como objetivo entender sua percepção em relação aos
          valores da PRB. Queremos entender se na sua visão os valores são
          vividos internamente por você e pelo seu time e de que forma que
          podemos fortalecer ainda mais a cultura em nossa empresa. Todas suas
          respostas serão tratadas de forma confidencial e serão mostradas
          apenas de forma agrupadas.
          <br />
          <br />
          Contamos com sua participação!
          <br />
          <br />O prazo para preenchimento da pesquisa é até dia Dec 31, 2021
        </p>
        <DivFooter>
          <Footer />
          <Link to="/pesquisa1">
            <Button>Entendi</Button>
          </Link>
        </DivFooter>
      </DivPage>
    </div>
  )
}

export default Page1
