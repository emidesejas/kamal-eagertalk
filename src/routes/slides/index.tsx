import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef } from "react";
import Reveal from "reveal.js";
import RevealNotes from "reveal.js/plugin/notes/notes";
import "reveal.js/dist/reveal.css";
import "reveal.js/dist/theme/black.css";

export const Route = createFileRoute("/slides/")({
	component: SlidesPage,
});

function SlidesPage() {
	const deckDivRef = useRef<HTMLDivElement>(null); // reference to deck container div
	const deckRef = useRef<Reveal.Api | null>(null); // reference to deck reveal instance

	useEffect(() => {
		// Prevents double initialization in strict mode
		if (deckRef.current) return;
		if (!deckDivRef.current) return;

		deckRef.current = new Reveal(deckDivRef.current, {
			transition: "slide",
			showNotes: "separate-page",
			plugins: [RevealNotes],
			// other config options
		});

		deckRef.current.initialize().then(() => {
			// good place for event handlers and plugin setups
		});

		return () => {
			try {
				if (deckRef.current) {
					deckRef.current.destroy();
					deckRef.current = null;
				}
			} catch (e) {
				console.warn("Reveal.js destroy call failed.");
				console.error(e);
			}
		};
	}, []);

	return (
		<div className="h-dvh w-full">
			<div className="reveal" ref={deckDivRef}>
				<div className="slides">
					<section>Slide 1</section>
					<section>Slide 2</section>
				</div>
			</div>
		</div>
	);
}
