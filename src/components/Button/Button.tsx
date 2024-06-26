import classNames from "classnames";
import { MouseEvent } from "react";
type ButtonProps = {
	title: string;
	className?: string;
	variant?: "light" | "dark";
	onClick?: (event: MouseEvent<HTMLButtonElement>, title: string) => void;
};

function Button({ title, className, variant = "dark", onClick }: ButtonProps) {
	return (
		<button
			className={classNames([
				"bg-evergreen-light px-6 py-3 rounded-lg shadow  font-medium",
				variant === "dark" && "bg-evergreen-light text-white",
				variant === "light" && "bg-white border-2 border-evergreen-light text-evergreen-light",
				className,
			])}
			onClick={(event) => onClick?.(event, title)}
		>
			{title}
		</button>
	);
}

export { Button };
