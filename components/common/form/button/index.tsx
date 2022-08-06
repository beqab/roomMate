import React from "react";

interface IButton {
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  className?: string;
  children: React.ReactNode;
  loading?: boolean;
  type?: "submit" | "button" | "reset";
}

export const Button: React.FC<IButton> = ({
  children,
  type = "submit",
  loading,
  ...rest
}) => {
  return (
    <button disabled={loading} type={type} {...rest}>
      {loading ? "load..." : children}
    </button>
  );
};
