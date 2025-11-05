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

                    {HeaderLinks.map((item, index) => (

                        <li key={index}>
                            <a href={item.href}>{item.label}</a>
                        </li>

                    ))}

                </ul>
            </nav>


        </header>

    )
}