const Button = ({ children, onClick, fill, className }) => {
  return (
    <button
      onClick={onClick}
      className={`
          uppercase px-8 py-2 border-3 rounded-xl border-header-outline tracking-widest cursor-pointer
          ${fill ? "text-dark-text bg-white border-none" : "text-white"} ${className}
        `}
    >
      {children}
    </button>
  );
};

export default Button;
