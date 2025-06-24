export const Slide = () => {
	return (
		<section>
			<section data-auto-animate>
				<h3>Let's deploy a simple app</h3>
			</section>

			<section data-auto-animate>
				<p>How will the process look like?</p>

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
				<p>Kamal Configuration</p>

				<p className="fragment fade-in">Let's take a look 😄</p>
			</section>
		</section>
	);
};
