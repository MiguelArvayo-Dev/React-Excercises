import { useId, useContext } from "react";
import "./Filters.css";
import { FilterContext } from "../Context/FilterContext";

export function Filters() {
  const { filter, setFilter } = useContext(FilterContext);
  const filterPriceId = useId();
  const filterCategoryId = useId();

  function handlePriceChange(event) {
    setFilter((prevState) => ({
      ...prevState,
      minPrice: event.target.value,
    }));
  }

  function handleChangeCategory(event) {
    setFilter((prevState) => ({
      ...prevState,
      category: event.target.value,
    }));
  }

  return (
    <section className="filters">
      <div>
        <label htmlFor={filterPriceId}>price</label>
        <input
          type="range"
          id={filterCategoryId}
          min="0"
          max="1000"
          onChange={handlePriceChange}
          value={filter.minPrice}
        />
        <span>${filter.minPrice}</span>
      </div>
      <div>
        <label htmlFor={filterCategoryId}>Category </label>
        <select id={filterCategoryId} onChange={handleChangeCategory}>
          <option value="all">All</option>
          <option value="groceries">groceries</option>
          <option value="beauty">beauty</option>
          <option value="fragrances">fragrances</option>
          <option value="furniture">furniture</option>
        </select>
      </div>
    </section>
  );
}
