import Layout from '../components/Layout';
import HeroBanner from '../components/Banner/HeroBanner';
import FeaturedCard from '../components/FeaturedCard/FeaturedCard';
import FilterTab from '../components/FilterTabs/FilterTab';
import Exclusive from '../components/Exclussive/Exclusive';
import Testimonial from '../components/Testimonial/Testimonial';


function Home() {

    return (
        <>
            <Layout>
                <HeroBanner />
                <FeaturedCard />
                <FilterTab />
                <Exclusive />
                <Testimonial />
            </Layout>
        </>
    );
}

export default Home;