import {Card} from 'baseui/card';
import {LabelLarge} from 'baseui/typography';

export default function AddressSearchCard({address}) {

    function getFormattedAddress() {
        let formattedAddress = `${address.city} - ${address.state}, ${address.cep}.`
        if (address.street) {
            formattedAddress = `${formattedAddress} ${address.street}, ${address.neighborhood}.`
        }
        return formattedAddress
    }

    return (
        <Card className="full-width margin-top">
            <LabelLarge>
                Endereço:
            </LabelLarge>
            <p>
                {getFormattedAddress(address)}
            </p>
        </Card>
    );
}
