import { TextareaHTMLAttributes } from "react";

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

export default function Textarea({ label, error, className = "", ...props }: TextareaProps) {
  const errorId = props.id ? `${props.id}-error` : undefined;

  return (
    <div className="w-full">
      {label && (
        <label htmlFor={props.id} className="block text-sm font-medium text-neutral-text mb-2">
          {label}
        </label>
      )}
      <textarea
        className={`w-full px-4 py-3 border border-neutral-light rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors resize-none ${
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
