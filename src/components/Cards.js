
export default function Cards (props) {
    const cardTitle = [
        'About',
        'Company',
        'Services'
    ]
    const articleElements = cardTitle.map((articleTitle) =>{
       console.log(articleTitle);
        return (
            <article className='card' key={articleTitle}>  
                <h2 className='card__title'>
                    {articleTitle}
                </h2>
                <p className='card__paragraph'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut non nisl vel velit convallis accumsan ut sit amet est. Nullam sit amet fermentum magna. Duis finibus congue quam nec rhoncus. Ut id dignissim orci.
                </p> 
            </article>
        );
    });
    return (
        <div className='cards'>
            {articleElements}
            
        </div>
    )
}