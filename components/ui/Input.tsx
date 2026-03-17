import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export default function Input({ label, error, className = "", ...props }: InputProps) {
  const errorId = props.id ? `${props.id}-error` : undefined;

  return (
    <div className="w-full">
      {label && (
        <label htmlFor={props.id} className="block text-sm font-medium text-neutral-text mb-2">
          {label}
        </label>
      )}
      <input
        className={`w-full px-4 py-3 border border-neutral-light rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors ${
          error ? "border-red-500" : ""
        } ${className}`}
        aria-invalid={error ? "true" : undefined}
        aria-describedby={error && errorId ? errorId : undefined}
        {...props}
      />
      {error && (
        <p id={errorId} className="mt-1 text-sm text-red-500" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
