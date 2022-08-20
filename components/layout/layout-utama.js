import Kepala from "../kepala";
import Kaki from "../kaki";

function LayoutUtama(props) {
	return (
		<>
			<Kepala judul={props.title} />
			{props.children}
			<Kaki />
		</>
	);
}

export default LayoutUtama;
