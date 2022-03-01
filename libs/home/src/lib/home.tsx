import './home.module.scss';
import { Welcome } from './welcome/welcome'

/* eslint-disable-next-line */
export interface HomeProps {}

export function Home(props: HomeProps) {
  return (
    <Welcome />
  );
}

export default Home;
