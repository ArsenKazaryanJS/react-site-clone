import './communitysection.css'
import logo_light from '../../assets/logo_light.svg'
import logo_dark from '../../assets/logo_dark.svg'
import { CommunitySlider } from '../CommunitySlider/CommunitySlider'

export const CommunitySection = ({theme}) => {
    return (
        <div className='community_section_container'>
            <div className="community_top_text_cont">
                <div className='community_title'>
                <h2 >Join a community of millions</h2>
                </div>
                <p className="community_text">You’re not alone. Two million developers from all over the world visit the React docs every month. React is something that people and teams can agree on.</p>
            </div>
            <div className="slider_container">
               <CommunitySlider/>
            </div>
            <div className="community_info_box">
            <p className="community_text">This is why React is more than a library, an architecture, or even an ecosystem. React is a community. It’s a place where you can ask for help, find opportunities, and meet new friends. You will meet both developers and designers, beginners and experts, researchers and artists, teachers and students. Our backgrounds may be very different, but React lets us all create user interfaces together.</p>
            </div>
            <div className="welcom_react_community_content">
            <img className='logo' src={theme == 'dark' ? logo_dark : logo_light} alt="" />
            <h2>Welcome to the React community</h2>
            <a href="#" className="getstartedBtn">Get Started</a>
            </div>
        </div>
    )
}
