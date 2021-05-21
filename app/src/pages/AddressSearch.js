import * as React from 'react';
import AddressSearchContainer from './AddressSearchContainer';
import AddressSearchHeader from './AddressSearchHeader';
import AddressSearchForm from './AddressSearchForm';
import AddressSearchCard from './AddressSearchCard';
import AddressSearchErrorMessage from './AddressSearchErrorMessage';

import { AddressRequester } from '../api';
import { DefaultErrorHandler } from '../errorHandler';

const addressRequester = new AddressRequester();
const errorHandler = new DefaultErrorHandler();

export default function AddressSearch() {
    const [address, setAddress] = React.useState(null);
    const [isFinding, setIsFinding] = React.useState(false);
    const [hasError, setHasError] = React.useState(false);
    const [errorMessage, setErrorMessage] = React.useState('');

    async function searchAddress(cep) {
        try {
            hideErrorMessage();
            setAddress(null);
            setIsFinding(true);
            const foundAddress = await addressRequester.findAddress(cep);
            setAddress(foundAddress);
        } catch (error) {
            showErrorMessage(error)
        } finally {
            setIsFinding(false);
        }
    }

    function hideErrorMessage() {
        setHasError(false);
        setErrorMessage('');
    }

    function showErrorMessage(error) {
        setHasError(true);
        setErrorMessage(errorHandler.getFormattedMessage(error));
    }

    return (
        <AddressSearchContainer>
            <AddressSearchHeader />
            <AddressSearchForm isFinding={isFinding} searchAddress={searchAddress} />
            {address && <AddressSearchCard address={address} />}
            {hasError && <AddressSearchErrorMessage message={errorMessage} />}
        </AddressSearchContainer>
    );
}
