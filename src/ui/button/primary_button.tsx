import { ComponentProps } from "react";




const PrimaryButton = ({ ...props }: ComponentProps<"button">) => (
	<button
		className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded "
		{...props}
	/>
);

export default PrimaryButton;
