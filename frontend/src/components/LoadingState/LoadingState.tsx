type LoadingButtonProps = {
  loading: boolean;
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const LoadingButton = ({
  loading,
  children,
  ...props
}: LoadingButtonProps) => {
  return (
    <button
      {...props}
      disabled={loading || props.disabled}
      className="mt-6 w-full rounded-lg bg-[var(--button-color)] py-3 text-lg font-semibold text-[var(--button-text-color)] flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
    >
      {loading && (
        <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
      )}

      {children}
    </button>
  );
};

export default LoadingButton;