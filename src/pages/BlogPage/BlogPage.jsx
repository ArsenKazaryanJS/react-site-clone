import { BlogAllRelease } from "../../components/BlogAllRelease/BlogAllRelease"
import { BlogCards } from "../../components/BlogCards/BlogCards"
import { BlogHeader } from "../../components/BlogHeader/BlogHeader"
import SiteFooter from "../../components/SiteFooter/SiteFooter"
import './blogPage.css'

export const BlogPage = () => {
    return (
        <div className="page-container">
            <div className="blog-box">
            <BlogHeader/>
            <BlogCards/>
            <BlogAllRelease/>
            <SiteFooter/>
            </div>

        </div>
    )
}
