import Image from "next/image"

//Data
import Myself from '../../assets/images/julius.png'

export default function About() {
    return(
        <section id="about" className="container flex justify-between flex-wrap md:flex-nowrap">
            <div className="md:w-[60%]">
                <h2>Wie ben ik?</h2>
                <p>Hoi! Ik ben Julius, een frontend ontwikkelaar gevestigd Arnhem. Mijn passie ligt bij het bouwen van elegante en gebruiksvriendelijke websites. Ik streef ernaar om webinterfaces te creëren die zowel visueel aantrekkelijk als functioneel zijn, met oog voor een optimale gebruikerservaring. Ook ben ik bezig mijn kennis uit te breiden naar backend technologieën.</p>
            </div>
            <div className="sm:w-[20%] max-w-[360px] relative">
                <div className="w-full aspect-square overflow-hidden rounded-xl">
                    <Image 
                        src={Myself}
                        alt='Myself'
                    />
                </div>
            </div>
        </section>
    )
}