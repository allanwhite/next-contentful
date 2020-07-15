import Avatar from '../components/avatar'
import DateComponent from '../components/date'
import CoverImage from '../components/cover-image'
import PostTitle from '../components/post-title'

export default function PostHeader({ title, coverImage, date, author }) {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="text-center md:text-left mb-6 text-lg font-bold">
        <DateComponent dateString={date} />
      </div>
      <div className="hidden md:block md:mb-12">
        {author && <Avatar name={author.name} picture={author.picture} />}
      </div>
      <div className="mb-8 md:mb-16 -mx-5 sm:mx-0">
        <CoverImage title={title} url={coverImage.url} />
      </div>
      <div className="max-w-2xl mx-auto">
        <div className="block md:hidden mb-6">
          {author && <Avatar name={author.name} picture={author.picture} />}
        </div>
      </div>
      <div className="max-w-2xl mx-auto bg-gray-200 p-6">
        <p className="text-lg mb-1">Our news is free on PDXist.</p>
        <p className="text-base font-light mb-3">
          <a className="button button-secondary float-right ml-3 rounded-sm" href="https://support.laist.com/laist?ms=in-article_ask">Donate now</a>
        To make sure you get our coverage: <a className="font-medium text-blue-800" href="https://cloud.connect.scpr.org/laist_subscribe">Sign up for our daily coronavirus newsletter</a>. 
        To support our nonprofit public service journalism: 
        </p>
      </div>
    </>
  )
}
