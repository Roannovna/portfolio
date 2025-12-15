export function SearchInput({ value, onChange }) {
	return (
		<label className="search" htmlFor="search">
			<input 
				type="text" 
				placeholder="Search..."
				value={value}
				onChange={onChange}
			/>
		</label>
	);
}