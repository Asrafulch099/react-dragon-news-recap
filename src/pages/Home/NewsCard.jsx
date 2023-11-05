import { Link } from "react-router-dom";


// eslint-disable-next-line react/prop-types
const NewsCard = ({ news }) => {

    // eslint-disable-next-line react/prop-types
    const { title, image_url, details, _id } = news;

    return (
        <div className="card bg-base-100 shadow-xl mb-16 border-b-2">
            <figure><img src={image_url} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>

                {
                    details.length > 200
                        ? <p>{details.slice(0, 200)} <Link
                        to={`/news/${_id}`}
                        className="text-red-600 font-bold">See More...</Link></p>
                        : <p>{details}</p>
                    }


            </div>
        </div>
    );
};

export default NewsCard;