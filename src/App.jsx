import MainContent from './components/MainContent'
import Sidebar from './components/Sidebar'

import './styles/components/app.sass'

function App() {

  return (
    <div id="portfolio" class="container">
        <h1>André Mendes</h1> 
      <Sidebar />
      <MainContent />
    </div>
  )
}

export default App
