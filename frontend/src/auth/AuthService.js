import { PublicClientApplication, InteractionRequiredAuthError } from 'react-native-msal';
import { msalConfig } from './authConfig';

class AuthService {
    constructor() {
        this.msalInstance = new PublicClientApplication(msalConfig);
    }

    async login() {
        try {
            const result = await this.msalInstance.acquireToken({
                scopes: ['User.Read'],
                prompt: 'select_account'
            });
            return result;
        } catch (error) {
            console.error('Login error:', error);
            throw error;
        }
    }

    async logout() {
        try {
            await this.msalInstance.logout();
        } catch (error) {
            console.error('Logout error:', error);
            throw error;
        }
    }

    async getAccessToken() {
        try {
            const account = await this.msalInstance.getActiveAccount();
            if (!account) {
                throw new Error('No active account');
            }

            const result = await this.msalInstance.acquireTokenSilent({
                scopes: ['User.Read'],
                account: account
            });
            return result.accessToken;
        } catch (error) {
            if (error instanceof InteractionRequiredAuthError) {
                return this.login();
            }
            throw error;
        }
    }
}

export default new AuthService();
