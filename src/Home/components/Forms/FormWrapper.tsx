import { ReactNode } from "react";

interface FormWrapperProps {
  title?: string;
  description?: string;
  children: ReactNode;
}

export default function FormWrapper({ title, description, children }: FormWrapperProps) {
  return (
    <section className="max-w-2xl mx-auto px-4 py-10 bg-white dark:bg-neutral rounded-xl shadow-lg">
      {title && <h2 className="text-2xl font-bold mb-2 text-center">{title}</h2>}
      {description && (
        <p className="text-gray-600 dark:text-gray-400 text-center mb-6">{description}</p>
      )}
      {children}
    </section>
  );
}
