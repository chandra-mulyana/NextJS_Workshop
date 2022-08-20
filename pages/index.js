import styles from "../styles/Home.module.css";
import LayoutUtama from "../components/layout/layout-utama";
const buah = [
	{ id: 1, namabuah: "Jeruk" },
	{ id: 2, namabuah: "Mangga" },
	{ id: 3, namabuah: "Sirsak" },
	{ id: 4, namabuah: "Jambu" },
];

export default function Home() {
	return (
		<div className={styles.container}>
			<LayoutUtama title="Daftar Buah-buahan">
				<ul>
					{buah.map((baris) => (
						<li key={baris.id}>{baris.namabuah}</li>
					))}
				</ul>
			</LayoutUtama>
		</div>
	);
}
