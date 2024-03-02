import { useNavigate } from 'react-router-dom';

import PlusButton from 'components/PlusButton/PlusButton';

function HomePage() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/post/3058/edit');
  };

  return (
    <div>
      <PlusButton onClick={handleClick} />
    </div>
  );
}

export default HomePage;
