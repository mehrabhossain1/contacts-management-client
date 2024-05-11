const Button = ({ children }: { children: string }) => {
  return (
    <button className="btn text-white border-none shadow-lg bg-[#7AB2B0] hover:bg-[#586E8D]">
      {children}
    </button>
  );
};

export default Button;
