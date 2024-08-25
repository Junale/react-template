import { LayoutProps } from "@/logic/type/layout";

const MobileLayout = (props: LayoutProps) => (
	<div>
		<h1>Mobile Layout</h1>
		{props.children}
	</div>
);

export default MobileLayout;