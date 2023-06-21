import me from '../assets/images/julius.jpg'
import nextjsLogo from '../assets/logos/nextjs_logo.png'
import reactjsLogo from '../assets/logos/reactjs_logo.png'
import tailwindcssLogo from '../assets/logos/tailwindcss_logo.png'
import firebaseLogo from '../assets/logos/firebase_logo.png'
import sassLogo from '../assets/logos/sass_logo.png'
import photoshopLogo from '../assets/logos/photoshop_logo.png'
import figmaLogo from '../assets/logos/figma_logo.png'

export const headerData = [
    {
        link: {
            title: 'Over',
            url: '#about'
        }
    },
    {
        link: {
            title: 'Vaardigheden',
            url: '#skills'
        }
    },
    {
        link: {
            title: 'Ervaring',
            url: '#experience'
        }
    },
]

export const aboutData = [
    {
        text: {
            title: 'About Me',
            text: 'My name is Julius Morselt and I am a 21 y.o. Frontend Developer from the Netherlands based in Arnhem!'
        }
    }
]

export const skillsData = [
    {
        data: {
            tabs: [
                {
                    tab: {
                        title: 'Programmeren',
                        cards: [
                            {
                                card: {
                                    title: 'NextJS',
                                    description: 'Hier heb ik veel mee gewerkt in de tijd bij mijn eerste bedrijf. Ik heb hier veel van geleerd en gebruik het nu in mijn eigen hobbie projecten.',
                                    icon: nextjsLogo
                                }
                            },
                            {
                                card: {
                                    title: 'ReactJS',
                                    description: 'Ik heb tijdens mijn eerste werkervaring veel met deze technologie gewerkt. Het was een waardevolle leerschool voor mij en nu zet ik het in bij mijn eigen hobbyprojecten.',
                                    icon: reactjsLogo
                                }
                            },
                            {
                                card: {
                                    title: 'TailwindCSS',
                                    description: 'Dit heb ik ook opgepakt bij mijn eerste baan. Dit styled erg gemakkelijk en geeft mij een snelle workflow.',
                                    icon: tailwindcssLogo
                                }
                            },
                            {
                                card: {
                                    title: 'Firebase',
                                    description: 'Hier ben ik zelf mee aan de slag gegaan voor hobbie projecten waar ik een database voor nodig had. Mijn eerste ervaring met firebase was een webshop waarbij je jezelf kon aanmelden en in kon loggen.',
                                    icon: firebaseLogo
                                }
                            },
                            {
                                card: {
                                    title: 'SASS',
                                    description: 'Dit gebruik ik al sinds dat ik begon met HTML en CSS een jaar of 4 geleden. Ik merkte al snel dat ik het fijn vond om hier mee te werken. Het gaf mij destijds ook een snellere workflow.',
                                    icon: sassLogo
                                }
                            },
                        ]
                    }
                },
                {
                    tab: {
                        title: "Adobe Programma's",
                        cards: [
                            {
                                card: {
                                    title: 'Photoshop',
                                    description: 'Ik heb met dit programma leren werken op mijn opleding.',
                                    icon: photoshopLogo
                                }
                            },
                            {
                                card: {
                                    title: 'Figma',
                                    description: 'Dit programma heb ik onder de knie gekregen tijdens mijn opleiding.',
                                    icon: figmaLogo
                                }
                            },
                        ]
                    }
                },
            ]
        }
    }
]

export const experienceData = [
    {
        data: {
            tabs: [
                {
                    tab: {
                        title: 'Opleiding',
                        experience: [
                            {
                                exp: {
                                    title: 'Rijn IJssel - Media vormgeving',
                                    fromtill: 'September 2018 - December 2023',
                                    description: "Deze opleiding is gericht op de beeldende aspecten van het vak: (grafisch) ontwerp, video’s maken / bewerken. Hier heb ik leren werken met de volgende Adobe producten: Photoshop, Indesign, Illustrator, After Effects en Premiere Pro. Ook heb ik hier met programma’s gewerkt zoals Blender, voor 3d animaties, en Figma, voor webdesign.",
                                }
                            },
                        ]
                    }
                },
                {
                    tab: {
                        title: 'Werk ervaring',
                        experience: [
                            {
                                exp: {
                                    title: 'BOOOM Digital Agency',
                                    fromtill: 'September 2022 - Huidig',
                                    description: 'Ik heb hier de eerste 5 maanden parttime gewerkt als een trainee Front End ontwikkelaar. Ik heb in de eerste 3 maanden mijn opleiding “Mediavormgeving” af kunnen ronden',
                                    description2: 'Na 3 maanden parttime traineeship mocht ik full-time aan de slag. Ik heb veel Front End kennis opgedaan: TailwindCSS, NextJS en ReactJS. Projecten waar ik onder andere aan heb gewerkt zijn PejaProducten, ShapeMakers en ARV Group.',
                                }
                            },
                        ]
                    }
                },
            ]
        }
    }
]