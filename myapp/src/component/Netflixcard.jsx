export const Netflixcard = ({data}) => {
    const { img_url, name, rating, description, cast, genre, watch_url } = data;
  return (
    <li>
    <div className="card" style="width: 18rem;">

        <div className='imgBox'>
            <img className="card-img-top" src={img_url} alt='Showing Image of Card' height={180} width={300}/>
        </div>
        
        <div className="card-body">
            <h2 className="card-title"><b>Name:</b><i>{name}</i></h2>
            <p className="card-text"><b>Description:</b><i>{description.slice(0,45)+"..."}</i></p>
            <p className="card-text"><b>Genre:</b><i>{genre}</i></p>
            <p className="card-text"><b>Cast:</b><i>{cast}</i></p>
            <p className="card-text"><b>Rating:</b><i>{rating}</i></p>

            <a href= {watch_url} target='_blank'>
                <button className="btn btn-primary">Watch now</button>
            </a>
        </div>
    </div>
    </li>
  )
}


