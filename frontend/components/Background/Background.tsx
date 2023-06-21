import Image from "next/image"
//import backgroundImage from '../../assets/images/test.jpeg'
import backgroundImage from '../../assets/images/test2.jpeg'

export default function Background() {
    return(
        <div className="w-screen h-screen inset-0 blur-md fixed -z-50">
            <Image 
                src={backgroundImage}
                alt='bg'
                style={{objectFit: 'cover'}}
                fill
            />
        </div>
    )
}