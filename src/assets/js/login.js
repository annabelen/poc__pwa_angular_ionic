
function onIdentification(operation) {
    if ( operation && operation.jwt) {
        if( sessionStorage.getItem('_token') === null ) {
            sessionStorage.setItem('_token',operation.jwt)
        } else {
            if ( window.location.pathname === '/' || window.location.pathname === '/login' ) {
                window.location.href = `${window.location.origin}/identificacion`
            }
        }
    }
}