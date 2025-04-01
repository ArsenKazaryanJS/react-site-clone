import { LearnLeftBox } from '../../components/LearnLeftBox/LearnLeftBox'
import { LearnMain } from '../../components/LearnMain/LearnMain'
import { LearnRightBox } from '../../components/LearnRightBox/LearnRightBox'
import SiteFooter from '../../components/SiteFooter/SiteFooter'
import './learnPage.css'

export const LearnPage = ({theme}) => {
    return (
        <div className="learn-container">
        <div className="learn-left-box"><LearnLeftBox/></div>
                   <div className="learn-box">
                    <LearnMain theme={theme}/>
                    <SiteFooter/>
                   </div>
        <div className="learn-right-box"><LearnRightBox/></div> 
    </div>
    )
}
