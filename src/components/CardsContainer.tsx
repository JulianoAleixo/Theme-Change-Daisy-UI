import Card from "./Card";

interface CardsContainerProps {
    setTheme: (theme: string) => void;
}

const CardsContainer = ({ setTheme }: CardsContainerProps) => {
    const themeDescriptions: { [key: string]: string } = {
        cupcake: "Sweet and delightful, just like a cupcake!",
        bumblebee: "Buzzing with energy and creativity!",
        emerald: "Shining bright like a precious emerald gem.",
        corporate: "Professional vibes for a sleek look.",
        synthwave: "Retro-futuristic beats in every pixel.",
        retro: "Taking a nostalgic trip back in time.",
        cyberpunk: "Neon lights and a futuristic edge.",
        valentine: "Love is in the air with this romantic theme.",
        halloween: "Spooky and fun, perfect for trick-or-treat!",
        garden: "Blooming with nature's finest colors.",
        forest: "Mysterious and tranquil, like a hidden forest.",
        aqua: "Dive into the cool, refreshing blue.",
        lofi: "Chill vibes for a laid-back atmosphere.",
        pastel: "Soft and soothing colors to calm your day.",
        fantasy: "Where dreams and magic come alive.",
        wireframe: "Minimalist and structured like a wireframe.",
        black: "Bold and classic, black goes with everything.",
        luxury: "Opulent and refined, for a touch of elegance.",
        dracula: "Dark and mysterious, straight from the crypt.",
        cmyk: "Print-perfect colors in cyan, magenta, yellow, and black.",
        autumn: "Warm hues for a cozy fall feeling.",
        business: "Get down to business with this no-nonsense style.",
        acid: "Bright, bold, and electrifyingly fun.",
        lemonade: "Refreshing and zesty, like a summer drink.",
        night: "Dark and serene, like a quiet evening.",
        coffee: "Rich and warm, like your favorite brew.",
        winter: "Frosty and fresh, perfect for snowy days.",
        dim: "Subtle and understated, like a soft glow.",
        nord: "Cool and calm, inspired by Nordic designs.",
        sunset: "Warm and vibrant, like the end of a perfect day.",
    };

    return (
        <div>
            <h2 className="pt-4 text-3xl font-bold text-center">Here are all the available themes</h2>
            <div className="flex flex-wrap justify-center my-10 gap-10">
                {Object.entries(themeDescriptions).map(
                    ([themeName, message]) => (
                        <Card
                            key={themeName}
                            theme={themeName}
                            setTheme={setTheme}
                            message={message}
                        />
                    )
                )}
            </div>
        </div>
    );
};

export default CardsContainer;
