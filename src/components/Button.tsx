const Button = ({ children }: { children: string }) => {
  return (
    <button className="btn text-white border-none shadow-lg bg-[#FF5C35] hover:bg-[#E04826]">
      {children}
    </button>
  );
};

export default Button;
