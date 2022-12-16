import { Card, Section } from '../../components/styled/StyledComponents';
import { useAuthCtx } from '../../store/AuthContext';
import { Grid, LiEl } from './styledShops';

function Shops(props) {

    const { token } = useAuthCtx();


  return (
    <Section>
      <h1>List of shops</h1>
      <Grid>
        <LiEl>vienas</LiEl>
        <LiEl>vienas</LiEl>
        <LiEl>vienas</LiEl>
      </Grid>
    </Section>
  );
}
export default Shops;
