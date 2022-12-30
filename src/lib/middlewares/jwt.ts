import jwt from 'jsonwebtoken';
import { getBase64 } from '@contentpi/lib';

import config from '../../config';
//getting secret key
const { security: { secretKey } } = config;

export const jwtVerify = (accessToken: any, cb: any): void => {
    jwt.verify(accessToken, secretKey, (error: any, accessTokenData: any = {}) => {
        const { data: user } = accessTokenData;
        if (error || !user) return cb(false);

        const userData = getBase64(user);
        return cb(userData)
    });
}

export const getUserData = async (accessToken: any): Promise<any> => {

    const UserPromise = new Promise(res => jwtVerify(accessToken, (user: any) => res(user)));
    const user = await UserPromise;
    return user;
}