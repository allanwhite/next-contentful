import Link from 'next/link'
//import Avatar from '../components/avatar'
import DateComponent from '../components/date'
//import CoverImage from './cover-image'

export default function PostList({
  title,
  date,
  excerpt,
  slug,
}) {
  return (
    <div>
      <div className="text-sm uppercase tracking-wide mb-0">
        <DateComponent dateString={date} />
      </div>
      <h3 className="text-sm mb-4 leading-snug">
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a className="link" title={excerpt}>{title}</a>
        </Link>
      </h3>
    </div>
  )
}
