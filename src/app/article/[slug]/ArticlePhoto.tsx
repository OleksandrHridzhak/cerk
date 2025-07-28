import Image from 'next/image';

interface ArticlePhotoProps {
    src: string;
}

const ArticlePhoto: React.FC<ArticlePhotoProps> = ({ src }) => {
    return (
        <Image
            src={src}
            alt="Article main photo"
            width={1920}
            height={1080}
            priority={false}
            quality={75}
            className="object-cover w-full h-[200px] md:h-[250px] "
        />
    );
};

export default ArticlePhoto;