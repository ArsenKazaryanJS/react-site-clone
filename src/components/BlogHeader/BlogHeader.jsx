import { ChevronRight } from 'lucide-react'
import './blogHeader.css'


export const BlogHeader = () => {
    return (
        <div className='blogHeader'>
            <div className="blog-next">
                <a href="#">BLOG</a>
                <ChevronRight />
            </div>
            <div className="blogHeader-text">
            <h1>React Blog</h1>
                <p>This blog is the official source for the updates from the React team. Anything important, including release notes or deprecation notices, will be posted here first.</p>
                <p>You can also follow the <span>@react.dev</span> account on Bluesky, or <span>@reactjs</span> account on Twitter, but you won’t miss anything essential if you only read this blog.</p>
            </div>
        </div>
    )
}
