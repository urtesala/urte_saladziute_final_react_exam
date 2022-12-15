import AddShopForm from '../../components/forms/AddShopForm';
import { Card, Section } from '../../components/styled/StyledComponents';

function AddShop(props) {
  return (
    <Section>
      <Card>
      <h1>ADD A SHOP</h1>
        <AddShopForm />
      </Card>
    </Section>
  );
}
export default AddShop;
