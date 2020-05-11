export function apiFailure(type, msg, code) {
    return {
        type: type,
        message: msg,
        level: "error",
        code: code
    }
}

export function apiProcessing(type) {
    return {
        type: type
    }
}

export function apiSuccess(type, data, msg) {
    return {
        type: type,
        data: data,
        message: msg
    }
}

export function head(type, params) {
    return {
        type: type,
        parameters: params
    }
}

export function get(type, params) {
    return {
        type: type,
        parameters: params
    }
}

export function post(type, data, params) {
    return {
        type: type,
        data: data,
        parameters: params
    }
}
