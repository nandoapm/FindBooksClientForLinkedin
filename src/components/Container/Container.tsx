import { ReactNode } from "react";

type ChildrenProps = {
	children: ReactNode;
};

function Container({ children }: ChildrenProps) {
	return <div className=" px-2 md:px-5 py-4 max-w-7xl mx-auto w-full">{children}</div>;
}

export { Container };
