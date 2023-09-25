const FormInput = ({label, type, defaultValue, name, size}) => {
  return (
    <div className="form-control">
      <label className="label capitalize">
        <span className="label-text">{label}</span>
      </label>
      <input
        type={type}
        defaultValue={defaultValue}
        name={name}
        className={`input input-bordered ${size}`}
      />
    </div>
  );
}
export default FormInput