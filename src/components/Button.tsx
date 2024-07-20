import { ReactNode } from "react";

interface Props {
    color?: string
    text: ReactNode
    onClick: (color: string, message: string) => void
}

export default function Button({text, color = 'primary', onClick}: Props) {
  return (
    <button type="button" className={"btn btn-" + color} onClick={() => onClick(color, "Mission passed")}>{text}</button>
  );
}
