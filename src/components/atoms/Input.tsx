interface InputProps {
  label: string;
}

export const Input = ({ label }: InputProps) => {
  return (
    <input
      type="text"
      aria-label={label}
      className="w-full font-bold rounded border-0 px-2 py-1 text-center outline-none focus:border-0 focus:outline-none focus:ring-0"
    />
  );
};
