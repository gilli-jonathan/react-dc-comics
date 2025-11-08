import LogoFooter from "../assets/img/dc-logo-bg.png"

export default function Footer({ link_dcComics, link_Dc, link_shop, link_sites }) {

    //blocco di oggetti



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