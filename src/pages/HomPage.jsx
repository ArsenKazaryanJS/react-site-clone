import { CommunitySection } from "../components/CommunitySection/CommunitySection"
import InterfaceSection from "../components/InterfaceSection/InterfaceSection"
import MainHeader from "../components/MainHeader/MainHeader"
import { PlatformSection } from "../components/PlatformSection/PlatformSection"
import SiteFooter from "../components/SiteFooter/SiteFooter"
import { UpgradeSection } from "../components/UpgradeSection/UpgradeSection"
import { WriteCompSection } from "../components/WriteCompSection/WriteCompSection"

export const HomPage = ({theme}) => {
    return (
        <>
     <MainHeader theme={theme}/>
     <InterfaceSection theme={theme}/>
     <WriteCompSection theme={theme}/>
     <PlatformSection />
     <UpgradeSection />
     <CommunitySection theme={theme}/>   
     <SiteFooter/>

        </>
    )
}
