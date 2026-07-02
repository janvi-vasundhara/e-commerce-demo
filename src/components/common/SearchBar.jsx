import '../../styles/common/SearchBar.css'

function SearchBar({ value, onChange }) {
  return (
    <div className="search-bar">
      <input
        type="search"
        className="search-bar__input"
        placeholder="Search products..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  )
}

export default SearchBar
