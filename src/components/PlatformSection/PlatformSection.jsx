import { Device } from '../Icons/Icons'
import { TrueToWebBlock } from '../TrueToWebBlock/TrueToWebBlock'
import { TrulyNativeBlock } from '../TrulyNativeBlock/TrulyNativeBlock'
import './platformsection.css'

export const PlatformSection = () => {
   
    return (
        <section className='platform_section'>
               <div className='h2div'>
            <h2>Use the best from every platform</h2>
            </div>
            <p className='pdiv'>People love web and native apps for different reasons. React lets you build both web apps and native apps using the same skills. It leans upon each platform’s unique strengths to let your interfaces feel just right on every platform.</p>
            <div className='trulynative_and_truetoweb_box'>
           <TrueToWebBlock/>     
           <TrulyNativeBlock/>
           </div>
           <div className="text_and_button">
           <p>With React, you can be a web and a native developer. Your team can ship to many platforms without sacrificing the user experience. Your organization can bridge the platform silos, and form teams that own entire features end-to-end.</p>
            <div className="button-block">
            <button className="hover-button">
           <Device/>
            <span className="text">Build for native platforms</span>
            <svg className='arrow' xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"/>
                <polyline points="12 5 19 12 12 19"/>
              </svg>
          </button>
            </div>
           
           </div>
        </section>
    )
}
