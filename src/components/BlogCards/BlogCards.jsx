import "./BlogCards.css";

export const BlogCards = () => {
  const updates = [
    {
      title: "Sunsetting Create React App",
      date: "February 13, 2025",
      summary:
        "Today, we're deprecating Create React App for new apps, and encouraging existing apps to migrate to a framework, or to migrate to a build tool like Vite, Parcel, or RSBuild. We're also providing docs for when a framework isn't a good fit for your project...",
    },
    {
      title: "React v19",
      date: "December 5, 2024",
      summary:
        "In the React 19 Upgrade Guide, we shared step-by-step instructions for upgrading your app to React 19. In this post, we'll give an overview of the new features in React 19, and how you can adopt them...",
    },
    {
      title: "React Compiler Beta Release",
      date: "October 21, 2024",
      summary:
        "We announced an experimental release of React Compiler at React Conf 2024. We've made a lot of progress since then, and in this post we want to share what's next for React Compiler...",
    },
    {
      title: "React Conf 2024 Recap",
      date: "May 22, 2024",
      summary:
        "Last week we hosted React Conf 2024, a two-day conference in Henderson, Nevada where 700+ attendees gathered in-person to discuss the latest in UI engineering. This was our first in-person conference since 2019...",
    },
    {
      title: "React 19 Upgrade Guide",
      date: "April 25, 2024",
      summary:
        "The improvements added to React 19 require some breaking changes, but we've worked to make the upgrade as smooth as possible, and we don't expect the changes to impact most apps. In this post, we will guide you through the steps for upgrading libraries to React 19...",
    },
    {
      title: "React Labs: What We've Been Working On – February 2024",
      date: "February 15, 2024",
      summary:
        "In React Labs posts, we write about projects in active research and development. Since our last update, we've made significant progress on React Compiler, new features, and React 19, and we'd like to share what we learned.",
    },
    {
      title: "React Canaries: Incremental Feature Rollout Outside Meta",
      date: "May 3, 2023",
      summary:
        "Traditionally, new React features used to only be available at Meta first, and land in the open source releases later. We'd like to offer the React community an option to adopt individual new features as soon as their design is close to final...",
    },
    {
      title: "React Labs: What We've Been Working On – March 2023",
      date: "March 22, 2023",
      summary:
        "In React Labs posts, we write about projects in active research and development. Since our last update, we've made significant progress on React Server Components, Asset Loading, Optimizing Compiler, Offscreen Rendering, and Transition Tracing...",
    },
    {
      title: "Introducing react.dev",
      date: "March 16, 2023",
      summary:
        "Today we are thrilled to launch react.dev, the new home for React and its documentation. In this post, we would like to give you a tour of the new site.",
    },
    {
      title: "React Labs: What We've Been Working On – June 2022",
      date: "June 15, 2022",
      summary:
        "React 18 was years in the making, and with it brought valuable lessons for the React team. Its release was the result of many years of research and exploring many paths...",
    },
    {
      title: "React v18.0",
      date: "March 29, 2022",
      summary:
        "React 18 is now available on npm! In our last post, we shared step-by-step instructions for upgrading your app to React 18. In this post, we'll give an overview of what's new in React 18, and what it means for the future...",
    },
    {
      title: "How to Upgrade to React 18",
      date: "March 8, 2022",
      summary:
        "As we shared in the release post, React 18 introduces features powered by our new concurrent renderer, with a gradual adoption strategy for existing applications. In this post, we will guide you through the steps for upgrading to React 18...",
    },
    {
      title: "React Conf 2021 Recap",
      date: "December 17, 2021",
      summary:
        "Last week we hosted our 6th React Conf. In previous years, we've used the React Conf stage to deliver industry changing announcements such as React Native and React Hooks. This year, we shared our multi-platform vision for React...",
    },
    {
      title: "The Plan for React 18",
      date: "June 8, 2021",
      summary:
        "The React team is excited to share a few updates: We've started work on the React 18 release, which will be our next major version. We've created a Working Group to prepare the community for gradual adoption of new features in React 18...",
    },
    {
      title: "Introducing Zero-Bundle-Size React Server Components",
      date: "December 21, 2020",
      summary:
        "2020 has been a long year. As it comes to an end we wanted to share a special Holiday Update on our research into zero-bundle-size React Server Components. To introduce React Server Components, we have prepared a talk and a demo...",
    },
  ];

  return (
    <div className="cards-container">
      {updates.map((item, index) => {
        return (
          <div key={index} className="blogCard">
            <h2>{item.title}</h2>
            <span className="datepan">{item.date}</span>
            <p>{item.summary}</p>
            <a href="#">Read more</a>
          </div>
        );
      })}
    </div>
  );
};
