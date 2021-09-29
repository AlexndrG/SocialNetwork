export const required = (value: any) => {
    // return NO error
    if (value) return undefined

    // return Error message
    return 'Field is required field!'
}

/*
export const maxLength30 = (value: any) => {
    // return Error message
    if (value.length > 30) return 'Max length is 30 symbols'
    // if (value && value.length > 30 ) return 'Max length is 30 symbols'

    // return NO error
    return undefined
}
*/

export const maxLengthCreator = (maxLength: number) => {
    return (value: any) => {
        if (value.length > maxLength) return `Max length is ${maxLength} symbols`

        return undefined
    }
}
