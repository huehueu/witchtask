const FeatureSection = () => {
    return (
        <div className="featureSection">
            <h2> FEATURES </h2>
            <div className="featuresColumn">
                <div className="featureElement">
                    <div className="featureText">
                        <h3>1. Manage Your Tasks</h3>
                        <ul>
                            <li>choose a familiar</li>
                            <li>have a personalized task management system</li>
                            <li>complete tasks to increase your shop ratings</li>
                        </ul>
                    </div>
                    <img src="images/photoframe.png" alt=""/>
                </div>
                <div className="featureElement">
                    <img src="images/mirror.png" alt=""/>
                    <div className="featureText">
                        <h3>2. Unlock Over 500 Items</h3>
                        <ul>
                            <li>earn coins by completing all your daily tasks</li>
                            <li>buy items to customize your character and shop</li>
                        </ul>
                    </div>
                </div>
                <div className="featureElement">
                <div className="featureText">
                        <h3>3. Encounter New Friends Along The Way!</h3>
                        <ul>
                            <li>talk to customers and learn about what goes on in [village name]</li>
                        </ul>
                    </div>
                    <img src="images/photoframe.png" alt=""/>
                </div>
            </div>
        </div>
    );
}

export default FeatureSection