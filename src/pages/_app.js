import {AppWrapper} from '../context/state';
import Layout from '../components/Layout';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/styles.css';

function App({ Component, pageProps }) {
  return(
    <AppWrapper>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AppWrapper>
      
  )

}

export default App;