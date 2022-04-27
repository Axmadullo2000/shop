import { useContext, useEffect } from "react";

import { API_KEY, API_URL } from "../config";

import { shopContext } from "../context";

import BasketList from "./BasketList";

import CardList from "./CardList";

import Cart from "./Cart";

import Loader from "./Loader";

export default function Shop() {
    const { setGoods, loading, order, isShowBasket } = useContext(shopContext)

    useEffect(() => {
        fetch(API_URL, {
                headers: {
                Authorization: API_KEY,
            },
        })
            .then((response) => response.json())
            .then((data) => {
                setGoods(data.featured);
            });
    }, []);

    return (
        <div className="container">
            {loading ? (
                <Loader />
            ) : (
                <CardList />
            )}
                <Cart quantity={order.length} />
            {isShowBasket && (
                <BasketList />
            )}
        </div>
    );
}
