export default function Icon({ icon }) {
    const [animated, setAnimated] = useState(false);

    return (
        <div
            onMouseEnter={() => setAnimated(() => true)}
            onAnimationEnd={() => setAnimated(() => false)}
        >
            <FontAwesomeIcon icon={icon} className={animated ? 'animated' : ''} />
        </div>
    );
}