import './styles.css'

export interface cardProps{
    id: string;
    flipped?: boolean;
    back: string;
    handleClick?: (id: string) => void;
}
export function Card({flipped=false, back, handleClick, id}: cardProps) {
    const cardContentClassNames = ['card_content'];
    flipped && cardContentClassNames.push('card_content--flipped');

    const handleClickFn = (id: string) => {
        if (handleClick) {
            handleClick(id);
        }
    };
    

    return(
        <div className='card' onClick={()=>handleClickFn(id)}>
            <div className={cardContentClassNames.join(' ')}>
                <div className='card_face card_face--front'>?</div>
                <div className='card_face card_face--back'><img src={back} /></div>
            </div>
        </div>
    )
}