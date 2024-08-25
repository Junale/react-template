import { LayoutProps } from "@/logic/type/layout";

const TabletLayout = (props: LayoutProps) => (
	<div>
		<h1>Tablet Layout</h1>
		{props.children}
	</div>
);

export default TabletLayout;