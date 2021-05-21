import * as React from 'react';
import {FormControl} from 'baseui/form-control';
import {MaskedInput} from 'baseui/input';
import {Button} from 'baseui/button';

import { CepUtil } from '../utils';

export default function AddressSearchForm({isFinding, searchAddress}) {
    const [cep, setCep] = React.useState('');
    const [cepError, setCepError] = React.useState(false);
    const [cepErrorMessage, setCepErrorMessage] = React.useState('');

    function onSubmitForm(event) {
        event.preventDefault();

        if (!isFormValid()) {
            setErrorMessageOnUi()
            return
        }

        clearErrorMessageOnUi()
        const cepWithoutSpecialCharacters = CepUtil.removeSpecialCharacters(cep)
        searchAddress(cepWithoutSpecialCharacters)
    }

    function isFormValid() {
        const cepWithoutSpecialCharacters = CepUtil.removeSpecialCharacters(cep)
        return CepUtil.isValid(cepWithoutSpecialCharacters);
    }

    function setErrorMessageOnUi() {
        setCepError(true)
        setCepErrorMessage('Por favor, forneça um CEP válido')
    }

    function clearErrorMessageOnUi() {
        setCepError(false)
        setCepErrorMessage('')
    }

    return (
        <form onSubmit={onSubmitForm}>
            <FormControl
                marginBottom="scale100"
                label="CEP"
                caption="Apenas caracteres numéricos"
                error={cepErrorMessage}>
                <MaskedInput
                    required
                    clearable
                    placeholder="Exemplo: 79760-000" mask="99999-999"
                    value={cep}
                    error={cepError}
                    onChange={event => setCep(event.currentTarget.value)}/>
            </FormControl>
            <Button className="full-width" type="submit" isLoading={isFinding}>
                Pesquisar
            </Button>
        </form>
    );
}
