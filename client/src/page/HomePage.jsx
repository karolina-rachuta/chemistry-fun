import React, { useState, useEffect, useRef } from 'react';

import Header from '../components/Header';
import Hero1 from '../assets/hero1part.webp';
import Hero2 from '../assets/hero2part.webp';
import Bgimage from '../assets/pexels-ron-lach-10187127.webp';
function HomePage() {
    const [scrollPosition, setScrollPosition] = useState(0);
    const img1 = useRef(null);
    const img2 = useRef(null);

    const handleScroll = () => {
        setScrollPosition(window.scrollY); // Get the scroll position
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        // Cleanup listener on unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        if (img1.current) {
            img1.current.style.left = `${scrollPosition * -1.5}px`;
        }
    }, [scrollPosition]);
    useEffect(() => {
        if (img2.current) {
            img2.current.style.right = `${scrollPosition * -1.5}px`;
        }
    }, [scrollPosition]);

    return (
        <div>
            <Header />
            <section className="parallax">
                <img src={Hero1} alt="" className="hero1" ref={img1} />
                <img src={Hero2} alt="" className="hero2" ref={img2} />
                <img src={Bgimage} alt="" className="bg_img" />
                {/* <div className="bg_container">
                    <h1>learning&fun</h1>
                    <h2>learing in enjoyable way!</h2>
                </div> */}
            </section>
            <section>
                <h2>Parallex scrolling website {scrollPosition}</h2>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Deserunt est laborum, voluptates modi nostrum voluptas qui
                    atque tempore, eaque voluptatum odio, repudiandae obcaecati
                    facilis perferendis. Ipsam vel aliquid sit aperiam. Sed,
                    consequatur quas debitis vero fugiat corporis voluptas ipsum
                    culpa odit et unde vitae dolores optio soluta a aliquam ad.
                    Mollitia doloribus, inventore recusandae quae commodi dolor
                    explicabo magni. Sequi? Ipsa doloribus neque dolorem veniam
                    odit illo vitae? Sed aspernatur hic odit id velit
                    consectetur veritatis provident suscipit, quae facilis
                    labore totam pariatur sequi voluptatum vitae accusamus eum?
                    Nobis, recusandae. Odit officia esse, porro recusandae dolor
                    aspernatur. Ab consequatur incidunt ea eos consequuntur sunt
                    saepe in, facilis repudiandae illum eligendi, quam deserunt
                    blanditiis repellendus iusto praesentium dolorum! Quidem,
                    beatae tempora. Sed molestiae harum dolorem amet atque vero
                    nisi, debitis corrupti et minus, quisquam deserunt
                    distinctio modi tempora. Perferendis dolorum quo explicabo,
                    exercitationem quos veniam et? Molestiae nisi distinctio
                    quas nam? Atque delectus molestiae provident facilis
                    aspernatur dolores fuga quis praesentium molestias
                    repellendus. Incidunt dicta, officiis in, quasi aperiam
                    laborum maiores soluta recusandae commodi pariatur
                    necessitatibus repudiandae! Aliquam soluta ab ducimus.
                    Tenetur voluptate quaerat asperiores nobis repellendus
                    consectetur laborum, iste animi nesciunt. Excepturi magni
                    sunt ab, assumenda reprehenderit, neque saepe quibusdam
                    maiores distinctio est quod, pariatur nesciunt laboriosam
                    eius nulla fugit. Eveniet ipsa at vero expedita minima,
                    possimus commodi nulla aperiam amet corrupti explicabo rerum
                    repellendus assumenda quam iure impedit! Natus tempore
                    veritatis tempora nobis a beatae non sit ea error? Nesciunt,
                    blanditiis laboriosam? Harum maxime consequuntur officiis ex
                    animi cupiditate molestiae dolore non possimus dolores quam
                    error, impedit unde sunt fugiat itaque quibusdam odit enim
                    ab hic quas perferendis dolorum! Deserunt laboriosam, ipsum
                    sit sapiente dicta dolorum earum repudiandae dolores, nobis
                    nam cumque autem expedita ex recusandae iste voluptas et
                    modi ut cupiditate. Quisquam facilis voluptas corporis?
                    Odio, ab culpa? Vero ea beatae, quia dolorem ratione eaque
                    veritatis aut voluptatibus, qui ex voluptate quos. Cumque
                    inventore deserunt dolores, laborum voluptas optio
                    blanditiis, commodi autem maxime eos, est corrupti
                    voluptatibus voluptates. Animi possimus molestias nulla. Vel
                    quidem cupiditate consectetur esse. Veniam, fugit molestiae
                    dolorum laboriosam quasi quod recusandae distinctio rerum
                    culpa nihil possimus ipsam eligendi deserunt excepturi
                    repellendus eos nostrum non? Ut culpa dicta laboriosam
                    placeat eum doloremque numquam sint voluptates dolor
                    dolorum, repellat, amet facere suscipit asperiores
                    repellendus, eaque laudantium possimus officiis iusto quo
                    ullam consequatur voluptatibus? Cupiditate, voluptatum
                    itaque. Autem quibusdam inventore iusto facere, dolor eum
                    commodi maiores. Quae id reiciendis vitae tempore unde nulla
                    error, quos adipisci quibusdam autem, rem asperiores sunt
                    voluptatum possimus dignissimos debitis, laudantium dolorum!
                    Odit quas ad, perferendis unde, maiores illo fugiat labore
                    deserunt corrupti dicta repellat fugit, magni voluptatum
                    nisi a atque doloremque! Similique beatae, inventore ea
                    iusto recusandae adipisci. Illum, pariatur voluptates? Enim
                    alias ab excepturi nihil rem quod nemo repellendus ducimus
                    culpa soluta unde, ad illo cumque eligendi, sint hic optio
                    maxime, sequi accusantium non! Eius porro quasi quia quam
                    iure? Sapiente rem eos aliquid aut inventore cumque
                    reiciendis quas sint voluptatibus quam ad, minus
                    exercitationem atque ratione officia nihil asperiores
                    corrupti pariatur architecto fugiat? Perspiciatis, nihil.
                    Placeat fugiat dolor doloribus. Velit debitis, quo
                    consequuntur natus ullam nihil ad iure doloribus vero
                    exercitationem eum officia laudantium obcaecati facilis
                    repellat dolorum soluta labore sit maxime recusandae libero
                    ut eius. Eos, nisi magnam! Rerum natus ad autem ratione
                    asperiores architecto deserunt placeat quisquam error
                    blanditiis dolor expedita cum odit unde nulla cupiditate,
                    soluta corporis excepturi veniam at? Molestiae iusto
                    molestias consequatur! Minus, obcaecati! Sequi itaque omnis,
                    explicabo saepe dolor iste, dolorum laboriosam perferendis
                    beatae porro suscipit inventore esse unde ad quidem
                    accusamus sint reprehenderit! Ipsa iste ducimus quae nihil
                    labore, molestias repellat perferendis.
                </p>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Deserunt est laborum, voluptates modi nostrum voluptas qui
                    atque tempore, eaque voluptatum odio, repudiandae obcaecati
                    facilis perferendis. Ipsam vel aliquid sit aperiam. Sed,
                    consequatur quas debitis vero fugiat corporis voluptas ipsum
                    culpa odit et unde vitae dolores optio soluta a aliquam ad.
                    Mollitia doloribus, inventore recusandae quae commodi dolor
                    explicabo magni. Sequi? Ipsa doloribus neque dolorem veniam
                    odit illo vitae? Sed aspernatur hic odit id velit
                    consectetur veritatis provident suscipit, quae facilis
                    labore totam pariatur sequi voluptatum vitae accusamus eum?
                    Nobis, recusandae. Odit officia esse, porro recusandae dolor
                    aspernatur. Ab consequatur incidunt ea eos consequuntur sunt
                    saepe in, facilis repudiandae illum eligendi, quam deserunt
                    blanditiis repellendus iusto praesentium dolorum! Quidem,
                    beatae tempora. Sed molestiae harum dolorem amet atque vero
                    nisi, debitis corrupti et minus, quisquam deserunt
                    distinctio modi tempora. Perferendis dolorum quo explicabo,
                    exercitationem quos veniam et? Molestiae nisi distinctio
                    quas nam? Atque delectus molestiae provident facilis
                    aspernatur dolores fuga quis praesentium molestias
                    repellendus. Incidunt dicta, officiis in, quasi aperiam
                    laborum maiores soluta recusandae commodi pariatur
                    necessitatibus repudiandae! Aliquam soluta ab ducimus.
                    Tenetur voluptate quaerat asperiores nobis repellendus
                    consectetur laborum, iste animi nesciunt. Excepturi magni
                    sunt ab, assumenda reprehenderit, neque saepe quibusdam
                    maiores distinctio est quod, pariatur nesciunt laboriosam
                    eius nulla fugit. Eveniet ipsa at vero expedita minima,
                    possimus commodi nulla aperiam amet corrupti explicabo rerum
                    repellendus assumenda quam iure impedit! Natus tempore
                    veritatis tempora nobis a beatae non sit ea error? Nesciunt,
                    blanditiis laboriosam? Harum maxime consequuntur officiis ex
                    animi cupiditate molestiae dolore non possimus dolores quam
                    error, impedit unde sunt fugiat itaque quibusdam odit enim
                    ab hic quas perferendis dolorum! Deserunt laboriosam, ipsum
                    sit sapiente dicta dolorum earum repudiandae dolores, nobis
                    nam cumque autem expedita ex recusandae iste voluptas et
                    modi ut cupiditate. Quisquam facilis voluptas corporis?
                    Odio, ab culpa? Vero ea beatae, quia dolorem ratione eaque
                    veritatis aut voluptatibus, qui ex voluptate quos. Cumque
                    inventore deserunt dolores, laborum voluptas optio
                    blanditiis, commodi autem maxime eos, est corrupti
                    voluptatibus voluptates. Animi possimus molestias nulla. Vel
                    quidem cupiditate consectetur esse. Veniam, fugit molestiae
                    dolorum laboriosam quasi quod recusandae distinctio rerum
                    culpa nihil possimus ipsam eligendi deserunt excepturi
                    repellendus eos nostrum non? Ut culpa dicta laboriosam
                    placeat eum doloremque numquam sint voluptates dolor
                    dolorum, repellat, amet facere suscipit asperiores
                    repellendus, eaque laudantium possimus officiis iusto quo
                    ullam consequatur voluptatibus? Cupiditate, voluptatum
                    itaque. Autem quibusdam inventore iusto facere, dolor eum
                    commodi maiores. Quae id reiciendis vitae tempore unde nulla
                    error, quos adipisci quibusdam autem, rem asperiores sunt
                    voluptatum possimus dignissimos debitis, laudantium dolorum!
                    Odit quas ad, perferendis unde, maiores illo fugiat labore
                    deserunt corrupti dicta repellat fugit, magni voluptatum
                    nisi a atque doloremque! Similique beatae, inventore ea
                    iusto recusandae adipisci. Illum, pariatur voluptates? Enim
                    alias ab excepturi nihil rem quod nemo repellendus ducimus
                    culpa soluta unde, ad illo cumque eligendi, sint hic optio
                    maxime, sequi accusantium non! Eius porro quasi quia quam
                    iure? Sapiente rem eos aliquid aut inventore cumque
                    reiciendis quas sint voluptatibus quam ad, minus
                    exercitationem atque ratione officia nihil asperiores
                    corrupti pariatur architecto fugiat? Perspiciatis, nihil.
                    Placeat fugiat dolor doloribus. Velit debitis, quo
                    consequuntur natus ullam nihil ad iure doloribus vero
                    exercitationem eum officia laudantium obcaecati facilis
                    repellat dolorum soluta labore sit maxime recusandae libero
                    ut eius. Eos, nisi magnam! Rerum natus ad autem ratione
                    asperiores architecto deserunt placeat quisquam error
                    blanditiis dolor expedita cum odit unde nulla cupiditate,
                    soluta corporis excepturi veniam at? Molestiae iusto
                    molestias consequatur! Minus, obcaecati! Sequi itaque omnis,
                    explicabo saepe dolor iste, dolorum laboriosam perferendis
                    beatae porro suscipit inventore esse unde ad quidem
                    accusamus sint reprehenderit! Ipsa iste ducimus quae nihil
                    labore, molestias repellat perferendis.
                </p>
            </section>
        </div>
    );
}

export default HomePage;
