import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
	component: App,
});

function App() {
	return (
		<div className="text-center">
			<header className="min-h-screen flex flex-col items-center justify-center bg-[#282c34] text-white text-[calc(10px+2vmin)]">
				<Link
					to="/slides"
					className="hover:shadow-2xl hover:shadow-blue-500 rounded-xl border-2 p-4 transition-all font-mono hover:scale-105 hover:animate-[shadow-pulse_4s_ease-in-out_infinite]"
				>
					<h1>Kamal Eagertalk Slides</h1>
				</Link>
			</header>
		</div>
	);
}
