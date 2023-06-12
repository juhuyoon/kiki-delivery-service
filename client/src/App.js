import './App.css';
import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink } from '@apollo/client';
import Adoption from './components/Adoption';
import KittyForm from './components/KittyForm';

// const link = new HttpLink({
//   uri: "http://localhost:3001/graphql"
// });

const client = new ApolloClient({
  uri: 'http://localhost:3001/graphql',
  cache: new InMemoryCache()
})

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="container mx-auto">
        <KittyForm />
        <Adoption />
      </div>
    </ApolloProvider>

  );
}

export default App;
