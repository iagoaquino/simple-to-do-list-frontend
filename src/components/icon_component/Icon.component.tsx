type iconStyle = React.InputHTMLAttributes<SVGSVGElement>;

export function PlusIcon({ ...props }: iconStyle) {
	return (
		<svg {...props} xmlns="http://www.w3.org/2000/svg" className="ionicon" viewBox="0 0 512 512">
			<g fill="currentColor">
				<path
					fill="none"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="32"
					d="M256 112v288M400 256H112"
				/>
			</g>
		</svg>
	);
}

export function EllipseIcon({ ...props }: iconStyle) {
	return (
		<svg {...props} xmlns="http://www.w3.org/2000/svg" className="ionicon" viewBox="0 0 512 512">
			<g fill="currentColor">
				<path d="M256 464c-114.69 0-208-93.31-208-208S141.31 48 256 48s208 93.31 208 208-93.31 208-208 208z" />
			</g>
		</svg>
	);
}

export function SearchIcon({ ...props }: iconStyle) {
	return (
		<svg {...props} xmlns="http://www.w3.org/2000/svg" className="ionicon" viewBox="0 0 512 512">
			<g fill="currentColor">
				<path d="M456.69 421.39L362.6 327.3a173.81 173.81 0 0034.84-104.58C397.44 126.38 319.06 48 222.72 48S48 126.38 48 222.72s78.38 174.72 174.72 174.72A173.81 173.81 0 00327.3 362.6l94.09 94.09a25 25 0 0035.3-35.3zM97.92 222.72a124.8 124.8 0 11124.8 124.8 124.95 124.95 0 01-124.8-124.8z" />
			</g>
		</svg>
	);
}
