const jwt = require('jsonwebtoken');

const getToken = (payload) => {
    return jwt.sign({
        data: payload
    }, 'SECRET', { expiresIn: 83600 });
}

const getTokenData = (token) => {
    let data = null;
    jwt.verify(token, 'SECRET', (err, decoded) => {
        if(err) {
            console.log(err);
        } else {
            data = decoded;
        }
    });

    return data;
}

module.exports = {
    getToken,
    getTokenData
}

