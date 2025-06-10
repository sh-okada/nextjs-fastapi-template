export const Spinner = () => {
	return (
		<div className="flex justify-center" aria-label="loading">
			<div className="animate-spin h-10 w-10 border-4 border-black rounded-full border-t-transparent" />
		</div>
	);
};
