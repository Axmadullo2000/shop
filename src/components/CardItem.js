import React, { useContext } from 'react'
import { shopContext } from '../context'

export default function CardItem(props) {
    const { id, name, description, price, full_background } = props

    const { addToBasket } = useContext(shopContext)

    return (
        <div class="card" id={ id }>
            <div className="card-image waves-effect waves-block waves-light">
                <img className="activator" src={ full_background } alt={ name } />
            </div>
            <div class="card-content">
                <span class="card-title activator grey-text text-darken-4">{ name }</span>
                <p>{ price }$</p>
            </div>
            <div class="card-reveal">
                <span class="card-title grey-text text-darken-4">Card Title<i class="material-icons right">X</i></span>
                <p>{ description }</p>
            </div>
            <button className="btn" onClick={ () => addToBasket({ id, name, price }) }>Buy</button>
        </div>
    )
}

