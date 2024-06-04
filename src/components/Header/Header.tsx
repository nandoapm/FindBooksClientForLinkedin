import { Container } from "../Container/Container";
import { HeaderTitle } from "./HeaderTitle";
import imageHeader from "../../assets/images/img-header.svg";
import { Button } from "../Button/Button";

function Header() {
	return (
		<header className="bg-primary">
			<Container>
				<HeaderTitle />
				<div className="mt-5 flex justify-between items-center">
					<div className="sm:flex flex-col hidden">
						<p className="md:text-6xl text-3xl font-bold text-dark">
							Seu guia literário online, <br /> sinopses de milhares de livros.
						</p>
						<p className=" text-dark my-5 text-xl italic">
							Aventure-se por novas histórias - cada sinopse é uma nova descoberta.
						</p>
						<div className="flex-none">
							<Button title="Pesquisar livros" />
						</div>
					</div>
					<img src={imageHeader} alt="image-header" className="sm:max-w-xs justify-center" />
				</div>
			</Container>
		</header>
	);
}

export { Header };
