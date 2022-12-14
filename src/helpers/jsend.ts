
export const jsend = (result, status = 'success') => {
    return {
        status,
        data: result
    }
}

// module.exports = jsend;