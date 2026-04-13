/**
 * Animated “shine” border — Tailwind + React (shadcn-friendly).
 *
 * Add to `tailwind.config` (theme.extend):
 * ```ts
 * keyframes: {
 *   'shine-pulse': {
 *     '0%': { backgroundPosition: '0% 0%' },
 *     '100%': { backgroundPosition: '200% 200%' },
 *   },
 * },
 * animation: {
 *   'shine-pulse': 'shine-pulse var(--shine-pulse-duration, 14s) linear infinite',
 * },
 * ```
 *
 * Static portfolio uses the same idea in `my-work-section.css` (`.my-work__card-shine`).
 */
import { cn } from '@/lib/utils';
import type { CSSProperties, ReactNode } from 'react';

type TColorProp = string | string[];

export interface ShineBorderProps {
	borderRadius?: number;
	borderWidth?: number;
	duration?: number;
	color?: TColorProp;
	className?: string;
	children: ReactNode;
}

export function ShineBorder({
	borderRadius = 20,
	borderWidth = 3,
	duration = 14,
	color = '#7b61ff',
	className,
	children,
}: ShineBorderProps) {
	const radial = `radial-gradient(transparent,transparent, ${
		Array.isArray(color) ? color.join(',') : color
	},transparent,transparent)`;

	const outerStyle = {
		'--border-radius': `${borderRadius}px`,
	} as CSSProperties;

	const ringStyle = {
		'--border-width': `${borderWidth}px`,
		'--border-radius': `${borderRadius}px`,
		'--shine-pulse-duration': `${duration}s`,
		'--mask-linear-gradient': 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
		'--background-radial-gradient': radial,
	} as CSSProperties;

	return (
		<div
			style={outerStyle}
			className={cn(
				'relative grid h-full w-full place-items-center rounded-[length:var(--border-radius)] bg-[#0c0a09] p-3 text-neutral-100',
				className,
			)}
		>
			<div
				style={ringStyle}
				className={cn(
					'pointer-events-none absolute inset-0 rounded-[length:var(--border-radius)]',
					'before:absolute before:inset-0 before:aspect-square before:size-full',
					'before:rounded-[length:var(--border-radius)] before:p-[length:var(--border-width)]',
					'before:will-change-[background-position] before:content-[""]',
					'before:[-webkit-mask-composite:xor] before:[mask-composite:exclude]',
					'before:[background-image:var(--background-radial-gradient)] before:[background-size:300%_300%]',
					'before:[mask:var(--mask-linear-gradient)]',
					'motion-safe:before:animate-[shine-pulse_var(--shine-pulse-duration)_linear_infinite]',
				)}
				aria-hidden
			/>
			<div className="relative z-10 h-full w-full">{children}</div>
		</div>
	);
}
