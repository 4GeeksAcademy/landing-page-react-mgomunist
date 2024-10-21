import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component

const Jumbotron = () => {
    return (
        <div className="container">
            <div className="jumbotron bg-light">
                <h1 className="display-4"><strong>A Warm Welcome!</strong></h1>
                <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus fringilla tortor eget elit elementum, tempus sollicitudin purus semper. Vivamus vitae massa nec enim finibus rutrum. Sed lobortis odio diam, quis mollis ipsum convallis eget.</p>
                <p className="lead">
                    <a className="btn btn-primary btn-lg" href="#" role="button">Call to action!</a>
                </p>
            </div>
        </div>
    );
};


const NavBar = () => {
	return (
		<nav className="navbar navbar-expand-lg bg-body-tertiary bg-dark text-light">
			<div className="container">
				<a className="navbar-brand text-light" href="#">Start Bootstrap</a>
				<div className="nav">
					<a className="nav-link text-light active" aria-current="page" href="#">Home</a>
					<a className="nav-link text-secondary" href="#">About</a>
					<a className="nav-link text-secondary" href="#">Services</a>
					<a className="nav-link text-secondary" href="#">Contact</a>
				</div>
			</div>
		</nav>
	);
};

const Card = () => {
	return (
		<div className="card" style={{ width: '18rem' }}>
			<img src="https://placehold.co/500x325" alt="Placeholder" className="card-img-top" />
 			<div className="card-body">
    			<h5 className="card-title">Card title</h5>
    			<p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus fringilla tortor eget elit elementum, tempus sollicitudin purus semper.</p>
    			<a href="#" className="btn btn-primary">Find Out More!</a>
  			</div>
		</div>
	);
};

const Home = () => {
	return (
		<div className="container">
			<div className="row d-flex justify-content-center flex-wrap">
				<div className="col-12 col-md-3 d-flex justify-content-center mb-4">
					<Card />
				</div>
				<div className="col-12 col-md-3 d-flex justify-content-center mb-4">
					<Card />
				</div>
				<div className="col-12 col-md-3 d-flex justify-content-center mb-4">
					<Card />
				</div>
				<div className="col-12 col-md-3 d-flex justify-content-center mb-4">
					<Card />
				</div>
			</div>
		</div>
	);
};


const Footer = () => {
	return (
		<nav className="navbar navbar-expand-lg bg-body-tertiary bg-dark text-light justify-content-center">
			<p className="lead mb-0 text-center">Copyright © Your Website 2024</p>
		</nav>
	);
};
//export default Home;
export { NavBar, Jumbotron, Home, Footer };
