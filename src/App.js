import React from "react";

function Food(props) {
    let { name, picture } = props;
    return (
        <div>
            <h2>I like {name}</h2>
            <img src={picture} alt={name} />
        </div>
    );
}

const foodILike = [
    {
        id: 1,
        name: "Kimchi",
        image:
            "http://aeriskitchen.com/wp-content/uploads/2008/09/kimchi_bokkeumbap_02-.jpg",
    },
    {
        id: 2,
        name: "Samgyepsal",
        image:
            "https://image.chosun.com/sitedata/image/201902/24/2019022401106_0.jpg",
    },
    {
        id: 3,
        name: "Bibimbap",
        image:
            "https://img.etoday.co.kr/pto_db/2019/07/600/20190726153503_1350707_1200_876.jpg",
    },
    {
        id: 4,
        name: "Donkatsu",
        image:
            "https://m.yum-yumfood.com/web/product/big/201607/29_shop1_382074.jpg",
    },
    {
        id: 5,
        name: "Kimbap",
        image:
            "https://homecuisine.co.kr/files/attach/images/140/001/083/558d170258752df2dd76bef00861497f.JPG",
    },
];

function renderFood(dish) {
    return <Food key={dish.id} name={dish.name} picture={dish.image}></Food>;
}

function App() {
    return (
        <div>
            {foodILike.map(renderFood)}
        </div>
    );
}

export default App;
