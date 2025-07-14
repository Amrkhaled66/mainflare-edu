const HeroCircle = ({ size, className }: { size: string; className?: string }) => {
    return (
        <div className={className}>
            <svg xmlns="http://www.w3.org/2000/svg" className={`${size}`} viewBox="0 0 124 124" fill="none">
                <path
                    d="M124 62C124 96.2417 96.2417 124 62 124C27.7583 124 0 96.2417 0 62C0 27.7583 27.7583 0 62 0C96.2417 0 124 27.7583 124 62ZM31 62C31 79.1208 44.8792 93 62 93C79.1208 93 93 79.1208 93 62C93 44.8792 79.1208 31 62 31C44.8792 31 31 44.8792 31 62Z"
                    fill="white"
                />
            </svg>
        </div>
    );
};

export default HeroCircle;
