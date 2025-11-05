export default function Main() {

    const menu = [
        {
            id: 1,
            link: '#',
            text: 'Home',
            is_active: false
        },
        {
            id: 2,
            link: '#',
            text: 'Prodotti',
            is_active: true
        },
        {
            id: 3,
            link: '#',
            text: 'Chi Siamo',
            is_active: false
        },
        {
            id: 4,
            link: '#',
            text: 'Contatti',
            is_active: false
        },
    ]

    return (

        <main >
            <section className="container">
                <div>

                    {
                        menu.map((item) => (
                            <a key={item.id} className={`name-class ${item.is_active ? 'current' : ''} `} href={item.link}>{item.text}</a>
                        ))
                    }

                </div>
            </section>
        </main>

    )
}