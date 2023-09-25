import { useState } from "react";
import { formatPrice } from "../Utils";

const FormRange = ({ label, name, type, size, price}) => {
    const step = 1000;
    const maxPrice = 100000;
    const [selectedPrice, setSelectedPrice] = useState( price || maxPrice );
  return (
    <div className="form-control">
      <label htmlFor={name} className="label">
        <span className="label-text capitalize">{label}</span>
        <span className="label-text capitalize">{formatPrice(selectedPrice)}</span>
      </label>
      <input
        type={type}
        value={selectedPrice}
        min={0}
        max={maxPrice}
        onChange={(e) => setSelectedPrice(e.target.value)}
        className={`range range-secondary ${size}`}
        step={step}
        name={name}
      />
      <div className="flex justify-between px-2 text-xs pt-2">
        <span className="font-bold">0</span>
        <span className="font-bold">Max: {formatPrice(maxPrice)}</span>
      </div>
    </div>
  );
}
export default FormRange