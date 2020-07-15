import cn from 'classnames'
import Link from 'next/link'

export default function CoverImage({ title, url, slug, description }) {
  const image = (
    <figure>
    <img
      src={`${url}?w=1200&h=600&fit=thumb&fm=webp`}
      alt={`Cover Image for ${title}`}
      className={cn('shadow-small', {
        'hover:shadow-medium transition-shadow duration-200': slug,
      })}
    />
    {description ? (
      <figcaption class="italic font-serif py-3">
        {description}
      </figcaption>
    ) : null
    }
    </figure>
  )
  return (
    <div className="-mx-5 sm:mx-0">
      {slug ? (
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a aria-label={title}>{image}</a>
        </Link>
      ) : (
        image
      )}
    </div>
  )
}
