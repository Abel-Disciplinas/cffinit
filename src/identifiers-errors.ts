import { IdentifiersType } from 'src/types'
import { getMyErrors } from 'src/store/validator'
import { identifierErrors } from 'src/identifier-errors'

export const identifiersErrors = (identifiers: IdentifiersType) => {
    const myErrors = [
        getMyErrors('', ['identifiers']),
        getMyErrors('/identifiers')
    ]
    const myChildrenErrors = identifiers?.map((_, index) => identifierErrors(index))
    const errors = myChildrenErrors === undefined ? myErrors : [...myErrors, ...myChildrenErrors]
    return {
        hasError: errors.some(result => result.hasError),
        messages: errors.map(result => result.messages.join(', '))
    }
}
