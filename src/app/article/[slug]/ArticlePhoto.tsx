import Image from 'next/image';

interface ArticlePhotoProps {
    src: string;
    alt: string;
}

const ArticlePhoto: React.FC<ArticlePhotoProps> = ({ src, alt }) => {
    return (
        <div className="relative w-full h-[200px] md:h-[250px]">

        <Image
            src={src}
            alt={alt}
            fill
            priority={true}
            quality={75}
            className="object-cover "
        />
        </div>
    );
};

export default ArticlePhoto;