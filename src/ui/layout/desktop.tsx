import { LayoutProps } from "@/logic/type/layout";

const DesktopLayout = (props: LayoutProps) => (
	<div>
		<h1>Desktop Layout</h1>
		{props.children}
	</div>
);

export default DesktopLayout;