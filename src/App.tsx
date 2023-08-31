import './App.css'
import H1 from './components/base/typography/H1'
import H2 from './components/base/typography/H2'
import Paragraph from './components/base/typography/Paragraph'
import Button from './components/button/Button'
import Input from './components/forms/Input'

function App() {

  return (
    <>
      <H1 fontStyle='sketch'>Hola como vas</H1>
      <H2 fontStyle='sketch'>Hola como vas</H2>
      <Paragraph size='xLarge'>aca</Paragraph>
      <Button type='btn-warning' outline label='button'/>
      <br />
      <br />
      <br />
      <br />
      <Input />
    </>
  )
}

export default App
