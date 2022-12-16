import { useHistory } from 'react-router-dom';

export function useRedirect(whereTo) {
  if (!whereTo) return;
  const history = useHistory();

  return () => history.push(whereTo);
}
