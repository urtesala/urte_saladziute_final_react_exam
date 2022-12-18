import { Card, Section } from '../../components/styled/StyledComponents';
import { fireObjToArr } from '../../helpers';
import useFetch from '../../hooks/useFetch';
import { useAuthCtx } from '../../store/AuthContext';
import { Grid, LiEl, ShopName } from './styledShops';

function Shops(props) {
  const { token } = useAuthCtx();
  const url = `${import.meta.env.VITE_REAL_DATABASE}/shops/shopList.json`;

  const [dataFromFireB, setDataFromFireB] = useFetch(url, {});

  const dataArr = fireObjToArr(dataFromFireB);

  console.log('dataArr ===', dataArr);

  return (
    <Section>
      <h1>List of shops</h1>
      <Grid>
        {dataArr.map((pObj) => (
          <LiEl>
            <ShopName>{pObj.shopName}</ShopName>
            <img src={pObj.image} alt={pObj.shopName} />
            <h3>Town: {pObj.town}</h3>
            <h3>Start year: {pObj.startYear}</h3>
            <p>{pObj.description}</p>
          </LiEl>
        ))}
      </Grid>
    </Section>
  );
}
export default Shops;
