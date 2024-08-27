import PrimaryButton from "../button/primary_button";

type ErrorWidgetProps = {
	error?: Error;
	onClose?: () => void;
	buttonText?: string;
};

const ErrorWidget = ({
	error,
	onClose,
	buttonText,
}: ErrorWidgetProps): JSX.Element => (
	<div
		role="alert"
		className="flex flex-col border border-black drop-shadow-lg bg-white dark:bg-[#333333] dark:border-white dark:text-white size-fit min-w-64  max-w-[25%] justify-center items-center p-6 gap-4 rounded-[32px]"
	>
		<svg
			className="w-8 h-8 text-red-500"
			fill="none"
			stroke="currentColor"
			viewBox="0 0 24 24"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={4}
				d="M0 24L24 0M0 0l24 24"
			/>
		</svg>
		<div className="gap-2">
			<p className="text-center pb-2 font-bold">
				An error occurred in the app{error?.message && ":"}
			</p>
			<p>{error?.message}</p>
		</div>

		<PrimaryButton onClick={onClose}>{buttonText ?? "Close"}</PrimaryButton>
	</div>
);

export default ErrorWidget;
