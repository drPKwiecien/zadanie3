import { useRouter } from 'next/router';
import { Inter } from 'next/font/google';
import ImageCarousel2 from '../../components/ImageCarousel2';
import { getPostContent, getAllPostSlugs } from '../../lib/posts';

const inter = Inter({ subsets: ['latin'] });

const Post = ({ postData }) => {
  const { isFallback } = useRouter();

  if (isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <main className={`${inter.className}`}>
      <div className="flex flex-col items-center justify-center w-full">
        <div className="text-left p-8 flex-grow flex-basis-3/4">
          <p className="text-black">{postData.textPart1}</p>
        </div>
        <div>
          <ImageCarousel2 images={postData.images} />
        </div>
        <div className="text-left p-8 flex-grow flex-basis-3/4">
          <p className="text-black">{postData.textPart2}</p>
        </div>
      </div>
    </main>
  );
};

export async function getStaticPaths() {
  const paths = getAllPostSlugs();
  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostContent(params.post);
  return {
    props: {
      postData,
    },
    revalidate: 60, // In seconds
  };
}

export default Post;
