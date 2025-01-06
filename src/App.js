import Layout from './middleware/layout/Layout';
import Routers from './router/Routers';
function App() {
  return (
    <div>
      <Layout>
      <Routers/>
      </Layout>
    </div>
  )
}

export default App