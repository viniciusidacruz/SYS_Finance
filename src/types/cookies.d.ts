interface AccountFirebaseProps {
  account: {
    uid: string;
    email: string;
    emailVerified: string;
    isAnonymous: string;
    providerData: [
      {
        providerId: string;
        uid: string;
        displayName: string | null;
        email: string;
        phoneNumber: string;
        photoURL: string | null;
      }
    ];
    stsTokenManager: {
      refreshToken: string;
      accessToken: string;
      expirationTime: numberr;
    };
    createdAt: number;
    lastLoginAt: number;
    apiKey: string;
    appName: string;
  };
}

export default AccountFirebaseProps;
