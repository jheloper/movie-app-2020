import React from "react";

function Food(props) {
    let { name } = props;
    return <h1>I like {name}</h1>;
}

const foodILike = [
    {
        name: "Kimchi",
        image:
            "http://aeriskitchen.com/wp-content/uploads/2008/09/kimchi_bokkeumbap_02-.jpg",
    },
    {
        name: "Samgyepsal",
        image:
            "https://image.chosun.com/sitedata/image/201902/24/2019022401106_0.jpg",
    },
    {
        name: "Bibimbap",
        image:
            "https://img.etoday.co.kr/pto_db/2019/07/600/20190726153503_1350707_1200_876.jpg",
    },
    {
        name: "Donkatsu",
        image:
            "https://m.yum-yumfood.com/web/product/big/201607/29_shop1_382074.jpg",
    },
    {
        name: "Kimbap",
        image:
            "https://homecuisine.co.kr/files/attach/images/140/001/083/558d170258752df2dd76bef00861497f.JPG",
    },
];

function App() {
    return (
        <div>
            {foodILike.map((dish) => (
                <Food name={dish.name}></Food>
            ))}
        </div>
    );
}

export default App;
