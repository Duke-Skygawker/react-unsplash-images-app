import { useState } from "react";

const SearchForm = () => {
  const [value, setValue] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(value);
    setValue("");
  };
  return (
    <div>
      <h1 className="title">Unsplash Images</h1>
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          className="form-input search-input"
          type="text"
          name="search"
          placeholder="cat"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button className="btn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};
export default SearchForm;
