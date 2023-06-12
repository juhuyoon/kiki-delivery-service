import './App.css';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import Adoption from './components/Adoption';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache()
})

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="text-3xl font-bold underline">
        Hewwo! OuO!
        <Adoption />
      </div>
    </ApolloProvider>

  );
}

export default App;
