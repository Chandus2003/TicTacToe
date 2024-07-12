import Icon from '../Icon/Icon';
import './Card.css';

function Card({ onPlay, player, index, isWinningCell }) {
    let icon = <Icon />;
    if (player === 'x') {
        icon = <Icon name={"Cross"} />;
    } else if (player === 'o') {
        icon = <Icon name={"Circle"} />;
    }

    return (
        <div className={`Card ${isWinningCell ? 'winning' : ''}`} onClick={() => onPlay(index)}>
            {icon}
        </div>
    );
}

export default Card;
