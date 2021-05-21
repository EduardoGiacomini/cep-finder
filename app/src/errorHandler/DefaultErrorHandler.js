const ERRORS = {
    'INVALID_CEP': 'Ops, o CEP informado é inválido. Por favor, forneça um CEP válido',
    'CEP_NOT_FOUND': 'Ops, o CEP informado não foi encontrado. Por favor, tente novamente.',
    'DEFAULT_ERROR': 'Ops, ocorreu um erro inesperado. Por favor, tente novamente.'
}

export default class DefaultErrorHandler {
    getFormattedMessage(error) {
        if (error && error.response && error.response.data && error.response.data.error && ERRORS[error.response.data.error]) {
            return ERRORS[error.response.data.error]
        }
        return ERRORS.DEFAULT_ERROR
    }
}
