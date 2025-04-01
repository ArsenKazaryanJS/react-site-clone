import { CommunityLeftBox } from "../../components/CommunityLeftBox/CommunityLeftBox"
import { CommunityMain } from "../../components/CommunityMain/CommunityMain"
import { CommunityRightBox } from "../../components/CommunityRightBox/CommunityRightBox"
import SiteFooter from "../../components/SiteFooter/SiteFooter"
import './communityPage.css'

export const CommunityPage = () => {
    return (
        <div className="community-container">
            <div className="community-left-box"><CommunityLeftBox/></div>
            <div className="community-box">
                <CommunityMain/>
                <SiteFooter/>
            </div>
            <div className="community-right-box"><CommunityRightBox/></div> 
        </div>
    )
}