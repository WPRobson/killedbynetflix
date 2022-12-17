import Select, { Options, SingleValue } from 'react-select';

import { SRT } from '../components';
import { Product, ProductType } from '../types/Product';
import { FilterType } from '../types/Filter';

type Props = {
  items: Product[];
  filterHandler: (b: FilterType) => void;
}

const Filter: React.FC<Props> = ({ items, filterHandler }) => {

  const getCount = (type: string) => items.filter(item => item.type === type).length;

  type Option = {
    value: string;
    label: string;
  }
  const selectOptions: Option[] = [
    {
      value: FilterType.ALL,
      label: `All (${items.length})`,
    },
    {
      value: FilterType.SERIES,
      label: `Series (${getCount('series')})`,
    },
    {
      value: FilterType.FILM,
      label: `Film (${getCount('film')})`,
    },
  ];

  const changeHandler = (arg: SingleValue<Option>): void => {
    const filterVal = arg?.value as FilterType;
      filterHandler(filterVal);
    if (window.umami?.trackEvent)
      window.umami.trackEvent(filterVal, 'filter');
  }

  return (
    <label id="listFilter">
      <SRT>Filter Graveyard List</SRT>
      <Select defaultValue={selectOptions[0]} options={selectOptions} onChange={changeHandler} instanceId="filter-select" styles={{
    control: (baseStyles, state) => ({
      ...baseStyles,
      backgroundColor: '#141414',
      color: 'white'
    }),
        menu: base => ({
      ...base,
      backgroundColor: '#141414',
      borderRadius: 0,
      marginTop: 0,
    }),
    option: provided => ({
      ...provided,
      color: 'white'
    }),
    singleValue: provided => ({
      ...provided,
      color: 'white'
    }),
  }}
  theme={(theme) => ({
    ...theme,
    colors: {
      ...theme.colors,
      primary25: 'grey',
      primary: 'black',
    },
  })}/>
    </label>
  );
}
export default Filter;
