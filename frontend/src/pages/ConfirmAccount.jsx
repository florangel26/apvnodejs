import { useParams } from 'react-router-dom';

const ConfirmAccount = () => {
  const { id } = useParams(); 
  return (
    <div>
      <h1>Confirming Account with ID: {id}</h1>
    </div>
  );
};

export default ConfirmAccount;
