import MainHeader from './components/MainHeader/MainHeader.jsx'
import {useTheme} from './hooks/use-theme.js'
import StickyNav from './components/StickyNav/StickyNav.jsx'
import InterfaceSection from './components/InterfaceSection/InterfaceSection.jsx'
import SiteFooter from './components/SiteFooter/SiteFooter.jsx'
import { WriteCompSection } from './components/WriteCompSection/WriteCompSection.jsx'
import { PlatformSection } from './components/PlatformSection/PlatformSection.jsx'
import { CommunitySection } from './components/CommunitySection/CommunitySection.jsx'
import { UpgradeSection } from './components/UpgradeSection/UpgradeSection.jsx'
import ConferencSection from './components/ConferencSection/ConferencSection.jsx'

function App() {
  const {theme, setTheme} = useTheme()
  return (
    <div className="container">
     <StickyNav theme={theme} setTheme={setTheme}/>
     <MainHeader theme={theme}/>
     <InterfaceSection theme={theme}/>
     <WriteCompSection theme={theme}/>
     {/* <ConferencSection theme={theme}/> */}
     <PlatformSection />
     <UpgradeSection />
     <CommunitySection theme={theme}/>
     <SiteFooter/>
    </div>
  )
}

export default App
