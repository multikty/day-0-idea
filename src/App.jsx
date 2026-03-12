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
    <div className="app-wrapper">
      <header className="app-header">
        <div className="header-logo">
          <svg className="header-icon" viewBox="0 0 24 24" fill="currentColor">
            <path d="M13 3l-2 9h6l-7 9 2-9h-6z" />
          </svg>
          <h1>나의 첫 서비스</h1>
        </div>
        <nav className="header-nav">
          <a href="#intro">소개</a>
          <a href="#features">기능</a>
          <a href="#contact">문의</a>
        </nav>
      </header>

      <main className="app-main">
        <section className="feature-section">
          <h2 className="section-title">핵심 기능 소개</h2>
          <div className="container" key={index}>
            <h1 className="idea-text">{sentences[index]}</h1>
            <p className="sub-text">당신의 소중한 하루가 기분 좋은 일들로 가득하기를...</p>
            <button className={`next-btn ${buttonColors[index]}`} onClick={handleNext}>
              다음 문장 보기
            </button>
          </div>
        </section>

        <section className="reviews-section">
          <h2 className="section-title">사용자 후기</h2>
          <div className="reviews-grid">
            <div className="review-card">
              <div className="user-info">
                <img src="/user_profile_1.png" alt="User 1" className="user-avatar" />
                <div>
                  <p className="user-name">김철수</p>
                  <p className="user-role">디자이너</p>
                </div>
              </div>
              <p className="review-text">"디자인이 너무 깔끔하고 직관적이에요. 응원 문구도 매번 큰 힘이 됩니다!"</p>
              <div className="rating">★★★★★</div>
            </div>
            <div className="review-card">
              <div className="user-info">
                <img src="/user_profile_2.png" alt="User 2" className="user-avatar" />
                <div>
                  <p className="user-name">이영희</p>
                  <p className="user-role">개발자</p>
                </div>
              </div>
              <p className="review-text">"사용자 경험이 훌륭해요. 특히 버튼 색상이 변하는 디테일이 인상적입니다."</p>
              <div className="rating">★★★★★</div>
            </div>
          </div>
        </section>
      </main>

      <footer className="app-footer">
        <p>© 2026 My Service</p>
      </footer>
    </div>
  )
}

export default App
