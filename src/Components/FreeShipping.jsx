const FreeShipping = ({label, name, size, defaultchecked}) => {
  return (
    <div className="form-control items-center">
      <label htmlFor={name} className="cursor-pointer label">
        <span className="label-text capitalize">{label}</span>
      </label>
      <input
        type="checkbox"
        defaultChecked={defaultchecked}
        className={`checkbox checkbox-primary ${size}`}
        name={name}
      />
    </div>
  );
}
export default FreeShipping