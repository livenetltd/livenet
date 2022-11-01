import jwt from 'jsonwebtoken';

const getPlans = () => {

    const payload = {
        id: import.meta.env.PUBLIC_CLIENT_ID
    }
    const config = {
        expiresIn: '2 days'
    }
    const token = jwt.sign(payload, import.meta.env.PUBLIC_CLIENT_SECRET, config);

    return {token};
}

export {getPlans};