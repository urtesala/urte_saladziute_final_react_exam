import AddShopForm from '../../components/forms/AddShopForm';
import { Card, Section } from '../../components/styled/StyledComponents';

function AddShop(props) {
  
  const handleNewShop = async ()=>{

    const url = `${import.meta.env.VITE_REAL_DATABASE}/shopsList/shops.json`
  }

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
