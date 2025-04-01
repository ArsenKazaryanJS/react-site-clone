import './blogAllRelease.css'


export const BlogAllRelease = () => {
    return (
        <div className='allRelease-box'>
            <div className="allRelease-notes">
                <h2>All release notes </h2>
                <p>Not every React release deserves its own blog post, but you can find a detailed changelog for every release in the <span>CHANGELOG.md</span> file in the React repository, as well as on the <span>Releases</span> page.</p>
            </div>
            <div className="allRelease-posts">
                <h2>Older posts </h2>
                <p>See the <span>older posts.</span></p>
            </div>

        </div>
    )
}
