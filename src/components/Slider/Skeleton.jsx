import 'react-loading-skeleton/dist/skeleton.css';
import Skeleton from 'react-loading-skeleton';

// eslint-disable-next-line react/prop-types
function CardSkeleton({ data }) {
  return (
    <div style={{ display: 'flex', width: '100%', margin: '0' }}>
      {Array(data)
        .fill(0)
        .map((item) => (
          <Skeleton
            data={item}
            style={{ width: '27.5rem', height: '26rem', marginLeft: '2rem', borderRadius: '1.6rem', display: 'flex' }}
          />
        ))}
    </div>
  );
}

export default CardSkeleton;
