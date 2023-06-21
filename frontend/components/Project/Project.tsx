import Image from "next/image"
import EmptyShowcase from '../../assets/images/isolated_tablet_laptop_and_smartphone_composition.png'
import Button from "../Button/Button"
import Card from "../Card/Card"

export default function Project() {
    return(
        <Card className="flex justify-content-between sm:flex-nowrap flex-wrap defaultCard">
            <div className="sm:w-[60%]">
                <h3>Titel project</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa rerum veniam officia, quibusdam animi laboriosam nemo perspiciatis dicta, eaque, aliquid delectus. Voluptas nam voluptate ad architecto, provident harum minus officia.</p>
                {/* <Button>Meer lezen</Button> */}
            </div>
            <div className="sm:w-[40%]">
                <Image 
                    src={EmptyShowcase}
                    alt='Emtpy ShowCase Image'
                />
            </div>
        </Card>
    )
}