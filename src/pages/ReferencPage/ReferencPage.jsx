import { ReferencLeftBox } from '../../components/ReferencLeftBox/ReferencLeftBox'
import { ReferencMain } from '../../components/ReferencMain/ReferencMain'
import { ReferencRightBox } from '../../components/ReferencRightBox/ReferencRightBox'
import SiteFooter from '../../components/SiteFooter/SiteFooter'
import './referencPage.css'

export const ReferencPage = () => {
    return (
        <div className="referenc-container">
            <div className="referenc-left-box"><ReferencLeftBox/></div>
                       <div className="referenc-box">
                        <ReferencMain/>
                        <SiteFooter/>
                       </div>
            <div className="referenc-right-box"><ReferencRightBox/></div> 
        </div>
    )
}
