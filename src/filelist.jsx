import Card from './card'
import './card.css'
import staffList from './staffList'

 function cardComponent(staff,  i)
 {
    return <Card
    key={staff.key}
    avatar={staff.avatar}
    name={staff.name}
    description = {staff.description}
    star = {staff.star}
    Author = {staff.Author}
/>
 }

function CardList2() {
    return (
        <div className='row'>
           { staffList.map(cardComponent)}
        </div>
    )

}

export default CardList2