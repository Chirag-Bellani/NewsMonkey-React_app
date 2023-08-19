import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let { title, description, imageUrl, newsUrl, author, date, source } = this.props;
        return (
            <div className="my-3">
                <div className="card">
                    <div style={{ display: 'flex', justifyContent: 'flex-end', position: 'absolute', right: '0' }}>
                        <span className=" badge rounded-pill bg-warning" style={{ color: 'black' }}> {source}
                        </span>
                    </div>
                    <img src={!imageUrl ? "https://startup.mp.gov.in/assets/img/img-not-found.png" : imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}  </h5>
                        <p className="card-text">{description}</p>
                        <p className="card-text"><small className="text" style={{ backgroundColor: 'pink' }}>By {!author ? "Unknown" : author} on  {new Date(date).toGMTString()}</small></p>
                        <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm " style={{ backgroundColor: '#539f53', color: 'black', padding: '4px 6px' }}> Read More</a>
                    </div>
                </div>
            </div >
        )
    }
}

export default NewsItem