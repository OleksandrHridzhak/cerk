import Image from 'next/image';

interface ArticlePhotoProps {
    src: string;
}

const ArticlePhoto: React.FC<ArticlePhotoProps> = ({ src }) => {
    return (
        <Image
            src={src}
            alt="Article"
            width={1920}
            height={1080}
            className="object-cover w-full h-[200px] md:h-[250px] "
        />
    );
};

export default ArticlePhoto;