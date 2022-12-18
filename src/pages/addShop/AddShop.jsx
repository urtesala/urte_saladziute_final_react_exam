import { Redirect, useHistory } from 'react-router-dom';
import AddShopForm from '../../components/forms/AddShopForm';
import { Card, Section } from '../../components/styled/StyledComponents';
import { fireObjToArr, getData, sendRequest } from '../../helpers';
import useFetch from '../../hooks/useFetch';
import { useAuthCtx } from '../../store/AuthContext';

function AddShop(props) {
  const history = useHistory();
  const { uid, token } = useAuthCtx();
  const handleNewShop = async (formValues) => {
    //console.log('formValues ===', formValues);

    const url = `${import.meta.env.VITE_REAL_DATABASE}/shops/shopList.json`;
    //console.log('url ===', url);
    const [ats, err] = await sendRequest(formValues, url);
    history.push('/shops');
  };

  return (
    <Section>
      <Card>
        <h1>ADD A SHOP</h1>
        <AddShopForm onNewShop={handleNewShop} />
      </Card>
    </Section>
  );
}
export default AddShop;
