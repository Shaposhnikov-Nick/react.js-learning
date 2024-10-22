import React from 'react'
import { useState } from 'react'
import './index.scss'
import Modal from './components/Modal'

function App() {
  const [open, setOpen] = useState(false)

  return (
    <div className="App">
      <button className="open-modal-btn" onClick={() => setOpen(true)}>
        ✨ Открыть окно
      </button>
      {open && (
        <Modal setOpen={setOpen}>
          <h2>This is a modal view</h2>
          <img src="https://media2.giphy.com/media/xT0xeJpnrWC4XWblEk/giphy.gif" />
        </Modal>
      )}
    </div>
  )
}

export default App
