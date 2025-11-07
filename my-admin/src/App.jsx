import { Admin, Resource, ListGuesser } from 'react-admin';
import {createTrailbaseProvider} from "/workspaces/Practise-A2/my-admin/src/trailbase-dataprovider.js"
const TRAILBASE_URL = "https://psychic-goggles-97qgjgg7jpp7cgxr-4000.app.github.dev/";
const { dataProvider, authProvider} = await createTrailbaseProvider (TRAILBASE_URL);

const darkTheme = deepmerge ( defaultDarkTheme, { palette : { mode: 'dark'}});

const App = () => {
  //this is where you put your chosen them
  const theme = houseDarkTheme; //or nanoDarkTheme

  return ( 
    < Admin theme = {theme} darkTheme = {darkTheme} dataProvider = {dataProvider} authProvider = {authProvider} layout = {MyLayout} >

    <Resource icon = {PersonIcon} name = "Author" list = {AuthorList} edit = {AuthorEdit} create = {AuthorCreate} show = {AuthorShow} />
      </Admin>

  );

};

export default App
