import { Text, ArrowDown } from "../Icons/Icons";
import "./upgradesection.css";

export const UpgradeSection = () => {
  return (
    <section className="upgrade_section_container">
      <div className="upgrade_content_container">
        <div className="upgrade_left_content">
          <h2 className="ugrade_content_h2">
            Upgrade when the future is ready
          </h2>
          <p className="upgrade_text">
            React approaches changes with care. Every React commit is tested on
            business-critical surfaces with over a billion users. Over 100,000
            React components at Meta help validate every migration strategy.
          </p>
          <p className="upgrade_text">
            The React team is always researching how to improve React. Some
            research takes years to pay off. React has a high bar for taking a
            research idea into production. Only proven approaches become a part
            of React.
          </p>
          <button className="hover-button">
            <Text />
            <span className="text">Build for native platforms</span>
            <svg
              className="arrow"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </button>
        </div>
        <div className="upgrade_right_content">
          <div className="latest_news">
            <ArrowDown className="arrow_icon" />
            <span>Latest React News</span>
          </div>
          <div className="react_news_box">
            <div className="react_news_card">
              <h2 className="news_h2">React 19</h2>
              <div className="news_date">
                <Text />
                <span>December 05, 2024</span>
              </div>
            </div>
            <div className="react_news_card">
              <h2 className="news_h2">
                React Compiler Beta Release and Roadmap
              </h2>
              <div className="news_date">
                <Text />
                <span>October 21, 2024</span>
              </div>
            </div>
            <div className="react_news_card">
              <h2 className="news_h2">React 19</h2>
              <div className="news_date">
                <Text />
                <span>May 22, 2024</span>
              </div>
            </div>
            <div className="react_news_card">
              <h2 className="news_h2">React 19 RC</h2>
              <div className="news_date">
                <Text />
                <span>April 25, 2024</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
