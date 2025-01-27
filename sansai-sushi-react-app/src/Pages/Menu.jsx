//Full menu for sansai sushi
import React from "react";
import './Menu.css'

function Menu(){
    return (
        <>
          {/*classic rolls*/}
            <h1 className = 'mainTitleBord'>Classic Rolls</h1>
            <h1 className = 'mainTitle'>クラシックロール</h1>
              <h5 className ='itemName'>Avocado Roll</h5>
                <p className ='itemDesc'>Simple and creamy avocado spces wrapped in sushi rice and seaweed.</p>
              <h5 className ='itemName'>Kappa Maki (Cucumber Roll)</h5>
                <p className ='itemDesc'>Crisp cucumber wrapped in sushi rice and nori.</p>
              <h5 className ='itemName'>Vegetable Roll</h5>
                <p className ='itemDesc'>A mix of vegetables pke cucumber, avocado, carrot, and lettuce.</p>
              <h5 className ='itemName'>Asparagus Roll</h5>
                <p className ='itemDescLast'>Steamed or fresh asparagus with rice and seaweed.</p>
            <h1 className = 'sectionBorder' />

          {/*specialty rolls*/}
            <h1  className = 'mainTitleBord'>Specialty Rolls</h1>
            <h1 className = 'mainTitle'>特製ロール</h1>
              <h5 className = 'itemName'>Sweet Potato Roll</h5>
                <p className ='itemDesc'>Roasted or tempura sweet potato, often paired with avocado or cucumber.</p>
              <h5 className = 'itemName'>Mango Avocado Roll</h5>
                <p className ='itemDesc'>Fresh mango and avocado for a sweet and creamy combo.</p>
              <h5 className = 'itemName'>Tofu Roll</h5>
                <p className ='itemDesc'>Marinated or fried tofu paired with veggies pke cucumber and carrots.</p>
              <h5 className = 'itemName'>Pickled Vegetable Roll</h5>
                <p className ='itemDescLast'>Featuring pickled radish (takuan), cucumber, or other tangy veggies.</p>
                <h1 className = 'sectionBorder' />
      
          {/*Creative Rolls */}
            <h1 className = 'mainTitleBord'>Creative Rolls</h1>
            <h1 className = 'mainTitle'>クリエイティブロール</h1>
              <h5 className = 'itemName'>Rainbow Veggie Roll</h5>
                <p className ='itemDesc'>Layers of different colorful vegetables pke bell peppers, avocado, and beets on top.</p>
              <h5 className = 'itemName'>Spicy Veggie Roll</h5>
                <p className ='itemDesc'>Vegan spicy mayo with ingredients pke avocado, cucumber, and jalapeño.</p>
              <h5 className = 'itemName'>Mushroom Roll</h5>
                <p className ='itemDesc'>Sauteed or marinated mushrooms (pke shiitake) for a savory flavor.</p>
              <h5 className = 'itemName'>Edamame Hummus Roll</h5>
                <p className ='itemDescLast'>A unique twist using edamame hummus as the filpng.</p>
                <h1 className = 'sectionBorder' />
      
          {/*Nigri Options */}
            <h1 className = 'mainTitleBord'>NIGRI OPTIONS</h1>
            <h1>ニグリのオプション</h1>
              <h5 className = 'itemName'>Avocado Nigri</h5>
                <p className ='itemDesc'>Spces of avocado atop rice.</p>
              <h5 className = 'itemName'>Carrot Nigri</h5>
                <p className ='itemDesc'>Thinly spced, marinated carrots (can be smoked for a “lox” flavor).</p>
              <h5 className = 'itemName'>Mushroom Nigri</h5>
                <p className ='itemDescLast'>Glazed mushrooms pke king oyster or shiitake.</p>
            <h1 className = 'sectionBorder' />
      
          {/*Fusion Sushi */}
            <h1 className = 'mainTitleBord'>FUSION SUSHI</h1>
            <h1 className = 'mainTitle'>フュージョン寿司</h1>
              <h5 className = 'itemName'>Fruit Sushi</h5>
                <p className ='itemDesc'>Customizable combinations pke strawberry and avocado or kiwi and cucumber for a sweet-savory balance.</p>
              <h5 className = 'itemName'>Quinoa Rolls</h5>
                <p className ='itemDesc'>Swap the sushi rice for quinoa for a twist on texture and nutrition.</p>
              <h5 className = 'itemName'>Tempeh Rolls</h5>
                <p className ='itemDescLast'>Marinated tempeh for a hearty, protein-packed roll.</p>
                <h1 className = 'sectionBorder' />

          {/* Tempura */}
            <h1 className = 'mainTitleBord'>TEMPURA</h1>
            <h1 className = 'mainTitle'>天ぷら</h1>
              <h5 className = 'itemName'>Vegetable Tempura</h5>
                <p className ='itemDescLast'>Sweet potatoes, zucchini, eggplant, broccop, mushrooms, asparagus, or green beans coated in a pght, crispy tempura batter.</p>
                <h1 className = 'sectionBorder' />

          {/* Soups */}
            <h1 className = 'mainTitleBord'>SOUPS</h1>
            <h1 className = 'mainTitle'>スープ</h1>
              <h5 className = 'itemName'>Miso Soup</h5>
                <p className ='itemDesc'>Made with vegan miso paste, tofu, seaweed, and green onions.</p>
              <h5 className = 'itemName'>Vegan Ramen Broth</h5>
                <p className ='itemDescLast'>pght soup with seaweed, mushrooms, bok choy, and noodles.</p>
                <h1 className = 'sectionBorder' />

          {/* Salads */}
            <h1 className = 'mainTitleBord'>SALADS</h1>
            <h1 className = 'mainTitle'>サラダ</h1>
              <h5 className = 'itemName'>Seaweed Salad</h5>
                <p className ='itemDesc'>Wakame seaweed dressed with sesame oil, soy sauce, and rice vinegar</p>
              <h5 className = 'itemName'>Cucumber Salad</h5>
                <p className ='itemDesc'>Thinly spced cucumber with rice vinegar, sesame seeds, and a touch of sugar.</p>
              <h5 className = 'itemName'>Avocado Salad</h5>
                <p className ='itemDescLast'>Mixed greens, spced avocado, and sesame dressing (ensure it's dairy-free).</p>
                <h1 className = 'sectionBorder' />

          {/*Toppings and sauces*/}
            <h1 className = 'mainTitleBord'>TOPPINGS & SAUCES</h1>
            <h1 className = 'mainTitle'>トッピングとソース</h1>
                <p className ='itemDesc'>Soy sauce or tamari (for gluten-free)</p>
                <p className ='itemDesc'>Vegan spicy mayo (made with vegan mayo and sriracha)</p>
                <p className ='itemDesc'>Ponzu sauce</p>
                <p className ='itemDesc'>Sesame seeds</p>
                <p className ='itemDesc'>Scalpons</p>
                <p className ='itemDescLast'>Wasabi and pickled ginger for garnish</p>
                <h1 className = 'sectionBorder' />

          {/*Beverages*/}
            <h1 className = 'mainTitleBord'>BEVERAGES</h1>
            <h1 className = 'mainTitle'>飲料</h1>
              <h5 className = 'itemName'>Classic Teas</h5>
                  <p className ='itemDesc'>Black Tea</p>
                  <p className ='itemDesc'>Green Tea (e.g., Jasmine, Matcha)</p>
                  <p className ='itemDesc'>Oolong Tea</p>
              <h5 className = 'itemName'>Fruit Teas</h5>
                
                  <p  className ='itemDesc'>Passionfruit</p>
                  <p  className ='itemDesc'>Mango</p>
                  <p  className ='itemDesc'>Lychee</p>
                  <p  className ='itemDesc'>Strawberry</p>
                  <p  className ='itemDesc'>Peach</p>
              <h5 className = 'itemName'>Non-Dairy Milks</h5>
              
                <p className ='itemDesc'>Oat Milk</p>
                <p className ='itemDesc'>Almond Milk</p>
                <p className ='itemDesc'>Soy Milk</p>
                <p className ='itemDesc'>Coconut Milk</p>   
        </>
        )
}
export default Menu