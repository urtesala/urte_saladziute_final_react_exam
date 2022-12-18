import AddShopForm from '../../components/forms/AddShopForm';
import { Card, Section } from '../../components/styled/StyledComponents';
import { fireObjToArr, getData, sendRequest } from '../../helpers';
import useFetch from '../../hooks/useFetch';
import { useAuthCtx } from '../../store/AuthContext';

const dummyPost = {
  shopName: 'iki',
  shopTown: 'vilnius',
  startYear: '2022',
  description: 'iki iki iki',
  image: 'https://picsum.photos/id/18/600/400',
};

function AddShop(props) {
  const { uid, token } = useAuthCtx();
  const handleNewShop = async (formValues) => {
    console.log('formValues ===', formValues);

    const url = `${import.meta.env.VITE_REAL_DATABASE}/shops/shopList.json`;
    console.log('url ===', url);

    const [ats, err] = await sendRequest(formValues, url);

    console.log('ats ===', ats);
    console.log('err ===', err);
    // redirect to /posts
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
