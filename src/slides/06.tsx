export const Slide = () => {
	return (
		<section>
			<section data-auto-animate>
				<h3 data-id="where-does-kamal-step-in">Where does Kamal step in?</h3>
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
				<p>How does the deploy process look like?</p>

				<div className="r-stack">
					<img
						className="fragment"
						src="/images/kamal_1.png"
						alt="Kamal Process step 1"
					/>
					<img
						className="fragment"
						src="/images/kamal_2.png"
						alt="Kamal Process step 2"
					/>
					<img
						className="fragment"
						src="/images/kamal_3.png"
						alt="Kamal Process step 3"
					/>
				</div>
			</section>

			<section data-auto-animate>
				<p>Is that all?</p>

				<p className="fragment fade-in">No, there is more!</p>
			</section>

			<section data-auto-animate>
				<p>Kamal proxy!</p>

				<div className="r-stack">
					<img
						className="fragment"
						src="/images/kamal_proxy_1.png"
						alt="Kamal Proxy step 1"
					/>
					<img
						className="fragment"
						src="/images/kamal_proxy_2.png"
						alt="Kamal Proxy step 2"
					/>
					<img
						className="fragment"
						src="/images/kamal_proxy_3.png"
						alt="Kamal Proxy step 3"
					/>
					<img
						className="fragment"
						src="/images/kamal_proxy_4.png"
						alt="Kamal Proxy step 4"
					/>
					<img
						className="fragment"
						src="/images/kamal_proxy_5.png"
						alt="Kamal Proxy step 5"
					/>
				</div>
			</section>
		</section>
	);
};
