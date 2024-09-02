import LoadingWidget from "../widget/loading_widget";

const LoadingFallback = (): JSX.Element => (
	<div className="flex justify-center items-center fixed inset-0 bg-black bg-opacity-50 z-50">
		<LoadingWidget />
	</div>
);

export default LoadingFallback;
