import Image from 'next/image';

const ArticlePhoto: React.FC = () => {
    return (
        <Image
            src="/ex.jpg"
            alt="Article"
            width={1920}
            height={1080}
            className="object-cover w-full h-[200px] md:h-[250px] "
        />
    );
};

export default ArticlePhoto;