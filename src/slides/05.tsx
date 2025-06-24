export const Slide = () => {
	return (
		<section
			data-background-transition="zoom"
			data-background-image="/images/docker-logo-blue.png"
			data-background-size="80%"
			data-background-opacity="0.2"
		>
			<section>
				<h3>Improving with Docker</h3>
			</section>

			<section>
				<h3>Benefits</h3>

				<ul>
					<li>Isolated</li>
					<li>Consistent/Reproducible</li>
					<li>Easy to deploy</li>
				</ul>
			</section>

			<section>
				<p>How does it work?</p>

				<ol>
					<li className="fragment">
						<p>Create a Dockerfile</p>
					</li>
					<li className="fragment">
						<p>Build an image</p>
					</li>
					<li className="fragment">
						<p>Run a container</p>
					</li>
				</ol>
			</section>

			<section>
				<p>What do I need to deploy with Docker?</p>

				<ol>
					<li className="fragment">
						<p>Infrastructure (Servers, Storage, etc)</p>
					</li>
					<li className="fragment">
						<p>Docker Repository (Docker Hub, ECR, etc)</p>
					</li>
					<li className="fragment">
						<p>Somewhere to build the image (CI/CD)</p>
					</li>
				</ol>
			</section>

			<section>
				{/* <h3>Steps to deploy with Docker</h3> */}

				<ol>
					<li className="fragment">
						<p>Setup your Infrastructure</p>
					</li>
					<li className="fragment">
						<p>Write a Dockerfile</p>
					</li>
					<li className="fragment">
						<p>Build an image from your Dockerfile</p>
					</li>
					<li className="fragment">
						<p>Push the image to a repository</p>
					</li>
					<li className="fragment">
						<p>Pull the image from the repository into your server</p>
					</li>
					<li className="fragment">
						<p>Stop the previous container</p>
					</li>
					<li className="fragment">
						<p>Start a container from your image</p>
					</li>
					<li className="fragment">
						<p>Re-route the traffic to the new container</p>
					</li>
					<li className="fragment">
						<p>Scale your containers as needed</p>
					</li>
				</ol>
			</section>
		</section>
	);
};
