import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef } from "react";
import Reveal from "reveal.js";
import "reveal.js/dist/reveal.css";
import "reveal.js/dist/theme/black.css";
import "reveal.js/plugin/highlight/monokai.css";
import Highlight from "reveal.js/plugin/highlight/highlight";
import RevealNotes from "reveal.js/plugin/notes/notes";

import { Slide as TitleSlide } from "~/slides/01";
import { Slide as AgendaSlide } from "~/slides/02";
import { Slide as CICDSlide } from "~/slides/03";
import { Slide as CommonFlowsSlide } from "~/slides/04";
import { Slide as DockerSlide } from "~/slides/05";
import { Slide as KamalSlide } from "~/slides/06";
import { Slide as ExampleSlide } from "~/slides/07";
import { Slide as ThankYouSlide } from "~/slides/08";

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
			plugins: [RevealNotes, Highlight],
			viewDistance: 100,
			autoAnimate: true,
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
					<TitleSlide />
					<AgendaSlide />
					<CICDSlide />
					<CommonFlowsSlide />
					<DockerSlide />
					<KamalSlide />
					<ExampleSlide />
					<ThankYouSlide />
				</div>
			</div>
		</div>
	);
}
