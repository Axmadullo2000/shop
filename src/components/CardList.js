import { useContext } from 'react';

import CardItem from './CardItem';

import { shopContext } from '../context';

export default function CardList() {
    const { goods = [] } = useContext(shopContext);

    if (goods.length === 0) {
        return (
            <div className="container">
                <div className="row">
                    <div className="col s12">
                        <div className="card blue-grey darken-1">
                            <div className="card-content white-text">
                                <span className="card-title">Нет товаров</span>
                                <p>Попробуйте позже</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="list">
            {
                goods.map(good => (
                    <CardItem key={ good.id } { ...good }/>
                ))
            }
        </div>
    )
}
