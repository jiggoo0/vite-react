import { ReactNode, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface RoleGuardProps {
  allowedRoles: Array<'admin' | 'user'>;
  children: ReactNode;
}

interface User {
  role: 'admin' | 'user';
}

const isUserWithAllowedRole = (
  obj: unknown,
  allowedRoles: Array<'admin' | 'user'>,
): obj is User => {
  return (
    typeof obj === 'object' &&
    obj !== null &&
    'role' in obj &&
    typeof (obj as Record<string, unknown>).role === 'string' &&
    allowedRoles.includes((obj as Record<string, unknown>).role as User['role'])
  );
};

const RoleGuard = ({ allowedRoles, children }: RoleGuardProps) => {
  const navigate = useNavigate();
  const [authorized, setAuthorized] = useState<boolean | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem('user');

    if (!stored) {
      setAuthorized(false);
      setTimeout(() => navigate('/login', { replace: true }), 0);
      return;
    }

    try {
      const parsed = JSON.parse(stored);

      if (isUserWithAllowedRole(parsed, allowedRoles)) {
        setAuthorized(true);
      } else {
        localStorage.removeItem('user');
        setAuthorized(false);
        setTimeout(() => navigate('/403', { replace: true }), 0);
      }
    } catch {
      localStorage.removeItem('user');
      setAuthorized(false);
      setTimeout(() => navigate('/login', { replace: true }), 0);
    }
  }, [allowedRoles, navigate]);

  if (authorized === null) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-base-100">
        <span
          className="loading loading-spinner loading-lg text-primary"
          role="status"
          aria-label="Loading"
        />
      </div>
    );
  }

  if (!authorized) return null;

  return <>{children}</>;
};

export default RoleGuard;
