interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  errors?: string[];
}

export default function Input({ label, errors, ...rest }: InputProps) {
  return (
    <div className="mb-4">
      <label htmlFor={rest.id} className="mb-2 block text-sm font-medium">
        {label}
      </label>
      <input
        {...rest}
        className="peer block w-full rounded-md border border-slate-600 bg-slate-900 py-2 pl-2 text-sm outline-none placeholder:text-slate-400 focus:border-violet-900"
        aria-describedby={`${rest.id}-error`}
      />
      <div id={`${rest.id}-error`} aria-live="polite" aria-atomic="true">
        {errors &&
          errors.map((error: string) => (
            <p className="mt-2 text-sm text-red-500" key={error}>
              {error}
            </p>
          ))}
      </div>
    </div>
  );
}
