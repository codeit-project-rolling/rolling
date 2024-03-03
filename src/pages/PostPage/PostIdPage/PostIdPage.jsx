import { useParams } from 'react-router-dom';

import HeaderLayout from 'components/Header/HeaderLayout';

function PostIdPage() {
  const { id } = useParams();
  return <HeaderLayout postId={id} />;
}

export default PostIdPage;
