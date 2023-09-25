import { Form, Link, useLoaderData } from "react-router-dom"
import FormInput from "./FormInput"
import FormSelect from "./FormSelect";
import FormRange from "./FormRange";
import FreeShipping from "./FreeShipping";

const Filters = () => {
  const { meta, params } = useLoaderData();
  const {search, category, company, shipping, order, price} = params
  return (
    <Form className="grid gap-y-4 gap-x-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 py-8 px-4 bg-base-300 rounded-md items-center">
      {/* {SEARCH INPUT} */}
      <FormInput
        size="input-sm"
        label="search input"
        type="search"
        name="search"
        defaultValue={search}
      />

      {/* COMPANIES */}
      <FormSelect
        name="company"
        label="select company"
        size="select-sm"
        list={meta.companies}
        defaultValue={company}
      />
      {/* CATEGORIES */}
      <FormSelect
        name="category"
        label="select category"
        size="select-sm"
        list={meta.categories}
        defaultValue={category}
      />
      {/* ORDER */}
      <FormSelect
        name="order"
        label="sort by order"
        size="select-sm"
        list={['a-z', 'z-a', 'high', 'low']}
        defaultValue={order}
      />
      {/* PRICE SORT */}
      <FormRange size='range-sm' name='price' type='range' label='sort by price' price={price}/>
      {/* FREE SHIPPING */}
      <FreeShipping label="free shipping" name="shipping" size="checkbox-sm" defaultchecked={shipping}/>
      {/* BUTTONS */}
      <button type="submit" className="btn btn-primary btn-sm">
        search
      </button>
      <Link to="/products" className="btn btn-accent btn-sm">
        reset
      </Link>
    </Form>
  );
}
export default Filters