import Banner from "../components/Banner/Banner";
import Newsletter from "../components/Newsletter/Newsletter";
import RecentPost from "../components/RecentPost/RecentPost";
import Reviews from "../components/Reviews/Reviews";
import TopAuthors from "../components/TopAuthors/TopAuthors";

const Home = () => {
    return (
        <div>
            <Banner/>
            <RecentPost/>
            <TopAuthors/>
            <Reviews/>
            <Newsletter/>
        </div>
    );
};

export default Home;