import { Admin, Resource, ListGuesser, EditGuesser } from "react-admin";
import { createTrailbaseProvider } from "./ra-trailbase";
import { AuthorList } from "./components/Author";

const TRAILBASE_URL = "https://psychic-goggles-97qgjgg7jpp7cgxr-4000.app.github.dev/" ;
const { dataProvider, authProvider } = await createTrailbaseProvider (TRAILBASE_URL);

const App = () => (
  <Admin dataProvider={dataProvider} authProvider={authProvider}>
    <Resource name="Post" list={ListGuesser} edit={EditGuesser} />

<Resource name="Author" list={AuthorList} edit={EditGuesser} />
    

  </Admin>
);

export default App
