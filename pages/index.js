import Layout from '../components/Layout';
import { withRouter } from 'next/router';
import Markdown from 'react-markdown';

export default withRouter(props => {
  return (
    <Layout>
      <h1>{props.router.query.title}</h1>
      <img src="/static/images/4k-wallpaper-alps-cold-2283757.jpg" />
      <div className="markdown">
        <Markdown
          source={`
  This is our blog post.
  Yes. We can have a [link](/link).
  And we can have a title as well.

  ### This is a title

  And here's the content.
      `}
        />
      </div>
      <style jsx global>{`
      img {
        width: 100%;
      }
      .markdown {
        font-family: 'Arial';
      }

      .markdown a {
        text-decoration: none;
        color: blue;
      }

      .markdown a:hover {
        opacity: 0.6;
      }

      .markdown h3 {
        margin: 0;
        padding: 0;
        text-transform: uppercase;
      }
    `}</style>
    </Layout>
  );
});
