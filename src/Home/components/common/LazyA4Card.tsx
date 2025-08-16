'use client';

import { FC, ReactNode, Suspense } from 'react';
import { A4CardWrapper as OriginalA4CardWrapper } from '@home/SecretPage/common/CardWrapper';

/** ปรับให้รองรับ className */
interface A4CardWrapperProps {
  children: ReactNode;
  className?: string;
}

/** Wrapper ใหม่ที่ extend className */
const A4CardWrapper: FC<A4CardWrapperProps> = ({ children, className }) => (
  <OriginalA4CardWrapper>
    <div className={className}>{children}</div>
  </OriginalA4CardWrapper>
);

/** Props สำหรับ LazyA4Card */
interface LazyA4CardProps {
  /** เนื้อหาที่ต้องการ render ใน A4Card */
  children: ReactNode;

  /** ขนาดของ Loading Spinner (default: lg) */
  loadingSize?: 'lg' | 'md' | 'sm';

  /** ClassName เสริมสำหรับ wrapper */
  className?: string;
}

/** Spinner Loader Component */
const LoadingSpinner: FC<{ size?: 'lg' | 'md' | 'sm' }> = ({ size = 'lg' }) => {
  const sizeClass = size === 'lg' ? 'loading-lg' : size === 'md' ? 'loading-md' : 'loading-sm';

  return (
    <div className="flex justify-center items-center py-8">
      <span
        className={`loading loading-spinner text-primary ${sizeClass}`}
        role="status"
        aria-label="Loading content..."
      />
    </div>
  );
};

/** A4 Card + Suspense Wrapper */
const LazyA4Card: FC<LazyA4CardProps> = ({ children, loadingSize = 'md', className }) => {
  return (
    <Suspense fallback={<LoadingSpinner size={loadingSize} />}>
      <A4CardWrapper className={className}>{children}</A4CardWrapper>
    </Suspense>
  );
};

export default LazyA4Card;
export { LoadingSpinner };
