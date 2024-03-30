import { useState, useEffect, ChangeEvent, useRef } from "react";

import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
import { getData } from './utils/data.utils';

import './App.css';

export type Monsters = {
  id: string;
  name: string;
  email: string;
}

const App = () => {
  const [searchValue, setSearchValue] = useState('');
  const [monsters, setMonsters] = useState<Monsters[]>([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);
  let error = useRef('');

  useEffect(() => {
    const fetchUsers = async () => {
      const users = await getData<Monsters[]>('https://jsonplaceholder.typicode.com/users');

      if (users.length) {
        setMonsters(users);
        error.current = 'false';
      } else {
        error.current = 'true';
      }
    };

    fetchUsers();
  }, []);

  useEffect(() => {
    if (monsters.length) {
      const filtered = monsters.filter(monster => {
        return monster.name.toLowerCase().includes(searchValue);
      });

      setFilteredMonsters(filtered)
    }
  }, [searchValue, monsters]);

  const onSearch = (event: ChangeEvent<HTMLInputElement>): void => {
    const searchString = event.target.value.toLowerCase();
    setSearchValue(searchString);
  }

  return (
    <div>
      <h1>Monster Rolodex</h1>
      {
        (error.current === 'true') ? (
          <h2>Sorry! Error fetching data. Try reloading!</h2>
        ) : (error.current === 'false') ? (
          <>
            <SearchBox
              className='search-box'
              placeholder='Search Monsters'
              onChangeHandler={onSearch}
            />
            <CardList list={filteredMonsters} />
          </>
        ) : (
            null
        )
      }
      </div>
  );
};

export default App;
