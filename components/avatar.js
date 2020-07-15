export default function Avatar({ name, picture }) {
  return (
    <div className="flex items-center">
      <img
        src={`${picture.url}?w=128&h=128&fit=thumb&f=face`}
        className="w-12 h-12 rounded-full mr-4"
        alt={name}
      />
      <div className="leading-tight">
        <div className="text-xl font-normal mb-0">{name}</div>
        <div className="text-sm italic font-light">Beat Reporter</div>
      </div>
    </div>
  )
}
