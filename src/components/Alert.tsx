import { ReactNode } from "react";

interface Props {
    children: ReactNode;
    color?: string
}

export default function Alert({children, color = 'primary'}: Props) {
  return (
    <div className={"alert alert-" + color} role="alert">
      {children}
    </div>
  );
}
