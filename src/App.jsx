import {useTheme} from './hooks/use-theme.js'
import StickyNav from './components/StickyNav/StickyNav.jsx'
import SiteFooter from './components/SiteFooter/SiteFooter.jsx'
import {Route, Routes} from 'react-router-dom'
import { HomPage } from './pages/HomPage.jsx'
import { LearnPage } from './pages/LearnPage/LearnPage.jsx'
import { ReferencPage } from './pages/ReferencPage/ReferencPage.jsx'
import { CommunityPage } from './pages/CommunityPage/CommunityPage.jsx'
import { BlogPage } from './pages/BlogPage/BlogPage.jsx'

function App() {
  const {theme, setTheme} = useTheme('dark')
  return (
    <div className="container">
    <StickyNav theme={theme} setTheme={setTheme}/>
      <Routes>
       <Route path='react-site-clone/' element={<HomPage theme={theme}/>}/>
       <Route path='react-site-clone/Community' element={<CommunityPage/>}/>
       <Route path='react-site-clone/Learn' element={<LearnPage theme={theme}/>}/>
       <Route path='react-site-clone/Reference' element={<ReferencPage/>}/>
       <Route path='react-site-clone/Blog' element={<BlogPage/>}/>
       </Routes>
    </div>
  )
}

export default App
