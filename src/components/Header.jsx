import Logo from "./Logo"

export default function Header() {

    const HeaderLinks = [
        { label: "CHARACTERS", href: "#" },
        { label: "COMICS", href: "#" },
        { label: "MOVIES", href: "#" },
        { label: "TV", href: "#" },
        { label: "GAMES", href: "#" },
        { label: "COLLECTIBLES", href: "#" },
        { label: "VIDEOS", href: "#" },
        { label: "FANS", href: "#" },
        { label: "NEWS", href: "#" },
        { label: "SHOP", href: "#" }
    ];

    return (
        <header className="container">
            <div id="header-logo" >
                <Logo />
            </div>
            <nav>
                <ul id="nav-list" >
                    <li>
                        <a href="">
                            CHARACTERS
                        </a>
                    </li>
                    <li>
                        <a href="">
                            COMICS
                        </a>
                    </li>
                    <li>
                        <a href="">
                            MOVIES
                        </a>
                    </li>
                    <li>
                        <a href="">
                            TV
                        </a>
                    </li>
                    <li>
                        <a href="">
                            GAMES
                        </a>
                    </li>
                    <li>
                        <a href="">
                            COLLECTIBLES
                        </a>
                    </li>
                    <li>
                        <a href="">
                            VIDEOS
                        </a>
                    </li>
                    <li>
                        <a href="">
                            FANS
                        </a>
                    </li>
                    <li>
                        <a href="">
                            NEWS
                        </a>
                    </li>
                    <li>
                        <a href="">
                            SHOP
                        </a>
                    </li>
                </ul>
            </nav>


        </header>

    )
}