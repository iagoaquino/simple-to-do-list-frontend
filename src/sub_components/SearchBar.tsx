import { SearchIcon } from '../components/icon_component/Icon.component';

type SearchBarProps = {
	search_value: string;
	setSearchValue: (value: string) => void;
	searchFunction: () => void;
};

const SearchBar: React.FC<SearchBarProps> = ({ search_value, setSearchValue, searchFunction }) => {
	return (
		<div style={{ width: '80%', display: 'flex', flexDirection: 'row', padding: 20 }}>
			<div style={{ width: '90%' }}>
				<input
					placeholder="Pesquisar tarefa"
					className="search-bar"
					type="text"
					value={search_value}
					onChange={(e) => {
						setSearchValue(e.target.value);
					}}
				/>
			</div>
			<div style={{ flex: 1 }}>
				<button className="primary-button" onClick={searchFunction}>
					<SearchIcon width={'20px'} height={'20px'} />
				</button>
			</div>
		</div>
	);
};

export default SearchBar;
