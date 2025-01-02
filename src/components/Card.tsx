interface CardProps {
    theme: string;
    setTheme: (theme: string) => void;
    message: string;
}

const Card = ({ theme, setTheme, message }: CardProps) => {
    const handleClick = () => {
        setTheme(theme);
    }

    return (
        <div className="card bg-base-100 w-96 shadow-xl my-4" data-theme={theme}>
            <div className="card-body">
                <h2 className="card-title">{theme.charAt(0).toUpperCase() + theme.slice(1)}</h2>
                <p>{message}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary" onClick={handleClick}>Try it!</button>
                </div>
            </div>
        </div>
    );
};
export default Card;
