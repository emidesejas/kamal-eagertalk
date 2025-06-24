export const Slide = () => {
	return (
		<section>
			<section data-auto-animate>
				<h3>Let's deploy a simple app</h3>
			</section>

			<section data-auto-animate>
				<ol>
					<li className="fragment semi-fade-out" data-fragment-index="1">
						<p>Setup your Infrastructure</p>
					</li>
					<li className="fragment semi-fade-out" data-fragment-index="1">
						<p>Write a Dockerfile</p>
					</li>
					<li>
						<p>Build an image from your Dockerfile</p>
					</li>
					<li>
						<p>Push the image to a repository</p>
					</li>
					<li>
						<p>Pull the image from the repository into your server</p>
					</li>
					<li>
						<p>Stop the previous container</p>
					</li>
					<li>
						<p>Start a container from your image</p>
					</li>
					<li>
						<p>Re-route the traffic to the new container</p>
					</li>
					<li className="fragment semi-fade-out" data-fragment-index="1">
						<p>Scale your containers as needed</p>
					</li>
				</ol>
			</section>

			<section data-auto-animate>
				<h3 data-id="where-does-kamal-step-in">
					How will the process look like?
				</h3>
			</section>

			<section data-auto-animate>
				<p>Kamal Configuration</p>
			</section>
		</section>
	);
};
