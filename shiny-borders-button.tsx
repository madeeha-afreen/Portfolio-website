/**
 * “Realism” shiny border button — Tailwind + React.
 * Requires Tailwind CSS in the consuming app (e.g. shadcn / Next).
 * My Work cards use `shine-border.tsx` / `my-work-section.css` (`.my-work__card-shine`) instead.
 */
import React from 'react';

export type RealismButtonProps = {
	text: string;
	className?: string;
};

const RealismButton = ({ text, className = '' }: RealismButtonProps) => {
	return (
		<button
			type="button"
			className={`group relative cursor-pointer rounded-[16px] border-none bg-[radial-gradient(circle_80px_at_80%_-10%,_#ffffff,_#181b1b)] p-[2px] text-[1.4rem] transition-all ${className}`}
		>
			<div
				className="absolute top-0 right-0 -z-10 h-[60%] w-[65%] rounded-[120px] shadow-[0_0_20px_#ffffff38] transition-all duration-300 ease-out group-hover:shadow-[0_0_40px_#ffffff60]"
				aria-hidden
			/>
			<div
				className="absolute bottom-0 left-0 h-[50%] w-[50px] rounded-[17px] bg-[radial-gradient(circle_60px_at_0%_100%,_#3fff75,_#00ff8050,_transparent)] shadow-[-2px_9px_40px_#00ff2d40] transition-all duration-300 ease-out group-hover:w-[90px] group-hover:shadow-[-4px_1px_45px_#00ff2d60]"
				aria-hidden
			/>
			<div className="relative z-10 rounded-[14px] bg-[radial-gradient(circle_80px_at_80%_-50%,_#777777,_#0f1111)] px-[25px] py-[14px] text-white transition-all duration-300 group-hover:scale-110">
				{text}
				<div
					className="absolute inset-0 -z-[1] rounded-[14px] bg-[radial-gradient(circle_60px_at_0%_100%,_#00e1ff1a,_#0000ff11,_transparent)]"
					aria-hidden
				/>
			</div>
		</button>
	);
};

export default RealismButton;
