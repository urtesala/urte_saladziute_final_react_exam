import { Section, StyledLink } from '../../components/styled/StyledComponents';
import { fireObjToArr } from '../../helpers';
import useFetch from '../../hooks/useFetch';
import { Grid, LiEl, StyledShop } from './styledShops';

function Shops(props) {
  const url = `${import.meta.env.VITE_REAL_DATABASE}/shops/shopList.json`;

  const [dataFromFireB, setDataFromFireB] = useFetch(url, {});

  const dataArr = fireObjToArr(dataFromFireB);

  return (
    <StyledShop>
      <h1>List of shops</h1>

      {dataArr.length === 0 ? (
        <h2>
          It seems there are no shops yet... to add one please go to{' '}
          <StyledLink to={'/add-shop'}>ADD SHOP</StyledLink>
        </h2>
      ) : (
        <Grid>
          {dataArr.map((pObj) => (
            <LiEl key={pObj.id}>
              <h2>{pObj.shopName}</h2>
              <img src={pObj.image} alt={pObj.shopName} />
              <h3>Shop is located in {pObj.shopTown}</h3>
              <h3>Shop opened in {pObj.startYear}</h3>
              <p>{pObj.description}</p>
            </LiEl>
          ))}
        </Grid>
      )}
    </StyledShop>
  );
}
export default Shops;
