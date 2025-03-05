import CodeBlock from '../CodeBlock/CodeBlock';
import VideoBlock from '../VideoBlock/VideoBlock';
import './interfaceSection.css'

const InterfaceSection = ({theme}) => {
    const sampleCode = `
    function Video({ video }) {
      return (
        <div>
          <Thumbnail video={video} />
          <a href={video.url}>
            <h3>{video.title}</h3>
            <p>{video.description}</p>
          </a>
          <LikeButton video={video} />
        </div>
      );
    }
    `;
         
    return(
        <section className='interface_section'>
            <div className='h2div'>
            <h2>Create user interfaces from components</h2>
            </div>
            <p className='pdiv'>React lets you build user interfaces out of individual pieces called components. Create your own React components like  <span>Thumbnail</span>, <span>LikeButton</span>, and <span>Video</span>. Then combine them into entire screens, pages, and apps.</p>
            <div className='code_and_video_box'>
            <CodeBlock theme={theme} sampleCode={sampleCode} />
            <VideoBlock/>
           </div>
                <p>Whether you work on your own or with thousands of other developers, using React feels the same. It is designed to let you seamlessly combine components written by independent people, teams, and organizations.</p>
        </section>
    )
}

export default InterfaceSection;