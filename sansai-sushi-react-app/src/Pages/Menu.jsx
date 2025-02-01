//Full menu for sansai sushi
import React from "react";
import "./Menu.css";

<meta name="viewport" content="width=device-width, initial-scale=1.0" />


function Menu() {
  return (
    <>
    <div className = "container-fluid">
      {/*classic rolls*/}  
      <h1 className="mainTitleBord">Classic Rolls</h1>
      <h1 className="mainTitle">クラシックロール</h1>
      <h5 className="itemName">Avocado Roll</h5> 
      <p className="itemDesc">
        Simple and creamy avocado pieces wrapped in sushi rice and seaweed.
      </p>
      <h5 className="itemName">Kappa Maki (Cucumber Roll)</h5>
      <p className="itemDesc">Crisp cucumber wrapped in sushi rice and nori.</p>
      <h5 className="itemName">Vegetable Roll</h5>
      <p className="itemDesc">
        A mix of vegetables like cucumber, avocado, carrot, and lettuce.
      </p>
      <h5 className="itemName">Asparagus Roll</h5>
      <p className="itemDesc">
        Steamed or fresh asparagus with rice and seaweed.
      </p>
      </div>

      <img className = 'image' src = 'https://cdn.pixabay.com/photo/2018/08/03/08/33/food-3581341_960_720.jpg' alt = "classic sushi roll"/>

    
    <div>
      {/*specialty rolls*/}
      <h1 className="mainTitleBord" >Specialty Rolls</h1>
      <h1 className="mainTitle">特製ロール</h1>
      <h5 className="itemName">Sweet Potato Roll</h5>
      <p className="itemDesc">
        Roasted or tempura sweet potato, often paired with avocado or cucumber.
      </p>
      <h5 className="itemName">Mango Avocado Roll</h5>
      <p className="itemDesc">
        Fresh mango and avocado for a sweet and creamy combo.
      </p>
      <h5 className="itemName">Tofu Roll</h5>
      <p className="itemDesc">
        Marinated or fried tofu paired with veggies like cucumber and carrots.
      </p>
      <h5 className="itemName">Pickled Vegetable Roll</h5>
      <p className="itemDesc">
        Featuring pickled radish (takuan), cucumber, or other tangy veggies.
      </p>
      <h1 className="sectionBorder" />
    </div>

    <img className = 'image' src = 'https://cdn.pixabay.com/photo/2020/10/30/18/35/sushi-5699481_1280.jpg' alt = "Roasted potato sushi roll"/>

      {/*Creative Rolls */}
      <h1 className="mainTitleBord">Creative Rolls</h1>
      <h1 className="mainTitle">クリエイティブロール</h1>
      <h5 className="itemName">Rainbow Veggie Roll</h5>
      <p className="itemDesc">
        Layers of different colorful vegetables like bell peppers, avocado, and
        beets on top.
      </p>
      <h5 className="itemName">Spicy Veggie Roll</h5>
      <p className="itemDesc">
        Vegan spicy mayo with ingredients like avocado, cucumber, and jalapeño.
      </p>
      <h5 className="itemName">Mushroom Roll</h5>
      <p className="itemDesc">
        Sauteed or marinated mushrooms (like shiitake) for a savory flavor.
      </p>
      <h5 className="itemName">Edamame Hummus Roll</h5>
      <p className="itemDesc">
        A unique twist using edamame hummus as the filling.
      </p>
      <h1 className="sectionBorder" />

      <img className = 'image' src = 'https://cdn.pixabay.com/photo/2017/07/26/11/48/sushi-2541472_1280.jpg' alt = "Sushi roll with sauce drizzle." />

      {/*Nigiri Options */}
      <h1 className="mainTitleBord">NIGIRI OPTIONS</h1>
      <h1>ニグリのオプション</h1>
      <h5 className="itemName">Avocado Nigiri</h5>
      <p className="itemDesc">Pieces of avocado atop rice.</p>
      <h5 className="itemName">Carrot Nigiri</h5>
      <p className="itemDesc">
        Thinly spced, marinated carrots (can be smoked for a “lox” flavor).
      </p>
      <h5 className="itemName">Mushroom Nigiri</h5>
      <p className="itemDesc">
        Glazed mushrooms like king oyster or shiitake.
      </p>
      <h1 className="sectionBorder" />
      
      <img className = 'image' src = 'https://cdn.pixabay.com/photo/2014/10/16/17/23/sushi-491425_1280.jpg' alt = "Nigiri" />

      {/*Fusion Sushi */}
      <h1 className="mainTitleBord">FUSION SUSHI</h1>
      <h1 className="mainTitle">フュージョン寿司</h1>
      <h5 className="itemName">Fruit Sushi</h5>
      <p className="itemDesc">
        Customizable combinations like strawberry and avocado or kiwi and
        cucumber for a sweet-savory balance.
      </p>
      <h5 className="itemName">Quinoa Rolls</h5>
      <p className="itemDesc">
        Swap the sushi rice for quinoa for a twist on texture and nutrition.
      </p>
      <h5 className="itemName">Tempeh Rolls</h5>
      <p className="itemDesc">
        Marinated tempeh for a hearty, protein-packed roll.
      </p>
      <h1 className="sectionBorder" />

      <img className = 'image' src = 'https://img.freepik.com/free-photo/various-sushi-plate-table-detail_58702-667.jpg?t=st=1738190462~exp=1738194062~hmac=7d51a3a73841caa5dc69fb31b1def360e5c235dbe6eac73db7bde6ca0243ea0d&w=996' alt = "Various sushi plate" />

      {/* Tempura */}
      <h1 className="mainTitleBord">TEMPURA</h1>
      <h1 className="mainTitle">天ぷら</h1>
      <h5 className="itemName">Vegetable Tempura</h5>
      <p className="itemDesc">
        Sweet potatoes, zucchini, eggplant, broccop, mushrooms, asparagus, or
        green beans coated in a light, crispy tempura batter.
      </p>
      <h1 className="sectionBorder" />

      {/* Soups */}
      <h1 className="mainTitleBord">SOUPS</h1>
      <h1 className="mainTitle">スープ</h1>
      <h5 className="itemName">Miso Soup</h5>
      <p className="itemDesc">
        Made with vegan miso paste, tofu, seaweed, and green onions.
      </p>
      <h5 className="itemName">Vegan Ramen Broth</h5>
      <p className="itemDesc">
        pght soup with seaweed, mushrooms, bok choy, and noodles.
      </p>
      <h1 className="sectionBorder" />

      <img className = 'image' src = 'https://cdn.pixabay.com/photo/2020/07/25/09/53/soup-5436253_1280.jpg' alt = "Bowl of soup" />

      {/* Salads */}
      <h1 className="mainTitleBord">SALADS</h1>
      <h1 className="mainTitle">サラダ</h1>
      <h5 className="itemName">Seaweed Salad</h5>
      <p className="itemDesc">
        Wakame seaweed dressed with sesame oil, soy sauce, and rice vinegar
      </p>
      <h5 className="itemName">Cucumber Salad</h5>
      <p className="itemDesc">
        Thinly spced cucumber with rice vinegar, sesame seeds, and a touch of
        sugar.
      </p>
      <h5 className="itemName">Avocado Salad</h5>
      <p className="itemDesc">
        Mixed greens, spced avocado, and sesame dressing (ensure it's
        dairy-free).
      </p>
      <h1 className="sectionBorder" />

      <img className = 'image' src = 'https://cdn.pixabay.com/photo/2022/02/05/14/06/cucumbers-6994963_1280.jpg' alt = "Bowl of salad" />

      {/*Toppings and sauces*/}
      <h1 className="mainTitleBord">TOPPINGS & SAUCES</h1>
      <h1 className="mainTitle">トッピングとソース</h1>
      <p className="sauces">Soy sauce or tamari (for gluten-free)</p>
      <p className="sauces">
        Vegan spicy mayo (made with vegan mayo and sriracha)
      </p>
      <p className="sauces">Ponzu sauce</p>
      <p className="sauces">Sesame seeds</p>
      <p className="sauces">Scalpons</p>
      <p className="sauces">Wasabi and pickled ginger for garnish</p>
      <h1 className="sectionBorder" />

      <img className = 'image' src = 'https://cdn.pixabay.com/photo/2019/05/01/17/37/sauce-4171459_1280.jpg' alt = "multiple sauces" />

      {/*Beverages*/}
      <h1 className="mainTitleBord">BEVERAGES</h1>
      <h1 className="mainTitle">飲料</h1>
      <h5 className="itemName">Classic Teas</h5>
      <p className="itemDesc">Black Tea</p>
      <p className="itemDesc">Green Tea (e.g., Jasmine, Matcha)</p>
      <p className="itemDesc">Oolong Tea</p>
      <h5 className="itemName">Fruit Teas</h5>

      <p className="itemDesc">Passionfruit</p>
      <p className="itemDesc">Mango</p>
      <p className="itemDesc">Lychee</p>
      <p className="itemDesc">Strawberry</p>
      <p className="itemDesc">Peach</p>
      <h5 className="itemName">Non-Dairy Milks</h5>

      <p className="itemDesc">Oat Milk</p>
      <p className="itemDesc">Almond Milk</p>
      <p className="itemDesc">Soy Milk</p>
      <p className="itemDesc">Coconut Milk</p>
      
      <img className = 'image' src = 'https://cdn.pixabay.com/photo/2015/07/02/20/37/cup-829527_1280.jpg' alt = "tea" />

    </>
  );
}
export default Menu;
