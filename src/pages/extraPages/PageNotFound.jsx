import { Section, StyledLink } from "../../components/styled/StyledComponents";

function PageNotFound(props) {
  return (
      <Section>
        <h1>404 PAGE NOT FOUND</h1>
        <h2>
          It seems that the page you are looking for does not exist.. You can
          find Home Page <StyledLink to={'/'}>HERE</StyledLink>
        </h2>
      </Section>

  );
}
export default PageNotFound;
