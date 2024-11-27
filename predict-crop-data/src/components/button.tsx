import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
}

const Button = ({ children }: ButtonProps) => {
  return (
    <div>
      <button className="mt-10 border px-8 py-4 rounded-full">
        {children}
      </button>
    </div>
  );
};

export default Button;
