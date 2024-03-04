import { useNavigate } from 'react-router-dom';

import Button from 'components/Button/Button';

function ListPage() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/post/4178');
  };
  return (
    <Button onClick={handleClick} buttonType="primary56">
      <p>버튼</p>
    </Button>
  );
}

export default ListPage;
