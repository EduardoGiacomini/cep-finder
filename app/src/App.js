import {Client as Styletron} from 'styletron-engine-atomic';
import {Provider as StyletronProvider} from 'styletron-react';
import {LightTheme, BaseProvider} from 'baseui';
import AddressSearch from './pages/AddressSearch';

const engine = new Styletron();

export default function App() {
  return (
      <StyletronProvider value={engine}>
        <BaseProvider theme={LightTheme}>
          <AddressSearch />
        </BaseProvider>
      </StyletronProvider>
  );
}
