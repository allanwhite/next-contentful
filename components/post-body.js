import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import markdownStyles from './markdown-styles.module.css'

export default function PostBody({ content }) {
  return (
    <div className="max-w-2xl mx-8">
      
      <div className="bg-gray-200 p-6 my-12">
        <p className="text-lg mb-1">Our news is free on PDXist.</p>
        <p className="text-base font-light mb-3">
          <a className="button button-secondary float-right ml-3 rounded-sm" href="https://support.laist.com/laist?ms=in-article_ask">Donate now</a>
        To make sure you get our coverage: <a className="font-medium text-blue-800" href="https://cloud.connect.scpr.org/laist_subscribe">Sign up for our daily coronavirus newsletter</a>. 
        To support our nonprofit public service journalism: 
        </p>
      </div>

      <div className={markdownStyles['markdown']}>
        {documentToReactComponents(content)}
      </div>
    </div>
  )
}
