import Card from "./card1";
const Hero3 = ()=>{
    const cardObj = 
        {
            content1: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime minima dicta amet, molestiae aliquam incidunt suscipit recusandae labore ratione doloremque, architecto et illo minus quo tenetur ducimus, voluptatibus repellendus fuga aperiam vel ab! Ipsam corrupti blanditiis dolorum! Officia assumenda rem nam, eveniet enim ad inventore laudantium est illum voluptatem quis.",
            content2: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus doloribus eius aut unde, dolores accusantium!",
            content3: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore vel quo deserunt quos expedita minima incidunt sed tempora, a architecto consectetur reprehenderit, in repellat voluptatum.",
            content4: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio beatae incidunt perferendis soluta facilis voluptas dicta repudiandae quasi asperiores libero, exercitationem molestiae autem sapiente dolore nulla non consequatur. Eaque, dolores.",
            name: "Gladis Lennon",
            designation: "Head of Seo"
        };
    return(
        <section className="px-4 flex flex-wrap justify-between">
            <Card content={cardObj.content1} name={cardObj.name} designation={cardObj.designation}></Card>
            <Card content={cardObj.content3} name={cardObj.name} designation={cardObj.designation}></Card>
            <Card content={cardObj.content4} name={cardObj.name} designation={cardObj.designation}></Card>
            <Card content={cardObj.content2} name={cardObj.name} designation={cardObj.designation}></Card>
            <Card content={cardObj.content3} name={cardObj.name} designation={cardObj.designation}></Card>
            <Card content={cardObj.content2} name={cardObj.name} designation={cardObj.designation}></Card>
        </section>
        
    )
};

export default Hero3;