import { ChevronRight } from "lucide-react";
import "./communityMain.css";

export const CommunityMain = () => {
  return (
    <main className="communityMain-box">
      <div className="community-next">
        <a href="#">COMMUNITY</a>
        <ChevronRight />
      </div>
      <div className="communityMainHead">
        <h1>React Community</h1>
        <p>
          React has a community of millions of developers. On this page we’ve
          listed some React-related communities that you can be a part of; see
          the other pages in this section for additional online and in-person
          learning materials.
        </p>
      </div>
        <div className="communityContent">
          <h3>Code of Conduct</h3>
          <p>
            Before participating in React’s communities,{" "}
            <span>please read our Code of Conduct.</span> We have adopted the{" "}
            <span>Contributor Covenant</span> and we expect that all community
            members adhere to the guidelines within.
          </p>
        </div>

        <div className="communityContent">
          <h3>Stack Overflow</h3>
          <p>
            Stack Overflow is a popular forum to ask code-level questions or if
            you’re stuck with a specific error. Read through the{" "}
            <span>existing questions</span> tagged with reactjs or{" "}
            <span>ask your own!</span>
          </p>
        </div>

        <div className="communityContent">
          <h3>Popular Discussion Forums </h3>
          <p>
            There are many online forums which are a great place for discussion
            about best practices and application architecture as well as the
            future of React. If you have an answerable code-level question,
            Stack Overflow is usually a better fit.
          </p>
          <p>Each community consists of many thousands of React users.</p>
          <ul>
            <li>DEV’s React community</li>
            <li>Hashnode’s React community</li>
            <li>Reactiflux online chat</li>
            <li>Reddit’s React community</li>
          </ul>
        </div>

        <div className="communityContent">
          <h3>News</h3>
          <p>
            For the latest news about React, <span>follow @reactjs on Twitter</span> and the
            <span>official React blog</span> on this website.
          </p>
        </div>

        <div className="next-conference">
            <div className="react-conference">
                <div className="confernce">
                    <p>NEXT</p>
                    <span>React Conference</span>
                </div>
                <ChevronRight />
            </div>
        </div>
    </main>
  );
};
