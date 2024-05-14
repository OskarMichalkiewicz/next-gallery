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
      <div className="relative rounded-md bg-slate-200">
        <div className="relative">
          <input
            {...rest}
            className="peer block w-full rounded-md border border-slate-400 bg-slate-700 py-2 pl-2 text-sm outline-2 placeholder:text-slate-400"
            aria-describedby={`${rest.id}-error`}
          />
        </div>
      </div>
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
