import LogoFooter from "../assets/img/dc-logo-bg.png"

export default function Footer() {

    //blocco di oggetti

    const link_dcComics = {
        title: "DC COMICS",
        link: [
            { voce: "Characters", url: "#" },
            { voce: "Comics", url: "#" },
            { voce: "Movies", url: "#" },
            { voce: "TV", url: "#" },
            { voce: "Games", url: "#" },
            { voce: "Videos", url: "#" },
            { voce: "News", url: "#" }
        ]
    }

    const link_shop = {

        title: "SHOP",
        link: [
            { voce: "Shop Dc", url: "#" },
            { voce: "Shop Dc Collectibles", url: "#" }
        ],

    }

    const link_Dc = {
        title: "DC",
        link: [
            { voce: "Terms Of Use", url: "#" },
            { voce: "Privacy policy (New)", url: "#" },
            { voce: "Ad Choices", url: "#" },
            { voce: "Advertising", url: "#" },
            { voce: "Jobs", url: "#" },
            { voce: "Subscritions", url: "#" },
            { voce: "Talent Workshop", url: "#" },
            { voce: "CPCS Certificates", url: "#" },
            { voce: "Ratings", url: "#" },
            { voce: "Shop Help", url: "#" },
            { voce: "Contact Us", url: "#" }
        ],
    }

    const link_sites = {
        title: "SITES",
        link: [
            { voce: "DC", url: "#" },
            { voce: "MAD Magazine", url: "#" },
            { voce: "DC Kids", url: "#" },
            { voce: "Dc Universe", url: "#" },
            { voce: "DC Power Visa", url: "#" },
            { voce: "Create By", url: "#" },
            { voce: "Jonathan", url: "#" }
        ]
    }


    // function
    function create_li(obj) {

        return (
            <ul>
                <h3> {obj.title}</h3>

                {obj.link.map((el, i) => (

                    <li key={i}>
                        <a href={el.url}>{el.voce}</a>
                    </li>
                ))}
            </ul>
        )
    }

    // return
    return (
        <footer>
            <section id="footer-standard" className="container">
                <nav id="footer-list">

                    <div>
                        {create_li(link_dcComics)}

                        {create_li(link_shop)}
                    </div>

                    <div>
                        {create_li(link_Dc)}

                    </div>

                    <div>
                        {create_li(link_sites)}
                    </div>
                </nav>


                <div id="footer-logo">
                    <img src={LogoFooter} alt="" />
                </div>

            </section>

        </footer>

    )
}