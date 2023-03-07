import Layout from '../components/Layout';
import Container  from 'react-bootstrap/Container';
import HeroBanner from '../components/Banner/HeroBanner'
function Home() {
    return (
        <>
            <Layout>
                <HeroBanner />
            </Layout>
        </>
    );
}

export default Home;