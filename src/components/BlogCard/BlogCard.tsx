'use client'

import Image from 'next/image'
import Link from 'next/link'

type BlogCardProps = {
  title: string
  date: string
  readingTime: string
  imageUrl: string
  description: string
  href?: string
}

export default function BlogCard({
  title,
  date,
  readingTime,
  imageUrl,
  href,
  description = "A brieewff introduction to the topic, explaining its relevance and importance in the current context. This section should provide a concise overview that captures the reader's interest and sets the stage for the detailed content that follows."
}: BlogCardProps) {


  return (
    <Link href={href ?? '#'} className="max-w-5xl mx-auto w-full rounded-2xl lg:px-8 block">
      <div className="max-w-5xl mx-auto w-full rounded-2xl border border-gray-c p-5 sm:flex sm:items-center gap-4">
      <div className="relative md:mt-0 sm:mr-5 mb-4 sm:mb-0 shrink-0 w-full h-40 sm:w-[180px] sm:h-[180px]">
        <Image
          src={imageUrl}
          alt={`${title} image`}
          fill
          priority
          quality={40}
          className="rounded-xl object-cover"
          sizes="(max-width: 640px) 100vw, 180px"
        />
      </div>
        <div className="md:flex-1 mr-auto flex flex-col gap-2">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-c">{title}</h2>
          <p className="text-gray-c text-sm sm:text-base line-clamp-3 sm:line-clamp-3">
           {description}
          </p>
          <p className="mt-2 text-sm text-gray-500">
            {date} • {readingTime}
          </p>
        </div>
      </div>
    </Link>
  )
}
