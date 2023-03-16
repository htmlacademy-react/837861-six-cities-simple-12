import { useState } from 'react';

function ReviewSendingForm(): JSX.Element {

  const [feedback, setFeedback] = useState({
    stars5: 0,
    stars4: 0,
    stars3: 0,
    stars2: 0,
    stars1: 0,
    feedbackText: '',
  });

  const { ...fill } = feedback;
  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        <input onClick={() => setFeedback({ ...fill, stars5: feedback.stars5 + 1, })} className="form__rating-input visually-hidden" name="rating" value="5" id="5-stars" type="radio" />
        <label htmlFor="5-stars" className="reviews__rating-label form__rating-label" title="perfect">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>
        <input onClick={() => setFeedback({ ...fill, stars4: feedback.stars4 + 1, })} className="form__rating-input visually-hidden" name="rating" value="4" id="4-stars" type="radio" checked />
        <label htmlFor="4-stars" className="reviews__rating-label form__rating-label" title="good">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input onClick={() => setFeedback({ ...fill, stars3: feedback.stars3 + 1, })} className="form__rating-input visually-hidden" name="rating" value="3" id="3-stars" type="radio" />
        <label htmlFor="3-stars" className="reviews__rating-label form__rating-label" title="not bad">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input onClick={() => setFeedback({ ...fill, stars2: feedback.stars2 + 1, })} className="form__rating-input visually-hidden" name="rating" value="2" id="2-stars" type="radio" />
        <label htmlFor="2-stars" className="reviews__rating-label form__rating-label" title="badly">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input onClick={() => setFeedback({ ...fill, stars1: feedback.stars1 + 1, })} className="form__rating-input visually-hidden" name="rating" value="1" id="1-star" type="radio" />
        <label htmlFor="1-star" className="reviews__rating-label form__rating-label" title="terribly">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>
      </div>
      <textarea className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved"></textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" >Submit</button>
      </div>
      <div>
        <p>{feedback.stars5}</p>
        <p>{feedback.stars4}</p>
        <p>{feedback.stars3}</p>
        <p>{feedback.stars2}</p>
        <p>{feedback.stars1}</p>
        <p>{feedback.feedbackText}</p>
      </div>
    </form>
  );
}
export default ReviewSendingForm;
