import Image from 'next/image';

interface ArticlePhotoProps {
    src: string;
}

const ArticlePhoto: React.FC<ArticlePhotoProps> = ({ src }) => {
    return (
        <div className="relative w-full h-[200px] md:h-[250px]">

        <Image
            src={src}
            alt="Article main photo"
            fill
            priority={true}
            quality={75}
            className="object-cover "
        />
        </div>
    );
};

export default ArticlePhoto;