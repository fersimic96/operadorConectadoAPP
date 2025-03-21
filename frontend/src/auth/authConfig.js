export const msalConfig = {
    auth: {
        clientId: 'b9e73a13-aa28-4cb4-af9b-d8afd9f36130', // Azure AD client ID
        authority: 'https://login.microsoftonline.com/f6ad868a-15ca-47ed-be84-0dbe602d2198', // Azure AD tenant ID
        redirectUri: 'msauth://com.operadorconectado/callback',
    },
    cache: {
        cacheLocation: "localStorage",
        storeAuthStateInCookie: false
    }
};
