import { useState } from 'react'
import './index.css'

function App() {
  const sentences = [
    '오늘도 힘내세요!',
    '오늘도 해냈어요!',
    '조금씩 나아지고 있어요.',
    '이대로 계속 가봅시다.'
  ]
  
  const [index, setIndex] = useState(0)

  const buttonColors = [
    'blue',
    'yellow',
    'orange',
    'green'
  ]

  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex + 1) % sentences.length)
  }

  return (
    <div className="container" key={index}>
      <h1 className="idea-text">{sentences[index]}</h1>
      <p className="sub-text">환영합니다. 당신의 상상력을 펼쳐보세요.</p>
      <button className={`next-btn ${buttonColors[index]}`} onClick={handleNext}>
        다음 문장 보기
      </button>
    </div>
  )
}

export default App
