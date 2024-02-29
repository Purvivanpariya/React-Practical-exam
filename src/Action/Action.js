export const ADD_USER = (data) => {
    return {
        type : 'addusers',
        payload : data
    }
}


export const VIEW_USER = () => {
    return {
        type : 'viewusers'
    }
}

export const DELETE_USER = (id) => {
    return {
        type : 'deleteusers',
        payload : id
    }
}

export const EDIT_USER = (id) => {
    return {
        type : 'editusers',
        payload : id
    }
}
