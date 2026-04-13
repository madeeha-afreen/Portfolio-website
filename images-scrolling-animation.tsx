'use client';

import { motion, useScroll, useTransform, type MotionValue } from 'framer-motion';
import ReactLenis from 'lenis/react';
import { useRef } from 'react';

export type WorkProject = {
	title: string;
	src: string;
};

const defaultProjects: WorkProject[] = [
	{ title: 'XU Lifestyle', src: '/my-work/01-xu-lifestyle.png' },
	{ title: 'SubWise', src: '/my-work/02-subwise.png' },
	{ title: 'FASTEN', src: '/my-work/03-fasten.png' },
	{ title: 'GO DASH', src: '/my-work/04-godash.png' },
	{ title: 'malls app', src: '/my-work/05-malls-app.png' },
	{ title: 'iWantTFC', src: '/my-work/06-iwanttfc.png' },
	{ title: 'Lillia', src: '/my-work/07-lillia.png' },
];

export function StickyCard_001({
	i,
	title,
	src,
	progress,
	range,
	targetScale,
}: {
	i: number;
	title: string;
	src: string;
	progress: MotionValue<number>;
	range: [number, number];
	targetScale: number;
}) {
	const container = useRef<HTMLDivElement>(null);

	const scale = useTransform(progress, range, [1, targetScale]);

	const topOffset = `calc(-5vh + ${i * 12 + 36}px)`;

	return (
		<div
			ref={container}
			className="sticky top-0 flex items-center justify-center px-4 sm:px-6 lg:px-8"
			style={{ zIndex: i + 1 }}
		>
			<motion.div
				style={{
					scale,
					top: topOffset,
				}}
				className="relative flex origin-top flex-col overflow-hidden rounded-2xl sm:rounded-3xl lg:rounded-[1.75rem] h-[200px] w-[280px] sm:h-[240px] sm:w-[360px] md:h-[280px] md:w-[420px] lg:h-[300px] lg:w-[500px]"
			>
				<img src={src || '/placeholder.svg'} alt={title} className="h-full w-full object-cover" />
			</motion.div>
		</div>
	);
}

export type ImagesScrollingAnimationProps = {
	projects?: WorkProject[];
};

export function ImagesScrollingAnimation({ projects = defaultProjects }: ImagesScrollingAnimationProps) {
	const container = useRef<HTMLDivElement>(null);
	const { scrollYProgress } = useScroll({
		target: container,
		offset: ['start start', 'end end'],
	});

	const n = projects.length;

	return (
		<ReactLenis root>
			<main
				ref={container}
				className="relative flex w-full flex-col items-center justify-center pb-[50vh] pt-[5vh] sm:pb-[60vh] sm:pt-[8vh] lg:pb-[70vh] lg:pt-[10vh]"
			>
				{projects.map((project, i) => {
					const targetScale = Math.max(0.6, 1 - (n - i - 1) * 0.08);
					const rangeStart = n > 0 ? i / n : 0;
					return (
						<StickyCard_001
							key={`p_${i}`}
							i={i}
							title={project.title}
							src={project.src}
							progress={scrollYProgress}
							range={[rangeStart, 1]}
							targetScale={targetScale}
						/>
					);
				})}
			</main>
		</ReactLenis>
	);
}
