import axios from 'axios';
import { useState } from 'react';
import Result from '../components/Result';
import SearchBar from '../components/SearchBar';
import Layout from "../components/Layout";

interface ResultType {

  name: string;
  description: string;
}

function Home() {
  const [result, setResult] = useState<ResultType | null>(null);

  const fetchData = async (value: any) => {
    const { data } = await axios.get(
      `https://dummyjson.com/posts/search?q=${value}&limit=10`
    );
    return data.posts;
  }

  return (
    <Layout>
      <main className="home_main">
        <SearchBar
          fetchData={fetchData}
          setResult={setResult}
          suggestionKey="title"
        />
        {result && <Result {...result} />}
      </main>
    </Layout>
  );
}

export default Home;
