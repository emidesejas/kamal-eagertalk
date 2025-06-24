export const Slide = () => {
	return (
		<section>
			<section>
				<h3>Common Deployment Flows</h3>
			</section>
			<section>
				<h3>Example Architecture</h3>
				<img src="/images/architecture.png" alt="Architecture" />
			</section>
			<section data-auto-animate>
				<p data-id="server-deployment">Server Deployment</p>

				<div className="flex justify-center items-center">
					<img src="/images/server.png" alt="Serverx" />
				</div>
			</section>
			<section data-auto-animate>
				<p data-id="server-deployment">Server Deployment</p>

				<ul>
					<li data-id="server-deployment-ftp">FTP</li>
					<li data-id="server-deployment-scp">SSH with SCP</li>
					<li data-id="server-deployment-git">Git Push/Pull</li>
					<li data-id="server-deployment-managed">
						Managed (Vercel, Netlify, Heroku)
					</li>
					<li data-id="server-deployment-etc" className="fragment">
						etc...
					</li>
				</ul>
			</section>
		</section>
	);
};
