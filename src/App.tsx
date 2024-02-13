import { useState } from 'react'

import Board from './components/Board'
import Nav from './components/Nav'

const App = () => {
  const [height, setHeight] = useState<number>(1)
  const [counter, setCounter] = useState<number>(0)
  const [system, setSystem] = useState<string>('pyramid-shaped-squares')
  console.log(counter)
  return (
    <main>
      <Nav>
        <button onClick={() => setSystem('pyramid-shaped-squares')}>Pyramid Shaped Squares</button>
        <span />
        <button onClick={() => setSystem('dimishing-squares')}>Dimishing Squares</button>
        <span />
        <button onClick={() => setSystem('diminishing-isosceles-triangles')}>
          Diminishing Isosceles Triangles
        </button>
        <span />
        <button onClick={() => setSystem('diminishing-right-triangles')}>
          Diminishing Right Triangles
        </button>
      </Nav>
      <div className={'height_input'}>
        <input
          step={1}
          min={1}
          max={30}
          value={height}
          type={'number'}
          onChange={(e) => setHeight(Number(e.target.value))}
        />
        <button onClick={() => setCounter((prevCount) => (prevCount += 1))}>Redraw</button>
      </div>

      <div className={'app_wrapper'}>
        <Board
          system={system}
          height={height}
          drawCounter={counter}
        />
      </div>
    </main>
  )
}

export default App
