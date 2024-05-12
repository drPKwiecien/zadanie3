import React from 'react';
import { useRouter } from 'next/router';
import { Inter } from 'next/font/google';
import ImageCarousel2 from '../../../components/ImageCarousel2';
import SVP from '../../../components/SimpleVideoPlayer';
import ReactMarkdown from 'react-markdown';

import { getPostContent, getAllPostSlugs } from '../../../lib/posts';

const inter = Inter({ subsets: ['latin'] });

const Post = ({ postData }) => {
  const { isFallback } = useRouter();

  if (isFallback) {
    return <div>Loading...</div>;
  }



  const renderTextPart = (text) => {
    return text ? (
      <div className="text-left p-4 flex-grow flex-basis-3/4">
        <ReactMarkdown className="text-black">{text}</ReactMarkdown>
      </div>
    ) : null;
  };



  return (
    <main className={`${inter.className}`}>
      <div className="flex flex-col items-center justify-center w-full">
        <div className="text-left p-8 flex-grow flex-basis-3/4">
          <p className="font-bold text-black font-sans ">{postData.textPart1}</p>
        </div>
        <div>
          <ImageCarousel2 images={postData.images} />
        </div>
        {renderTextPart(postData.textPart2)}
        {renderTextPart(postData.textPart3)}
        {renderTextPart(postData.textPart4)}
        {renderTextPart(postData.textPart5)}
        {renderTextPart(postData.textPart6)}
        {renderTextPart(postData.textPart7)}
        {renderTextPart(postData.textPart8)}
        {renderTextPart(postData.textPart9)}
        {renderTextPart(postData.textPart10)}
        {renderTextPart(postData.textPart11)}
        {renderTextPart(postData.textPart12)}
        {renderTextPart(postData.textPart13)}
        {renderTextPart(postData.textPart14)}
        <div>
          <SVP images={postData.images} />
        </div>
 
      </div>
    </main>
  );
};

export async function getStaticPaths() {
  // Get paths for 'track' and 'race'
  const trackSlugs = await getAllPostSlugs('track');
  const raceSlugs = await getAllPostSlugs('race');

  // Combine paths from both post types
  const paths = [
    ...trackSlugs.map(slug => ({ params: { type: 'tracks', post: slug.toString() } })),
    ...raceSlugs.map(slug => ({ params: { type: 'races', post: slug.toString() } }))
  ];

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const { post, type } = params;

  // Fetch post data based on the type and slug
  const postData = await getPostContent(post, type);

  return {
    props: {
      postData,
    },
    revalidate: 60, // In seconds
  };
}

export default Post;
