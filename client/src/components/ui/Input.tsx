import type { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes <HTMLInputElement> {
  label: string;
  error?: string;
}

export default function Input({
  label,
  error,
  id,
  className = "",
  ...props
}: InputProps) {
  const inputId = id ?? props.name;

  return (
    <div className="w-full">
      <label htmlFor={inputId} className="mb-2 block text-sm font-medium text-slate-700">{label}</label>
      <input
        id={inputId}
        className={`w-full rounded-lg border px-3 py-2.5 text-sm outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 ${
          error ? "border-red-500" : "border-slate-300"
        } ${className}`}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${inputId}-error` : undefined}
        {...props}
      />
      {error && (
        <p id={`${inputId}-error`} className="mt-1 text-xs text-red-600">{error}</p>
      )}
    </div>
  );
}