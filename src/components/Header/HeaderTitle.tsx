import iconBook from "../../assets/images/icon-book.svg";

function HeaderTitle() {
	return (
		<div className="flex gap-2">
			<img src={iconBook} alt="logo-book" />
			<p className="text-dark text-2xl font-bold">Biblioteca Digital</p>
		</div>
	);
}

export { HeaderTitle };
