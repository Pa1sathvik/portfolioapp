import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './about.styles.css';
import Profile from '../../assets/img/profile/profile.webp';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';

const About = () => {
	return (
		<div id="about">
			<div className="about">
				<h1 className="pt-3 text-center font-details pb-3">ABOUT ME</h1>
				<Container>
					<Row className="pt-3 pb-5 align-items-center">
						<Col xs={12} md={12}>
							<Row className=" align-items-start p-2 my-details rounded">
								Hi there! I am <strong>&nbsp;Vutukuri Sathvik</strong>
								<br />A passionate programmer and a learner, born and brought up in AP,India. I am a
								Full Stack Web Developer with React.js, Redux, Java , Spring Boot, Junit and Oracle DB
								as my tech stack.
								<br />
								In 2015, I successfully completed my Engineering with specialization in 'Computer
								Science Engineering'.
								<br />
								Working with the clients, my goal is always driven towards providing amazing experience
								with the best level of quality and service to them.
								<br />I love learning about new technologies, what problems are they solving and How can
								I use them to build better and scalable products.
								<br />
								In my 5.4 years of experience as Full stack developer learned a lot in full stack
								development, architecture design.
								<br />
								Believes in Work hard motto which helped me to solve many problems in my career.
								<br />
								<Col className="d-flex justify-content-center flex-wrap">
									<div>
										<a href="#contact">
											<Button className="m-2" variant="outline-primary">
												Let's talk
											</Button>
										</a>
									</div>
									<div>
										<a
											href="https://drive.google.com/file/d/1dGJr_UbdFUIJXmBNFwbN-2eiABaRzc6X/view?usp=sharing"
											target="_blank"
											rel="noopener noreferrer"
										>
											<Button className="m-2" variant="outline-success">
												My Resume
											</Button>
										</a>
									</div>
									<div>
										<a
											href="https://github.com/Pa1sathvik"
											target="_blank"
											rel="noopener noreferrer"
										>
											<Button className="m-2" variant="outline-dark">
												GitHub
											</Button>
										</a>
									</div>
									<div>
										<a
											href="https://www.linkedin.com/in/sathvik-vutukuri-aba1b960/"
											target="_blank"
											rel="noopener noreferrer"
										>
											<Button className="m-2" variant="outline-info">
												LinkedIn
											</Button>
										</a>
									</div>
								</Col>
							</Row>
						</Col>
					</Row>
				</Container>
			</div>
		</div>
	);
};

export default About;
