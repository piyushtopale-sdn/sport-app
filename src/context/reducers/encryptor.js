import createEncryptor from 'redux-persist-transform-encrypt';

const encryptor = createEncryptor({
  secretKey: 'my-super-secret-app-key'
});

export default encryptor;