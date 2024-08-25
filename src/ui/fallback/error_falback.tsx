import ErrorWidget from "../widget/error_widget";

type ErrorFallbackProps = {
	error?: Error;
	resetErrorBoundary?: () => void;
};

const ErrorFallback = ({ error, resetErrorBoundary }: ErrorFallbackProps) => (
	<div className="flex size-full justify-center items-center">
		<ErrorWidget error={error} onClose={resetErrorBoundary} />
	</div>
);

export default ErrorFallback;