import { useState, useEffect } from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
import './App.css';

const App = () => {
  const [searchValue, setSearchValue] = useState('');
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(userList => setMonsters(userList))
      .catch(error => {
        console.log(error);
      })
  }, []);

  useEffect(() => {
    const filtered = monsters.filter(monster => {
      return monster.name.toLowerCase().includes(searchValue);
    });

    setFilteredMonsters(filtered)
  }, [searchValue, monsters]);

  const onSearch = (event) => {
    const searchString = event.target.value.toLowerCase();
    setSearchValue(searchString);
  }

  return (
    <div>
        <h1>Monster Rolodex</h1>
        <SearchBox
          className='search-box'
          placeholder='Search Monsters'
          onChangeHandler={onSearch}
        />
        <CardList list={filteredMonsters} />
      </div>
  );
};

/* class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchValue: ''
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(userList => {
        this.setState({ monsters: userList })
      })
      .catch(error => {
        console.log(error);
      })
  }

  onSearch = (event) => {
    const searchValue = event.target.value.toLowerCase();
    this.setState({ searchValue });
  }

  render() {
    const { monsters, searchValue } = this.state;
    const { onSearch } = this;
    const filteredMonsters = monsters.filter(monster => {
      return monster.name.toLowerCase().includes(searchValue);
    });

    return (
      <div>
        <h1>Monster Rolodex</h1>
        <SearchBox
          className='search-box'
          placeholder='Search Monsters'
          onChangeHandler={onSearch}
        />
        <CardList list={filteredMonsters} />
      </div>
    );
  }
} */

export default App;
