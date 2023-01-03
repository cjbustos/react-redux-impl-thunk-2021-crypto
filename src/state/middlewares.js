//El middleware se arma por composición
export const logger1 = store => next => action => {
    console.warn('MIDDLEWARE Logger1', 'Action: ', action, new Date().toLocaleString())
    next(action)
}

export const logger2 = store => next => action => {
    console.warn('MIDDLEWARE Logger2', 'Store: ', store, new Date().toLocaleString())
    next(action)
}