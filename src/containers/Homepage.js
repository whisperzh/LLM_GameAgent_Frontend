import BasicTabs from "../components/TabLayout";
import './styles.css';

const Homepage = () => {
    return <div className="homepageContainer">
        <h1>
            Open LLM Leaderboard
        </h1>
        <div style={subtitlestyle}>
            <p>
                📐 The 🤗 Open LLM Leaderboard aims to track, rank and evaluate open LLMs and chatbots.</p>
            <p>
                🤗 Submit a model for automated evaluation on the 🤗 GPU cluster on the "Submit" page! The leaderboard's backend runs the great Eleuther AI Language Model Evaluation Harness - read more details in the "About" page!
            </p>
        </div>
        {BasicTabs()}


    </div>;
};

const subtitlestyle = {
    fontSize: 20
}




export default Homepage;