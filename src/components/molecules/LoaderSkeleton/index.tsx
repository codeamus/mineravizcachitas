import { LoaderType } from '@/types/Loader'
import ContentLoader from 'react-content-loader'

const LoaderSkeleton = ({ height }: LoaderType) => {
  return (
    <ContentLoader
      speed={1.5}
      backgroundColor='#f3f3f3'
      foregroundColor='#ecebeb'
      style={{ width: '100%', height: `${height}px` }}
    >
      <rect width='100%' height={height} />
    </ContentLoader>
  )
}

export default LoaderSkeleton
