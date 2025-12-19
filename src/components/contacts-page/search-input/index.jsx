import searchIcon from "@/assets/search/search.svg";
import styles from "./search-input.module.css";

export function SearchInput({ value, onChange }) {
	return (
		<label className={styles.search} htmlFor="search-contact">
			<img src={searchIcon} alt="search" className={styles.search__icon}/>
			<input 
				type="text" 
				placeholder="Search..."
				value={value}
				onChange={onChange}
				id="search-contact"
				className={styles.search__input}
			/>
		</label>
	);
}