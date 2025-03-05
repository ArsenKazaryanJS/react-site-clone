import CodeBlock from '../CodeBlock/CodeBlock';
import VideoBlock from '../VideoBlock/VideoBlock';
import './writecomsection.css'

export const WriteCompSection = ({theme}) => {
    const sampleCode = `
   function VideoList({ videos, emptyHeading }) {
  const count = videos.length;
  let heading = emptyHeading;
  if (count > 0) {
    const noun = count > 1 ? 'Videos' : 'Video';
    heading = count + ' ' + noun;
  }
  return (
    <section>
      <h2>{heading}</h2>
      {videos.map(video =>
        <Video key={video.id} video={video} />
      )}
    </section>
  );
}
    `;
    return (
        <section className='writecomp_section'>
            <div className='h2div'>
            <h2>Write components with code and markup</h2>
            </div>
            <p className='pdiv'>React components are JavaScript functions. Want to show some content conditionally? Use an <span>if</span> statement. Displaying a list? Try array <span>map().</span>  Learning React is learning programming.</p>
            <div className='code_and_video_box'>
            <CodeBlock theme={theme} sampleCode={sampleCode}/>
            <VideoBlock blockQuantity={3}/>
           </div>
                <p>This markup syntax is called JSX. It is a JavaScript syntax extension popularized by React. Putting JSX markup close to related rendering logic makes React components easy to create, maintain, and delete.</p>
        </section>
    )
}
