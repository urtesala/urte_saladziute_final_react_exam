import { useState } from 'react';
import { Section, StyledLink } from '../../components/styled/StyledComponents';
import { fireObjToArr } from '../../helpers';
import useFetch from '../../hooks/useFetch';
import { Grid, LiEl, ShopName } from './styledShops';

function Shops(props) {
  const [loading, setLoading] = useState(false);

  const url = `${import.meta.env.VITE_REAL_DATABASE}/shops/shopList.json`;

  const [dataFromFireB, setDataFromFireB] = useFetch(url, {});

  const dataArr = fireObjToArr(dataFromFireB);

  return (
    <Section>
      <h1>List of shops</h1>
      <Grid>
        {dataArr.length === 0 ? (
          <h2>
            It seems there are no shops yet... to add one please go to{' '}
            <StyledLink>ADD SHOP</StyledLink>
          </h2>
        ) : (
          dataArr.map((pObj) => (
            <LiEl>
              <ShopName>{pObj.shopName}</ShopName>
              <img src={pObj.image} alt={pObj.shopName} />
              <h3>Shop is located in {pObj.town}</h3>
              <h3>Shop opened in {pObj.startYear}</h3>
              <p>{pObj.description}</p>
            </LiEl>
          ))
        )}
      </Grid>
    </Section>
  );
}
export default Shops;
