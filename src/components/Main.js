import React, { Component } from 'react';
import '../App.css';
import book from '../assets/book.jpg'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getPosts } from '../actions/best_seller_action';
import loader from '../assets/loader.gif'
class Main extends Component {
    constructor() {
        super();
        this.state = {
    }
  }
  componentDidMount(){
   this.props.getPosts();
  }
   
    render() {
      let renderCard;
      if(this.props.seller<1){
        renderCard =
        <div>
         <img src={loader} alt="loading..." style={{width:300}}/>
        </div>
      }else{
      renderCard = this.props.seller.map(card =>
       <article key={card.title} className="card">
         
          <figure className="thumbnail">
           <img src={book} alt="img"/>
           {card.ranks_history ? card.ranks_history.slice(0,1).map((ran, index)=>(<span className="rank" key={index.toString()}>Rank:{ran.rank}</span>)):''}
          </figure>
          <div className="card-content">
            <h6>{card.title}</h6>
            <p>{card.description}</p>
            <div className="auth"><strong>Author:</strong> {card.author}</div>
            <div className="auth"><strong>Contributor:</strong> {card.contributor}</div>
          </div>
          <div className="rank-details">
           {card.ranks_history ? card.ranks_history.slice(0,1).map((rank, index)=>(
             <div key={index.toString()}>
              <div>Best Sellers Date: {rank.bestsellers_date}</div>
              <div>Display Name: {rank.display_name}</div>
              <div>Published Date: {rank.published_date}</div>
              <div>Rank: {rank.rank}</div>
              <div></div>
             </div>  
            )): 0
           }
          </div>
        
      </article>
        )
      }
        return (
          <div>
           <header className="masthead clear">
            <div className="centered">
              <div className="site-branding">
                <h6 className="site-title">Best Sellers of New York</h6>
              </div> 
            </div> 
          </header> 
          <main className="main-area">
            <div className="centered">
              <section className="cards">
                {renderCard}
              </section>
            </div>
          </main>
          </div>
        );
    }
}
Main.propTypes = {
  seller: PropTypes.array.isRequired,
  getPosts: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  seller: state.seller.seller
})
export default connect(mapStateToProps, { getPosts })(Main);