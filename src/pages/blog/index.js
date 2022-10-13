import React, { useEffect } from 'react';
import { navigate } from 'gatsby';

import BlogPreviewGrid from '../../components/BlogPreviewGrid';
import Container from '../../components/Container';
import Hero from '../../components/Hero';
import Layout from '../../components/Layout/Layout';
import ThemeLink from '../../components/ThemeLink';
import { generateMockBlogData } from '../../helpers/mock';
import * as styles from './index.module.css';

const BlogPage = (props) => {
  const blogData = generateMockBlogData(6);
  
  useEffect(() => {
   const script =  document.createElement('script');
    script.id = 'engt-bot-script';
    script.innerHTML = `!function(e,t,a){
    var c=e.head||e.getElementsByTagName("head")[0],
    n=e.createElement("script");
    n.async=!0,n.defer=!0,
    n.type="text/javascript",
    n.src=t+"/static/js/widget.js?config="+JSON.stringify(a),c.appendChild(n)
}(document,"https://qa.engati.com",
    {
        bot_key:"7e95499ea0dc425e",
        welcome_msg:true,
        branding_key:"default",
        server:"https://qa.engati.com",
        e:"qa"
    }
);`;
    if(!document.getElementById('engt-bot-script')) {
      document.body.appendChild(script);
    }
    
    
  }, [])

  return (
    <Layout disablePaddingBottom>
      <div className={styles.root}>
        <Hero
          maxWidth={'400px'}
          image={'/blogCover.png'}
          title={`The new standard of Closing`}
          ctaLink={'read story'}
          ctaTo={'/blog/sample'}
          header={'design'}
        />

        <div className={styles.navContainer}>
          <ThemeLink
            onClick={() => navigate('/blog/sample')}
            to={'/blog/sample'}
          >
            All Posts
          </ThemeLink>
          <ThemeLink
            onClick={() => navigate('/blog/sample')}
            to={'/blog/sample'}
          >
            Design
          </ThemeLink>
          <ThemeLink
            onClick={() => navigate('/blog/sample')}
            to={'/blog/sample'}
          >
            Collaboration
          </ThemeLink>
          <ThemeLink
            onClick={() => navigate('/blog/sample')}
            to={'/blog/sample'}
          >
            Interview
          </ThemeLink>
          <ThemeLink
            onClick={() => navigate('/blog/sample')}
            to={'/blog/sample'}
          >
            News
          </ThemeLink>
        </div>

        {/* Blog Grid */}
        <div className={styles.blogsContainer}>
          <Container size={'large'}>
            <BlogPreviewGrid data={blogData} hideReadMoreOnWeb showExcerpt />
          </Container>
        </div>
      </div>
    </Layout>
  );
};

export default BlogPage;
