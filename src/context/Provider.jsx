import AuthProvider from 'context/auth/AuthProvider';

const Provider = ({ children }) => {
  return (
    <AuthProvider>
      {children}
    </AuthProvider>
  );
};

export default Provider;
