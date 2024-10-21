import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component

const Jumbotron = () => {
    return (
        <div className="container" style={{ marginTop: '80px' }}> {/* Ajusta según la altura de tu navbar */}
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
        <nav className="navbar navbar-expand-lg fixed-top bg-dark px-5">
            <div className="container-fluid d-flex justify-content-between">
                <a className="navbar-brand text-light" href="#">Start Bootstrap</a>
                <div className="ml-auto">
                    <button 
                        className="navbar-toggler" 
                        type="button" 
                        data-bs-toggle="collapse" 
                        data-bs-target="#navbarNavAltMarkup" 
                        aria-controls="navbarNavAltMarkup" 
                        aria-expanded="false" 
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav ms-auto"> {/* Alinea a la derecha */}
                            <a className="nav-link active text-light" aria-current="page" href="#">Home</a>
                            <a className="nav-link text-light" href="#">About</a>
                            <a className="nav-link text-light" href="#">Services</a>
                            <a className="nav-link text-light" href="#">Contact</a>
                        </div>
                    </div>
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
    			<p className="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur quibusdam quae similique magni, neque quam quos commodi sapiente debitis aliquid. Quas totam repudiandae maxime ducimus animi dolor mollitia sint deleniti.</p>
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
