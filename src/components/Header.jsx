import Logo from "./Logo"

export default function Header({ HeaderLinks }) {



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