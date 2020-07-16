import PostList from '../components/post-list-item'

export default function BestList({ posts }) {
  return (
    <aside className="mt-64">
      <h2 className="mb-8 text-2xl font-bold tracking-widest uppercase leading-tight">
        Best Of PDX<span className="font-light">ist</span>
      </h2>
      <div className="">
        {posts.map((post) => (
          <PostList
            key={post.slug}
            title={post.title}
            date={post.date}
            slug={post.slug}
            excerpt={post.excerpt}
          />
        ))}
      </div>
    </aside>
  )
}
