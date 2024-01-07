interface CardProps {
  title: string
  image: string
  slug: string
}
import { Link } from 'react-router-dom'
const CardBlog = ({ title, image, slug }: CardProps) => {
  return (
    <article>
      <h3>{title}</h3>
      <picture>
        <img src={image} />
      </picture>
      <Link to={`/blog/${slug}`} unstable_viewTransition>
        Ver Más
      </Link>
    </article>
  )
}

export default CardBlog
