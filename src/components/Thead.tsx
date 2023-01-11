import { useAppDispatch, useAppSelector } from "../store/hooks";
import { selectCountries } from "../store/selectors";
import { filtersChanged } from "../store/async";

export const Thead = () => {
  const countries = useAppSelector(selectCountries);
  const filters = useAppSelector((f) => f.filters.filter);
  const dispatch = useAppDispatch();
  return (
    <thead>
      <tr>
        <th>Аватар</th>
        <th>
          <input
            className="inputform"
            type="text"
            placeholder="Имя"
            defaultValue={filters.name}
            onChange={(e) => dispatch(filtersChanged({ name: e.target.value }))}
          />
        </th>
        <th>
          <select
            defaultValue={filters.sex}
            onChange={(e) => dispatch(filtersChanged({ sex: e.target.value }))}
          >
            <option value="">Пол</option>
            <option value="male">Мужской</option>
            <option value="female">Женский</option>
          </select>
        </th>
        <th>
          <select
            defaultValue={filters.country}
            onChange={(e) =>
              dispatch(filtersChanged({ country: e.target.value }))
            }
          >
            <option value="">Страна</option>
            {countries.map((item) => {
              return <option value={item.country}>{item.country}</option>;
            })}
          </select>
        </th>
        <th>Дата рождения</th>
        <th>Почта</th>
        <th>Телефон</th>
      </tr>
    </thead>
  );
};
