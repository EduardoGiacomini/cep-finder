import {H1, Paragraph1} from 'baseui/typography';

export default function AddressSearchHeader() {
    return (
        <header>
            <H1 marginBottom="scale100">
                Cep Finder
            </H1>
            <Paragraph1 marginTop="0" marginBottom="scale1000" color="primary500">
                Pesquise por endereços usando o formulários a seguir.
            </Paragraph1>
        </header>
    );
}
