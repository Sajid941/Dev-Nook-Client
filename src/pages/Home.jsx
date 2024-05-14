import Banner from "../components/Banner/Banner";
import Newsletter from "../components/Newsletter/Newsletter";
import RecentPost from "../components/RecentPost/RecentPost";
import Reviews from "../components/Reviews/Reviews";
import { motion } from "framer-motion"
import TopAuthors from "../components/TopAuthors/TopAuthors";

const Home = () => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
        >
            <Banner />
            <RecentPost />
            <TopAuthors />
            <Reviews />
            <Newsletter />
        </motion.div>
    );
};

export default Home;