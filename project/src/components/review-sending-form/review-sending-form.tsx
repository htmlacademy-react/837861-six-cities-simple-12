import { useState } from 'react';

function ReviewSendingForm(): JSX.Element {

  const [, setRaiting] = useState('0');
  const [comment, setComment] = useState('');

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>): void => {
    setRaiting(evt.target.value);
  };


  const handleCommentChange = (evt: React.ChangeEvent<HTMLTextAreaElement>): void => {
    setComment(evt.target.value);
  };

  const arrayOfStars = ['perfect', 'good', 'not bad', 'badly', 'terribly'];
  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {arrayOfStars.map((star, index) => (
          <>
            <input onChange={handleChange} className="form__rating-input visually-hidden" name="rating" value={`${5 - index}`} id={`${index}-stars`} type="radio" />
            <label htmlFor={`${index}-stars`} className="reviews__rating-label form__rating-label" title={arrayOfStars[index]}>
              <svg className="form__star-image" width="37" height="33">
                <use xlinkHref="#icon-star"></use>
              </svg>
            </label>
          </>
        ))}
      </div>
      <textarea
        onChange={handleCommentChange}
        className="reviews__textarea form__textarea"
        value={comment}
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
      >
      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set
          <span className="reviews__star">rating</span>
          and describe your stay with at least
          <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" >Submit</button>
      </div>
    </form>
  );
}
export default ReviewSendingForm;
