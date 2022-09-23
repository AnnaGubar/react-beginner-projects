import { Container } from '../components/Container';
import { Block } from '../components/Block';
import '../styles/currency-converter.scss';

export function CurrencyConverterPage() {

  return (
    <Container>

    <div className="CurrencyConverterPage">
      <Block value={0} currency="RUB" onChangeCurrency={(cur) => console.log(cur)} />
      <Block value={0} currency="USD" />
    </div></Container>
  );
}
