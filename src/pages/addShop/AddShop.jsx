import AddShopForm from '../../components/forms/AddShopForm';
import { Card, Section } from '../../components/styled/StyledComponents';
import { fireObjToArr, getData, sendRequest } from '../../helpers';
import useFetch from '../../hooks/useFetch';
import { useAuthCtx } from '../../store/AuthContext';

function AddShop(props) {
  const { token } = useAuthCtx();
  // pakeisti url. prideti parametrus kad maytumetik neistrintus postus
  const url = `${
    import.meta.env.VITE_REAL_DB_URL
  }/shops/listOfShops.json`;

  const [dataFromFireB, setDataFromFireB] = useFetch(url, {});

  const dataArr = fireObjToArr(dataFromFireB);

  console.log('dataArr ===', dataArr);
  // console.log('dataFromFireB ===', dataFromFireB);
  // console.log(JSON.stringify(dataFromFireB, null, 2));


    // neturim klaidos

    setDataFromFireB();


  // sukurti ar pernaudoti SinglePost.jsx
  // su juo atvaizuoti postus

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
