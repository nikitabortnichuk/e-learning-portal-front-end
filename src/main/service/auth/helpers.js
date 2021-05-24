
function authHeader() {
    let user = JSON.parse(localStorage.getItem('user'));

    if (user && user.token) {
        return { 'Authorization': 'Bearer_' + user.token };
    } else {
        return {};
    }
}

export { authHeader };