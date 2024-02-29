import { useEffect } from 'react';

import useGetRecipientList from 'hooks/useGetRecipientList';

function HomePage() {
  // return <div />;
  const { data, loading } = useGetRecipientList();

  useEffect(() => {
    if (!loading) {
      console.log(data);
    }
  }, [loading]);

  return <div />;
}

export default HomePage;
