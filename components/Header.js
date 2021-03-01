import headerStyles from "../styles/Header.module.css";

const Header = () => {
    // const x = 5;
    return (
        <header >
                {/* <h1 className="title"> */}
                <h1 className={headerStyles.title}>
                    <span>WebDev</span> News
                </h1>
                <p className={headerStyles.description}>
                    Keep up to date with the lastest web dev news
                </p>


            {/* <style jsx>
                {`
                    .title {
                        color: ${x > 3 ? "red" : "blue"};
                    }
                `}
            </style> */}
        </header>
    )
}

export default Header;
