import * as React from 'react';
import AddressSearchContainer from './AddressSearchContainer';
import AddressSearchHeader from './AddressSearchHeader';
import AddressSearchForm from './AddressSearchForm';

import { AddressRequester } from '../api'
const addressRequester = new AddressRequester()

export default function AddressSearch() {
    const [isFinding, setIsFinding] = React.useState(false);
    const [address, setAddress] = React.useState(null);

    async function searchAddress(cep) {
        setIsFinding(true)
        const foundAddress = await addressRequester.findAddress(cep)
        setIsFinding(false)
        console.log(foundAddress)
    }

    return (
        <AddressSearchContainer>
            <AddressSearchHeader />
            <AddressSearchForm isFinding={isFinding} searchAddress={searchAddress} />
        </AddressSearchContainer>
);
}
