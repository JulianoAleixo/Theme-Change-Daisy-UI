interface HeroProps {
    theme: string;
    setTheme: (theme: string) => void;
}

const Hero = ({ theme, setTheme }: HeroProps) => {
    const handleToggle = () => {
        const themes: string[] = [
            "cupcake",
            "bumblebee",
            "emerald",
            "corporate",
            "synthwave",
            "retro",
            "cyberpunk",
            "valentine",
            "halloween",
            "garden",
            "forest",
            "aqua",
            "lofi",
            "pastel",
            "fantasy",
            "wireframe",
            "black",
            "luxury",
            "dracula",
            "cmyk",
            "autumn",
            "business",
            "acid",
            "lemonade",
            "night",
            "coffee",
            "winter",
            "dim",
            "nord",
            "sunset",
        ];

        const randomTheme = themes[Math.floor(Math.random() * themes.length)];
        setTheme(randomTheme);
    };

    return (
        <div className="hero bg-base-200 min-h-full">
            <div className="hero-content text-center">
                <div className="max-w-lg">
                    <h1 className="text-5xl font-bold">Hello there</h1>
                    <p className="py-6">
                        This page was made to test <a href="https://daisyui.com/docs/themes/" target="_blank">daisyUI themes</a>. <br />
                        The current theme is <span className="badge badge-lg">{theme}</span> ... <br />
                        Click the button below to switch to a random theme.
                    </p>
                    <button className="btn btn-primary" onClick={handleToggle}>
                        Randomize
                    </button>
                </div>
            </div>
            <div className="flex justify-center self-end pb-6">
                <span className="animate-bounce text-2xl">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="48"
                        height="48"
                        viewBox="0 0 24 24"
                        className="fill-current"
                    >
                        <path d="M12 16.5l-6-6h12l-6 6z"></path>
                    </svg>
                </span>
            </div>
        </div>
    );
};
export default Hero;
